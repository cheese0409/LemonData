import React, { useState } from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Data from "../partials/Data";
import ChooseGraph from "../ChooseGraph";
import Customize from "../partials/Customize";
import Manipulation from "../partials/Manipulation";

function Inputpage() {
	const [activeKey, handleSelect] = useState("data");
	const axis = useSelector((state) => state.axis);
	const dataname = useSelector((state) => state.dataset.name);
	const jsonData = useSelector((state) => state.dataset.jsonData);
	const finalChoice = useSelector((state) => state.finalChoice);
	const manipulation = useSelector((state) => state.manipulation);
	const style = useSelector((state) => state.style);
	const filtering = useSelector((state) => state.filtering);
	const groupBy = useSelector((state) => state.groupBy);
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
							<Nav.Link eventKey="data">Import</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="analysis">Customise</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="manipulation">Manipulation</Nav.Link>
						</Nav.Item>
					</Nav>
					{activeKey === "data" ? <Data></Data> : null}
					{activeKey === "analysis" && finalChoice ? (
						<Customize finalChoice={finalChoice} myStyle={style}></Customize>
					) : null}
					{activeKey === "analysis" && finalChoice === null ? (
						<div
							style={{
								textAlign: "center",
								paddingTop: "30px",
								paddingBottom: "30px"
							}}
						>
							No graph available yet...
						</div>
					) : null}
					{activeKey === "manipulation" && finalChoice ? (
						<Manipulation
							finalChoice={finalChoice}
							manipulation={manipulation}
							axis={axis}
							filtering={filtering}
							groupBy={groupBy}
							jsonData={jsonData}
						></Manipulation>
					) : null}
					{activeKey === "manipulation" && finalChoice === null ? (
						<div
							style={{
								textAlign: "center",
								paddingTop: "30px",
								paddingBottom: "30px"
							}}
						>
							No graph available yet...
						</div>
					) : null}
				</Col>
				<Col
					lg={9}
					md={8}
					sm={6}
					style={{
						position: "fixed",
						left: "25%"
					}}
				>
					{dataname ? (
						<ChooseGraph
							axis={axis}
							manipulation={manipulation}
							finalChoice={finalChoice}
							jsonData={jsonData}
							myStyle={style}
							filtering={filtering}
							groupBy={groupBy}
						></ChooseGraph>
					) : null}
				</Col>
			</Row>
		</Container>
	);
}

export default Inputpage;
