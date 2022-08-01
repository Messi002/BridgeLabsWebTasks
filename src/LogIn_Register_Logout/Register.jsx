import { useState } from "react";
import img from '../Assets/img.PNG';

import {
  Card,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Button,
  Spinner,
  Image,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {
  return (
    <div>
        <Container>
            <Row className="mt-5 mb-3 justify-content-center">
                <Col sm={9}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col sm={6}>
                                    <Image src={img} clasName="w-100 h-100"/>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Register