import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Navbar, Form, FormControl, Button, Row, Col } from 'react-bootstrap'
import Avatar from 'react-avatar'
import { PlusCircle, BellFill } from 'react-bootstrap-icons'


const TopNavBar = ({ setSearch }) => {

    const navigate = useNavigate();
    
  return (
    <Navbar className='nav-bar' expand='lg' variant='light'>
        <Container fluid>
            <Row>
                <div>
                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Search by Property name" className="me-2" aria-label="Search" onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        />
                    </Form>
                </div>
                <div className="nav-bar-button">
                    <Button onClick={() => {
                        navigate("/add_property");
                    }}
                    className="btn btn-md btn-primary col-xs-12">
                        <PlusCircle size={20} /> Add Property
                    </Button>
                </div>
            </Row>
          

            <a href="/">
                <Row>
                    <Col className="avatar-col">
                        <BellFill size={20} />
                    </Col>
                    <Col className="d-flex">
                        <Avatar name="Bernard Bebeni" color="#0F3B80" size={40} textSizeRatio={2.5} round="20px"/>
                        <div className="avatar-names">
                            <p>Bernard</p>
                            <p>Landlord</p>
                        </div>
                    </Col>
                </Row>
            </a>
        </Container> 
    </Navbar>
  )
}

export default TopNavBar