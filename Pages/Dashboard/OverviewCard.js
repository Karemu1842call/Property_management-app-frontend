import React, { useEffect, useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import {
  HouseDoorFill,
  PersonFill,
  CurrencyExchange,
  GraphDownArrow,
  LockFill,
  Speedometer,
} from "react-bootstrap-icons";
import "../Dashboard/Dashboard.css";
import OverviewList from "./OverviewList";

function OverviewCard() {
  const baseUrl = "http://localhost:9292/";
  // get active tenants
  const [active, setActive] = useState("");
  const [total, setTotal] = useState("");
  const [monthlyRent, setMonthRent] = useState("");

  useEffect(() => {
    getActive();
    getTotal();
    monthlRent();
  }, []);

  //get active tenant
  function getActive() {
    fetch(`${baseUrl}active tenants`)
      .then((response) => response.json())
      .then((response) => setActive(response));
  }

  ///get total properties
  function getTotal() {
    fetch(`${baseUrl}total properties`)
      .then((response) => response.json())
      .then((response) => setTotal(response));
  }

  // get monthly Rent

  function monthlRent() {
    fetch(`${baseUrl}month rent`)
      .then((response) => response.json())
      .then((response) => setMonthRent(response));
  }

  return (
    <>
      <Container>
        <Row className="overview-card col-md-10 mt-3">
          <Col className="innerCard d-flex justify-content-around align-items-center">
            <Row
              style={{
                backgroundColor: "#aedff4",
                padding: "10px",
                borderRadius: "15px",
              }}
            >
              <PersonFill size={40} />
            </Row>
            <Row className="d-flex flex-column">
              <h5 className="overview-header">Active Tenants</h5>
              <h5 className="overview-content">{active}</h5>
            </Row>
          </Col>

          <Col className="innerCard d-flex justify-content-around align-items-center">
            <Row
              style={{
                backgroundColor: "#aedff4",
                padding: "10px",
                borderRadius: "15px",
              }}
            >
              <HouseDoorFill size={40} />
            </Row>
            <Row className="d-flex flex-column">
              <h5 className="overview-header">Total Properties</h5>
              <h5 className="overview-content">{total}</h5>
            </Row>
            {/* <span className="vertical-divider" /> */}
          </Col>

          <Col className="innerCard d-flex justify-content-around align-items-center">
            <Row
              style={{
                backgroundColor: "#aedff4",
                padding: "10px",
                borderRadius: "15px",
              }}
            >
              <CurrencyExchange size={40} />
            </Row>
            <Row className="d-flex flex-column">
              <h5 className="overview-header">Monthly Rent Value</h5>
              <h5 className="overview-content">{`Sh.${monthlyRent}`}</h5>
            </Row>
          </Col>
        </Row>
        <Row className="overview-card col-md-10 mt-3 mb-5">
          <Col className="innerCard d-flex justify-content-around align-items-center">
            <Row
              style={{
                backgroundColor: "#aedff4",
                padding: "10px",
                borderRadius: "15px",
              }}
            >
              <LockFill size={40} />
            </Row>
            <Row className="d-flex flex-column">
              <h5 className="overview-header">Occupancy</h5>
              <h5 className="overview-content">80%</h5>
            </Row>
          </Col>

          <Col className="innerCard d-flex justify-content-around align-items-center">
            <Row
              classname="iconCard"
              style={{
                backgroundColor: "#aedff4",
                padding: "10px",
                borderRadius: "15px",
              }}
            >
              <Speedometer size={40} />
            </Row>
            <Row className="d-flex flex-column">
              <h5 className="overview-header">Economic Vacancy</h5>
              <h5 className="overview-content">11.33%</h5>
            </Row>
            {/* <span className="vertical-divider" /> */}
          </Col>

          <Col className="innerCard d-flex justify-content-around align-items-center">
            <Row
              style={{
                backgroundColor: "#aedff4",
                padding: "10px",
                borderRadius: "15px",
              }}
            >
              <GraphDownArrow size={40} />
            </Row>
            <Row className="d-flex flex-column">
              <h5 className="overview-header">Annual Loss to lease</h5>
              <h5 className="overview-content">Ksh.894,000</h5>
            </Row>
          </Col>
        </Row>
      </Container>

      <div className="OverviewListData row mx-5">
        <OverviewList />
      </div>
    </>
  );
}

export default OverviewCard;
