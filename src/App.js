import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/partials/Header";
import Homepage from "./components/pages/Homepage";
import Inputpage from "./components/pages/Inputpage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./app.scss";

function App() {
	return (
		<div className="App">
			<Router>
				<Header></Header>
				<Switch>
					<Route path="/input" exact>
						<DndProvider backend={HTML5Backend}>
							<Inputpage></Inputpage>
						</DndProvider>
					</Route>
					<Route path="/" exact>
						<Homepage></Homepage>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
