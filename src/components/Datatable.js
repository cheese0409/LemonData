import React from "react";
import { Table } from "react-bootstrap";

function Datatable(props) {
	return (
		<div
			className="table-responsive"
			style={{ width: props.width, height: "250px", margin: "0 auto" }}
		>
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						{props.header.map((ele, i) => {
							return <th key={`${i}-${ele}`}>{ele}</th>;
						})}
					</tr>
				</thead>
				<tbody>
					{props.body.map((ele, idx) => {
						return (
							<tr key={`${idx}-${ele}`}>
								{ele.map((data, i) => {
									return <td key={`${i}-${data}`}>{data}</td>;
								})}
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
}

export default Datatable;
