import Nav from "../components/nav";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { Button, Row, Container, Col, input, Form } from "react-bootstrap";
import en from "../locales/enEzo";
import ru from "../locales/ruEzo";
import ge from "../locales/geEzo";
import Link from "next/link";
import Taghi from "../assets/Taghi_old_tbilisi.svg";
import Bukhaidze from "../assets/projects_floor.png";
import Footer from "../components/footer";
import Panorama1 from "../assets/projectsInside/panorama1.jpg";
import Panorama2 from "../assets/projectsInside/panorama2.jpg";
import Panorama3 from "../assets/projectsInside/panorama3.jpg";
import Panorama4 from "../assets/projectsInside/panorama4.jpg";
import Panorama5 from "../assets/projectsInside/panorama5.jpg";
export default function IndexPage2() {
  const [showBanner, setBanner] = useState(true);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "ru" ? ru : ge;

  // const calcInputVal = useRef(0);
  // const calcInputVal2 = useRef(0);
  // const calcInputVal3 = useRef(0);

  // const [calc, setCalc] = useState(0);

  // const calculated = () => {
  //   setCalc(calcInputVal + calcInputVal2 + calcInputVal3);
  // };

  return (
    <div>
      <div className="hero">
        <Nav />
        <Container>
          <Row className="mt-120-important">
            <p className="goback">
              {/* <BsArrowUpLeft /> */}
              {t.goBack}
            </p>
          </Row>
          <div className="mob__view">
            <Row className="justify-content-between mt-5">
              <Col xs="12" lg="2" md="2" sm="2" xl="2" xxl="2" className="mb-5">
                <Image src={Taghi} className="Taghi" />
              </Col>
              <Col xs="6" lg="2" md="2" sm="2" xl="2" xxl="2">
                <hr />
                <p className="basic-texts-14">{t.treePlanted}</p>
                <h3 className="projects-floor-yard">{t.treeNum}</h3>
              </Col>
              <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
                <hr />
                <p className="basic-texts-14">{t.exhibitionSpace}</p>
                <h3 className="projects-floor-yard">{t.esm}</h3>
              </Col>
              
            </Row>
            <Row className="justify-content-between mt-5">
            <Col xs="12" lg="4" md="4" sm="4" xl="4" xxl="4" className="mt-3">
                <h3 className="projects-floor-title"> {t.chooseApart}</h3>
                <p>{t.chooseFloor}</p>
              </Col>
              <Col xs="12" lg="4" md="4" sm="4" xl="4" xxl="4">
                <Form.Select aria-label="Default select example">
                  <option>{t.chooseFloor}</option>
                  <option value="1">{t.chooseOne}</option>
                  <option value="2">{t.chooseTwo}</option>
                  <option value="3">{t.chooseThree}</option>
                </Form.Select>
              </Col>
            </Row>
          </div>
          <div className="desktop__view">
            <Row className="justify-content-between mt-5">
              <Col xs="6" lg="2" md="2" sm="2" xl="2" xxl="2">
                <Image src={Taghi} className="Taghi" />
              </Col>
              <Col xs="6" lg="4" md="4" sm="4" xl="4" xxl="4">
                <h3 className="projects-floor-title"> {t.chooseApart}</h3>
                <p>{t.chooseFloor}</p>
              </Col>
            </Row>
            <Row className="justify-content-between mt-5">
              <Col xs="6" lg="2" md="2" sm="2" xl="2" xxl="2">
                <hr />
                <p className="basic-texts-14">{t.treePlanted}</p>
                <h3 className="projects-floor-yard">{t.treeNum}</h3>
              </Col>
              <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
                <hr />
                <p className="basic-texts-14">{t.exhibitionSpace}</p>
                <h3 className="projects-floor-yard">{t.esm}</h3>
              </Col>
              <Col xs="12" lg="4" md="4" sm="4" xl="4" xxl="4">
                <Form.Select aria-label="Default select example">
                  <option>{t.chooseFloor}</option>
                  <option value="1">{t.chooseOne}</option>
                  <option value="2">{t.chooseTwo}</option>
                  <option value="3">{t.chooseThree}</option>
                </Form.Select>
              </Col>
            </Row>
          </div>
       
        
          <Col xs="12" className="mt-5">
            <div className="projects__image">
              <Link href="/ProjectsFloorSelector">
                <Image className="cursor" src={Bukhaidze} />
              </Link>
            </div>
          </Col>
          <Row className="justify-content-between mt-5">
            <Col xs="4" lg="3" md="3" sm="3" xl="3" xxl="3">
              <hr />
            </Col>
            <Col xs="4" lg="3" md="3" sm="3" xl="3" xxl="3">
              <hr />
            </Col>
          </Row>
          <form action="/send-data-here" method="post">
            <Row className=" mt-5 form-row align-items-center">
              <Col xs="12" lg="3" md="3" sm="3" xl="3" xxl="3">
                <label htmlFor="name"></label>
                <input className="btn-test" type="text" id="name" name="name" placeholder={t.name} />
              </Col>
              <Col xs="12" lg="3" md="3" sm="3" xl="3" xxl="3">
                <label htmlFor="email"></label>
                <input className="btn-test" type="mail" id="email" name="email" placeholder={t.email} />
              </Col>
              <Col xs="12" lg="3" md="3" sm="3" xl="3" xxl="3">
                <label htmlFor="tel"></label>
                <input
                  className="btn-test"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder={t.num}
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
              </Col>
              <Col xs="12" lg="3" md="3" sm="3" xl="3" xxl="3">
                <Button className="btn-send">{t.req}</Button>
              </Col>
            </Row>
          </form>
          <Row className="justify-content-between">
            <Col xs="12" lg="5" md="5" sm="5" xl="5" xxl="5">
              <h3>{t.aboutprj}</h3>
              <p className="projects--floor-about-text basic-texts-14">{t.apt}</p>
              <Col xs="12">
                <Row>
                  <p className="advanteges__main_title">{t.adv}</p>
                  <p className=" basic-texts-14 text-secondary mt-2 ">
                    {t.first}
                  </p>
                  <Col xs="4" lg="2" md="2" sm="2" xl="2" xxl="2">
                    <p className="basic-texts-14">{t.bigBrain}</p>
                  </Col>
                  <Col xs="4" lg="2" md="2" sm="2" xl="2" xxl="2">
                    <p className="basic-texts-14">{t.bigBrain2}</p>
                  </Col>
                  <Col xs="4" lg="2" md="2" sm="2" xl="2" xxl="2">
                    <p className="basic-texts-14">{t.bigBrain3}</p>
                  </Col>
                </Row>
                <Row>
                  <p className="projects-floor-first-one text-secondary mt-2 "></p>
                  <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                    <p className="basic-texts-14">{t.bigBrain4}</p>
                  </Col>
                </Row>
                <Row>
                  <p className="projects-floor-first-one text-secondary mt-2 basic-texts-14">
                    {t.first2}
                  </p>
                  <Col xs="12" lg="12" md="12" sm="12" xl="12" xxl="12">
                    <h5 className="basic-texts-14">{t.bigBrain7}</h5>
                  </Col>
                </Row>
              </Col>
            </Col>
            <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" className="d-flex justify-content-center align-items-center">
              <div className="">
                <iframe
                  className="iframe__mobile"
                  allowFullScreen
                  width="850"
                  height="600"
                  loading="lazy"
                  frameBorder="0"
                  src="https://62fd4ca20bd127049fb816fa--flourishing-jelly-8045ee.netlify.app/"
                ></iframe>
              </div>
            </Col>
          </Row>
          <Col xs="12" className="mt-120">
            <iframe
              src="https://snazzymaps.com/embed/408105"
              width="100%"
              height="600px"
              // style="border:none;"
            ></iframe>
          </Col>
          <Col xs="12" className="mt-120">
            <Row>
              <Col xs="12" lg="4" md="4" sm="4" xl="4" xxl="4">
                <Image src={Panorama3} className="" />
              </Col>
              <Col xs="12" lg="8" md="8" sm="8" xl="8" xxl="8">
                <Row>
                  <Col xs="6">
                    <Image src={Panorama2} className="" />
                  </Col>
                  <Col xs="6">
                    <Image src={Panorama1} className="" />
                  </Col>
                  <Col xs="6">
                    <Image src={Panorama4} className="" />
                  </Col>
                  <Col xs="6">
                    <Image src={Panorama5} className="" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
