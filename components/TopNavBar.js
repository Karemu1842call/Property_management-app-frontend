
import React from "react";
import { useNavigate } from "react-router-dom";
// import {NavLink} from 'react-router-dom'
import { Container, Navbar,Form,FormControl, Button, Row, Col } from "react-bootstrap";

import Avatar from "react-avatar";
import { PlusCircle, BellFill } from "react-bootstrap-icons";

function TopNavBar({setSearch}) {
  const navigate = useNavigate();

  return (
    <Navbar className="nav-bar" expand="lg" variant="light">
      <Container fluid>
        <Row>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Form>
          {/* <NavLink to='/add_property'> */}
          <div className="nav-bar-button">
            <Button
              onClick={() => {
                navigate("/add_property");
              }}
              className="btn btn-md btn-primary col-xs-12"
            >
              <PlusCircle size={20} /> Add Property
            </Button>
          </div>
          {/* </NavLink> */}
        </Row>

        <a href="/">
          <Row>
            <Col className="avatar-col">
              <BellFill size={20} />
            </Col>
            <Col className="d-flex">
              <Avatar
                name="Ben Kari"
                color="#0F3B80"
                size={40}
                textSizeRatio={2.5}
                round="20px"
              />
              <div className="avatar-names">
                <p>Ben</p>
                <p>Landlord</p>
              </div>
            </Col>
          </Row>
        </a>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;
