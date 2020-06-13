import { combineReducers } from "redux";

const currentDataset = (
	state = { name: null, rowData: null, jsonData: null },
	action
) => {
	switch (action.type) {
		case "SET_DATASET":
			return {
				...state,
				name: action.payload.name,
				rowData: action.payload.rowData,
				jsonData: action.payload.jsonData
			};
		default:
			return state;
	}
};

const currentAxis = (state = { X: null, Y: null }, action) => {
	switch (action.type) {
		case "SET_DATASET":
			return {
				X: null,
				Y: null
			};
		case "SET_AXIS":
			return {
				...state,
				...action.payload
			};
		case "CLEAR_AXIS":
			return {
				...state
			};
		default:
			return state;
	}
};

const currentManipulation = (state = "AVG", action) => {
	switch (action.type) {
		case "SET_DATASET":
			return "AVG";
		case "CLEAR_AXIS":
			return state;
		case "SET_MANIPULATION":
			return action.payload;
		default:
			return state;
	}
};

const currentFiltering = (state = { symbol: null, num: null }, action) => {
	switch (action.type) {
		case "SET_DATASET":
			return { symbol: null, num: null };
		case "CLEAR_AXIS":
			return state;
		case "SET_FILTERING":
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};

const currentGraphSuggestions = (
	state = {
		bar: false,
		line: false,
		pie: false,
		heatmap: false,
		scatter: false
	},
	action
) => {
	switch (action.type) {
		case "SET_GRAPH_SUGGESTIONS":
			return {
				...state,
				bar: action.payload.bar,
				line: action.payload.line,
				pie: action.payload.pie,
				heatmap: action.payload.heatmap,
				scatter: action.payload.scatter
			};
		case "CLEAR_AXIS":
			return { ...state };
		default:
			return state;
	}
};

const currentGraphChoice = (state = null, action) => {
	switch (action.type) {
		case "SET_DATASET":
			return null;
		case "CLEAR_AXIS":
			return null;
		case "SET_FINAL_GRAPH_TYPE":
			return action.payload;
		default:
			return state;
	}
};

const currentStyle = (
	state = {
		basicStyle: {
			width: 800,
			height: 600,
			enableLabel: true,
			labelTextColor: "#000000",
			enableGridX: false,
			enableGridY: true,
			top: 60,
			bottom: 60,
			left: 60,
			right: 60
		},
		barStyle: {
			borderColor: "#bbbbbb",
			padding: 0.1,
			borderRadius: 0,
			borderWidth: 0
		},
		heatmapStyle: {
			forceSquare: false,
			sizeVariation: 0,
			colors: "nivo",
			padding: 0
		},
		lineStyle: {},
		scatterStyle: {},
		pieStyle: {},
		theme: {
			background: "transparent",
			axis: {
				ticks: {
					line: {
						stroke: "#777777",
						strokeWidth: 1
					},
					text: {
						fill: "#bbbbbb",
						fontSize: 11
					}
				},
				legend: {
					fontSize: 11
				}
			},
			grid: {
				line: {
					stroke: "#dddddd",
					strokeWidth: 1
				}
			},
			labels: {
				text: {
					fill: "#bbbbbb",
					fontSize: 11
				}
			}
		}
	},
	action
) => {
	switch (action.type) {
		case "CLEAR_AXIS":
			return state;
		case "SET_STYLE":
			const copy = Object.assign({}, state);
			if (action.payload.basicStyle) {
				copy.basicStyle = { ...state.basicStyle, ...action.payload.basicStyle };
			}
			if (action.payload.barStyle) {
				copy.barStyle = { ...state.barStyle, ...action.payload.barStyle };
			}
			if (action.payload.heatmapStyle) {
				copy.heatmapStyle = {
					...state.heatmapStyle,
					...action.payload.heatmapStyle
				};
			}
			if (action.payload.lineStyle) {
				copy.lineStyle = {
					...state.lineStyle,
					...action.payload.lineStyle
				};
			}
			if (action.payload.scatterStyle) {
				copy.scatterStyle = {
					...state.scatterStyle,
					...action.payload.scatterStyle
				};
			}
			if (action.payload.pieStyle) {
				copy.pieStyle = {
					...state.pieStyle,
					...action.payload.pieStyle
				};
			}
			if (action.payload.theme) {
				copy.theme = { ...state.theme, ...action.payload.theme };
			}
			return copy;
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	dataset: currentDataset,
	axis: currentAxis,
	manipulation: currentManipulation,
	graphSelection: currentGraphSuggestions,
	finalChoice: currentGraphChoice,
	style: currentStyle,
	filtering: currentFiltering
});
export default rootReducer;
