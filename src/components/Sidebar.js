import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import Measure from "./Measure";
import LoaddataBtn from "./LoaddataBtn";
import { useSelector } from "react-redux";

function Sidebar() {
	const { name, rowData, jsonData } = useSelector((state) => state.dataset);
	return (
		<>
			<Accordion defaultActiveKey="datasource">
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="datasource">
							Data Source
						</Accordion.Toggle>
					</Card.Header>
					<Accordion eventKey="datasource">
						<Card.Body>
							<LoaddataBtn></LoaddataBtn>
							<span className="ml-3">
								{name ? (
									<>
										<i className="fas fa-database mr-2"></i>
										{`${name}`}
									</>
								) : (
									`No data yet...`
								)}
							</span>
						</Card.Body>
					</Accordion>
				</Card>
			</Accordion>
			<Accordion defaultActiveKey="measure">
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="measure">
							Fields
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="measure">
						{name ? (
							<Card.Body style={{ padding: 0 }}>
								<Measure namelist={rowData[0]} jsonData={jsonData}></Measure>
							</Card.Body>
						) : (
							<Card.Body>No fields yet...</Card.Body>
						)}
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</>
	);
}
export default Sidebar;
