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
                    <Col xs="12" className="projects-margin-fixer">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width">
                          <Image src={Slide1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                    <Col xs="12">
                      <Row>
                        <Col xs="12">
                          <Link href="/projectsfloor">
                            <div className="mb-5 projects--title cursor">
                              <p>{t.prj1d}</p>
                              <h3>{t.prj1t}</h3>
                            </div>
                          </Link>
                        </Col>
                        <Col xs="6">
                          <div className=" projects--texts__basics">
                            <p className="projects--texts__op">{t.prj1l}</p>
                            <h3 className="project--location__mod projects--texts__basics">{t.prj1lt}</h3>
                            <Link href="/projectsfloor">
                              <i className="project--see cursor   ">
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
                      <Link href="/projectsfloor">
                        <div className="mb-5 projects--title cursor">
                          <p>{t.prj2d}</p>
                          <h3>{t.prj2t}</h3>
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
                        <Link href="/projectsfloor">
                          <i className="project--see cursor  ">
                            {t.viewPrj} <Image src={Vector} />
                          </i>
                        </Link>
                      </div>
                    </Col>
                    <Col className="border__left"></Col>
                    <Col xs="8" className="projects-margin-fixer">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width">
                          <Image src={Slide1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage" className="full_width" />
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
                      <Link href="/projectsfloor">
                        <div className="mb-5 projects--title cursor">
                          <p>{t.prj3d}</p>
                          <h3>{t.prj3t}</h3>
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
                        <Link href="/projectsfloor">
                          <i className="project--see cursor  ">
                            {t.viewPrj} <Image src={Vector} />
                          </i>
                        </Link>
                      </div>
                    </Col>
                    <Col className="border__left"></Col>
                    <Col xs="8" className="projects-margin-fixer">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width">
                          <Image src={Slide1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage" className="full_width" />
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
                      <Link href="/projectsfloor">
                        <div className="mb-5 projects--title cursor">
                          <p>{t.prj4d}</p>
                          <h3>{t.prj4t}</h3>
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
                        <Link href="/projectsfloor">
                          <i className="project--see cursor  ">
                            {t.viewPrj} <Image src={Vector} />
                          </i>
                        </Link>
                      </div>
                    </Col>
                    <Col className="border__left"></Col>
                    <Col xs="8" className="projects-margin-fixer">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width">
                          <Image src={Slide1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage" className="full_width" />
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
                      <Link href="/projectsfloor">
                        <div className="mb-5 projects--title cursor">
                          <p>{t.prj5d}</p>
                          <h3>{t.prj5t}</h3>
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
                        <Link href="/projectsfloor">
                          <i className="project--see cursor  ">
                            {t.viewPrj} <Image src={Vector} />
                          </i>
                        </Link>
                      </div>
                    </Col>
                    <Col className="border__left"></Col>
                    <Col xs="8" className="projects-margin-fixer">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width">
                          <Image src={Slide1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage" className="full_width" />
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
                      <Link href="/projectsfloor">
                        <div className="mb-5 projects--title cursor">
                          <p>{t.prj5d}</p>
                          <h3>{t.prj5t}</h3>
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
                        <Link href="/projectsfloor">
                          <i className="project--see cursor  ">
                            {t.viewPrj} <Image src={Vector} />
                          </i>
                        </Link>
                      </div>
                    </Col>
                    <Col className="border__left"></Col>
                    <Col xs="8" className="projects-margin-fixer">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width">
                          <Image src={Slide1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage" className="full_width" />
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
