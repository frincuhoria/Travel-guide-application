import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import "./Register.css";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const users = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch();

  const handleRegister = (e: any) => {
    dispatch({
      type: "REGISTER",
      payload: {
        id: new Date().getTime(),
        email,
        password,
      },
    });
    setEmail('')
    setPassword('')
    e.preventDefault();
  };

  return (
    <>
      <Card id="card-container">
        <Card.Body className="border rounded" id="card-body-container">
          <h2
            className="text-center mb-4"
            style={{
              fontFamily: "Bookman Old Style",
              fontSize: "40px",
              fontWeight: "bold",
              color: "#393E46",
            }}
          >
            Log In
          </h2>
          <Form id="form-container">
            <Form.Group id="email">
              <Form.Control
                id="form-control-container"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                id="form-control-container"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              id="button-login"
              variant="primary"
              type="submit"
              onClick={handleRegister}
            >
              Log In
            </Button>
          </Form>
        </Card.Body>
        {users.map((user) => (
          <h5 key={user.id} style={{ marginBottom: "20px", color: "#FAF7F0" }}>
            The user with the email {user.email} has logged-in
            succesfully!
          </h5>
        ))}
      </Card>
    </>
  );
};
