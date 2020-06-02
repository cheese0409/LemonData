import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Arrows(props) {
    return (
        <div>
            <LinkContainer
                to={props.prevURL ? props.prevURL : "#"}
                exact
                // chilren={props.prevchildren}
            >
                <Button disabled={props.prevDisabled} className="mx-1">
                    <i className="fas fa-long-arrow-alt-left mr-1"></i>
                    Prev
                </Button>
            </LinkContainer>
            <LinkContainer
                to={props.nextURL ? props.nextURL : "#"}
                exact
                // chilren={props.nextchildren}
            >
                <Button disabled={props.nextDisabled} className="mx-1">
                    Next
                    <i className="fas fa-long-arrow-alt-right ml-1"></i>
                </Button>
            </LinkContainer>
        </div>
    );
}

export default Arrows;
