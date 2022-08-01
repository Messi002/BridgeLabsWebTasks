import React,{useState} from 'react'
import { useNavigate } from "react-router";
import img from '../Assets/img.PNG'
import axios from 'axios';
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
 let navigate = useNavigate;
 const [showing, setShowing]=useState(false);
 const [msg, setSMsg]=useState([]);

    const handleSubmit= (e) =>{
        e.preventDefault();
        var {email,password} = e.target;
        setShowing(true);
        axios({
            url : "https://simplor.herokuapp.com/api/user/login",
            method: "POST",
            headers : {
                Accept: "*/*",
                "Content-Type":"application/JSON"
            },
            data: JSON.stringify({
                email : email.value,password: password.value
            })
        }).then( res => {
            console.log(res.data);
        })

    }
  return (
<Container>
    <Row className="m-auto justify-content-center"> 
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
                            <Form onSubmit={handleSubmit} method="POST" className="justifiy-content-between">
                                {
                                    msg.map((item)=>{
                                     return   <p className="text-danger">
                                            {item.error && item.error}
                                        </p>
                                    })
                                }
                                <Form.Group>
                                    <Form.Label>Email</Form.Label> <br />
                                    <Form.Control type="email" name="email" maxLength="30" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Password</Form.Label> <br />
                                    <Form.Control type="password" name="password" maxLength="30" />
                                </Form.Group>

                                <Button style={{backgroundColor:'grey'}}  onClick={()=> navigate('/register') }>
                                    Register
                                </Button>
                                {
                                    showing? (
                                        <Button disabled style={{color:'green'}} >
                                            <Spinner as="span" animation="border" role="status" aria-hidden="true" />
                                            Loading...
                                        </Button>
                                    ) : (
                                            <Button type="submit">
                                                Login
                                            </Button>
                                    )
                                }
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