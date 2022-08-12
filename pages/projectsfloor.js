import Nav from "../components/nav";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { Button, Row, Container, Col, input, Form } from "react-bootstrap";
import en from "../locales/enProjectFloor";
import ru from "../locales/ruProjectsFloor";
import ge from "../locales/geProjectsFloor";
import Link from "next/link";
import Taghi from "../assets/Taghi_old_tbilisi.svg";
import Bukhaidze from "../assets/projects_floor.png";
import Footer from "../components/footer";

export default function IndexPage() {
  const [showBanner, setBanner] = useState(true);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "ru" ? ru : ge;

  const calcInputVal = useRef(0);
  const calcInputVal2 = useRef(0);
  const calcInputVal3 = useRef(0);

  const [calc, setCalc] = useState(0);

  const calculated = () => {
    setCalc(calcInputVal + calcInputVal2 + calcInputVal3);
  };

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
          <Row className="justify-content-between mt-5">
            <Col xs="2">
              <Image src={Taghi} className="Taghi" />
            </Col>
            <Col xs="4">
              <h3 className="projects-floor-title">{t.chooseApart}</h3>
              <p>{t.chooseFloor}</p>
            </Col>
          </Row>
          <Row className="justify-content-between mt-5">
            <Col xs="2">
              <hr />
              <p className="basic-texts-14">{t.treePlanted}</p>
              <h3 className="projects-floor-yard">{t.treeNum}</h3>
            </Col>
            <Col xs="3">
              <hr />
              <p className="basic-texts-14">{t.exhibitionSpace}</p>
              <h3 className="projects-floor-yard">{t.esm}</h3>
            </Col>
            <Col xs="4">
              <Form.Select aria-label="Default select example">
                <option>{t.chooseFloor}</option>
                <option value="1">{t.chooseOne}</option>
                <option value="2">{t.chooseTwo}</option>
                <option value="3">{t.chooseThree}</option>
              </Form.Select>
            </Col>
          </Row>
          <Col xs="12" className="mt-5">
            <div className="projects__image">
              <Link href="/ProjectsFloorSelector">
                <Image className="cursor" src={Bukhaidze} />
              </Link>
            </div>
          </Col>
          <Row className="justify-content-between mt-5">
            <Col xs="3">
              <hr />
            </Col>
            <Col xs="3">
              <hr />
            </Col>
          </Row>

          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Name" />
            <Form.Control type="mail" placeholder="Email" />
            <Form.Control type="tel" placeholder="+( ___ )     Phone number" required />
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button> */}
          <form action="/send-data-here" method="post">
            <Row className=" mt-5 form-row align-items-center">
              <Col xs="3">
                <label htmlFor="name"></label>
                <input
                  className="btn-test"
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t.name}
                />
              </Col>
              <Col xs="3">
                <label htmlFor="email"></label>
                <input
                  className="btn-test"
                  type="mail"
                  id="email"
                  name="email"
                  placeholder={t.email}
                />
              </Col>
              <Col xs="3">
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
              <Col xs="3">
                <Button className="btn-send">{t.req}</Button>
              </Col>
            </Row>
          </form>
          <Col xs="12 mt-5 mb-5">
            <input
              type="text"
              className="calculator"
              placeholder="Price 1"
              defaultValue="0"
              ref={calcInputVal}
            />
            <input
              type="text"
              className="calculator"
              placeholder="Price 2"
              defaultValue="0"
              ref={calcInputVal2}
            />
            <input
              type="text"
              className="calculator"
              placeholder="Price 3"
              defaultValue="0"
              ref={calcInputVal3}
            />
            <input
              type="text"
              className="calculator"
              placeholder={calc}
              value={calculated}
            />
          </Col>
          <Row className="justify-content-between">
            <Col xs="5">
              <h3>{t.aboutprj}</h3>
              <p className="projects--floor-about-text basic-texts-14">
                {t.apt}
              </p>
              <Col xs="12">
                <Row>
                  <h3>{t.adv}</h3>
                  <h5 className="projects-floor-first-one">{t.first}</h5>
                  <Col xs="4">
                    <h5>{t.bigBrain}</h5>
                  </Col>
                  <Col xs="4">
                    <h5>{t.bigBrain}</h5>
                  </Col>
                  <Col xs="4">
                    <h5>{t.bigBrain}</h5>
                  </Col>
                </Row>
                <Row>
                  <h5 className="projects-floor-first-one">{t.first}</h5>
                  <Col xs="4">
                    <h5>{t.bigBrain}</h5>
                  </Col>
                  <Col xs="4">
                    <h5>{t.bigBrain}</h5>
                  </Col>
                  <Col xs="4">
                    <h5>{t.bigBrain}</h5>
                  </Col>
                </Row>
                <Row>
                  <h5 className="projects-floor-first-one">{t.first}</h5>
                  <Col xs="4">
                    <h5>{t.bigBrain}</h5>
                  </Col>
                  <Col xs="4">
                    <h5>{t.bigBrain}</h5>
                  </Col>
                  <Col xs="4">
                    <h5>{t.bigBrain}</h5>
                  </Col>
                </Row>
              </Col>
            </Col>
            <Col
              xs="6"
              className="d-flex justify-content-center align-items-center"
            >
              <div className="">
              <iframe
allowFullScreen
width="640"
height="480"
loading="lazy"
frameBorder="0"
src="https://62f2db7ad9a68729ee046f70--genuine-sprite-2fa12c.netlify.app/"
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
        </Container>
      </div>
      <Footer />
    </div>
  );
}
