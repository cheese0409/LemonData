import React from "react";
import { Dustbin } from "./dnd/Dustbin";
import { useDispatch, useSelector } from "react-redux";
import rootActions from "../actions/rootActions";
import { DropdownButton, Dropdown, Button } from "react-bootstrap";
import GraphCard from "./partials/GraphCard";
import Plot from "./Plot";
function ChooseGraph(props) {
	const dispatch = useDispatch();
	const { axis, manipulation, finalChoice } = props;
	const jsonData = useSelector((state) => state.dataset.jsonData);

	// const filterAccept = (finalChoice) => {
	// 	let acceptObject = {};
	// 	if (finalChoice === "bar" || finalChoice === "line") {
	// 		acceptObject.x = ["string", "number"];
	// 		acceptObject.y = ["number"];
	// 	} else if (finalChoice === "pie") {
	// 		acceptObject.x = ["string"];
	// 		acceptObject.y = ["number"];
	// 	} else if (finalChoice === "scatter") {
	// 		acceptObject.x = ["number"];
	// 		acceptObject.y = ["number"];
	// 	} else if (finalChoice === "heatmap" && axis.X.type === "string") {
	// 		acceptObject.x = ["string"];
	// 		acceptObject.y = ["string"];
	// 	} else if (finalChoice === "heatmap" && axis.X.type === "number") {
	// 		acceptObject.x = ["number"];
	// 		acceptObject.y = ["number"];
	// 	} else {
	// 		acceptObject.x = ["number", "string"];
	// 		acceptObject.y = ["number", "string"];
	// 	}
	// 	return acceptObject;
	// };

	return (
		<div>
			{finalChoice ? null : (
				<div>
					<h3>Please select your dimensions</h3>
					<div style={{ display: "flex" }}>
						<div>
							{`X Axis: `}
							<Dustbin
								lastDroppedItem={axis.X}
								onDrop={(item) => {
									dispatch(rootActions.setAxis({ X: item }));
								}}
								axis={axis}
								key="X"
							/>
						</div>
						<div>
							{`Y Axis: `}
							<Dustbin
								lastDroppedItem={axis.Y}
								onDrop={(item) => {
									dispatch(rootActions.setAxis({ Y: item }));
								}}
								axis={axis}
								key="Y"
							/>
						</div>

						{axis.X &&
						axis.Y &&
						axis.X.type === "string" &&
						axis.Y.type === "number" ? (
							<DropdownButton title={manipulation ? manipulation : "SUM"}>
								<Dropdown.Item
									onClick={() => {
										dispatch(rootActions.setManipulation("SUM"));
									}}
									key="sum"
								>
									SUM
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() => {
										dispatch(rootActions.setManipulation("AVG"));
									}}
									key="avg"
								>
									AVG
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() => {
										dispatch(rootActions.setManipulation("MAX"));
									}}
									key="max"
								>
									MAX
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() => {
										dispatch(rootActions.setManipulation("MIN"));
									}}
									key="min"
								>
									MIN
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() => {
										dispatch(rootActions.setManipulation("STD"));
									}}
									key="std"
								>
									STD
								</Dropdown.Item>
							</DropdownButton>
						) : null}
					</div>
				</div>
			)}

			<div style={{ display: "flex" }}>
				{!finalChoice && (axis.X || axis.Y) ? (
					<GraphCard x={axis.X} y={axis.Y}></GraphCard>
				) : null}
			</div>

			{finalChoice ? (
				<div>
					<Button
						onClick={() => {
							dispatch(rootActions.clearAxis());
						}}
						variant="outline-primary"
					>
						Clear
					</Button>

					<div style={{ height: "720px", width: "1080px" }}>
						<Plot
							dataset={jsonData}
							finalChoice={finalChoice}
							manipulation={manipulation}
							axis={axis}
							width={1080}
							height={720}
							margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
							axisBottom={{
								orient: "bottom",
								tickSize: 0,
								tickPadding: 5,
								tickRotation: 0,
								legendPosition: "middle",
								legendOffset: 46
							}}
							axisLeft={{
								orient: "left",
								tickSize: 5,
								tickPadding: 5,
								tickRotation: 0,
								legendPosition: "middle",
								legendOffset: -60
							}}
						></Plot>
					</div>
				</div>
			) : null}
		</div>
	);
}

export default ChooseGraph;
