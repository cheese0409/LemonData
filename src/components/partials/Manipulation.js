import React, { useState } from "react";
import {
	Accordion,
	Card,
	Button,
	ListGroup,
	DropdownButton,
	Dropdown,
	Form
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import rootActions from "../../actions/rootActions";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
	margin: {
		height: theme.spacing(3)
	},
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	label: { alignSelf: "start" },
	listGroup: {
		padding: "1em 1em"
	}
}));

function Manipulation({ finalChoice, manipulation, axis, filtering }) {
	const classes = useStyles();
	let manipulationArr = ["SUM", "AVG", "MAX", "MIN", "STD"];
	let filterArr = ["=", ">", "<", "<=", ">="];
	const dispatch = useDispatch();
	const [filteringOptions, setFilteringOptions] = useState({
		symbol: "",
		num: null
	});
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
							<ListGroup variant="flush">
								{finalChoice === "bar" && axis.Y ? (
									<ListGroup.Item className={classes.listGroup}>
										<div className={classes.root}>
											<div className={classes.label}>Y values calculation:</div>
											<Select
												labelId="bar-manipulation-select"
												id="bar-manipulation-select"
												value={manipulation}
												onChange={(event) => {
													dispatch(
														rootActions.setManipulation(event.target.value)
													);
												}}
											>
												{manipulationArr.map((ele) => {
													return (
														<MenuItem value={ele} key={ele}>
															{ele}
														</MenuItem>
													);
												})}
											</Select>
										</div>
									</ListGroup.Item>
								) : null}
								{axis.Y && axis.Y.type === "number" ? (
									<ListGroup.Item className={classes.listGroup}>
										<div className={classes.root}>
											<div className={classes.label}>Filtering:</div>
											<div>
												<div>All Y values </div>
												<Select
													labelId="filter-select"
													id="filter-select"
													value={filteringOptions.symbol}
													onChange={(event) => {
														setFilteringOptions({
															...filteringOptions,
															symbol: event.target.value
														});
													}}
												>
													{filterArr.map((ele) => {
														return (
															<MenuItem value={ele} key={ele}>
																{ele}
															</MenuItem>
														);
													})}
												</Select>
												<Form.Control
													type="text"
													placeholder="Enter number..."
													onChange={(event) => {
														setFilteringOptions({
															...filteringOptions,
															num: event.target.value
														});
													}}
												/>
											</div>
											<div
												onClick={() => {
													dispatch(rootActions.setFiltering(filteringOptions));
												}}
											>
												<Button>Apply</Button>
											</div>
										</div>
									</ListGroup.Item>
								) : null}
							</ListGroup>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
}

export default Manipulation;
