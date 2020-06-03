import React from "react";
import { useDrop } from "react-dnd";

const style = {
	height: "2rem",
	width: "12rem",
	border: "1px solid black"
};

export const Dustbin = ({ name, lastDroppedItem, onDrop }) => {
	const [{ canDrop, isOver }, drop] = useDrop({
		accept: "box",
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
			{/* {name} */}
			{lastDroppedItem && <p>{`${lastDroppedItem.name}`}</p>}
		</div>
	);
};
