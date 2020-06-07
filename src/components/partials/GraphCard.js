import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import rootActions from "../../actions/rootActions";
import { useDispatch } from "react-redux";

function GraphCard(props) {
	const dispatch = useDispatch();
	const [cardSuggestion, setCardSuggestion] = useState({
		bar: false,
		pie: false,
		line: false,
		heatmap: false,
		scatter: false
	});

	const giveCardsSuggestion = (xval = null, yval = null) => {
		if (xval && !yval) {
			if (xval.type === "string") {
				if (xval.count.length > 5) {
					return {
						bar: false,
						pie: true,
						line: false,
						heatmap: false,
						scatter: false
					};
				} else {
					return {
						line: false,
						heatmap: false,
						scatter: false,
						bar: true,
						pie: true
					};
				}
			} else {
				return {
					line: false,
					heatmap: false,
					scatter: false,
					bar: false,
					pie: false
				};
			}
		} else if (xval && yval) {
			if (xval.type === "string" && yval.type === "string") {
				return {
					bar: false,
					pie: false,
					line: false,
					scatter: false,
					heatmap: true
				};
			} else if (xval.type === "string" && yval.type === "number") {
				if (xval.count.length > 5) {
					return {
						bar: false,
						pie: false,
						heatmap: false,
						scatter: false,
						line: true
					};
				} else {
					return {
						pie: false,
						line: false,
						heatmap: false,
						scatter: false,
						bar: true
					};
				}
			} else if (xval.type === "number" && yval.type === "number") {
				return {
					bar: false,
					pie: false,
					heatmap: false,
					line: true,
					scatter: true
				};
			}
		} else {
			return {
				bar: false,
				pie: false,
				heatmap: false,
				line: false,
				scatter: true
			};
		}
	};

	useEffect(() => {
		setCardSuggestion(giveCardsSuggestion(props.x, props.y));
		dispatch(
			rootActions.setGraphSuggestions(giveCardsSuggestion(props.x, props.y))
		);
	}, [props.x, props.y]);

	return (
		<div>
			{Object.keys(cardSuggestion).map((type) => {
				if (cardSuggestion[type]) {
					return (
						<Card style={{ width: "18rem" }} key={type}>
							{/* <Card.Img variant="top" src={`graphsType/${props.type}`} /> */}
							<Card.Body>
								<Card.Title>{`${type.toUpperCase()}`}</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
								<Button
									variant="primary"
									onClick={() => {
										dispatch(rootActions.setFinalGraphType(type));
									}}
								>
									Generate
								</Button>
							</Card.Body>
						</Card>
					);
				}
			})}
		</div>
	);
}

export default GraphCard;
