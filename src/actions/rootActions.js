const rootActions = {
	setDataset: (payload) => {
		return { type: "SET_DATASET", payload };
	},
	setAxis: (payload) => {
		return { type: "SET_AXIS", payload };
	}
};

export default rootActions;
