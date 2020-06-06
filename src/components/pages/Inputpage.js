import React, { useState } from "react";
import LoaddataBtn from "../LoaddataBtn";
import { Container, Nav, Row, Col, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar";
import Uploader from "../Uploader";
import ChooseGraph from "../ChooseGraph";
import Plot from "../Plot";

function Inputpage() {
	const [activeKey, handleSelect] = useState("data");
	const axis = useSelector((state) => state.axis);
	const dataname = useSelector((state) => state.dataset.name);
	const jsonData = useSelector((state) => state.dataset.jsonData);
	const finalChoice = useSelector((state) => state.finalChoice);
	return (
		<Container fluid>
			<Row>
				<Col lg={3} md={4} sm={6}>
					<Nav
						fill
						variant="tabs"
						activeKey={activeKey}
						onSelect={(eventKey) => {
							handleSelect(eventKey);
						}}
					>
						<Nav.Item>
							<Nav.Link eventKey="data">Data</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="analysis">Analysis</Nav.Link>
						</Nav.Item>
					</Nav>
					{activeKey === "data" ? <Sidebar></Sidebar> : null}
					{activeKey === "analysis" ? <div>Analysis</div> : null}
				</Col>
				<Col lg={9} md={8} sm={6}>
					{dataname ? <ChooseGraph></ChooseGraph> : null}
					{finalChoice ? (
						<div style={{ height: "500px", width: "600px" }}>
							<Plot
								dataset={jsonData}
								finalChoice={finalChoice}
								axis={axis}
								width={800}
								height={600}
								margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
								xScale={{
									type: "linear",
									min: "auto",
									max: "auto"
								}}
								yScale={{
									type: "linear",
									min: "auto",
									max: "auto"
								}}
								axisBottom={{
									orient: "bottom",
									tickSize: 0,
									tickPadding: 5,
									tickRotation: 0,
									legendPosition: "middle",
									legendOffset: 46
								}}
								axisLeft={{
									orient: "left",
									tickSize: 5,
									tickPadding: 5,
									tickRotation: 0,
									legendPosition: "middle",
									legendOffset: -60
								}}
							></Plot>
						</div>
					) : null}
				</Col>
			</Row>
		</Container>
	);
}

export default Inputpage;
