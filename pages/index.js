import Nav from "../components/nav";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import en from "../locales/enHome";
import ru from "../locales/ruHome";
import ge from "../locales/geHome";
import Slide1 from "../assets/slider.png";
import Taghi from "../assets/taghi.svg";
import Apart_showroom from "../assets/apartshowroom.svg";
import Footer from "../components/footer";
import Navwhite from "../components/navwhite";
import Malongo from "../assets/malongo2.png";
import Tbc from "../assets/tbc-logo-geo2.svg";

export default function IndexPage() {
  const [showBanner, setBanner] = useState(true);
  const [mode, setMode] = useState(true);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "ru" ? ru : ge;

  return (
    <div>
      <div>
        <div className="hero">
          <Navwhite mode={mode} setMode={setMode} />
          <Carousel style={{ opacity: 1 }} className="carousle__inner">
            <Carousel.Item className="fuul__width">
              <div>
                <video autoPlay="" loop={true} muted="" className="video">
                  <source src="https://apart.ge/high-test.mp4" type="video/mp4" />
                </video>
              </div>
              <Col lg="6" md="6" sm="6" xl="6" xxl="6" className="d-flex">
                <Col className="d-flex align-items-center">
                  <div className="test">
                    <Image src={Taghi} alt="banner immage" className="Taghi" />
                  </div>
                </Col>
              </Col>
            </Carousel.Item>
            <Carousel.Item className="fuul__width">
              <div>
                <video autoPlay="" loop={true} muted="" className="video">
                  <source src="https://apart.ge/high-test.mp4" type="video/mp4" />
                </video>
              </div>
            </Carousel.Item>
          </Carousel>
          <Container>
            <Row></Row>
            <Row>
              <Col lg="6" md="6" sm="6" xl="6" xxl="6">
                <Image src={Slide1} />
              </Col>
              <Col lg="6" md="6" sm="6" xl="6" xxl="6" className="d-flex">
                <Col className="d-flex align-items-center">
                  <div className="test">
                    <Image src={Taghi} alt="banner immage" className="Taghi" />
                    <p>
                      {t.oldCityP}
                      <br />
                      {t.taghi}
                      <br />
                      <br />
                      {t.ezo}
                      <br />
                      {t.bukhaidze}
                    </p>
                  </div>
                </Col>
              </Col>
            </Row>
          </Container>
          <Container className="container-marginer additional__padding">
            <Row className="justify-content-between">
              <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                <Row>
                  <Col xs="12" lg="3" md="3" sm="3" xl="3" xxl="3">
                    <p className="home--section__texts">{t.aabout}</p>
                  </Col>
                  <Col></Col>
                  <Col xs="12" lg="8" md="8" sm="8" xl="8" xxl="8">
                    <h1 className="section1-title">{t.aheader}</h1>

                    <p className="section1-subtitle">{t.ap}</p>
                  </Col>
                </Row>
              </Col>
              <Col xs="12" lg="5" md="5" sm="5" xl="5" xxl="5">
                <Col xs="12" className="col-5 padding-0">
                  <p className="section1-form-text">
                    Leave us your contact information and our team will reach out to you.
                  </p>
                  <h4 className="section-1-form-subtext">Apartment type:</h4>
                  <Row>
                    <Col xs="3">
                      <Form>
                        {["checkbox"].map(type => (
                          <div key={`inline-${type}`} className="mb-3">
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
                          <div key={`inline-${type}`} className="mb-3 home--inputs">
                            <Form.Check
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
                          <div key={`inline-${type}`} className="mb-3 home--inputs">
                            <Form.Check
                              inline
                              label="2+ Bedrooms"
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
                                placeholder="Name"
                              />
                            </div>
                          </Col>
                          <Col xs="12">
                            <div className="md-form mb-0">
                              <Form.Control
                                type="text"
                                id="email"
                                name="email"
                                className="form-control input__main"
                                placeholder="Email"
                              />
                            </div>
                          </Col>
                          <Col xs="12">
                            <div className="md-form mb-0">
                              <Form.Control
                                type="text"
                                id="email"
                                name="email"
                                className="form-control input__main"
                                placeholder="Phone Number"
                              />
                            </div>
                          </Col>
                        </Form>
                        <div className="text-center text-md-left home--get-contacted">
                          <Button className="btn-send">Get contacted</Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Col>
            </Row>
          </Container>
          <Container className="partners-container mb-60 mt-60">
            <Row className="justify-content-between align-items-center ">
              <Col xs="12" lg="2" md="2" sm="2" xl="2" xxl="2">
                <div className="partners home--section__texts">
                  <p className="home--section__texts">{t.partners}</p>
                </div>
              </Col>
              <Col xs="12" lg="10" md="10" sm="10" xl="10" xxl="10">
                <Row className="justify-content-between">
                  <div className="col-3 ">
                    <div className="partners">
                      <Image src={Apart_showroom} alt="banner immage" className="partners_wite" />
                    </div>
                  </div>
                  {/* <div className="col-2">
          <div className="partners">
            <Image src={Greenlife} alt="banner immage" className="partners_wite" />
          </div>
        </div> */}
                  <div className="col-3">
                    <div className="partners">
                      <Image src={Malongo} alt="banner immage" className="partners_wite" />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="partners">
                      <Image src={Tbc} alt="banner immage" className="partners_wite" />
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container className="mb-60 mt-60">
            <Row>
              <Col xs="12" lg="2" md="2" sm="2" xl="2" xxl="2">
                <p className="home--section__texts">{t.pm}</p>
              </Col>
              <Col xs="12" lg="10" md="10" sm="10" xl="10" xxl="10">
                <iframe
                  src="https://snazzymaps.com/embed/408105"
                  width="100%"
                  height="600px"
                  // style="border:none;"
                ></iframe>
              </Col>
            </Row>
          </Container>
          {/* <section className="pt-8 pb-20 flex flex-col items-center">
          <nav aria-label="breadcrumb">
            <ol className="flex space-x-2 text-white text-sm mb-8 text-shadow">
              <li>
                <a href="#">{'Science >'}</a>
              </li>
              <li>
                <a href="#">{'Computing >'}</a>
              </li>
              <li>Birth web</li>
            </ol>
          </nav>
          <h1 className="text-5xl text-white text-shadow font-bold px-8 text-center">
            {t.hero}
          </h1>
          <hr className="mt-16 mb-8 w-32 border-t-2 border-white" />
          <p className="text-white text-shadow px-8">{t.description}</p>
        </section> */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
