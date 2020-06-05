const rootActions = {
	setDataset: (payload) => {
		return { type: "SET_DATASET", payload };
	},
	setAxis: (payload) => {
		return { type: "SET_AXIS", payload };
	},
	setManipulation: (payload) => {
		return { type: "SET_MANIPULATION", payload };
	},
	setGraphSuggestions: (payload) => {
		return { type: "SET_GRAPH_SUGGESTIONS", payload };
	}
};

export default rootActions;
