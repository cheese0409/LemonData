import React, { useState, useCallback, useEffect } from "react";
import { Dustbin } from "./dnd/Dustbin";
import update from "immutability-helper";
import { useDispatch, useSelector } from "react-redux";
import rootActions from "../actions/rootActions";
import { DropdownButton, Dropdown } from "react-bootstrap";
import GraphCard from "./partials/GraphCard";

function ChooseGraph(props) {
	const dispatch = useDispatch();
	const axis = useSelector((state) => state.axis);
	const manipulation = useSelector((state) => state.manipulation);

	return (
		<div>
			<h3>Please select your dimensions</h3>
			<div style={{ display: "flex" }}>
				<>
					{`X Axis: `}
					<Dustbin
						lastDroppedItem={axis.X}
						onDrop={(item) => {
							dispatch(rootActions.setAxis({ X: item }));
							// setAxis(item, "X", dispatch).then((res) => {
							// 	console.log(res);
							// 	// dispatch(
							// 	// 	rootActions.setGraphSuggestions(
							// 	// 		giveCardsSuggestion(axis.X, updateAxis.Y)
							// 	// 	)
							// 	// );
							// });
						}}
						key="X"
					/>
				</>
				<>
					{`Y Axis: `}
					<Dustbin
						lastDroppedItem={axis.Y}
						onDrop={(item) => {
							dispatch(rootActions.setAxis({ Y: item }));
							// setAxis(item, "Y", dispatch).then((res) => {
							// 	console.log(res);
							// 	// dispatch(
							// 	// 	rootActions.setGraphSuggestions(
							// 	// 		giveCardsSuggestion(axis.X, axis.Y)
							// 	// 	)
							// 	// );
							// });
						}}
						key="Y"
					/>
				</>
			</div>
			<div>
				{axis.Y && axis.Y.type === "number" ? (
					<DropdownButton title={manipulation ? manipulation : "Manipulation"}>
						<Dropdown.Item
							onClick={() => {
								dispatch(rootActions.setManipulation("SUM"));
							}}
							eventKey="sum"
						>
							SUM
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								dispatch(rootActions.setManipulation("AVG"));
							}}
							eventKey="avg"
						>
							AVG
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								dispatch(rootActions.setManipulation("MAX"));
							}}
							eventKey="max"
						>
							MAX
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								dispatch(rootActions.setManipulation("MIN"));
							}}
							eventKey="min"
						>
							MIN
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								dispatch(rootActions.setManipulation("STD"));
							}}
							eventKey="std"
						>
							STD
						</Dropdown.Item>
					</DropdownButton>
				) : null}
			</div>

			<div>
				{axis.X || axis.Y ? (
					<GraphCard x={axis.X} y={axis.Y}></GraphCard>
				) : null}
			</div>
		</div>
	);
}

export default ChooseGraph;
