import React from "react";
import { Dustbin } from "./dnd/Dustbin";
import { useDispatch } from "react-redux";
import rootActions from "../actions/rootActions";
import { Button } from "react-bootstrap";
import GraphCard from "./partials/GraphCard";
import Plot from "./Plot";
const saveSvgAsPng = require("save-svg-as-png");

function ChooseGraph({
	axis,
	manipulation,
	finalChoice,
	myStyle,
	jsonData,
	filtering,
	groupBy
}) {
	const dispatch = useDispatch();
	return (
		<div>
			{finalChoice ? null : (
				<div style={{ margin: "1em" }}>
					<h5 style={{ textAlign: "center" }}>Please select your dimensions</h5>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<div>
							<Dustbin
								title="X Axis"
								lastDroppedItem={axis.X}
								onDrop={(item) => {
									dispatch(rootActions.setAxis({ X: item }));
								}}
								axis={axis}
								key="X"
								handleClear={() => {
									dispatch(rootActions.setAxis({ X: null }));
								}}
							/>
						</div>
						<div>
							<Dustbin
								title="Y Axis"
								lastDroppedItem={axis.Y}
								onDrop={(item) => {
									dispatch(rootActions.setAxis({ Y: item }));
								}}
								axis={axis}
								key="Y"
								handleClear={() => {
									dispatch(rootActions.setAxis({ Y: null }));
								}}
							/>
						</div>
					</div>
				</div>
			)}

			{!finalChoice && (axis.X || axis.Y) ? (
				<GraphCard
					x={axis.X}
					y={axis.Y}
					manipulation={manipulation}
				></GraphCard>
			) : null}

			{finalChoice ? (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center"
					}}
				>
					<div style={{ display: "flex" }}>
						<Button
							onClick={() => {
								dispatch(rootActions.clearAxis());
							}}
							variant="outline-primary"
							style={{ margin: "0 20px" }}
						>
							Back
						</Button>
						<Button
							style={{ margin: "0 20px" }}
							onClick={() => {
								saveSvgAsPng.saveSvgAsPng(
									document.querySelectorAll("#myplot svg")[0],
									"untitle.png",
									{
										scale: 1,
										encoderOptions: 1,
										background: "white"
									}
								);
							}}
							variant="primary"
						>
							Download
						</Button>
					</div>
					<div
						style={{
							width: "800px",
							height: "600px"
						}}
						id="myplot"
					>
						<Plot
							dataset={jsonData}
							finalChoice={finalChoice}
							manipulation={manipulation}
							axis={axis}
							groupBy={groupBy}
							filtering={filtering}
							{...myStyle}
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
