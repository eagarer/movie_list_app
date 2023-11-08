import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthService from "../../services/AuthService";
// import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const values = { username, password };
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

    // axios
    //   .post("https://movie-list-api-six.vercel.app/auth/login", values)
    //   .then((res) => console.log("res --> ", res))
    //   .catch((error) => console.log(error));


      // fetch("https://movie-list-api-six.vercel.app/auth/login", {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(values)
      // })
      //   .then(response => response.json())
      //   .then(data => {
      //     // Verileri işleyin
      //     console.log(data);
      //   })
      //   .catch(error => {
      //     console.error('Hata:', error);
      //   });
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col sm={3} className="off">
          <Form className="mt-5 pt-5" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 pt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                onChange={(e) => setUsername(e.target.value)}
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
          {JSON.stringify(username)}
          <br />
          {JSON.stringify(password)}
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
