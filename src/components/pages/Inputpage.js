import React, { useState } from "react";
import { Container, Nav, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar";
import ChooseGraph from "../ChooseGraph";
import Plot from "../Plot";
import { useDispatch } from "react-redux";
import rootActions from "../../actions/rootActions";

function Inputpage() {
	const [activeKey, handleSelect] = useState("data");
	const axis = useSelector((state) => state.axis);
	const dataname = useSelector((state) => state.dataset.name);
	const jsonData = useSelector((state) => state.dataset.jsonData);
	const finalChoice = useSelector((state) => state.finalChoice);
	const manipulation = useSelector((state) => state.manipulation);
	const dispatch = useDispatch();
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
					{dataname ? (
						<ChooseGraph axis={axis} manipulation={manipulation}></ChooseGraph>
					) : null}
					{finalChoice ? (
						<div>
							<Button
								onClick={() => {
									dispatch(rootActions.clearAxis());
								}}
								variant="outline-primary"
							>
								Clear
							</Button>
						</div>
					) : null}
					{finalChoice ? (
						<div style={{ height: "500px", width: "600px" }}>
							<Plot
								dataset={jsonData}
								finalChoice={finalChoice}
								manipulation={manipulation}
								axis={axis}
								width={600}
								height={500}
								margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
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
