import Nav from "../components/nav";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { Button, Row, Container, Col, input, Form } from "react-bootstrap";
import en from "../locales/enTaghi";
import ru from "../locales/ruTaghi";
import ge from "../locales/geTaghi";
import Link from "next/link";
import Taghi from "../assets/Taghi_old_tbilisi.svg";
import Bukhaidze from "../assets/projects_floor.png";
import Footer from "../components/footer";
import Taghi1 from "../assets/projectsInside/taghi1.jpg";
import Taghi2 from "../assets/projectsInside/taghi2.jpg";
import Taghi3 from "../assets/projectsInside/taghi3.jpg";
import Taghi4 from "../assets/projectsInside/taghi4.jpg";
import Taghi5 from "../assets/projectsInside/taghi5.jpg";
export default function IndexPage1() {
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
                <input className="btn-test" type="text" id="name" name="name" placeholder={t.name} />
              </Col>
              <Col xs="3">
                <label htmlFor="email"></label>
                <input className="btn-test" type="mail" id="email" name="email" placeholder={t.email} />
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
          {/* <Col xs="12 mt-5 mb-5">
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
          </Col> */}
          <Row className="justify-content-between">
            <Col xs="5">
              <h3>{t.aboutprj}</h3>
              <p className="projects--floor-about-text basic-texts-14">{t.apt}</p>
              <Col xs="12">
                <Row>
                  <h3 className="advanteges__main_title">{t.adv}</h3>
                  <h5 className="projects-floor-first-one text-secondary mt-2 advanteges___sub_head">
                    {t.first}
                  </h5>
                  <Col xs="2">
                    <h5 className="advantages__sub_content">{t.bigBrain}</h5>
                  </Col>
                  <Col xs="2">
                    <h5 className="advantages__sub_content">{t.bigBrain2}</h5>
                  </Col>
                  <Col xs="2">
                    <h5 className="advantages__sub_content">{t.bigBrain3}</h5>
                  </Col>
                </Row>

                <Row>
                  <h5 className="projects-floor-first-one text-secondary mt-2 advanteges___sub_head">
                    {t.first}
                  </h5>
                  <Col xs="6">
                    <h5 className="advantages__sub_content">{t.bigBrain7}</h5>
                  </Col>
                </Row>
              </Col>
            </Col>
            <Col xs="6" className="d-flex justify-content-center align-items-center">
              <div className="">
                <iframe
                  allowFullScreen
                  width="850"
                  height="600"
                  loading="lazy"
                  frameBorder="0"
                  src="https://62fd4f37f9e47a000991e35d--fluffy-fairy-e91678.netlify.app/"
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
              <Col xs="4">
                <Image src={Taghi1} className="" />
              </Col>
              <Col xs="8">
                <Row>
                  <Col xs="6">
                    <Image src={Taghi2} className="" />
                  </Col>
                  <Col xs="6">
                    <Image src={Taghi3} className="" />
                  </Col>
                  <Col xs="6">
                    <Image src={Taghi4} className="" />
                  </Col>
                  <Col xs="6">
                    <Image src={Taghi5} className="" />
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