import React,{useState} from 'react'
import { useNavigate } from "react-router";
import img from '../Assets/img.PNG'
import {
  Card,
  Col,
  Container,
  Form,
  Row,
  Button,
  Image,
  Spinner,
} from "react-bootstrap";

const Login = () => {

    const handleSubmit= () =>{

    }
  return (
<Container>
    <Row className="mt-5 justify-content-md-center"> 
        <Col sm={9}>
            <Card.Body>
                <Row>
                    <Col sm={6}>
                        <Image src={img} className=' w-100 h-100'/>
                    </Col>
                    <Col className="text-center">
                        <Row>
                        <h3>Login</h3>

                        </Row>
                        <Row>
                            <Form onSubmit={handleSubmit} method="POST">
                                <Form.Group>
                                    <Form.Label>Email</Form.Label> <br />
                                    <Form.Control type="email" name="email" maxLength="30" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Email</Form.Label> <br />
                                    <Form.Control type="email" name="email" maxLength="30" />
                                </Form.Group>
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Col>
    </Row>
</Container>  )
}

export default Login