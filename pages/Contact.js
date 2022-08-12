import Nav from "../components/nav";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Row, Container, Col, input, Form } from "react-bootstrap";
import en from "../locales/en";
import ru from "../locales/fr";
import ge from "../locales/fr";
import Link from "next/link";

export default function IndexPage() {
  const [showBanner, setBanner] = useState(true);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "ru" ? ru : ge;

  return (
    <div>
      <div className="hero">
        <Nav />
        <div>
          <div className="contact__section">
            <Container>
              <Row className="justify-content-between">
                <Col className="mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <h2>Let’s Get in touch</h2>
                  <div className="contact__info">
                    <Row>
                      <Col xs="3" className=" contact__number">
                        <h3>Phone Number</h3>
                        <h5>+995 544 44 44 31</h5>
                      </Col>
                      <Col xs="3" className="contact__number">
                        <h3>Phone Number</h3>
                        <h5>+995 544 44 44 31</h5>
                      </Col>
                      <Col xs="3" className="contact__number">
                        <h3>Email</h3>
                        <h5>info@apart.ge</h5>
                      </Col>
                      <Col xs="3" className=" contact__number">
                        <h3>Location</h3>
                        <h5>M. Bukhaidze 44G,Tbilisi, Georgia</h5>
                      </Col>
                      <Col xs="3" className=" contact__number">
                        <h3>Our media</h3>
                        <h5>facebook</h5>
                      </Col>
                      <Col xs="3" className=" contact__number d-flex align-items-end">
                        <h5>youtube</h5>
                      </Col>
                      <Col xs="3" className=" contact__number d-flex align-items-end">
                        <h5>instagram</h5>
                      </Col>
                      <Col xs="3" className=" contact__number d-flex align-items-end">
                        <h5>Pinterest</h5>
                      </Col>
                    </Row>
                  </div>
                  <Form>
                    <Row className="mt-5">
                      <p>Leave us your contact information and our team will reach out to you.</p>
                      <Col xs="6">
                        <div className="md-form mb-0">
                          <Form.Control
                            type="text"
                            id="name"
                            name="name"
                            className="form-control input__main"
                            placeholder="Name"
                          />
                        </div>
                      </Col>
                      <Col xs="6">
                        <div className="md-form mb-0">
                          <Form.Control
                            type="text"
                            id="company"
                            name="company"
                            className="form-control input__main"
                            placeholder="Company"
                          />
                        </div>
                      </Col>
                      <Col xs="6">
                        <div className="md-form mb-0">
                          <Form.Control
                            type="mail"
                            id="email"
                            name="email"
                            className="form-control input__main"
                            placeholder="Email"
                          />
                        </div>
                      </Col>
                      <Col xs="6">
                        <div className="md-form mb-0">
                          <Form.Control
                            type="text"
                            id="subject"
                            name="subject"
                            className="form-control input__main"
                            placeholder="Subject"
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
                            placeholder="Text"
                            cols={39}
                            rows={3}
                          />
                        </div>
                      </Col>
                      <Col xs="12">
                        <Button className="btn-send">Get contacted</Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
                <Col className="mt-5 d-flex align-items-end" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.8267523333143!2d44.80759311572699!3d41.70267558435236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440dcf1f317faf%3A0x6ef08f8fb9222cb9!2sApart%20Development!5e0!3m2!1sen!2sge!4v1651489892357!5m2!1sen!2sge"
                    width="100%"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}
