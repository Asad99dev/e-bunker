import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function SignInForm() {
  return (
    <div>
      <Form style={{ width: "50%", margin: "auto" }}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="Username" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign In
        </Button>
        <Form.Group style={{ width: "50%", margin: "auto" }}>
          <Link to="/sign-up">
            Don't have an account? Click here to register
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SignInForm;
