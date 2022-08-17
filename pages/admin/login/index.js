import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Col, Container, Form, Button } from "react-bootstrap";

import Nav from "../../../components/nav";
import Footer from "../../../components/footer";

const LoginPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState(null);

  const onSubmit = ({ email, password, isAdmin }) => {
    if (email === "test@test.com" && password === "123" && isAdmin) {
      router.push("./blog-post");
      sessionStorage.setItem("isLogedInAdmin", "true");
    } else {
      setLoginError("you are not allowed to log in");
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("isLogedInAdmin")) {
      router.replace("./blog-post");
    }
  }, []);

  return (
    <div>
      <Nav />

      <Container>
        <Col>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" {...register("email")} />
              {loginError && <Form.Text className="text-muted">{loginError}</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" {...register("password")} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Are you admin?" {...register("isAdmin")} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Container>

      <Footer />
    </div>
  );
};

export default LoginPage;
