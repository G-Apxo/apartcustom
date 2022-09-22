import Footer from "../../components/footer";
import Nav from "../../components/nav";
import axios from "axios";
import { Button, Row, Container, Col, input } from "react-bootstrap";
import en from "../../locales/enSingleBlog";
import ru from "../../locales/ruSingleBlog";
import ge from "../../locales/geSingleBlog";
import { useRouter } from "next/router";
import { useState } from "react";
export const getStaticPaths = async () => {
  const res = await fetch("https://efd2-2a0b-6204-33bb-4a00-8166-c098-5628-a4b4.ngrok.io/api/urls/en");
  const data = await res.json();

  const paths = data.map(blog => {
    return {
      params: { url: blog.url.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const url = context.params.url;
  const res = await fetch(`https://efd2-2a0b-6204-33bb-4a00-8166-c098-5628-a4b4.ngrok.io/api/blog/en/` + url);
  const data = await res.json();
  console.log(data);
  return {
    props: { blog: data },
  };
};

const Post = ({ blog }) => {
  const [showBanner, setBanner] = useState(true);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "ru" ? ru : ge;
  return (
    <>
      <Nav>...</Nav>
      <Container>
        <div className="mt-120 mb-80">
          <p className="goback">{t.goBack}</p>
        </div>
        <Col className="col-12 mb-80">
          <img src={blog[0].mainImage} className="blog_banner__img" alt="banner immage" />
        </Col>
        <Row className="align-items-center  mb-20 mb-10 ">
          <Col xs="2" lg="4" md="4" sm="4" xl="4" xxl="4"></Col>
          <Col xs="8" lg="4" md="4" sm="4" xl="4" xxl="4">
            <p className="text-center">{blog[0].createdAt}</p>
            <h4 className="text-center">{blog[0].title}</h4>
          </Col>
          <Col xs="2" lg="4" md="4" sm="4" xl="4" xxl="4"></Col>
        </Row>
        <Row className="align-items-center ">
          <Col xs="2" lg="4" md="4" sm="4" xl="4" xxl="4">
            <hr />
          </Col>
          <Col xs="8" lg="4" md="4" sm="4" xl="4" xxl="4"></Col>
          <Col xs="2" lg="4" md="4" sm="4" xl="4" xxl="4">
            <hr />
          </Col>
        </Row>
        <Col className=" single-blog-texts col-12 d-flex justify-content-center mt-5">
          <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
            <div dangerouslySetInnerHTML={{ __html: blog[0].blogContent }}></div>
          </Col>
        </Col>
        <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" className="mb-5 mt-5">
          <h2>{t.recentBlog}</h2>
          <hr />
        </Col>
        <Row>
          <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" className="mt-5">
            <div className="blog-image__content">
              <div className="text__contianer">
                <p>{blog[1].createdAt}</p>
                <h2>{blog[1].title}</h2>
              </div>
              <img src={blog[1].mainImage} alt="blog immage" />
            </div>
          </Col>
          <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" className="mb-5 mt-5">
            <div className="blog-image__content">
              <div className="text__contianer">
                <p>{blog[2].createdAt}</p>
                <h2>{blog[2].title}</h2>
              </div>
              <img src={blog[2].mainImage} alt="blog immage" />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};
export default Post;
