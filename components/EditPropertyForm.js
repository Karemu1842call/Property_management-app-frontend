import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EditPropertyForm() {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div>
      <p className="header-1">Add A Property</p>

      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Property Name</Form.Label>
          <Form.Control type="text" placeholder="Lavington Heights" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Property Type</Form.Label>
          <Form.Control type="text" placeholder="Apartment" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Property Size</Form.Label>
          <Form.Control type="integer" placeholder="In square feet" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Neighborhood e.g Kilimani" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tenant Name</Form.Label>
          <Form.Control type="text" placeholder="John Doe" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tenant Email</Form.Label>
          <Form.Control type="email" placeholder="johndoe@yahoo.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tenant NUmber</Form.Label>
          <Form.Control type="integer" placeholder="0712345678" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Active Tenant?" />
        </Form.Group>

        <Button variant="primary" type="submit" className="btn-block px-5">
          Add Property
        </Button>
      </Form>
    </div>
  );
}

export default EditPropertyForm;
