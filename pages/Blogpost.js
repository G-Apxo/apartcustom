import React from 'react'
import Nav from '../components/nav'
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Footer from '../components/footer'
const Blogpost = () => {
  return (
    <div>
        <Nav/>
        <Container>
            <Col>
            <Form>
                <Row className="mt-5">
                    <Col xs="6">
                    <div className="md-form mb-0">
                        <Form.Control
                        type="lang"
                        id="lang"
                        name="lang"
                        className="form-control input__main"
                        placeholder="lang"
                        />
                    </div>
                    </Col>
                    <Col xs="6">
                    <div className="md-form mb-0">
                        <Form.Control
                        type="mainImage"
                        id="mainImage"
                        name="mainImage"
                        className="form-control input__main"
                        placeholder="mainImage"
                        />
                    </div>
                    </Col>
                    <Col xs="6">
                    <div className="md-form mb-0">
                        <Form.Control
                        type="title"
                        id="title"
                        name="title"
                        className="form-control input__main"
                        placeholder="title"
                        />
                    </div>
                    </Col>
                    <Col xs="6">
                    <div className="md-form mb-0">
                        <Form.Control
                        type="callonicalUrl"
                        id="callonicalUrl"
                        name="callonicalUrl"
                        className="form-control input__main"
                        placeholder="callonicalUrl"
                        />
                    </div>
                    </Col>
                    <Col xs="12">
                    <div className="md-form mb-20">
                        <Form.Control
                        as="textarea"
                        type="text"
                        id="text"
                        className="form-text-area"
                        name="text"
                        // className="form-control input__main"
                        placeholder="description"
                        cols={39}
                        rows={3}
                        />
                    </div>
                    </Col>
                    <Col xs="12">
                    <Button className="btn-send">Post a Blog</Button>
                    </Col>
                </Row>
            </Form>
            </Col>
        </Container>
        <Footer />
    </div>
  )
}

export default Blogpost