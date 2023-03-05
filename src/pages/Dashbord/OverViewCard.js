import React from 'react'
import { useEffect, useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { HouseDoorFill, PersonFill, CurrencyExchange, GraphUpArrow, HouseLockFill, Speedometer } from 'react-bootstrap-icons';
import OverviewList from './OverViewList'


const OverViewCard = () => {

  const baseUrl = "http://localhost:9292/";

  const [active, setActive] = useState("");
  const [total, setTotal] = useState("");
  const [monthlyRent, setMonthRent] = useState("");

  useEffect(() => {
    getActive();
    getTotal();
    monthlRent();
  }, []);

  //get active tenant
  const getActive = () => {
    fetch(`${baseUrl}active tenants`)
      .then((response) => response.json())
      .then((response) => setActive(response));
  }

  ///get total properties
  const getTotal = () => {
    fetch(`${baseUrl}total properties`)
      .then((response) => response.json())
      .then((response) => setTotal(response));
  }

  // get monthly Rent

  const monthlRent = () => {
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
              <h5 className="overview-content">{`KSh.${monthlyRent.toLocaleString()}`}</h5>
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
              <HouseLockFill size={40} />
            </Row>
            <Row className="d-flex flex-column">
              <h5 className="overview-header">Lease</h5>
              <h5 className="overview-content">90%</h5>
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
              <h5 className="overview-header">Vacancy</h5>
              <h5 className="overview-content">10%</h5>
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
              <GraphUpArrow size={40} />
            </Row>
            <Row className="d-flex flex-column">
              <h5 className="overview-header">Monthy Profits</h5>
              <h5 className="overview-content">Ksh.18,940,000</h5>
            </Row>
          </Col>
        </Row>
      </Container>

      <div className="OverviewListData row mx-5">
        <OverviewList />
      </div>
    </>
  )
}

export default OverViewCard