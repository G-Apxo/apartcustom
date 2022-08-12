import Nav from "../components/nav";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Row, Container, Col, input } from "react-bootstrap";
import en from "../locales/enAbout";
import ru from "../locales/ruAbout";
import ge from "../locales/geAbout";
import Beqa from "../assets/beqa.svg";
import Quote from "../assets/quote.svg";
import Team1 from "../assets/teamgen/gia.png";
import Team2 from "../assets/teamgen/tata.JPG";
import Team3 from "../assets/teamgen/tornikewil.JPG";
import Team4 from "../assets/teamgen/lashasaban.JPG";
import Team5 from "../assets/teamgen/vaxtang.JPG";
import Team6 from "../assets/teamgen/ani.JPG";
import Team7 from "../assets/teamgen/sabajan.JPG";
import Team8 from "../assets/teamgen/archil.JPG";
import Team9 from "../assets/teamgen/natuka.jpg";
import Team10 from "../assets/teamgen/giorgijap.jpg";
import Team11 from "../assets/teamgen/iraklichrik.JPG";
import Team12 from "../assets/teamgen/tika.png";
import Team13 from "../assets/teamgen/anano.png";
import Team14 from "../assets/teamgen/levankand.JPG";
import Team15 from "../assets/teamgen/avto.JPG";
import Team16 from "../assets/teamgen/mamukabarat.JPG";
import Team17 from "../assets/teamgen/sandrokavel.JPG";
import Team18 from "../assets/teamgen/lizilaz.JPG";
import Team19 from "../assets/teamgen/kaxapircx.png";
import Team20 from "../assets/teamgen/irakliiob.JPG";
import Team21 from "../assets/teamgen/lashachikob.JPG";
import Team22 from "../assets/teamgen/kaxapircx.png";
import Team23 from "../assets/teamgen/kaxagab.png";
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
        <Container className="mt-5">
          <h1 className="about-title ">{t.title}</h1>
          <Row className="row-marginer justify-content-end">
            <Col xs="12" lg="3" md="3" sm="3" xl="3" xxl="3" className="d-flex justify-content-center">
              <Image src={Beqa} alt="banner immage" />
            </Col>
            <Col xs="12" lg="5" md="5" sm="5" xl="5" xxl="5" className="align-items-center d-flex ">
              <div className="about-htext-styles">
                <p>{t.tsubt}</p>
                <h2>{t.tname}</h2>
                <h3>{t.tpos}</h3>
              </div>
            </Col>
            <Col xs="2" className="no_mobile">
              <Image src={Quote} alt="banner immage" />
            </Col>
          </Row>
          <Row className="justify-content-between mb-60 mt-60">
            <Col xs="5" lg="3" md="3" sm="3" xl="3" xxl="3">
              <hr />
            </Col>
            <Col xs="5" lg="3" md="3" sm="3" xl="3" xxl="3">
              <hr />
            </Col>
          </Row>
          <Row className="mb-60 mt-60 ">
            {/* <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6"> */}
            {/* <Row> */}
            <Col xxl="6" className="test13">
              <Col xs="12" lg="12" md="12" sm="12" xl="12" xxl="5">
                <h3 className="about--text__hmod">{t.ath} </h3>
              </Col>
              <Col xs="12" lg="12" md="12" sm="12" xl="12" xxl="7">
                <p className="about--text__ptmod2">{t.att}</p>
              </Col>
            </Col>
            <Col xxl="6">
              <Col xxl="12" className="test14 test15">
                <Col
                  xs="12"
                  lg="12"
                  md="12"
                  sm="12"
                  xl="12"
                  xxl="5"
                  // className="mt-60 "
                >
                  <h3 className="about--text__hmod">{t.ath2}</h3>
                </Col>
                <Col xs="12" lg="12" md="12" sm="12" xl="12" xxl="7">
                  <p className="about--text__ptmod__mod ">{t.att2}</p>
                </Col>
              </Col>
              <Col xxl="12" className="test14">
                <Col
                  xs="12"
                  lg="12"
                  md="12"
                  sm="12"
                  xl="12"
                  xxl="5"
                  // className="mt-60 "
                >
                  <h3 className="about--text__hmod">{t.ath3}</h3>
                </Col>
                <Col xs="12" lg="12" md="12" sm="12" xl="12" xxl="7">
                  <p className="about--text__ptmod__mod ">{t.att3}</p>
                </Col>
              </Col>
            </Col>

            {/* </Row> */}
            {/* </Col> */}
            {/* <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6"> */}
            {/* <Row> */}

            {/* </Row> */}
            {/* </Col> */}
          </Row>

          <Col xs="12" className="mb-60 mt-60">
            <iframe
              width="100%"
              height="664"
              src="https://www.youtube.com/embed/ZVT5S0XYQDY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
        </Container>

        <section className="cover mt-120"></section>
        <Container className="mb-120 mt-120">
          <Row className="row-marginer mb-60 ">
            <h1>{t.tth}</h1>
          </Row>
          <Row className="sixty-row">
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team1} alt="banner immage" />
              {/* //10 */}
              <h3>{t.tt1} </h3>
              <p>{t.tt1p}</p>
            </Col>
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team2} alt="banner immage" />
              {/* //13 */}
              <h3>{t.tt2} </h3>
              <p>{t.tt2p}</p>
            </Col>
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team3} alt="banner immage" />
              {/* //6 */}
              <h3>{t.tt3} </h3>
              <p>{t.tt3p}</p>
            </Col>

            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team4} alt="banner immage" />
              {/* //2 */}
              <h3>{t.tt4} </h3>
              <p>{t.tt4p}</p>
            </Col>
          </Row>

          <Row className="sixty-row">
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team5} alt="banner immage" />
              {/* //19 */}
              <h3>{t.tt5} </h3>
              <p>{t.tt5p}</p>
            </Col>
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team6} alt="banner immage" />
              {/* //3 */}
              <h3>{t.tt6} </h3>
              <p>{t.tt6p}</p>
            </Col>
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team7} alt="banner immage" />
              {/* //18 */}
              <h3>{t.tt7} </h3>
              <p>{t.tt7p}</p>
            </Col>
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team8} alt="banner immage" />
              {/* //5 */}
              <h3>{t.tt8} </h3>
              <p>{t.tt8p}</p>
            </Col>
          </Row>

          <Row className="sixty-row">
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team9} alt="banner immage" />
              {/* //12 */}
              <h3>{t.tt9} </h3>
              <p>{t.tt9p}</p>
            </Col>
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team10} alt="banner immage" />
              {/* //11 */}
              <h3>{t.tt10} </h3>
              <p>{t.tt10p}</p>
            </Col>
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team11} alt="banner immage" />
              {/* //15 */}
              <h3>{t.tt11} </h3>
              <p>{t.tt11p}</p>
            </Col>
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team12} alt="banner immage" />
              {/* //1 */}
              <h3>{t.tt12} </h3>
              <p>{t.tt12p}</p>
            </Col>
          </Row>

          <Row className="sixty-row">
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team13} alt="banner immage" />
              {/* //17 */}
              <h3>{t.tt13} </h3>
              <p>{t.tt13p}</p>
            </Col>
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team14} alt="banner immage" />
              {/* //16 */}
              <h3>{t.tt14} </h3>
              <p>{t.tt14p}</p>
            </Col>
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team15} alt="banner immage" />
              {/* //14 */}
              <h3>{t.tt15} </h3>
              <p>{t.tt15p}</p>
            </Col>
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team16} alt="banner immage" />
              <h3>{t.tt16} </h3>
              <p>{t.tt16p}</p>
            </Col>
          </Row>

          <Row className="sixty-row">
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team17} alt="banner immage" />

              <h3>{t.tt17} </h3>
              <p>{t.tt17p}</p>
            </Col>
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team18} alt="banner immage" />

              <h3>{t.tt18} </h3>
              <p>{t.tt18p}</p>
            </Col>
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team19} alt="banner immage" />

              <h3>{t.tt19} </h3>
              <p>{t.tt19p}</p>
            </Col>
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team20} alt="banner immage" />

              <h3>{t.tt20} </h3>
              <p>{t.tt20p}</p>
            </Col>
          </Row>
          <Row className="sixty-row">
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team21} alt="banner immage" />

              <h3>{t.tt21} </h3>
              <p>{t.tt21p}</p>
            </Col>
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team22} alt="banner immage" />

              <h3>{t.tt22} </h3>
              <p>{t.tt22p}</p>
            </Col>
            <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team23} alt="banner immage" />

              <h3>{t.tt23} </h3>
              <p>{t.tt23p}</p>
            </Col>
            {/* <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
              <Image src={Team24} alt="banner immage" />

              <h3>{t.tt24} </h3>
              <p>{t.tt24p}</p>
            </Col> */}
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
