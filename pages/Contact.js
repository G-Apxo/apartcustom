import Nav from "../components/nav";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Row, Container, Col, input, Form } from "react-bootstrap";
import en from "../locales/enContact";
import ru from "../locales/ruContact";
import ge from "../locales/geContact";
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
                  <h2 className="mt-60 mb-60">{t.lets}</h2>
                  <div className="contact__info">
                    <Row>
                      <Col xs="6" lg="6" md="6" sm="6" xl="3" xxl="3" className=" contact__number">
                        <h3>{t.telnum}</h3>
                        <h5>+995 32 2 11 11 44</h5>
                      </Col>
                      <Col xs="3" className="contact__number">
                        <h3>{t.vw}</h3>
                        {/* ზუკასი */}
                        <h5 className="contact__number_vw">+995 544 44 44 39</h5>
                        {/* ანის */}
                        <h5 className="contact__number_vw">+995 544 44 44 31</h5>
                      </Col>
                      <Col xs="6" lg="6" md="6" sm="6" xl="3" xxl="3" className="contact__number">
                        <h3>{t.email}</h3>
                        <h5>sales@apart.ge</h5>
                      </Col>
                      <Col xs="6" lg="6" md="6" sm="6" xl="3" xxl="3" className=" contact__number">
                        <h3>{t.location}</h3>
                        <h5>{t.locPl}</h5>
                      </Col>
                      <Col xs="6" lg="6" md="6" sm="6" xl="3" xxl="3" className="marginer-30 contact__number">
                        <a href="https://www.facebook.com/apartdevelopment">
                          <h5>Facebook</h5>
                        </a>
                      </Col>
                      <Col
                        xs="6"
                        lg="6"
                        md="6"
                        sm="6"
                        xl="3"
                        xxl="3"
                        className=" contact__number d-flex align-items-end"
                      >
                        <a href="https://www.instagram.com/apartdevelopment/">
                          <h5>Instagram</h5>
                        </a>
                      </Col>
                      <Col
                        xs="6"
                        lg="6"
                        md="6"
                        sm="6"
                        xl="3"
                        xxl="3"
                        className=" contact__number d-flex align-items-end"
                      >
                        <a href="https://www.youtube.com/channel/UCJgX6dfa84r7FkWIBof3z7A">
                          <h5>Youtube</h5>
                        </a>
                      </Col>
                      <Col xs="3" className=" contact__number d-flex align-items-end">
                        <a href="https://www.linkedin.com/company/apart-development/">
                          <h5>Linkedin</h5>
                        </a>
                      </Col>
                    </Row>
                  </div>
                  <Form>
                    <Row>
                      <Col xs="12" className="col-5 mt-60">
                        <p className="section1-form-text">{t.contactInfo}</p>
                        <h4 className="section-1-form-subtext">{t.aparttype}</h4>
                        <Row>
                          <Col xs="6" lg="6" md="6" sm="6" xl="3" xxl="3">
                            <Form>
                              {["checkbox"].map(type => (
                                <div key={`inline-${type}`}>
                                  <Form.Check
                                    inline
                                    label={t.b1}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                </div>
                              ))}
                            </Form>
                          </Col>
                          <Col xs="6" lg="6" md="6" sm="6" xl="3" xxl="3">
                            <Form>
                              {["checkbox"].map(type => (
                                <div key={`inline-${type}`} className=" home--inputs">
                                  <Form.Check
                                    className="text-nowrap"
                                    inline
                                    label={t.b2}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </div>
                              ))}
                            </Form>
                          </Col>
                          <Col xs="6" lg="6" md="6" sm="6" xl="3" xxl="3">
                            <Form>
                              {["checkbox"].map(type => (
                                <div key={`inline-${type}`} className="home--inputs">
                                  <Form.Check
                                    inline
                                    label={t.b3}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-3`}
                                  />
                                </div>
                              ))}
                            </Form>
                          </Col>
                          <Col xs="6" lg="6" md="6" sm="6" xl="3" xxl="3">
                            <Form>
                              {["checkbox"].map(type => (
                                <div key={`inline-${type}`} className="home--inputs">
                                  <Form.Check
                                    inline
                                    label={t.b4}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-4`}
                                  />
                                </div>
                              ))}
                            </Form>
                          </Col>
                          <Col className="mb-60">
                            <div xs="12" className="mb-md-0 mb-5 home--inputs">
                              <Form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                <Col xs="12">
                                  <div className="md-form mb-0 contact-placeholder-text">
                                    <Form.Control
                                      type="text"
                                      id="name"
                                      name="name"
                                      className="form-control input__main"
                                      placeholder={t.name}
                                    />
                                  </div>
                                </Col>
                                <Col xs="12">
                                  <div className="md-form mb-0 contact-placeholder-text">
                                    <Form.Control
                                      type="mail"
                                      id="email"
                                      name="email"
                                      className="form-control input__main"
                                      placeholder={t.email}
                                    />
                                  </div>
                                </Col>
                                <Col xs="12">
                                  <div className="md-form mb-0 contact-placeholder-text">
                                    <Form.Control
                                      type="phone"
                                      id="email"
                                      name="email"
                                      className="form-control input__main"
                                      placeholder={t.telnum}
                                    />
                                  </div>
                                </Col>
                              </Form>
                              <div className="text-center text-md-left home--get-contacted">
                                <Button className="btn-send">{t.getContacted}</Button>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Form>
                </Col>
                <Col className=" d-flex align-items-end" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <iframe
                    src="https://snazzymaps.com/embed/408105"
                    width="100%"
                    height="500"
                    className="mb-60"
                    // style="border:none;"
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
