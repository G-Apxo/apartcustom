import React from 'react';
import { Nav, Button, Row, Container, input, Col } from 'react-bootstrap';
import en from '../locales/enFooter';
import fr from '../locales/ruFooter';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Link } from 'react-bootstrap-icons';

function Footer() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;

    const changeLanguage = e => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale });
    };

    return (
        <div className='footer-inside-white footer-inside-black'>
            <Container>
                <Row className='justify-space-between'>
                    <Col md={3}>
                        <p className='copyright'>{t.copy}</p>
                    </Col>
                    <Col md={3}>
                        <p className='policy'>{t.policy}</p>
                    </Col>
                    <Col md={2}>
                        <p className='infos--white'>
                            <a>{t.num}</a>
                        </p>
                        <p className='infos--white'>
                            <a>{t.info}</a>
                        </p>
                    </Col>
                    <Col md={2}>
                        <Row>
                            <Col xs='6'>
                                <div className='box'>
                                    <a target='_blank' href='https://www.facebook.com/apartdevelopment'>
                                        <p className='social'>{t.fb}</p>
                                    </a>
                                    <a target='_blank' href='https://www.instagram.com/apartdevelopment/'>
                                        <p className='social'>{t.ig}</p>
                                    </a>
                                </div>
                            </Col>
                            <Col xs='6'>
                                <div className='box'>
                                    <a
                                        target='_blank'
                                        href='https://www.youtube.com/channel/UCJgX6dfa84r7FkWIBof3z7A'
                                    >
                                        <p className='social'>{t.yt}</p>
                                    </a>
                                    <a
                                        target='_blank'
                                        href='https://www.linkedin.com/company/apart-development/'
                                    >
                                        <p className='social'>{t.p}</p>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    {/* <Col md={2}>
            <p className="languages">
              {t.ge} /{t.en} / {t.ru}
            </p>
            <p className="languages">{t.terms}</p>
          </Col> */}
                </Row>
            </Container>
        </div>
    );
}
export default Footer;
