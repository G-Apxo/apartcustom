import Nav from "../components/nav";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Row, Container, Col, Carousel } from "react-bootstrap";
import en from "../locales/enProjects";
import ru from "../locales/ruProjecs";
import ge from "../locales/geProjects";
import Link from "next/link";
import Slide1 from "../assets/oldcitypanorama.png";
import Vector from "../assets/seeprjvector.png";
import Footer from "../components/footer";
import Oldcity1 from "../assets/projectslider/OLD CITY 1.jpg";
import Oldcity2 from "../assets/projectslider/OLD CITY 2.jpg";
import Oldcity3 from "../assets/projectslider/OLD CITY 3.jpg";
import Bukhaidze1 from "../assets/projectslider/bukhaidze1.jpg";
import Bukhaidze2 from "../assets/projectslider/bukhadize2.jpg";
import Bukhaidze3 from "../assets/projectslider/bukhadize3.jpg";
import Bukhaidze4 from "../assets/projectslider/bukhFin.jpg";
import Bukhaidze5 from "../assets/projectslider/bukhFin2.jpg";
import Bukhaidze6 from "../assets/projectslider/bukhFin3.jpg";
import Taghi1 from "../assets/projectslider/taghi1.jpg";
import Tagh2 from "../assets/projectslider/taghi2.jpg";
import Tagh3 from "../assets/projectslider/taghi3.jpg";
import Ezo1 from "../assets/projectslider/ezo1.jpg";
import Ezo2 from "../assets/projectslider/ezo2.jpg";
import Ezo3 from "../assets/projectslider/ezo3.jpg";
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
            <Container className="projects-title-distance">
              <Row>
                <h3 className="text-center"> {t.title}</h3>
              </Row>
            </Container>
            <div className="parent_only_mobile">
              <div className="test1313">
                <Container className="container-borderer">
                  <Row>
                    <Col xs="12" className="">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width  ">
                          <Image src={Oldcity1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Oldcity2} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Oldcity3} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                    <Col xs="12">
                      <Row>
                        <Col xs="12">
                          <Link href="/oldcity">
                            <div className="mb-5 projects--title cursor">
                              <p>{t.prj1d}</p>
                              <h3>{t.prj1c}</h3>
                            </div>
                          </Link>
                        </Col>
                        <Col xs="6">
                          <div className=" projects--texts__basics">
                            <p className="projects--texts__op">{t.prj1t}</p>
                            <h3 className="project--location__mod projects--texts__basics">{t.prj1lt}</h3>
                            <Link href="/oldcity">
                              <i className="project--see cursor  ">
                                {t.viewPrj} <Image src={Vector} alt="arrow" className="arrow" />
                              </i>
                            </Link>
                          </div>
                        </Col>
                        <Col xs="6">
                          <div>
                            <p className="projects--texts__op projects--texts__create ">{t.prj1c}</p>
                            <h3 className="projects--texts__basics projects--texts__done ">{t.prj1ct}</h3>
                          </div>
                          <div></div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div className="parent_only_mobile mt-5">
              <div className="test1313">
                <Container className="container-borderer">
                  <Row>
                    <Col xs="12" className="">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width ">
                          <Image src={Ezo1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width ">
                          <Row>
                            <Image src={Ezo2} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width ">
                          <Row>
                            <Image src={Ezo3} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                    <Col xs="12">
                      <Row>
                        <Col xs="12">
                          <Link href="/oldcity">
                            <div className="mb-5 projects--title cursor">
                              <p>{t.prj1d}</p>
                              <h3>{t.prj1c}</h3>
                            </div>
                          </Link>
                        </Col>
                        <Col xs="6">
                          <div className=" projects--texts__basics">
                            <p className="projects--texts__op">{t.prj1l}</p>
                            <h3 className="project--location__mod projects--texts__basics">{t.prj1lt}</h3>
                            <Link href="/oldcity">
                              <i className="project--see cursor  ">
                                {t.viewPrj} <Image src={Vector} alt="arrow" className="arrow" />
                              </i>
                            </Link>
                          </div>
                        </Col>
                        <Col xs="6">
                          <div>
                            <p className="projects--texts__op projects--texts__create">{t.prj1c}</p>
                            <h3 className="projects--texts__basics projects--texts__done ">{t.prj1ct}</h3>
                          </div>
                          <div></div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div className="parent_only_mobile mt-5">
              <div className="test1313">
                <Container className="container-borderer">
                  <Row>
                    <Col xs="12" className="">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width ">
                          <Image src={Taghi1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width ">
                          <Row>
                            <Image src={Tagh2} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width ">
                          <Row>
                            <Image src={Tagh3} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                    <Col xs="12">
                      <Row>
                        <Col xs="12">
                          <Link href="/bukhaidze">
                            <div className="mb-5 projects--title cursor">
                              <p>{t.prj1d}</p>
                              <h3>{t.prj1c}</h3>
                            </div>
                          </Link>
                        </Col>
                        <Col xs="6">
                          <div className=" projects--texts__basics">
                            <p className="projects--texts__op">{t.prj1l}</p>
                            <h3 className="project--location__mod projects--texts__basics">{t.prj1lt}</h3>
                            <Link href="/bukhaidze">
                              <i className="project--see cursor  ">
                                {t.viewPrj} <Image src={Vector} alt="arrow" className="arrow" />
                              </i>
                            </Link>
                          </div>
                        </Col>
                        <Col xs="6">
                          <div>
                            <p className="projects--texts__op projects--texts__create">{t.prj1c}</p>
                            <h3 className="projects--texts__basics projects--texts__done ">{t.prj1ct}</h3>
                          </div>
                          <div></div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div className="parent_only_mobile mt-5">
              <div className="test1313">
                <Container className="container-borderer">
                  <Row>
                    <Col xs="12" className="">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width ">
                          <Image src={Bukhaidze1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width ">
                          <Row>
                            <Image src={Bukhaidze2} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width ">
                          <Row>
                            <Image src={Bukhaidze3} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                    <Col xs="12">
                      <Row>
                        <Col xs="12">
                          <Link href="/bukhaidze">
                            <div className="mb-5 projects--title cursor">
                              <p>{t.prj1d}</p>
                              <h3>{t.prj1c}</h3>
                            </div>
                          </Link>
                        </Col>
                        <Col xs="6">
                          <div className=" projects--texts__basics">
                            <p className="projects--texts__op">{t.prj1l}</p>
                            <h3 className="project--location__mod projects--texts__basics">{t.prj1lt}</h3>
                            <Link href="/bukhaidze">
                              <i className="project--see cursor ">
                                {t.viewPrj} <Image src={Vector} alt="arrow" className="arrow" />
                              </i>
                            </Link>
                          </div>
                        </Col>
                        <Col xs="6">
                          <div>
                            <p className="projects--texts__op projects--texts__create">{t.prj1c}</p>
                            <h3 className="projects--texts__basics projects--texts__done ">{t.prj1ct}</h3>
                          </div>
                          <div></div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div className="parent_only_desktop">
              <div className="test1313">
                <Container className="container-borderer">
                  <Row>
                    <Col xs="3" className="">
                      <Link href="/oldcity">
                        <div className="mb-5 projects--title cursor">
                          <p>{t.prj1d}</p>
                          <h3 className="mt-3">{t.prj1t}</h3>
                        </div>
                      </Link>
                      <div className="projects--legend__top projects--texts__basics">
                        <p className="projects--texts__op">{t.prj1l}</p>
                        <h3 className="project--location__mod projects--texts__basics">{t.prj1lt}</h3>
                      </div>
                      <div className="projects--legend__bot">
                        <p className="projects--texts__op projects--texts__create">{t.prj1c}</p>
                        <h3 className="projects--texts__basics projects--texts__done ">{t.prj1ct}</h3>
                      </div>
                      <div>
                        <Link href="/oldcity">
                          <i className="project--see cursor  ">
                            {t.viewPrj} <Image src={Vector} />
                          </i>
                        </Link>
                      </div>
                    </Col>
                    <Col className="border__left"></Col>
                    <Col xs="8" className="projects-margin-fixer">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Image src={Oldcity1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Oldcity2} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Oldcity3} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="test1313">
                <Container className="container-borderer">
                  <Row>
                    <Col xs="3" className="">
                      <Link href="/ezo">
                        <div className="mb-5 projects--title cursor">
                          <p>{t.prj2d}</p>
                          <h3 className="mt-3">{t.prj2t}</h3>
                        </div>
                      </Link>
                      <div className="projects--legend__top projects--texts__basics">
                        <p className="projects--texts__op">{t.prj2l}</p>
                        <h3 className="project--location__mod projects--texts__basics">{t.prj2lt}</h3>
                      </div>
                      <div className="projects--legend__bot">
                        <p className="projects--texts__op projects--texts__create">{t.prj2c}</p>
                        <h3 className="projects--texts__basics projects--texts__done ">{t.prj2ct}</h3>
                      </div>
                      <div>
                        <Link href="/ezo">
                          <i className="project--see cursor ">
                            {t.viewPrj} <Image src={Vector} />
                          </i>
                        </Link>
                      </div>
                    </Col>
                    <Col className="border__left"></Col>
                    <Col xs="8" className="projects-margin-fixer">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Image src={Ezo1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Ezo2} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Ezo3} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            {/* //ADDED */}
            <div className="parent_only_desktop">
              <div className="test1313">
                <Container className="container-borderer">
                  <Row>
                    <Col xs="3" className="">
                      <Link href="/taghi">
                        <div className="mb-5 projects--title cursor">
                          <p>{t.prj3d}</p>
                          <h3 className="mt-3">{t.prj3t}</h3>
                        </div>
                      </Link>
                      <div className="projects--legend__top projects--texts__basics">
                        <p className="projects--texts__op">{t.prj3l}</p>
                        <h3 className="project--location__mod projects--texts__basics">{t.prj3lt}</h3>
                      </div>
                      <div className="projects--legend__bot">
                        <p className="projects--texts__op projects--texts__create">{t.prj3c}</p>
                        <h3 className="projects--texts__basics projects--texts__done ">{t.prj3ct}</h3>
                      </div>
                      <div>
                        <Link href="/taghi">
                          <i className="project--see cursor  ">
                            {t.viewPrj} <Image src={Vector} />
                          </i>
                        </Link>
                      </div>
                    </Col>
                    <Col className="border__left"></Col>
                    <Col xs="8" className="projects-margin-fixer">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Image src={Taghi1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Tagh2} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Tagh3} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div className="parent_only_desktop">
              <div className="test1313">
                <Container className="container-borderer">
                  <Row>
                    <Col xs="3" className="">
                      <Link href="/bukhaidze">
                        <div className="mb-5 projects--title cursor">
                          <p>{t.prj4d}</p>
                          <h3 className="mt-3">{t.prj4t}</h3>
                        </div>
                      </Link>
                      <div className="projects--legend__top projects--texts__basics">
                        <p className="projects--texts__op">{t.prj4l}</p>
                        <h3 className="project--location__mod projects--texts__basics">{t.prj4lt}</h3>
                      </div>
                      <div className="projects--legend__bot">
                        <p className="projects--texts__op projects--texts__create">{t.prj4c}</p>
                        <h3 className="projects--texts__basics projects--texts__done ">{t.prj4ct}</h3>
                      </div>
                      <div>
                        <Link href="/bukhaidze">
                          <i className="project--see cursor ">
                            {t.viewPrj} <Image src={Vector} />
                          </i>
                        </Link>
                      </div>
                    </Col>
                    <Col className="border__left"></Col>
                    <Col xs="8" className="projects-margin-fixer">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Image src={Bukhaidze1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Bukhaidze2} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Bukhaidze3} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div className="parent_only_desktop">
              <div className="test1313">
                <Container className="container-borderer">
                  <Row>
                    <Col xs="3" className="">
                      <Link href="/bukhaidze">
                        <div className="mb-5 projects--title cursor">
                          <p>{t.prj5d}</p>
                          <h3 className="mt-3">{t.prj5t}</h3>
                        </div>
                      </Link>
                      <div className="projects--legend__top projects--texts__basics">
                        <p className="projects--texts__op">{t.prj5l}</p>
                        <h3 className="project--location__mod projects--texts__basics">{t.prj5lt}</h3>
                      </div>
                      <div className="projects--legend__bot">
                        <p className="projects--texts__op projects--texts__create">{t.prj5c}</p>
                        <h3 className="projects--texts__basics projects--texts__done ">{t.prj5ct}</h3>
                      </div>
                      <div>
                        <Link href="/bukhaidze">
                          <i className="project--see cursor ">
                            {t.viewPrj} <Image src={Vector} />
                          </i>
                        </Link>
                      </div>
                    </Col>
                    <Col className="border__left"></Col>
                    <Col xs="8" className="projects-margin-fixer">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Image src={Bukhaidze4} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Bukhaidze5} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Bukhaidze6} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
