import Nav from "../components/nav";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Row, Container, Col, input } from "react-bootstrap";
import en from "../locales/enSingleBlog";
import ru from "../locales/ruSingleBlog";
import ge from "../locales/geSingleBlog";
import Link from "next/link";
import BannerImg from "../assets/singleblog.png";
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
          <div>
            <Container>
              <div className="mt-120 mb-80">
                <p className="goback">
                  {/* <BsArrowUpLeft /> */}
                  {t.goBack}
                </p>
              </div>
              <Col className="col-12 mb-80">
                <Image src={BannerImg} alt="banner immage" />
              </Col>
              <Row className="align-items-center  mb-20 mb-10 ">
                <Col xs="2" lg="4" md="4" sm="4" xl="4" xxl="4">
                  {/* <hr /> */}
                </Col>
                <Col xs="8" lg="4" md="4" sm="4" xl="4" xxl="4">
                  <p className="text-center">{t.date}</p>
                  <h4 className="text-center">{t.title}?</h4>
                </Col>
                <Col xs="2" lg="4" md="4" sm="4" xl="4" xxl="4">
                  {/* <hr /> */}
                </Col>
              </Row>
              <Row className="align-items-center ">
                <Col xs="2" lg="4" md="4" sm="4" xl="4" xxl="4">
                  <hr />
                </Col>
                <Col xs="8" lg="4" md="4" sm="4" xl="4" xxl="4">
                  {/* <p className="text-center">November 23. 2021</p>
              <h4 className="text-center">WHY IS THE REAL ESTATE THE SAFEST INVESTMENT?</h4> */}
                </Col>
                <Col xs="2" lg="4" md="4" sm="4" xl="4" xxl="4">
                  <hr />
                </Col>
              </Row>
              <Col className=" single-blog-texts col-12 d-flex justify-content-center mt-5">
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <p className="mb-30">{t.textp1}</p>
                  <p>{t.textp2}</p>
                  <p>{t.textp3}</p>
                  <p className="mb-30">{t.textp4}</p>

                  <Image src={BannerImg} />

                  <p className="mt-30">{t.textp5}</p>
                  <p>{t.textp6}</p>
                  <p>{t.textp7}</p>
                </Col>
              </Col>
              <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" className="mb-5 mt-5">
                <h2>{t.recentBlog}</h2>
                <hr />
              </Col>
              <Row>
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" className="mt-5">
                  <div className="image__box">
                    <div className="blog-image__content">
                      <p>{t.blogDesc}</p>
                      <h2>{t.blog1}</h2>
                    </div>
                  </div>
                </Col>
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" className="mb-5 mt-5">
                  <div className="image__box">
                    <div className="blog-image__content">
                      <p>{t.blogDesc}</p>
                      <h2>{t.blog1}</h2>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
