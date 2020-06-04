import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
function Homepage() {
    return (
        <div>
            <Jumbotron>
                <h1>Welcome to Lemon Data!</h1>
                <p>
                    This is a data visualisation online tool built with React.
                </p>
                <p>
                    <Button variant="primary">Try it now!</Button>
                </p>
            </Jumbotron>
        </div>
    );
}

export default Homepage;
