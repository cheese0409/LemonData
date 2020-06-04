import React, { useState, useCallback } from "react";
import { Dustbin } from "./dnd/Dustbin";
import update from "immutability-helper";
import { useDispatch, useSelector } from "react-redux";
import rootActions from "../actions/rootActions";
import { DropdownButton, Dropdown } from "react-bootstrap";

function ChooseGraph(props) {
	const dispatch = useDispatch();
	const axis = useSelector((state) => state.axis);

	const [dustbins, setDustbins] = useState([
		{ name: "X", lastDroppedItem: null, accepts: ["string", "number"] },
		{ name: "Y", lastDroppedItem: null, accepts: ["string", "number"] }
	]);

	const handleDrop = useCallback((index, item) => {
		setDustbins(
			update(dustbins, {
				[index]: {
					lastDroppedItem: {
						$set: item
					}
				}
			})
		);
	});

	return (
		<div>
			<h3>Please select your dimensions</h3>
			<div style={{ display: "flex" }}>
				{dustbins.map(({ name, lastDroppedItem, accepts }, index) => (
					<>
						{`${name} Axis: `}
						<Dustbin
							lastDroppedItem={lastDroppedItem}
							onDrop={(item) => {
								handleDrop(index, item);
								dispatch(rootActions.setAxis({ [name]: item }));
							}}
							key={index}
							name={name}
							accept={accepts}
						/>
					</>
				))}
			</div>
			<div>
				{axis.Y && axis.Y.type === "number" ? (
					<DropdownButton
						// as={ButtonGroup}
						title="Manipulation"
						// id="bg-vertical-dropdown-2"
					>
						<Dropdown.Item eventKey="1">SUM</Dropdown.Item>
						<Dropdown.Item eventKey="2">AVG</Dropdown.Item>
						<Dropdown.Item eventKey="3">MAX</Dropdown.Item>
						<Dropdown.Item eventKey="4">MIN</Dropdown.Item>
						<Dropdown.Item eventKey="5">STD</Dropdown.Item>
					</DropdownButton>
				) : null}
			</div>
		</div>
	);
}

export default ChooseGraph;
