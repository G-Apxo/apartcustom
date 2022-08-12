import Nav from "../components/nav";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Row, Container, Col, input } from "react-bootstrap";
import en from "../locales/enBlog";
import ru from "../locales/ruBlog";
import ge from "../locales/geBlog";
import Link from "next/link";
import Footer from '../components/footer';

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
          <Container>
            <h2 className="row-marginer mt-120 mb-60">Blog</h2>
            <Row>
              <Link className="blog-single-blog" href="/SingleBlog">
                <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <div className="image__box blog__1">
                    <div className="blog-image__content">
                      {/* ar mushaobs css */}
                      <p>November 23. 2021</p>
                      <h2>Bukhaidze I Turn 6 our new project</h2>
                    </div>
                  </div>
                </Col>
              </Link>
              <Link className="blog-single-blog" href="/SingleBlog">
                <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <div className="image__box blog__2">
                    <div className="blog-image__content">
                      <p>November 23. 2021</p>
                      <h2>Bukhaidze I Turn 6 our new project</h2>
                    </div>
                  </div>
                </Col>
              </Link>
            </Row>
            <Row>
              <Link className="blog-single-blog" href="/SingleBlog">
                <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <div className="image__box blog__3">
                    <div className="blog-image__content">
                      <p>November 23. 2021</p>
                      <h2>Bukhaidze I Turn 6 our new project</h2>
                    </div>
                  </div>
                </Col>
              </Link>
              <Link className="blog-single-blog" href="/SingleBlog">
                <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <div className="image__box blog__4">
                    <div className="blog-image__content">
                      <p>November 23. 2021</p>
                      <h2>Bukhaidze I Turn 6 our new project</h2>
                    </div>
                  </div>
                </Col>
              </Link>
            </Row>
            <Row>
              <Link href="/SingleBlog">
                <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <div className="image__box blog__5">
                    <div className="blog-image__content">
                      <p>November 23. 2021</p>
                      <h2>Bukhaidze I Turn 6 our new project</h2>
                    </div>
                  </div>
                </Col>
              </Link>
              <Link href="/SingleBlog">
                <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <div className="image__box blog__6">
                    <div className="blog-image__content">
                      <p>November 23. 2021</p>
                      <h2>Bukhaidze I Turn 6 our new project</h2>
                    </div>
                  </div>
                </Col>
              </Link>
            </Row>
          </Container>
        </div>
      </div>
     
      <Footer />
    </div>
  );
}
