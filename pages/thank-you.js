import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import en from '../locales/enThanks';
import ru from '../locales/ruThanks';
import ge from '../locales/geThanks';
import Logo from '../assets/logo.svg';
import { Col, Container, Row } from 'react-bootstrap';
import Head from 'next/head';

export default function thankyou() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : locale === 'ru' ? ru : ge;
    return (
        <>
            <Head>
                <link rel='icon' href='/favicon/favicon.ico' />
            </Head>

            <div className='four-oh-four'>
                <Container>
                    <Row className='thanks-row'>
                        <Col xs='12' lg='12' md='12' sm='12' xl='7' xxl='7' className='thanks-content'>
                            <Image src={Logo} alt='Logo' className='thanks-logo' />
                            <p className='thanks-t1'>{t.text1}</p>
                            <p className='thanks-t2'>{t.text2}</p>
                        </Col>
                        <Col xs='12' md='12' sm='12' lg='3' xl='3' xxl='3'>
                            <Link href='/' passHref>
                                <a className='thank-you-link'>
                                    <button className='btn-send btn btn-primary btn-404'>{t.button}</button>
                                </a>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
