import Nav from "../components/nav";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Row, Container, Col, input, Form } from "react-bootstrap";
import en from "../locales/enInvesting";
import ru from "../locales/ruInvesting";
import ge from "../locales/geInvesting";
import Video from "../assets/video.svg";
import Sample from "../assets/sample.png";
import Footer from "../components/footer";

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
            <Container className="mt-120 ">
              <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                <h3 className="investing-title">{t.title}</h3>
                <p className="investing-title_subtext">{t.tp1}</p>
              </Col>
            </Container>
            <Container className="mt-60 ">
              <Row>
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <iframe
                    width="580"
                    height="360"
                    src="https://www.youtube.com/embed/PJbNd_1SC5c"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Col>
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <p className="investing-title_subtext">{t.tp2}</p>
                </Col>
              </Row>
            </Container>
            <Container className="mt-120 mb-120">
              <Row className="mb-60">
                <h3>{t.services}</h3>
              </Row>
              <Row className="desktop__view">
                <Col xs="12" lg="12" md="12" sm="12" xl="12" xxl="12">
                  <Row>
                    <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
                      <p className="counter_number">1</p>
                      <p className="counter_content">{t.spa}</p>
                    </Col>
                    <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
                      <p className="counter_number">2</p>
                      <p className="counter_content">{t.pool}</p>
                    </Col>
                    <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
                      <p className="counter_number">3</p>
                      <p className="counter_content">{t.fitness}</p>
                    </Col>
                    <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
                      <p className="counter_number">4</p>
                      <p className="counter_content">{t.cafe}</p>
                    </Col>
                    <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3" className="mt-3">
                      <p className="counter_number">5</p>
                      <p className="counter_content">{t.room}</p>
                    </Col>
                    <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3" className="mt-3">
                      <p className="counter_number">6</p>
                      <p className="counter_content">{t.consierge}</p>
                    </Col>
                    <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3" className="mt-3">
                      <p className="counter_number">7</p>
                      <p className="counter_content">{t.hour}</p>
                    </Col>
                    <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3" className="mt-3">
                      <p className="counter_number">8</p>
                      <p className="counter_content">{t.cleaning}</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <Container>
              {/* <Row className="investing-goal mb-80">
                <h3>{t.bonus}</h3>
              </Row> */}
              <Row className="investing-goal mb-80">
                <h3>{t.goal}</h3>
              </Row>
              <Row>
                <Col xxl="4" xs="12" lg="4" md="4" sm="4" xl="4">
                  <h3>{t.apartForPersonUse}</h3>
                  <p className="investing-title_subtext mt-30">{t.textAp1}</p>
                </Col>
                <Col className="mt-80" xxl="4" xs="12" lg="4" md="4" sm="4" xl="4">
                  <Image src={Sample} alt="#" />
                </Col>
                <Col xxl="4" lg="4" md="4" sm="4" xl="4" xs="12">
                  <h3 className="special-margin-class">{t.apartForCommercialUse}</h3>
                  <p className="investing-title_subtext mt-30">{t.textAp2}</p>
                </Col>
              </Row>
              <Row className="special-margin-row justify-content-between">
                <Col xxl="6" xs="12" lg="6" md="6" sm="6" xl="6">
                  <h3>{t.pmAndRs}</h3>
                  <p className="investing-title_subtext mt-30">{t.pmText}</p>
                </Col>
                <Col xs="12" lg="5" md="5" sm="5" xl="5" xxl="5">
                  <Col xs="12" className="col-5 mb-120">
                    <p className="section1-form-text">{t.contactInfo}</p>
                    <h4 className="section-1-form-subtext">{t.aparttype}</h4>
                    <Row>
                      <Col xs="3">
                        <Form>
                          {["checkbox"].map(type => (
                            <div key={`inline-${type}`}>
                              <Form.Check
                                inline
                                label="Studio"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                              />
                            </div>
                          ))}
                        </Form>
                      </Col>
                      <Col xs="3">
                        <Form>
                          {["checkbox"].map(type => (
                            <div key={`inline-${type}`} className=" home--inputs">
                              <Form.Check
                                className="text-nowrap"
                                inline
                                label="1 Bedroom"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                              />
                            </div>
                          ))}
                        </Form>
                      </Col>
                      <Col xs="6" className="col-6">
                        <Form>
                          {["checkbox"].map(type => (
                            <div key={`inline-${type}`} className=" home--inputs">
                              <Form.Check
                                inline
                                label="3+ Bedrooms"
                                name="group1"
                                type={type}
                                id={`inline-${type}-3`}
                              />
                            </div>
                          ))}
                        </Form>
                      </Col>
                      <Col className="mb-60">
                        <div xs="12" className="mb-md-0 mb-5 home--inputs">
                          <Form id="contact-form" name="contact-form" action="mail.php" method="POST">
                            <Col xs="12">
                              <div className="md-form mb-0">
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
                              <div className="md-form mb-0">
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
                              <div className="md-form mb-0">
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
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
