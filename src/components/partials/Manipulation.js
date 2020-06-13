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

function Manipulation({
	finalChoice,
	manipulation,
	axis,
	filtering,
	groupBy,
	jsonData
}) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const manipulationArr = ["SUM", "AVG", "MAX", "MIN", "STD"];
	let filterArr = [">", ">=", "<", "<="];
	const [filteringOption, setFilteringOption] = useState({
		symbol: "",
		num: ""
	});
	const [groupByOption, setGroupByOption] = useState("");
	const detectDatatype = (val) => {
		if (!isNaN(val)) {
			return "number";
		} else if (typeof val === "string") {
			return "string";
		}
	};
	let groupByArr = [];
	if (jsonData.length !== 0) {
		for (let prop in jsonData[0]) {
			if (detectDatatype(jsonData[0][prop]) === "string") {
				groupByArr.push(prop);
			}
		}
	}

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
													value={filteringOption.symbol}
													onChange={(event) => {
														setFilteringOption({
															...filteringOption,
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
														setFilteringOption({
															...filteringOption,
															num: event.target.value
														});
													}}
													value={filteringOption.num}
												/>
											</div>
											<div>
												<Button
													onClick={() => {
														dispatch(rootActions.setFiltering(filteringOption));
													}}
												>
													Apply
												</Button>

												<Button
													variant="outline-secondary"
													onClick={() => {
														setFilteringOption({
															...filteringOption,
															symbol: "",
															num: ""
														});
														dispatch(
															rootActions.setFiltering({
																symbol: null,
																num: null
															})
														);
													}}
												>
													Clear
												</Button>
											</div>
										</div>
									</ListGroup.Item>
								) : null}
								{(finalChoice === "bar" ||
									finalChoice === "line" ||
									finalChoice === "scatter") &&
								groupByArr.length !== 0 ? (
									<ListGroup.Item className={classes.listGroup}>
										<div className={classes.label}>Group By:</div>
										<Select
											labelId="bar-manipulation-select"
											id="bar-manipulation-select"
											value={groupByOption}
											onChange={(event) => {
												setGroupByOption(event.target.value);
											}}
										>
											{groupByArr.map((ele) => {
												return (
													<MenuItem value={ele} key={ele}>
														{ele}
													</MenuItem>
												);
											})}
										</Select>
										<div>
											<Button
												onClick={() => {
													dispatch(rootActions.setGroupBy(groupByOption));
												}}
											>
												Apply
											</Button>

											<Button
												variant="outline-secondary"
												onClick={() => {
													setGroupByOption("");
													dispatch(rootActions.setGroupBy(null));
												}}
											>
												Clear
											</Button>
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
