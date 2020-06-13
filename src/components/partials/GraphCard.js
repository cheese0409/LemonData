import React, { useState, useEffect } from "react";
import rootActions from "../../actions/rootActions";
import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";

function GraphCard(props) {
	const dispatch = useDispatch();
	const { manipulation } = props;
	const [cardSuggestion, setCardSuggestion] = useState({
		bar: false,
		pie: false,
		line: false,
		heatmap: false,
		scatter: false
	});

	const cardDescription = {
		bar: {
			img: "",
			desc:
				"A bar chart or bar graph is a chart or graph that presents grouped data with rectangular bars with heights proportional to the values that they represent."
		},
		pie: {
			img: "",
			desc:
				"A pie chart (or a circle chart) is a circular statistical graphic which is divided into slices to illustrate numerical proportion."
		},
		line: {
			img: "",
			desc:
				"A line chart is a graphical representation of an asset's historical price action that connects a series of data points with a continuous line."
		},
		heatmap: {
			img: "",
			desc:
				"A heatmap is a graphical representation of data that uses a system of color-coding to represent different values."
		},
		scatter: {
			img: "",
			desc:
				"A scatter plot (also called a scatterplot, scatter graph, scatter chart, scattergram, or scatter diagram) is a type of plot or mathematical diagram using Cartesian coordinates to display values for typically two variables for a set of data."
		}
	};

	const giveCardsSuggestion = (xval = null, yval = null) => {
		if (xval && !yval) {
			if (xval.type === "string") {
				if (xval.count.length > 8) {
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
		} else if (yval && !xval) {
			return {
				line: false,
				heatmap: false,
				scatter: false,
				bar: false,
				pie: false
			};
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
				if (xval.count.length > 8) {
					return {
						bar: true,
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
			} else {
				return {
					bar: false,
					pie: false,
					heatmap: false,
					line: false,
					scatter: false
				};
			}
		} else {
			return {
				bar: false,
				pie: false,
				heatmap: false,
				line: false,
				scatter: false
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
		<div
			style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
		>
			{Object.keys(cardSuggestion).map((type) => {
				if (cardSuggestion[type]) {
					return (
						<Card
							className="text-center"
							style={{
								width: "18rem",
								borderRadius: "0",
								boxShadow: "5px 5px 10px rgba(0,0,0,0.2)",
								margin: "0 10px"
							}}
							key={type}
						>
							<Card.Body>
								<Card.Title>{`${type.toUpperCase()}`}</Card.Title>
								<Card.Text>{`${cardDescription[type].desc}`}</Card.Text>
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
