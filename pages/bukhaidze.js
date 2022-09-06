import Nav from "../components/nav";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { Button, Row, Container, Col, input, Form } from "react-bootstrap";
import en from "../locales/enBukhaidze";
import ru from "../locales/ruBukhaidze";
import ge from "../locales/geBukhaidze";
import Link from "next/link";
import Taghi from "../assets/projectslogofire/Bukh_6a_ENG_LOGO.png";
import Bukhadizedark from "../assets/projectmainphotos/bukhaidze-6-main-dark.jpg";
import Footer from "../components/footer";
import Bukhaidze1 from "../assets/GAMISRENDEREBI/6a/11.jpg";
import Bukhaidze1d from "../assets/GAMISRENDEREBI/6a/12.jpg";
import Bukhaidze2 from "../assets/GAMISRENDEREBI/6a/3.jpg";
import Bukhaidze2d from "../assets/GAMISRENDEREBI/6a/4.jpg";
import Bukhaidze3 from "../assets/GAMISRENDEREBI/6a/9.jpg";
import Bukhaidze3d from "../assets/GAMISRENDEREBI/6a/10.jpg";
import Bukhaidze4 from "../assets/GAMISRENDEREBI/6a/7.jpg";
import Bukhaidze4d from "../assets/GAMISRENDEREBI/6a/8.jpg";
import Bukhaidze5 from "../assets/GAMISRENDEREBI/6a/5.jpg";
import Bukhaidze5d from "../assets/GAMISRENDEREBI/6a/6.jpg";
export default function IndexPage3() {
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
            <Col xs="1" lg="1" md="1" sm="1" xl="1" xxl="1">
              <Link href="/projects">
                <p className="goback">
                  {/* <BsArrowUpLeft /> */}
                  {t.goBack}
                </p>
              </Link>
            </Col>
          </Row>
          <Row className="justify-content-between mt-5">
            <Col xs="2">
              <Image src={Taghi} className="Taghi" />
            </Col>
            <Col xs="4">
              <h3 className="projects-floor-title"> {t.chooseApart}</h3>
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
                <Image className="cursor" src={Bukhaidze1} />
              </Link>
            </div>
            <div className="projects__image_dark">
              <Link href="/ProjectsFloorSelector">
                <Image className="cursor" src={Bukhaidze1d} />
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
                    {t.first2}
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
                  src="https://62fd551c99358d0009e6e11b--genuine-sprite-2fa12c.netlify.app/"
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
          <Col xs="12" className="mt-120 mb-120">
            <Row>
              <Col xs="4">
                <div className="projects__image">
                  <Link href="/ProjectsFloorSelector">
                    <Image className="cursor" src={Bukhaidze2} />
                  </Link>
                </div>

                <div className="projects__image_dark">
                  <Link href="/ProjectsFloorSelector">
                    <Image className="cursor" src={Bukhaidze2d} />
                  </Link>
                </div>
              </Col>
              <Col xs="8" className="lastPhotos">
                <Row>
                  <Col xs="6">
                    <div className="projects__image">
                      <Link href="/ProjectsFloorSelector">
                        <Image className="cursor" src={Bukhaidze3} />
                      </Link>
                    </div>

                    <div className="projects__image_dark">
                      <Link href="/ProjectsFloorSelector">
                        <Image className="cursor" src={Bukhaidze3d} />
                      </Link>
                    </div>
                  </Col>
                  <Col xs="6">
                    <div className="projects__image">
                      <Link href="/ProjectsFloorSelector">
                        <Image className="cursor" src={Bukhaidze4} />
                      </Link>
                    </div>

                    <div className="projects__image_dark">
                      <Link href="/ProjectsFloorSelector">
                        <Image className="cursor" src={Bukhaidze4d} />
                      </Link>
                    </div>
                  </Col>
                  <Col xs="6">
                    <div className="projects__image">
                      <Link href="/ProjectsFloorSelector">
                        <Image className="cursor" src={Bukhaidze5} />
                      </Link>
                    </div>

                    <div className="projects__image_dark">
                      <Link href="/ProjectsFloorSelector">
                        <Image className="cursor" src={Bukhaidze5d} />
                      </Link>
                    </div>
                  </Col>
                  <Col xs="6">
                    <div className="projects__image">
                      <Link href="/ProjectsFloorSelector">
                        <Image className="cursor" src={Bukhaidze1} />
                      </Link>
                    </div>

                    <div className="projects__image_dark">
                      <Link href="/ProjectsFloorSelector">
                        <Image className="cursor" src={Bukhaidze1d} />
                      </Link>
                    </div>
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
