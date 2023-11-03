import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthService from "../../services/AuthService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const values = { email, password };
    console.log("values --> ", values);

    AuthService.login(values)
      .then((response) => {
        console.log("Başarılı --> ", response);
      })
      .catch((error) => {
        console.log("Error --> ", error);
      })
      .finally(()=> {
        console.log("Finnaly login");
      })
  }

  return (
    <Container>
      <Row>
        <Col sm={8}></Col>
        <Col sm={4}>
          <Form className="mt-5 pt-5" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 pt-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {JSON.stringify(email)}
          <br />
          {JSON.stringify(password)}
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
