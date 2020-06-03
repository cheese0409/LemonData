import React, { useState, useCallback } from "react";
import { Dustbin } from "./dnd/Dustbin";
import update from "immutability-helper";

function ChooseGraph(props) {
	const [dustbins, setDustbins] = useState([
		{ name: "X", lastDroppedItem: null },
		{ name: "Y", lastDroppedItem: null }
	]);

	const [droppedBoxNames, setDroppedBoxNames] = useState("");

	const handleDrop = useCallback(
		(index, item) => {
			setDustbins(
				update(dustbins, {
					[index]: {
						lastDroppedItem: {
							$set: item
						}
					}
				})
			);
		},
		[droppedBoxNames, dustbins]
	);

	return (
		<div>
			<h3>Please select your dimensions</h3>
			<div>
				{dustbins.map(({ name, lastDroppedItem }, index) => (
					<>
						{`${name} Axis: `}
						<Dustbin
							lastDroppedItem={lastDroppedItem}
							onDrop={(item) => handleDrop(index, item)}
							key={index}
							name={name}
						/>
					</>
				))}
			</div>
		</div>
	);
}

export default ChooseGraph;
