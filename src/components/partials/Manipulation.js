import React, { useState } from "react";
import {
	Accordion,
	Card,
	Button,
	ListGroup,
	OverlayTrigger,
	Popover,
	Form
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import rootActions from "../../actions/rootActions";
import { makeStyles } from "@material-ui/core/styles";
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
	const [groupByOption, setGroupByOption] = useState("Categorical name");
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
	const popover = (
		<Popover id="popover-basic">
			<Popover.Title as="h3">Tips</Popover.Title>
			<Popover.Content>
				<strong>Filtering:</strong> The numerical values can be filtered based
				on the filtering rules you add. Multiple filtering rules can be added
				when clicked the "+" sign.<br></br>
				<strong>Calculation:</strong> The calculation you want to perform when
				aggregate the data by the class label.
				<strong>Group By:</strong> The third classification dimension can be
				added if you want.
			</Popover.Content>
		</Popover>
	);
	return (
		<div>
			<Accordion defaultActiveKey="manipulation">
				<Card>
					<Card.Header style={{ paddingRight: "0px" }}>
						<Accordion.Toggle
							as={Button}
							variant="link"
							eventKey="manipulation"
						>
							<i className="far fa-minus-square"></i>
						</Accordion.Toggle>
						Data manipulation
						<span
							style={{
								float: "right",
								marginRight: "15px",
								dispatch: "inline-block",
								verticalAlign: "center"
							}}
						>
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
					<Accordion.Collapse eventKey="manipulation">
						<Card.Body style={{ padding: 0 }}>
							<ListGroup variant="flush">
								{finalChoice === "bar" && axis.Y ? (
									<ListGroup.Item className={classes.listGroup}>
										<div className={classes.root}>
											<div className={classes.label}>
												<span style={{ marginRight: "20px" }}>
													Y values calculation:
												</span>
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
										</div>
									</ListGroup.Item>
								) : null}
								{axis.Y && axis.Y.type === "number" ? (
									<ListGroup.Item className={classes.listGroup}>
										<div className={classes.root}>
											<div className={classes.label}>Filtering:</div>
											<div>
												<div
													style={{
														display: "flex",
														justifyContent: "center",
														alignItems: "center"
													}}
												>
													<span style={{ marginRight: "20px" }}>
														All Y values
													</span>
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
														style={{ marginRight: "20px" }}
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
														style={{ width: "100px" }}
														type="text"
														placeholder="Num"
														onChange={(event) => {
															setFilteringOption({
																...filteringOption,
																num: event.target.value
															});
														}}
														value={filteringOption.num}
													/>
												</div>
											</div>
											<div
												style={{
													marginTop: "20px",
													display: "flex",
													justifyContent: "center"
												}}
											>
												<Button
													style={{ margin: "0 10px" }}
													size="sm"
													onClick={() => {
														dispatch(rootActions.setFiltering(filteringOption));
													}}
												>
													Apply
												</Button>

												<Button
													style={{ margin: "0 10px" }}
													size="sm"
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
										<div className={classes.label}>
											<span style={{ marginRight: "20px" }}>Group By:</span>
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
										</div>
										<div
											style={{
												marginTop: "20px",
												display: "flex",
												justifyContent: "center"
											}}
										>
											<Button
												style={{ margin: "0 10px" }}
												size="sm"
												onClick={() => {
													dispatch(rootActions.setGroupBy(groupByOption));
												}}
											>
												Apply
											</Button>

											<Button
												style={{ margin: "0 10px" }}
												size="sm"
												variant="outline-secondary"
												onClick={() => {
													setGroupByOption("Categorical name");
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
