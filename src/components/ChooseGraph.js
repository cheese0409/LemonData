import React, { useState, useCallback, useEffect } from "react";
import { Dustbin } from "./dnd/Dustbin";
import update from "immutability-helper";
import { useDispatch, useSelector } from "react-redux";
import rootActions from "../actions/rootActions";
import { DropdownButton, Dropdown } from "react-bootstrap";
import GraphCard from "./partials/GraphCard";
import Plot from "./Plot";

function ChooseGraph(props) {
	const dispatch = useDispatch();
	const axis = useSelector((state) => state.axis);
	// const finalChoice = useSelector((state) => state.finalChoice);
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
						>
							SUM
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								dispatch(rootActions.setManipulation("AVG"));
							}}
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
						>
							MIN
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								dispatch(rootActions.setManipulation("STD"));
							}}
						>
							STD
						</Dropdown.Item>
					</DropdownButton>
				) : null}
			</div>

			<div style={{ display: "flex" }}>
				{axis.X || axis.Y ? (
					<GraphCard x={axis.X} y={axis.Y}></GraphCard>
				) : null}
			</div>
			{/* <div>{finalChoice ? <Plot></Plot> : null}</div> */}
		</div>
	);
}

export default ChooseGraph;
