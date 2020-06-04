import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "./dnd/Box";

function Measure(props) {
	const { name, rowData, jsonData } = useSelector((state) => state.dataset);
	const detectDatatype = (val) => {
		if (!isNaN(val)) {
			return "number";
		} else if (typeof val === "string") {
			return "string";
		}
	};

	const showNamelist = (obj) => {
		const keys = Object.keys(obj);
		return keys.map((ele) => {
			return (
				<ListGroup.Item style={{ padding: "0rem 0rem" }} key={ele}>
					<Box
						name={ele}
						icon={
							detectDatatype(obj[ele]) === "number" ? (
								<i class="fas fa-hashtag mr-2 text-info"></i>
							) : (
								<i class="fas fa-font mr-2 text-primary"></i>
							)
						}
						type={detectDatatype(obj[ele])}
					></Box>
				</ListGroup.Item>
			);
		});
	};
	return <ListGroup variant="flush">{showNamelist(jsonData[0])}</ListGroup>;
}

export default Measure;
