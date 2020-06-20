import React from "react";
import {
	Accordion,
	Card,
	Button,
	OverlayTrigger,
	Popover
} from "react-bootstrap";
import Measure from "../Measure";
import LoaddataBtn from "../LoaddataBtn";
import { useSelector } from "react-redux";

function Data() {
	const popover = (
		<Popover id="popover-basic">
			<Popover.Title as="h3">Tips</Popover.Title>
			<Popover.Content>
				Lemon Data provides 7 sample data sets for you to explore. You can
				upload your own data set from your local computer as well. Currently, it
				only supports <strong>csv</strong> format. Lemon Data treats the first
				row as the name row by default. So please make sure your data set
				<strong> includes the name row</strong>.
			</Popover.Content>
		</Popover>
	);
	const { name, rowData, jsonData } = useSelector((state) => state.dataset);
	return (
		<>
			<Accordion defaultActiveKey="datasource">
				<Card>
					<Card.Header style={{ paddingRight: "0px" }}>
						<Accordion.Toggle
							as={Button}
							variant="link"
							eventKey="datasource"
						></Accordion.Toggle>
						Data Source
						<span style={{ marginLeft: "150px" }}>
							<OverlayTrigger
								trigger="click"
								placement="right"
								overlay={popover}
							>
								<i
									className="fas fa-question-circle"
									style={{ fontSize: "1.3em", color: "#f3c03f" }}
								></i>
							</OverlayTrigger>
						</span>
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
							<i className="far fa-minus-square"></i>
						</Accordion.Toggle>
						Fields
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
export default Data;
