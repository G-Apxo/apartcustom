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

import Bukhaidze1 from "../assets/GAMISRENDEREBI/6a/11.jpg";
import Bukhaidze1d from "../assets/GAMISRENDEREBI/6a/12.jpg";
import Bukhaidze2 from "../assets/GAMISRENDEREBI/6a/3.jpg";
import Bukhaidze2d from "../assets/GAMISRENDEREBI/6a/4.jpg";
import Bukhaidze3 from "../assets/GAMISRENDEREBI/6a/9.jpg";
import Bukhaidze3d from "../assets/GAMISRENDEREBI/6a/10.jpg";

import Bukhaidze61 from "../assets/GAMISRENDEREBI/buxaidzis6/1.jpg";
import Bukhaidze61d from "../assets/GAMISRENDEREBI/buxaidzis6/2.jpg";
import Bukhaidze62 from "../assets/GAMISRENDEREBI/buxaidzis6/3.jpg";
import Bukhaidze62d from "../assets/GAMISRENDEREBI/buxaidzis6/4.jpg";
import Bukhaidze63 from "../assets/GAMISRENDEREBI/buxaidzis6/5.jpg";
import Bukhaidze63d from "../assets/GAMISRENDEREBI/buxaidzis6/6.jpg";
import Taghi1 from "../assets/GAMISRENDEREBI/48/1.jpg";
import Taghi1d from "../assets/GAMISRENDEREBI/48/2.jpg";
import Taghi2 from "../assets/GAMISRENDEREBI/48/3.png";
import Taghi2d from "../assets/GAMISRENDEREBI/48/4.jpg";
import Taghi3 from "../assets/GAMISRENDEREBI/48/7.jpg";
import Taghi3d from "../assets/GAMISRENDEREBI/48/8.jpg";

import Ezo1 from "../assets/GAMISRENDEREBI/ezo/1.jpg";
import Ezo1d from "../assets/GAMISRENDEREBI/ezo/2.jpg";
import Ezo2 from "../assets/GAMISRENDEREBI/ezo/3.jpg";
import Ezo2d from "../assets/GAMISRENDEREBI/ezo/4.jpg";
import Ezo3 from "../assets/GAMISRENDEREBI/ezo/5.jpg";
import Ezo3d from "../assets/GAMISRENDEREBI/ezo/6.jpg";

import Panorama4 from "../assets/GAMISRENDEREBI/OCP/3.jpg";
import Panorama4d from "../assets/GAMISRENDEREBI/OCP/4.jpg";
import Panorama5 from "../assets/GAMISRENDEREBI/OCP/17.jpg";
import Panorama5d from "../assets/GAMISRENDEREBI/OCP/18.jpg";
import Hero from "../assets/GAMISRENDEREBI/OCP/9.jpg";
import Herod from "../assets/GAMISRENDEREBI/OCP/10.jpg";
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
                    <Col xs="12" className="projects__image">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width  ">
                          <Image src={Hero} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Panorama4} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Panorama5} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                    <Col xs="12" className="projects__image_dark">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width  ">
                          <Image src={Herod} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Panorama4d} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Panorama5d} alt="banner immage" className="full_width" />
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
                    <Col xs="12" className="projects__image">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width  ">
                          <Image src={Ezo1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Ezo2} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Ezo3} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                    <Col xs="12" className="projects__image_dark">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width  ">
                          <Image src={Ezo1d} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Ezo2d} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Ezo3d} alt="banner immage" className="full_width" />
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
                    <Col xs="12" className="projects__image">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width  ">
                          <Image src={Taghi1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Taghi2} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Taghi3} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                    <Col xs="12" className="projects__image_dark">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width  ">
                          <Image src={Taghi1d} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Taghi2d} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Taghi3d} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                    <Col xs="12">
                      <Row>
                        <Col xs="12">
                          <Link href="/BukhaidzeB1">
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
                            <Link href="/BukhaidzeB1">
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
                    <Col xs="12" className="projects__image">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width  ">
                          <Image src={Bukhaidze1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Bukhaidze2} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Bukhaidze3} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                    <Col xs="12" className="projects__image_dark">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width  ">
                          <Image src={Bukhaidze1d} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Bukhaidze2d} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Bukhaidze3d} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                    <Col xs="12">
                      <Row>
                        <Col xs="12">
                          <Link href="/BukhaidzeB2">
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
                            <Link href="/BukhaidzeB2">
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
            <div className="parent_only_mobile mt-5">
              <div className="test1313">
                <Container className="container-borderer">
                  <Row>
                    <Col xs="12" className="projects__image">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width  ">
                          <Image src={Bukhaidze61} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Bukhaidze62} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Bukhaidze63} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                    <Col xs="12" className="projects__image_dark">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width  ">
                          <Image src={Bukhaidze61d} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Bukhaidze62d} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Bukhaidze63d} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                    <Col xs="12">
                      <Row>
                        <Col xs="12">
                          <Link href="/BukhaidzeB2">
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
                            <Link href="/BukhaidzeB2">
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
                    <Col xs="8" className="projects-margin-fixer projects__image">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Image src={Hero} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Panorama4} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Panorama5} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                    <Col xs="8" className="projects-margin-fixer projects__image_dark">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Image src={Herod} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Panorama4d} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Panorama5d} alt="banner immage" className="full_width" />
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
                    <Col xs="8" className="projects-margin-fixer projects__image">
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
                    <Col xs="8" className="projects-margin-fixer projects__image_dark">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Image src={Ezo1d} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Ezo2d} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Ezo3d} alt="banner immage" className="full_width" />
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
                    <Col xs="8" className="projects-margin-fixer projects__image">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Image src={Taghi1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Taghi2} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Taghi3} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                    <Col xs="8" className="projects-margin-fixer projects__image_dark">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Image src={Taghi1d} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Taghi2d} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Taghi3d} alt="banner immage" className="full_width" />
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
                      <Link href="/BukhaidzeB1">
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
                        <Link href="/BukhaidzeB1">
                          <i className="project--see cursor ">
                            {t.viewPrj} <Image src={Vector} />
                          </i>
                        </Link>
                      </div>
                    </Col>
                    <Col className="border__left"></Col>
                    <Col xs="8" className="projects-margin-fixer projects__image">
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
                    <Col xs="8" className="projects-margin-fixer projects__image_dark">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Image src={Bukhaidze1d} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Bukhaidze2d} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Bukhaidze3d} alt="banner immage" className="full_width" />
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
                      <Link href="/BukhaidzeB2">
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
                        <Link href="/BukhaidzeB2">
                          <i className="project--see cursor ">
                            {t.viewPrj} <Image src={Vector} />
                          </i>
                        </Link>
                      </div>
                    </Col>
                    <Col className="border__left"></Col>
                    <Col xs="8" className="projects-margin-fixer projects__image">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Image src={Bukhaidze61} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Bukhaidze62} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Bukhaidze63} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                    <Col xs="8" className="projects-margin-fixer projects__image_dark">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Image src={Bukhaidze61d} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Bukhaidze62d} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width full_desktop">
                          <Row>
                            <Image src={Bukhaidze63d} alt="banner immage" className="full_width" />
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
