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
import axios from "axios";
export default function IndexPage() {
  const [showBanner, setBanner] = useState(true);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "ru" ? ru : ge;

  const [callonicalUrl1, setcallonicalUrl,] = useState('');
  const [customurl, setURl,] = useState('');
  const [title1, setTitle,] = useState('');
  const [createDate, setCreateDate,] = useState('');
  const [language, setLang] = useState(' ');
  const [ base64img,setBase64img ] = useState(' ');
  const [ blogContent, setBlogContent] = useState(' ');

  
  const data = []

  const blogDesc = () => {
    var config = {
      method: 'get',
      url: 'https://c0e7-2a0b-6204-33bb-4a00-8990-8d22-911b-bfa9.ngrok.io/api/blog/ge/new-complex-from-apart',
      headers: { 
        'Authorization': 'Basic YXBhcnRfdXNlcm5hbWU6YXBhcnRfcGFzc3dvcmRfYnJhZ3p5'
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      data = response.data[0]
      const createdAtFormated = data.createdAt.split("T")[0]
      setCreateDate(createdAtFormated)
      setTitle(data.title)
      setBlogContent(data.blogContent)
      setBase64img(data.mainImage)
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  blogDesc();



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
                <img src={base64img} alt="banner immage" />
              </Col>
              <Row className="align-items-center  mb-20 mb-10 ">
                <Col xs="2" lg="4" md="4" sm="4" xl="4" xxl="4">
                  {/* <hr /> */}
                </Col>
                <Col xs="8" lg="4" md="4" sm="4" xl="4" xxl="4">
                  <p className="text-center">{createDate}</p>
                  <h4 className="text-center">{title1}</h4>
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
                <Col xs="12" lg="12" md="12" sm="12" xl="12" xxl="12">
                    <div dangerouslySetInnerHTML={{__html: blogContent}}></div>
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
