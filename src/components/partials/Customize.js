import React from "react";
import {
	Accordion,
	Card,
	Button,
	ListGroup,
	OverlayTrigger,
	Popover
} from "react-bootstrap";
import rootAction from "../../actions/rootActions";
import { useDispatch } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { ChromePicker } from "react-color";

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

const PrettoSlider = withStyles({
	root: {
		color: "#f3c03f",
		height: 8
	},
	thumb: {
		height: 24,
		width: 24,
		backgroundColor: "#fff",
		border: "2px solid currentColor",
		marginTop: -8,
		marginLeft: -12,
		"&:focus, &:hover, &$active": {
			boxShadow: "inherit"
		}
	},
	active: {},
	valueLabel: {
		left: "calc(-50% + 4px)"
	},
	track: {
		height: 8,
		borderRadius: 4
	},
	rail: {
		height: 8,
		borderRadius: 4
	}
})(Slider);

const YellowSwitch = withStyles({
	switchBase: {
		color: "#f3c03f",
		"&$checked": {
			color: "#f7d379"
		},
		"&$checked + $track": {
			backgroundColor: "#f7d379"
		}
	},
	checked: {},
	track: {}
})(Switch);

function Customize({ finalChoice, myStyle }) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const {
		basicStyle,
		barStyle,
		lineStyle,
		pieStyle,
		scatterStyle,
		heatmapStyle,
		theme
	} = myStyle;

	// BASIC
	const marginComponent = () => {
		const marginArray = ["top", "bottom", "left", "right"];
		return (
			<div className={classes.root}>
				<div className={classes.label}>Margin:</div>
				{marginArray.map((ele) => {
					return (
						<div style={{ width: "70%" }}>
							<div className={classes.label}>
								{ele}: {`${basicStyle[ele]}px`}
							</div>
							<PrettoSlider
								className={classes.slider}
								valueLabelDisplay="off"
								aria-label="pretto slider"
								defaultValue={100}
								step={10}
								min={0}
								max={300}
								onChange={(e, val) => {
									dispatch(
										rootAction.setStyle({
											basicStyle: {
												[ele]: Number(val)
											}
										})
									);
								}}
							/>
						</div>
					);
				})}
			</div>
		);
	};
	const widthComponent = () => {
		return (
			<div className={classes.root}>
				<div className={classes.label}>Width: {`${basicStyle.width}px`}</div>
				<PrettoSlider
					className={classes.slider}
					valueLabelDisplay="off"
					aria-label="pretto slider"
					defaultValue={800}
					max={1200}
					min={300}
					onChange={(e, val) => {
						dispatch(
							rootAction.setStyle({
								basicStyle: { width: Number(val) }
							})
						);
					}}
				/>
			</div>
		);
	};
	const heightComponent = () => {
		return (
			<div className={classes.root}>
				<div className={classes.label}>Height: {`${basicStyle.height}px`}</div>
				<PrettoSlider
					className={classes.slider}
					valueLabelDisplay="off"
					aria-label="pretto slider"
					defaultValue={400}
					max={800}
					min={200}
					onChange={(e, val) => {
						dispatch(
							rootAction.setStyle({
								basicStyle: { height: Number(val) }
							})
						);
					}}
				/>
			</div>
		);
	};
	const enableGridXComponent = () => {
		return (
			<div className={classes.root}>
				<div className={classes.label}>
					<span style={{ marginRight: "20px" }}>Show/Hide Grid X:</span>
					<FormControlLabel
						control={
							<YellowSwitch
								checked={basicStyle.enableGridX}
								onChange={(event) => {
									let val = event.target.checked;
									dispatch(
										rootAction.setStyle({
											basicStyle: { enableGridX: val }
										})
									);
								}}
								name="gridX"
							/>
						}
					/>
				</div>
			</div>
		);
	};
	const enableGridYComponent = () => {
		return (
			<div className={classes.root}>
				<div className={classes.label}>
					<span style={{ marginRight: "20px" }}>Show/Hide Grid Y:</span>
					<FormControlLabel
						control={
							<YellowSwitch
								checked={basicStyle.enableGridY}
								onChange={(event) => {
									let val = event.target.checked;
									dispatch(
										rootAction.setStyle({
											basicStyle: { enableGridY: val }
										})
									);
								}}
								name="gridY"
							/>
						}
					/>
				</div>
			</div>
		);
	};
	const enableLabelComponent = () => {
		return (
			<div className={classes.root}>
				<div className={classes.label}>
					<span style={{ marginRight: "20px" }}>Show/Hide labels:</span>
					<FormControlLabel
						control={
							<YellowSwitch
								checked={basicStyle.enableLabel}
								onChange={(event) => {
									let val = event.target.checked;
									dispatch(
										rootAction.setStyle({
											basicStyle: { enableLabel: val }
										})
									);
								}}
								name="Label"
							/>
						}
					/>
				</div>
			</div>
		);
	};
	const labelTextColorComponent = () => {
		return (
			<div className={classes.root}>
				<div className={classes.label}>
					Label Text Color:{" "}
					<span
						style={{ color: basicStyle.labelTextColor }}
					>{`${basicStyle.labelTextColor.toString()}`}</span>
				</div>
				<ChromePicker
					color={basicStyle.labelTextColor}
					onChangeComplete={(color) => {
						let rgb = color.rgb;
						dispatch(
							rootAction.setStyle({
								basicStyle: {
									labelTextColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`
								}
							})
						);
					}}
				/>
			</div>
		);
	};
	// THEME
	const themeBackgroundComponent = () => {
		return (
			<div className={classes.root}>
				<div className={classes.label}>
					Background Color:{" "}
					<span
						style={{ color: theme.background }}
					>{`${theme.background.toString()}`}</span>
				</div>
				<ChromePicker
					color={theme.background}
					onChangeComplete={(color) => {
						let rgb = color.rgb;
						dispatch(
							rootAction.setStyle({
								theme: {
									background: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`
								}
							})
						);
					}}
				/>
			</div>
		);
	};
	const themeAxisFontSizeComponent = () => {
		return (
			<div className={classes.root}>
				<div className={classes.label}>
					Axis Font Size: {`${theme.axis.ticks.text.fontSize}px`}
				</div>
				<PrettoSlider
					className={classes.slider}
					valueLabelDisplay="off"
					aria-label="pretto slider"
					defaultValue={11}
					min={8}
					max={30}
					onChange={(e, val) => {
						dispatch(
							rootAction.setStyle({
								theme: {
									axis: {
										ticks: {
											text: {
												fontSize: val
											}
										},
										legend: {
											text: {
												fontSize: val
											}
										}
									}
								}
							})
						);
					}}
				/>
			</div>
		);
	};
	const themeGridLineWidthComponent = () => {
		return (
			<div className={classes.root}>
				<div className={classes.label}>
					Grid Line Width: {`${theme.grid.line.strokeWidth}px`}
				</div>
				<PrettoSlider
					className={classes.slider}
					valueLabelDisplay="off"
					aria-label="pretto slider"
					defaultValue={1}
					min={0}
					max={8}
					onChange={(e, val) => {
						dispatch(
							rootAction.setStyle({
								theme: {
									grid: {
										line: {
											strokeWidth: val
										}
									}
								}
							})
						);
					}}
				/>
			</div>
		);
	};
	const themeLabelsTextFontSizeComponent = () => {
		return (
			<div className={classes.root}>
				<div className={classes.label}>
					Label Text Font Size: {`${theme.labels.text.fontSize}px`}
				</div>
				<PrettoSlider
					className={classes.slider}
					valueLabelDisplay="off"
					aria-label="pretto slider"
					defaultValue={11}
					min={8}
					max={30}
					onChange={(e, val) => {
						dispatch(
							rootAction.setStyle({
								theme: {
									labels: {
										text: {
											fontSize: val
										}
									}
								}
							})
						);
					}}
				/>
			</div>
		);
	};
	// BAR
	const barPaddingComponent = () => {
		return (
			<div className={classes.root}>
				<div className={classes.label}>
					Bar Padding: {`${barStyle.padding}px`}
				</div>
				<PrettoSlider
					className={classes.slider}
					valueLabelDisplay="off"
					aria-label="discrete-slider-small-steps"
					defaultValue={0.1}
					step={0.1}
					max={0.9}
					min={0}
					onChange={(e, val) => {
						dispatch(
							rootAction.setStyle({
								barStyle: { padding: Number(val) }
							})
						);
					}}
				/>
			</div>
		);
	};
	const barBorderRadiusComponent = () => {
		return (
			<div className={classes.root}>
				<div className={classes.label}>
					Border Radius: {`${barStyle.borderRadius}px`}
				</div>
				<PrettoSlider
					className={classes.slider}
					valueLabelDisplay="off"
					aria-label="discrete-slider-small-steps"
					defaultValue={0}
					step={1}
					min={0}
					max={36}
					onChange={(e, val) => {
						dispatch(
							rootAction.setStyle({
								barStyle: { borderRadius: Number(val) }
							})
						);
					}}
				/>
			</div>
		);
	};
	const barBorderWidthComponent = () => {
		return (
			<div className={classes.root}>
				<div className={classes.label}>
					Border Width: {`${barStyle.borderWidth}px`}
				</div>
				<PrettoSlider
					className={classes.slider}
					valueLabelDisplay="off"
					aria-label="discrete-slider-small-steps"
					defaultValue={0}
					step={1}
					min={0}
					max={20}
					onChange={(e, val) => {
						dispatch(
							rootAction.setStyle({
								barStyle: { borderWidth: Number(val) }
							})
						);
					}}
				/>
			</div>
		);
	};
	const barBorderColorComponent = () => {
		return (
			<div className={classes.root}>
				<div className={classes.label}>
					Border Color:{" "}
					<span
						style={{ color: barStyle.borderColor }}
					>{`${barStyle.borderColor.toString()}`}</span>
				</div>
				<ChromePicker
					color={barStyle.borderColor}
					onChangeComplete={(color) => {
						let rgb = color.rgb;
						dispatch(
							rootAction.setStyle({
								barStyle: {
									borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`
								}
							})
						);
					}}
				/>
			</div>
		);
	};
	// HEATMAP
	const heatmapForceSquareComponent = () => {
		return (
			<div className={classes.root}>
				<div className={classes.label}>
					<span style={{ marginRight: "20px" }}>Force Square:</span>
					<FormControlLabel
						control={
							<YellowSwitch
								checked={heatmapStyle.forceSquare}
								onChange={(event) => {
									let val = event.target.checked;
									dispatch(
										rootAction.setStyle({
											heatmapStyle: { forceSquare: val }
										})
									);
								}}
								name="ForceSquare"
							/>
						}
					/>
				</div>
			</div>
		);
	};

	const heatmapSizeVariationComponent = () => {
		return (
			<div className={classes.root}>
				<div className={classes.label}>
					Size Variation: {`${heatmapStyle.sizeVariation}px`}
				</div>
				<PrettoSlider
					className={classes.slider}
					valueLabelDisplay="off"
					aria-label="discrete-slider-small-steps"
					defaultValue={0}
					step={0.1}
					min={0}
					max={1}
					onChange={(e, val) => {
						dispatch(
							rootAction.setStyle({
								heatmapStyle: { sizeVariation: Number(val) }
							})
						);
					}}
				/>
			</div>
		);
	};

	const heatmapPaddingComponent = () => {
		return (
			<div className={classes.root}>
				<div className={classes.label}>
					Padding: {`${heatmapStyle.padding}px`}
				</div>
				<PrettoSlider
					className={classes.slider}
					valueLabelDisplay="off"
					aria-label="discrete-slider-small-steps"
					defaultValue={0}
					step={1}
					min={0}
					max={36}
					onChange={(e, val) => {
						dispatch(
							rootAction.setStyle({
								heatmapStyle: { padding: Number(val) }
							})
						);
					}}
				/>
			</div>
		);
	};

	const heatmapColorsComponent = () => {
		const colorsArray = [
			"nivo",
			"BrBG",
			"PRGn",
			"PiYG",
			"PuOr",
			"blues",
			"greens",
			"greys",
			"oranges",
			"purples"
		];
		return (
			<div className={classes.root}>
				<div className={classes.label}>Colors:</div>
				<Select
					labelId="heatmap-colors-select"
					id="heatmap-colors-select"
					value={heatmapStyle.colors}
					onChange={(event) => {
						dispatch(
							rootAction.setStyle({
								heatmapStyle: {
									colors: event.target.value
								}
							})
						);
					}}
				>
					{colorsArray.map((ele) => {
						return (
							<MenuItem value={ele} key={ele}>
								{ele}
							</MenuItem>
						);
					})}
				</Select>
			</div>
		);
	};

	const renderStyles = (finalChoice) => {
		const type = {
			basic: {
				width: widthComponent,
				height: heightComponent,
				background: themeBackgroundComponent,
				margin: marginComponent
			},
			bar: {
				enableLabel: enableLabelComponent,
				enableGridX: enableGridXComponent,
				enableGridY: enableGridYComponent,
				padding: barPaddingComponent,
				labelTextColor: labelTextColorComponent,
				axisFontSize: themeAxisFontSizeComponent,
				labelTextFontSize: themeLabelsTextFontSizeComponent,
				gridLineWidth: themeGridLineWidthComponent,
				borderWidth: barBorderWidthComponent,
				borderRadius: barBorderRadiusComponent,
				borderColor: barBorderColorComponent
			},
			line: { enableLabel: enableLabelComponent },
			scatter: {
				enableLabel: enableLabelComponent,
				labelTextColor: labelTextColorComponent
			},
			heatmap: {
				enableLabel: enableLabelComponent,
				labelTextColor: labelTextColorComponent,
				axisFontSize: themeAxisFontSizeComponent,
				labelTextFontSize: themeLabelsTextFontSizeComponent,
				forceSquare: heatmapForceSquareComponent,
				sizeVariation: heatmapSizeVariationComponent,
				padding: heatmapPaddingComponent,
				colors: heatmapColorsComponent
			},
			pie: {
				enableLabel: enableLabelComponent,
				labelTextColor: labelTextColorComponent
			}
		};
		let obj = type[finalChoice];

		return Object.keys(obj).map((ele) => {
			return (
				<ListGroup.Item key={ele.toString()} className={classes.listGroup}>
					{obj[ele]()}
				</ListGroup.Item>
			);
		});
	};

	const popover1 = (
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
	const popover2 = (
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

	return (
		<div>
			<Accordion defaultActiveKey="basicStyle">
				<Card>
					<Card.Header style={{ paddingRight: "0px" }}>
						<Accordion.Toggle as={Button} variant="link" eventKey="basicStyle">
							<i className="far fa-minus-square"></i>
						</Accordion.Toggle>
						Basic Styles
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
								overlay={popover1}
							>
								<i
									className="fas fa-question-circle"
									style={{ fontSize: "1.3em", color: "#f3c03f" }}
								></i>
							</OverlayTrigger>
						</span>
					</Card.Header>
					<Accordion.Collapse eventKey="basicStyle">
						<Card.Body style={{ padding: 0 }}>
							<ListGroup variant="flush">{renderStyles("basic")}</ListGroup>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
			<Accordion defaultActiveKey={`${finalChoice}Styles`}>
				<Card>
					<Card.Header style={{ paddingRight: "0px" }}>
						<Accordion.Toggle
							as={Button}
							variant="link"
							eventKey={`${finalChoice}Styles`}
						>
							<i className="far fa-minus-square"></i>
						</Accordion.Toggle>
						{`${finalChoice.toUpperCase()}`} Styles
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
								overlay={popover2}
							>
								<i
									className="fas fa-question-circle"
									style={{ fontSize: "1.3em", color: "#f3c03f" }}
								></i>
							</OverlayTrigger>
						</span>
					</Card.Header>
					<Accordion.Collapse eventKey={`${finalChoice}Styles`}>
						<Card.Body style={{ padding: 0 }}>
							<ListGroup variant="flush">{renderStyles(finalChoice)}</ListGroup>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
}

export default Customize;
