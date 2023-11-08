import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthService from "../services/AuthService";

function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [password, setPassword] = useState("")

    function handleRegister(e){
        e.preventDefault();

        const values = {
            username,
            email,
            firstname,
            lastname,
            password,
        }

        AuthService.register(values)
            .then((response)=> console.log("register başarılı --> ", response))
            .catch((error) => console.log("register hata --> ", error))
    }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col sm={5} className="off">

          <Form className="mt-5 pt-5" onSubmit={handleRegister}>

            <Form.Group className="mb-3 pt-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Firstname</Form.Label>
              <Form.Control type="text" placeholder="firstname" value={firstname} onChange={(e)=> setFirstname(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Lastname</Form.Label>
              <Form.Control type="text" placeholder="lastname" value={lastname} onChange={(e)=> setLastname(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            </Form.Group>

            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
