import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Navbar from '../pages/Navbar/Navbar'
import TopNavBar from './TopNavBar'

const AddPropertyForm = () => {
  const [property_name, setPropertyName] = useState("");
  const [property_type, setPropertyType] = useState("");
  const [property_size, setPropertySize] = useState("");
  const [location, setLocation] = useState("");
  const [tenant_name, setTenant] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [rent, setRent] = useState("");

  const navigate = useNavigate();

  const baseUrl = "http://localhost:9292/";

  const postProperty = () => {
    const propertyData = {
      property_name: property_name,
      location: location,
      property_type: property_type,
      property_size: property_size,
    };
    fetch(`${baseUrl}property`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(propertyData),
    }).then((r) => r.json());
  }

  const postTenant = () => {
    const tenantData = {
      name: tenant_name,
      email: email,
      phone_number: phone_number,
      rent: rent,
    };
    fetch(`${baseUrl}tenant`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tenantData),
    }).then((r) => r.json());
  }
  // creating a function to handle submissions
  const handleSubmit = (e) => {
    e.preventDefault();
    postProperty();
    postTenant();

    alert("sent")(navigate("/dashboard"));
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="left col-2">
          <Navbar/>
        </div>
        <div style={{backgroundColor:"#e9f9ff",maxHeight:"100%",overflowY:"scroll"}} className="right col-10">
      <div className="row mt-5">
        <TopNavBar/>
        </div> 
      <div style={{marginLeft:"50px"}} className="row mt-5 ml-3">
      <p className="header-1">Add A Property</p>
        </div>
        <div style={{marginLeft:"50px"}}className="row mt-5 ml-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Property Name</Form.Label>
          <Form.Control
          style={{maxWidth:"40%"}}
            property_name="property_name"
            type="text"
            placeholder="Mr. Bens Residents"
            onChange={(e) => setPropertyName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Property Type</Form.Label>
          <Form.Control
            style={{maxWidth:"40%"}}
            property_type="property_type"
            type="text"
            placeholder="Apartment"
            onChange={(e) => setPropertyType(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Property Size</Form.Label>
          <Form.Control
            style={{maxWidth:"40%"}}
            property_size="property_size"
            type="integer"
            placeholder=" ie 3 Bedrooms"
            onChange={(e) => setPropertySize(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Location</Form.Label>
          <Form.Control
          style={{maxWidth:"40%"}}
            type="text"
            location="location"
            placeholder="Kahawa Sukari"
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>

        {/* for the tenant */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tenant Name</Form.Label>
          <Form.Control
          style={{maxWidth:"40%"}}
            tenant_name="tenant_name"
            type="text"
            placeholder="Bernard Bebeni"
            onChange={(e) => setTenant(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tenant Email</Form.Label>
          <Form.Control
          style={{maxWidth:"40%"}}
            email="email"
            type="email"
            placeholder="bebeni@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tenant Number</Form.Label>
          <Form.Control
          style={{maxWidth:"40%"}}
            phone_number="phone_number"
            type="integer"
            placeholder="0715012201"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tenant Rent</Form.Label>
          <Form.Control
          style={{maxWidth:"40%"}}
            rent="rent"
            type="integer"
            placeholder="sh."
            onChange={(e) => setRent(e.target.value)}
            autofocus
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn-block px-5">
          Add Property
        </Button>
      </Form>
      </div>
      </div>
      </div>
    </div>
  )
}

export default AddPropertyForm