const rootActions = {
	setDataset: (payload) => {
		return { type: "SET_DATASET", payload };
	},
	setAxis: (payload) => {
		return { type: "SET_AXIS", payload };
	},
	clearAxis: () => {
		return { type: "CLEAR_AXIS" };
	},
	setManipulation: (payload) => {
		return { type: "SET_MANIPULATION", payload };
	},
	setGraphSuggestions: (payload) => {
		return { type: "SET_GRAPH_SUGGESTIONS", payload };
	},
	setFinalGraphType: (payload) => {
		return { type: "SET_FINAL_GRAPH_TYPE", payload };
	},
	setStyle: (payload) => {
		return { type: "SET_STYLE", payload };
	}
};

export default rootActions;
