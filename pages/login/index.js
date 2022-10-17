import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Col, Container, Form, Button,Row } from "react-bootstrap";

const LoginPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState(null);

  const onSubmit = ({ email, password}) => {
    if (email === "apart@apart.com" && password === "Apart123#") {
      router.push("/admin/dashboard");
      sessionStorage.setItem("isLogedInAdmin", "true");
    } else {
      setLoginError("you are not allowed to log in");
    }
  };
  useEffect(() => {
    if (sessionStorage.getItem("isLogedInAdmin")) {
      router.replace("/admin/dashboard");
    }
  }, []);

  return (
    <div>
      <Container>
        <Row className="justify-content-center mt-120">
        <Col xl={6}>
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
        </Row>
   
      </Container>
    </div>
  );
};

export default LoginPage;