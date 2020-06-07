import React from "react";
import { Dustbin } from "./dnd/Dustbin";
import { useDispatch, useSelector } from "react-redux";
import rootActions from "../actions/rootActions";
import { DropdownButton, Dropdown } from "react-bootstrap";
import GraphCard from "./partials/GraphCard";

function ChooseGraph(props) {
	const dispatch = useDispatch();
	const { axis, manipulation } = props;
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

			<div style={{ display: "flex" }}>
				{axis.X || axis.Y ? (
					<GraphCard x={axis.X} y={axis.Y}></GraphCard>
				) : null}
			</div>
		</div>
	);
}

export default ChooseGraph;
