import React, { useState } from "react";
import LoaddataBtn from "../LoaddataBtn";
import { Container, Nav, Row, Col, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import GraphSection from "../GraphSection";
import Sidebar from "../Sidebar";
import Uploader from "../Uploader";
import ChooseGraph from "../ChooseGraph";

function Inputpage() {
	const [activeKey, handleSelect] = useState("data");
	const dataname = useSelector((state) => state.dataset.name);
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
				</Col>
			</Row>
		</Container>
	);
}

export default Inputpage;
