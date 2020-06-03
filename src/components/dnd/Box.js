import React from "react";
import { useDrag } from "react-dnd";

const style = {
	padding: "0.5rem 1rem",
	cursor: "move"
};

export const Box = ({ name, icon }) => {
	const [{ isDragging }, drag] = useDrag({
		item: { name, type: "box" },
		collect: (monitor) => ({
			isDragging: monitor.isDragging()
		})
	});
	const background = isDragging ? "pink" : "white";
	return (
		<div ref={drag} style={{ ...style, background }}>
			{icon}
			{name}
		</div>
	);
};
