import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";

import axios from "axios";

function SampleBtn(props) {
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		if (isLoading) {
			fetchSampleData(props.name)
				.then((res) => {
					const value = {
						name: props.name,
						rowData: res.data.rowData,
						jsonData: res.data.jsonData
					};
					props.passVal(value);
				})
				.then(() => {
					setLoading(false);
				});
		}
	});

	const handleClick = () => setLoading(true);

	const fetchSampleData = (filename) => {
		return axios.get(`http://localhost:3001/api/file/${filename}`);
	};

	return (
		<Button
			style={{ margin: "10px 5px" }}
			variant="outline-dark"
			disabled={isLoading}
			onClick={!isLoading ? handleClick : null}
		>
			{isLoading ? (
				<div>
					<Spinner
						as="span"
						animation="grow"
						size="sm"
						role="status"
						aria-hidden="true"
					/>
					Loading...
				</div>
			) : (
				<span>
					<i className="fas fa-database mx-1"></i>
					{props.name.toUpperCase()}
				</span>
			)}
		</Button>
	);
}

export default SampleBtn;
