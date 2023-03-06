import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Navbar from '../pages/Navbar/Navbar'



const EditPropertyForm = (id) => {
  const [property_name, setPropertyName] = useState("");
  const [property_type, setPropertyType] = useState("");
  const [property_size, setPropertySize] = useState("");
  const [location, setLocation] = useState("");
  //const [property, setProperty] = useState(null);
  
  const navigate = useNavigate();

    // creating a function to handle submissions
  async function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/properties/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        property_name: property_name,
        location: location,
        property_type: property_type,
        property_size: property_size
      })
    }).then(() => {
      alert("Saved")(navigate("/properties"));
    });
      
  };




  return (
    <div className="container-fluid">
      <div className="row">
        <div className="left col-2">
          <Navbar/>
        </div>
        <div style={{backgroundColor:"#e9f9ff",maxHeight:"100%",overflowY:"scroll"}} className="right col-10">
      <div className="row mt-5">
        </div> 
      <div style={{marginLeft:"50px"}} className="row mt-5 ml-3">
      <p className="header-1">Edit Property</p>
        </div>
        <div style={{marginLeft:"50px"}}className="row mt-5 ml-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Property Name</Form.Label>
          <Form.Control
          style={{maxWidth:"40%"}}
            property_name="property_name"
            type="text"
            onChange={(e) => setPropertyName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Property Type</Form.Label>
          <Form.Control
            style={{maxWidth:"40%"}}
            property_type="property_type"
            type="text"
            onChange={(e) => setPropertyType(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Property Size</Form.Label>
          <Form.Control
            style={{maxWidth:"40%"}}
            property_size="property_size"
            type="integer"
            onChange={(e) => setPropertySize(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Location</Form.Label>
          <Form.Control
          style={{maxWidth:"40%"}}
            type="text"
            location="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>

       
        <Button variant="primary" type="submit" className="btn-block px-5">
           Save
        </Button>
      </Form>
      </div>
      </div>
      </div>
    </div>
  )
}

export default EditPropertyForm