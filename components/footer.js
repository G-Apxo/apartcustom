import React from "react";
import { Nav, Button, Row, Container, input, Col } from "react-bootstrap";
import en from '../locales/enFooter';
import fr from '../locales/ruFooter';
import { useRouter } from "next/router";
import { useState } from "react";

function Footer() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;
  
    const changeLanguage = (e) => {
      const locale = e.target.value;
      router.push(router.pathname, router.asPath, { locale });
    };

  return (
      <div className="footer-inside-white footer-inside-black ">
        <Container>
          <Row>
            <Col md={2}>
              <p className="copyright">{t.copy}</p>
            </Col>
            <Col md={2}>
              <p className="policy">{t.policy}</p>
            </Col>
            <Col md={2}>
              <p className="infos--white">
                <a>{t.num}</a>
              </p>
              <p className="infos--white">
                <a>{t.info}</a>
              </p>
            </Col>
            <Col md={2}>
              <div className="box">
                <p className="social">{t.fb}</p>
                <p className="social">{t.ig}</p>
                <p className="social">{t.yt}</p>
                <p className="social">{t.p}</p>
              </div>
            </Col>
            <Col md={4}>
              <p className="languages">{t.ge} /{t.en} / {t.ru}</p>
              <p className="languages">{t.terms}</p>
            </Col>
          </Row>
        </Container>
      </div>

  );
}
export default Footer;