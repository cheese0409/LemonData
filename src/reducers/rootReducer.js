import { combineReducers } from "redux";
import rootActions from "../actions/rootActions";
import { act } from "react-dom/test-utils";

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
			const copy = Object.assign({}, state);
			if (action.payload.X) {
				copy.X = action.payload.X;
			}
			if (action.payload.Y) {
				copy.Y = action.payload.Y;
			}
			return copy;
		default:
			return state;
	}
};
const rootReducer = combineReducers({
	dataset: currentDataset,
	axis: currentAxis
});
export default rootReducer;
