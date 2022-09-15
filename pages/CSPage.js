import Nav from "../components/nav";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Row, Container, Col, input, Form } from "react-bootstrap";
import en from "../locales/enContact";
import ru from "../locales/ruContact";
import ge from "../locales/geContact";
import Link from "next/link";

import cswhite from "../assets/sep13/comingsoon/cswhite.png";
import csblack from "../assets/sep13/comingsoon/csblack.png";
import { useTitle } from "../components/title";

export default function IndexPage() {
  const [showBanner, setBanner] = useState(true);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "ru" ? ru : ge;
  useTitle("Apart.ge");
  return (
    <div>
      <div className="hero mt-30">
        <Nav />
        <div>
          <Container>
            <Row>
              <Col xs="12">
                <div className="mt-60 projects__image">
                  <Image src={cswhite} />
                </div>
              </Col>
              <Col xs="12">
                <div className="mt-60 projects__image_dark">
                  <Image src={csblack} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
