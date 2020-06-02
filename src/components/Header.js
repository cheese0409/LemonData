import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
function Header() {
    const [activeKey, handleSelect] = useState("1");
    return (
        <Navbar bg="light">
            <Navbar.Brand href="/">
                <img
                    className="d-inline-block align-top"
                    src="./android-chrome-512x512.png"
                    alt="lemon logo"
                    style={{ width: "30px", marginRight: "10px" }}
                ></img>
                Lemon Data
            </Navbar.Brand>
            <Nav
                className="mr-auto"
                activeKey={activeKey}
                onSelect={eventKey => {
                    handleSelect(eventKey);
                }}
            >
                <LinkContainer to="/" exact>
                    <Nav.Link eventKey="1">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/input" exact>
                    <Nav.Link eventKey="2">Try it online!</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    );
}

export default Header;
