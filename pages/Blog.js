import Nav from "../components/nav";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Row, Container, Col, input } from "react-bootstrap";
import en from "../locales/enBlog";
import ru from "../locales/ruBlog";
import ge from "../locales/geBlog";
import Link from "next/link";
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
          <Container className="mb-120">
            <h2 className="row-marginer mt-120 mb-60">Blog</h2>
            <Row>
              <Link className="blog-single-blog" href="/singleblog">
                <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <div className="">
                    <div className="blog-image__content">
                      {/* ar mushaobs css */}
                      <p className="text-dark">November 23. 2021</p>
                      <h2 className="text-dark">Bukhaidze I Turn 6 our new project</h2>
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
