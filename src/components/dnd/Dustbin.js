import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import rootActions from "../../actions/rootActions";

const style = {
	height: "2rem",
	width: "12rem",
	border: "1px solid black"
};

export const Dustbin = ({ name, lastDroppedItem, onDrop, accept }) => {
	const [{ canDrop, isOver }, drop] = useDrop({
		accept: accept,
		drop: onDrop,
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});
	const isActive = canDrop && isOver;
	let backgroundColor = "white";

	if (isActive) {
		backgroundColor = "gray";
	}

	return (
		<div ref={drop} style={{ ...style, backgroundColor }}>
			{lastDroppedItem && <p>{`${lastDroppedItem.name}`}</p>}
		</div>
	);
};
