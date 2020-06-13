import React from "react";
import { Accordion, Card, Button, ListGroup } from "react-bootstrap";

function Manipulation() {
	return (
		<div>
			<Accordion defaultActiveKey="manipulation">
				<Card>
					<Card.Header>
						<Accordion.Toggle
							as={Button}
							variant="link"
							eventKey="manipulation"
						>
							Data manipulation
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="manipulation">
						<Card.Body style={{ padding: 0 }}>
							<ListGroup variant="flush">ssss</ListGroup>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
}

export default Manipulation;
