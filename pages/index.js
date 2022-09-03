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
import Malongo from "../assets/malongo-dark-mode.png";
import Tbc from "../assets/tbc-logo-geo2.svg";
import Readmore from "../assets/readmore.svg";
import Ezo from "../assets/projectslider/ezo_logo_white.png";
import OCP from "../assets/projectslider/ocp_logo_white.png";
import TaghiWhite from "../assets/projectslider/taghi_logo_white.png";
export default function IndexPage() {
  const [showBanner, setBanner] = useState(true);
  const [mode, setMode] = useState(true);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ge" ? ge : locale === "ru" ? ru : en;

  return (
    <>
      <Navwhite mode={mode} setMode={setMode} />
      <Carousel slide={true} style={{ opacity: 1 }} className="carousle__inner">
        <Carousel.Item interval={5000} className="fuul__width">
          <div className="container__video">
            <video loop autoPlay muted className="video vid-bg">
              <source src="https://apart.ge/OCP_Intro.mp4" type="video/mp4" />
            </video>
            <Container>
              <div className="overlay">
                <Container className="innerContent">
                  <Col xl="4">
                    <p className="text-white">Apart Development</p>
                    <Image src={OCP} className="slider_logo mt-3" />
                    <p className="text-white"> {t.sliderd}</p>
                    <a href="https://apart.ge/select-flat/bina_37/">
                      <p className="text-white text-white-read-more">{t.readmore}</p>
                    </a>
                  </Col>
                </Container>
              </div>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5000} className="fuul__width">
          <div className="container__video">
            <video loop autoPlay muted className="video">
              <source src="https://apart.ge/EZO_Intro.mp4" type="video/mp4" />
            </video>
            <Container>
              <div className="overlay">
                <Container className="innerContent">
                  <Col xl="4">
                    <p className="text-white">Apart Development</p>
                    <Image src={Ezo} className="slider_logo" />
                    <p className="text-white"> {t.ezo}</p>
                    <a href="/ezo">
                      <p className="text-white">{t.readmore}</p>
                    </a>
                  </Col>
                </Container>
              </div>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5000} className="fuul__width">
          <div className="container__video">
            <video loop autoPlay muted className="video">
              <source src="https://apart.ge/Taghi_Intro.mp4" type="video/mp4" />
            </video>
            <Container>
              <div className="overlay">
                <Container className="innerContent">
                  <Col xl="4">
                    <p className="text-white">Apart Development</p>
                    <Image src={TaghiWhite} className="slider_logo" />
                    <p className="text-white"> {t.taghi}</p>
                    <a href="/taghi">
                      <p className="text-white">{t.readmore}</p>
                    </a>
                  </Col>
                </Container>
              </div>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5000} className="fuul__width">
          <div className="container__video">
            <video loop autoPlay muted className="video">
              <source src="https://apart.ge/Bukhaidze_6_Intro.mp4" type="video/mp4" />
            </video>
            <Container>
              <div className="overlay">
                <Container className="innerContent">
                  <Col xl="4">
                    <p className="text-white">Apart Development</p>
                    <h2 className="text-white banner__header">{t.bukhaidzeha}</h2>
                    <p className="text-white"> {t.bukhaidze}</p>
                    <a href="/bukhaidze">
                      <p className="text-white">{t.readmore}</p>
                    </a>
                  </Col>
                </Container>
              </div>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5000} className="fuul__width">
          <div className="container__video">
            <video loop autoPlay muted className="video">
              <source src="https://apart.ge/Bukhaidze_6a_Intro.mp4" type="video/mp4" />
            </video>
            <Container>
              <div className="overlay">
                <Container className="innerContent">
                  <Col xl="4">
                    <p className="text-white">Apart Development</p>
                    <h2 className="text-white banner__header">{t.bukhaidzeh}</h2>
                    <p className="text-white"> {t.bukhaidze2}</p>
                    <a href="/bukhaidze">
                      <p className="text-white">{t.readmore}</p>
                    </a>
                  </Col>
                </Container>
              </div>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
      <Container className="container-marginer additional__padding mt-60">
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
            <Col xs="12" className="col-5">
              <p className="section1-form-text">{t.contactInfo}</p>
              <h4 className="section-1-form-subtext">{t.aparttype}</h4>
              <Row>
                <Col xs="3">
                  <Form>
                    {["checkbox"].map(type => (
                      <div key={`inline-${type}`}>
                        <Form.Check inline label="Studio" name="group1" type={type} id={`inline-${type}-1`} />
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
                      <div key={`inline-${type}`} className="home--inputs">
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
      <Container className="mb-60">
        <Row>
          <Col xs="12" lg="2" md="2" sm="2" xl="2" xxl="2">
            <p className="home--section__texts">{t.pm}</p>
          </Col>
          <Col xs="12" lg="10" md="10" sm="10" xl="10" xxl="10">
            <iframe
              src="https://snazzymaps.com/embed/408105"
              width="100%"
              height="400px"
              // style="border:none;"
            ></iframe>
          </Col>
        </Row>
      </Container>
      <Container className="partners-container mb-60 mt-60">
        <Row className="justify-content-between align-items-center">
          <Col xs="12" lg="2" md="2" sm="2" xl="2" xxl="2">
            <div className="partners home--section__texts">
              <p className="home--section__texts">{t.partners}</p>
            </div>
          </Col>
          <Col xs="12" lg="10" md="10" sm="10" xl="10" xxl="10">
            <Row className="justify-content-between">
              <div className="col-4 ">
                <div className="partners">
                  <Image src={Apart_showroom} alt="banner immage" className="partners_wite" />
                </div>
              </div>
              <div className="col-4">
                <div className="partners">
                  <Image src={Malongo} alt="banner immage" className="partners_wite" />
                </div>
              </div>
              <div className="col-4 d-flex justify-content-end">
                <div className="partners">
                  <Image src={Tbc} alt="banner immage" className="partners_wite" />
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
