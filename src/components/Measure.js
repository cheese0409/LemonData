import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Box } from "./dnd/Box";

function Measure(props) {
	const { jsonData } = useSelector((state) => state.dataset);

	const detectDatatype = (val) => {
		if (!isNaN(val)) {
			return "number";
		} else if (typeof val === "string") {
			return "string";
		}
	};

	const countStringTypes = (key, total) => {
		var set = new Set();
		for (let i = 0; i < total.length; i++) {
			let element = total[i];
			set.add(element[key]);
		}
		return Array.from(set);
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
								<i className="fas fa-hashtag mr-2 text-info"></i>
							) : (
								<i className="fas fa-font mr-2 text-primary"></i>
							)
						}
						type={detectDatatype(obj[ele])}
						count={
							detectDatatype(obj[ele]) === "number"
								? null
								: countStringTypes(ele, jsonData)
						}
					></Box>
				</ListGroup.Item>
			);
		});
	};

	return <ListGroup variant="flush">{showNamelist(jsonData[0])}</ListGroup>;
}

export default Measure;
