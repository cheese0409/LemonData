import React, { useState } from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar";
import ChooseGraph from "../ChooseGraph";

function Inputpage() {
	const [activeKey, handleSelect] = useState("data");
	const axis = useSelector((state) => state.axis);
	const dataname = useSelector((state) => state.dataset.name);
	const finalChoice = useSelector((state) => state.finalChoice);
	const manipulation = useSelector((state) => state.manipulation);
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
						<ChooseGraph
							axis={axis}
							manipulation={manipulation}
							finalChoice={finalChoice}
						></ChooseGraph>
					) : null}
				</Col>
			</Row>
		</Container>
	);
}

export default Inputpage;
