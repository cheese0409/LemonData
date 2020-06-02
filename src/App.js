import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Inputpage from "./components/Inputpage";

import "./app.scss";

function App() {
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Switch>
                    <Route path="/input" exact>
                        <Inputpage></Inputpage>
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
