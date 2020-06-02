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
const rootReducer = combineReducers({ dataset: currentDataset });
export default rootReducer;
