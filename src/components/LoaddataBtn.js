import React, { useState } from "react";
import { Button, Modal, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Samples from "./Samples";
import Uploader from "./Uploader";
import rootActions from "../actions/rootActions";

function LoaddataBtn(props) {
	const [show, setShow] = useState(false);
	const [data, setData] = useState({});
	const [activeKey, handleSelect] = useState("upload");
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const saveChange = (input) => setData(input);
	const dispatch = useDispatch();
	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Load
			</Button>

			<Modal size="xl" scrollable show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Load Data</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Nav
						fill
						variant="tabs"
						activeKey={activeKey}
						onSelect={(eventKey) => {
							handleSelect(eventKey);
						}}
					>
						<Nav.Item>
							<Nav.Link eventKey="upload">Upload files</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="sample">Use sample data set</Nav.Link>
						</Nav.Item>
					</Nav>
					<div>
						{activeKey === "upload" ? (
							<Uploader passVal={saveChange}></Uploader>
						) : null}
						{activeKey === "sample" ? (
							<Samples passVal={saveChange}></Samples>
						) : null}
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button
						variant="primary"
						onClick={() => {
							setShow(false);
							return dispatch(rootActions.setDataset(data));
						}}
					>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default LoaddataBtn;
