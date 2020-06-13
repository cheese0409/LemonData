import React from "react";
import { useDrop } from "react-dnd";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
	close: {
		display: "block",
		float: "right",
		paddingLeft: "10px",
		paddingRight: "10px",
		"&:hover": {
			cursor: "pointer"
		}
	}
}));

export const Dustbin = ({ lastDroppedItem, onDrop, title, handleClear }) => {
	const classes = useStyles();
	const [{ canDrop, isOver }, drop] = useDrop({
		accept: ["string", "number"],
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
		<div
			style={{
				background: "white",
				width: "350px",
				height: "100px",
				margin: "1em"
			}}
		>
			<div
				style={{
					width: "350px",
					height: "40px",
					textAlign: "center",
					fontSize: "1.3rem",
					fontWeight: 100
				}}
			>
				{title}
			</div>
			<div
				ref={drop}
				style={{ width: "350px", height: "60px", backgroundColor }}
			>
				{lastDroppedItem && (
					<div
						style={{
							display: "table-cell",
							verticalAlign: "middle",
							background: isActive ? "gray" : "#ffe091",
							textAlign: "center",
							height: "55px",
							width: "348px",
							boxShadow: "2px 2px 2px rgba(0,0,0,0.2)"
						}}
					>
						<span
							style={{ fontWeight: "bold" }}
						>{`${lastDroppedItem.name}`}</span>
						<span
							style={{
								marginLeft: "10px",
								fontSize: "0.8rem"
							}}
						>
							{`${lastDroppedItem.type}`}
						</span>
						<span className={classes.close} onClick={handleClear}>
							<i class="fas fa-times"></i>
						</span>
					</div>
				)}
			</div>
		</div>
	);
};
