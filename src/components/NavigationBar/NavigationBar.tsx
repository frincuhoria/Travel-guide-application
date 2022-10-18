import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import "../NavigationBar/NavigationBar.css";

export const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" id="navbar">
      <Container id="navbar-container">
        <Navbar.Brand href="/">
          <div className="travel-nav">
            Travel
            <i className="fa-solid fa-plane"></i>
          </div>
        </Navbar.Brand>
        <div className="nav-items">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Button id="btn" href="/register">
            REGISTER
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};
