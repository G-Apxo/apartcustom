import Nav from '../components/nav';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Button, Row, Container, Col, Carousel } from 'react-bootstrap';
import en from '../locales/enProjects';
import ru from '../locales/ruProjecs';
import ge from '../locales/geProjects';
import Link from 'next/link';
import Slide1 from '../assets/oldcitypanorama.png';
import Vector from '../assets/seeprjvector.png';
import Footer from '../components/footer';
import Oldcity1 from '../assets/projectslider/OLD CITY 1.jpg';
import Oldcity2 from '../assets/projectslider/OLD CITY 2.jpg';
import Oldcity3 from '../assets/projectslider/OLD CITY 3.jpg';

import Bukhaidze1 from '../assets/finalRenders/3photos/Bukhaidze 6a/3-bukhaidze-6a-1.jpg';
import Bukhaidze1d from '../assets/finalRenders/3photos/Bukhaidze 6a/3-bukhaidze-6a-1-night.jpg';
import Bukhaidze2 from '../assets/finalRenders/3photos/Bukhaidze 6a/3-bukhaidze-6a-2.jpg';
import Bukhaidze2d from '../assets/finalRenders/3photos/Bukhaidze 6a/3-bukhaidze-6a-2-night.jpg';
import Bukhaidze3 from '../assets/finalRenders/3photos/Bukhaidze 6a/3-bukhaidze-6a-3.jpg';
import Bukhaidze3d from '../assets/finalRenders/3photos/Bukhaidze 6a/3-bukhaidze-6a-3-night.jpg';

import Bukhaidze61 from '../assets/finalRenders/3photos/Bukhaidze 6/3-Bukhaidze-6-1.jpg';
import Bukhaidze61d from '../assets/finalRenders/3photos/Bukhaidze 6/3-Bukhaidze-6-1-night.jpg';
import Bukhaidze62 from '../assets/finalRenders/3photos/Bukhaidze 6/3-Bukhaidze-6-2.jpg';
import Bukhaidze62d from '../assets/finalRenders/3photos/Bukhaidze 6/3-Bukhaidze-6-2-night.jpg';
import Bukhaidze63 from '../assets/finalRenders/3photos/Bukhaidze 6/3-Bukhaidze-6-3.jpg';
import Bukhaidze63d from '../assets/finalRenders/3photos/Bukhaidze 6/3-Bukhaidze-6-3-night.jpg';

import Taghi1 from '../assets/finalRenders/3photos/Taghi/3-Taghi-1.jpg';
import Taghi1d from '../assets/finalRenders/3photos/Taghi/3-Taghi-1-night.jpg';
import Taghi2 from '../assets/finalRenders/3photos/Taghi/3-Taghi-2.jpg';
import Taghi2d from '../assets/finalRenders/3photos/Taghi/3-Taghi-2-night.jpg';
import Taghi3 from '../assets/finalRenders/3photos/Taghi/3-Taghi-3.jpg';
import Taghi3d from '../assets/finalRenders/3photos/Taghi/3-Taghi-3-night.jpg';

import Ezo1 from '../assets/finalRenders/3photos/Ezo/3-ezo-1.jpg';
import Ezo1d from '../assets/finalRenders/3photos/Ezo/3-ezo-1-night.jpg';
import Ezo2 from '../assets/finalRenders/3photos/Ezo/3-ezo-2.jpg';
import Ezo2d from '../assets/finalRenders/3photos/Ezo/3-ezo-2-night.jpg';
import Ezo3 from '../assets/finalRenders/3photos/Ezo/3-ezo-3.jpg';
import Ezo3d from '../assets/finalRenders/3photos/Ezo/3-ezo-3-night.jpg';

import Panorama4 from '../assets/finalRenders/3photos/OCP/3-OLD-CITY-1.jpg';
import Panorama4d from '../assets/finalRenders/3photos/OCP/3-OLD-CITY-1-night.jpg';
import Panorama5 from '../assets/finalRenders/3photos/OCP/3-OLD-CITY-2.jpg';
import Panorama5d from '../assets/finalRenders/3photos/OCP/3-OLD-CITY-2-night.jpg';
import Hero from '../assets/finalRenders/3photos/OCP/3-OLD-CITY-3.jpg';
import Herod from '../assets/finalRenders/3photos/OCP/3-OLD-CITY-3-night.jpg';
import Head from 'next/head';
import { useTitle } from '../components/title';
import Layout from '../components/Layout';
import Script from 'next/script';
export default function IndexPage() {
    const [showBanner, setBanner] = useState(true);
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : locale === 'ru' ? ru : ge;

    return (
        <div className='projects_page'>
            <Head>
                {useEffect(() => {
                    import('react-facebook-pixel')
                        .then(x => x.default)
                        .then(ReactPixel => {
                            ReactPixel.init('819167662644146');
                            ReactPixel.pageView();

                            router.events.on('routeChangeComplete', () => {
                                ReactPixel.pageView();
                            });
                        });
                }, [router.events])}
                <title>{t.titlet}</title>
                <link rel='icon' href='/favicon/favicon.ico' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <meta property='og:title' content={t.titlet} />
                <meta name='description' content={t.metad}></meta>
                <meta property='og:image' content='https://imageholder.netlify.app/imgs/prj.jpg' />
                <meta name='facebook-domain-verification' content='lj973bqb1is3jcy6uh3xa972y05kuu' />
                <Script async src='https://www.googletagmanager.com/gtag/js?id=G-H58RBQJ53W'></Script>
                <Script>
                    {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-H58RBQJ53W');
        `}
                </Script>
            </Head>
            <Layout>
                <div className='contact__section'>
                    <Container className='projects-title-distance'>
                        <Row>
                            <h1 className='text-center'> {t.title}</h1>
                        </Row>
                    </Container>
                    <div className='parent_only_mobile'>
                        <div className=''>
                            <div className='test1313'>
                                <Container className='container-borderer'>
                                    <Row>
                                        <Col xs='12' className='projects__image'>
                                            <Carousel style={{ opacity: 1 }}>
                                                <Carousel.Item className='fuul__width  '>
                                                    <Row>
                                                        <Image
                                                            src={Hero}
                                                            alt='banner immage'
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Panorama4}
                                                            alt='banner immage '
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Panorama5}
                                                            alt='banner immage'
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                            </Carousel>
                                        </Col>
                                        <Col xs='12' className='projects__image_dark'>
                                            <Carousel style={{ opacity: 1 }}>
                                                <Carousel.Item className='fuul__width  '>
                                                    <Row>
                                                        <Image
                                                            src={Herod}
                                                            alt='banner immage'
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Panorama4d}
                                                            alt='banner immage '
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Panorama5d}
                                                            alt='banner immage'
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                            </Carousel>
                                        </Col>
                                        <Col xs='12'>
                                            <Row>
                                                <Col xs='12'>
                                                    <Link href={t.ocpLink}>
                                                        <div className='mb-5 projects--title cursor'>
                                                            <p>{t.prj1d}</p>
                                                            <h2>{t.prj1t}</h2>
                                                        </div>
                                                    </Link>
                                                </Col>
                                                <Col xs='6'>
                                                    <div className=' projects--texts__basics'>
                                                        <p className='projects--texts__op'>{t.prj1l}</p>
                                                        <h3 className='project--location__mod projects--texts__basics'>
                                                            {t.prj1lt}
                                                        </h3>
                                                        <Link href={t.ocpLink} passHref>
                                                            <a className='seo-link'>
                                                                <i className='project--see cursor  '>
                                                                    {t.viewPrj}{' '}
                                                                    <Image
                                                                        src={Vector}
                                                                        alt='arrow'
                                                                        className='arrow'
                                                                    />
                                                                </i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </Col>
                                                <Col xs='6'>
                                                    <div>
                                                        <p className='projects--texts__op projects--texts__create '>
                                                            {t.prj1c}
                                                        </p>
                                                        <h3 className='projects--texts__basics projects--texts__done '>
                                                            {t.prj1ct}
                                                        </h3>
                                                    </div>
                                                    <div></div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className=' mt-5'>
                            <div className='test1313'>
                                <Container className='container-borderer'>
                                    <Row>
                                        <Col xs='12' className='projects__image'>
                                            <Carousel style={{ opacity: 1 }}>
                                                <Carousel.Item className='fuul__width  '>
                                                    <Row>
                                                        <Image
                                                            src={Ezo1}
                                                            alt='banner immage'
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Ezo2}
                                                            alt='banner immage '
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Ezo3}
                                                            alt='banner immage'
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                            </Carousel>
                                        </Col>
                                        <Col xs='12' className='projects__image_dark'>
                                            <Carousel style={{ opacity: 1 }}>
                                                <Carousel.Item className='fuul__width  '>
                                                    <Row>
                                                        <Image
                                                            src={Ezo1d}
                                                            alt='banner immage'
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Ezo2d}
                                                            alt='banner immage '
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Ezo3d}
                                                            alt='banner immage'
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                            </Carousel>
                                        </Col>
                                        <Col xs='12'>
                                            <Row>
                                                <Col xs='12'>
                                                    <Link href={t.ezoLink}>
                                                        <div className='mb-5 projects--title cursor'>
                                                            <p>{t.prj1d}</p>
                                                            <h2>{t.prj2t}</h2>
                                                        </div>
                                                    </Link>
                                                </Col>
                                                <Col xs='6'>
                                                    <div className=' projects--texts__basics'>
                                                        <p className='projects--texts__op'>{t.prj2l}</p>
                                                        <h3 className='project--location__mod projects--texts__basics'>
                                                            {t.prj1lt}
                                                        </h3>
                                                        <Link href={t.ezoLink} passHref>
                                                            <a className='seo-link'>
                                                                <i className='project--see cursor  '>
                                                                    {t.viewPrj}{' '}
                                                                    <Image
                                                                        src={Vector}
                                                                        alt='arrow'
                                                                        className='arrow'
                                                                    />
                                                                </i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </Col>
                                                <Col xs='6'>
                                                    <div>
                                                        <p className='projects--texts__op projects--texts__create'>
                                                            {t.prj1c}
                                                        </p>
                                                        <h3 className='projects--texts__basics projects--texts__done '>
                                                            {t.prj1ct}
                                                        </h3>
                                                    </div>
                                                    <div></div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className=' mt-5'>
                            <div className='test1313'>
                                <Container className='container-borderer'>
                                    <Row>
                                        <Col xs='12' className='projects__image'>
                                            <Carousel style={{ opacity: 1 }}>
                                                <Carousel.Item className='fuul__width  '>
                                                    <Row>
                                                        <Image
                                                            src={Taghi1}
                                                            alt='banner immage'
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Taghi2}
                                                            alt='banner immage '
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Taghi3}
                                                            alt='banner immage'
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                            </Carousel>
                                        </Col>
                                        <Col xs='12' className='projects__image_dark'>
                                            <Carousel style={{ opacity: 1 }}>
                                                <Carousel.Item className='fuul__width  '>
                                                    <Row>
                                                        <Image
                                                            src={Taghi1d}
                                                            alt='banner immage'
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Taghi2d}
                                                            alt='banner immage '
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Taghi3d}
                                                            alt='banner immage'
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                            </Carousel>
                                        </Col>
                                        <Col xs='12'>
                                            <Row>
                                                <Col xs='12'>
                                                    <Link href={t.taghiLink}>
                                                        <div className='mb-5 projects--title cursor'>
                                                            <p>{t.prj1d}</p>
                                                            <h2>{t.prj3t}</h2>
                                                        </div>
                                                    </Link>
                                                </Col>
                                                <Col xs='6'>
                                                    <div className=' projects--texts__basics'>
                                                        <p className='projects--texts__op'>{t.prj3l}</p>
                                                        <h3 className='project--location__mod projects--texts__basics'>
                                                            {t.prj1lt}
                                                        </h3>
                                                        <Link href={t.taghiLink} passHref>
                                                            <a className='seo-link'>
                                                                <i className='project--see cursor  '>
                                                                    {t.viewPrj}{' '}
                                                                    <Image
                                                                        src={Vector}
                                                                        alt='arrow'
                                                                        className='arrow'
                                                                    />
                                                                </i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </Col>
                                                <Col xs='6'>
                                                    <div>
                                                        <p className='projects--texts__op projects--texts__create'>
                                                            {t.prj1c}
                                                        </p>
                                                        <h3 className='projects--texts__basics projects--texts__done '>
                                                            {t.prj1ct}
                                                        </h3>
                                                    </div>
                                                    <div></div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className='e mt-5'>
                            <div className='test1313'>
                                <Container className='container-borderer'>
                                    <Row>
                                        <Col xs='12' className='projects__image'>
                                            <Carousel style={{ opacity: 1 }}>
                                                <Carousel.Item className='fuul__width  '>
                                                    <Row>
                                                        <Image
                                                            src={Bukhaidze61}
                                                            alt='banner immage'
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Bukhaidze62}
                                                            alt='banner immage '
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Bukhaidze63}
                                                            alt='banner immage'
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                            </Carousel>
                                        </Col>
                                        <Col xs='12' className='projects__image_dark'>
                                            <Carousel style={{ opacity: 1 }}>
                                                <Carousel.Item className='fuul__width  '>
                                                    <Row>
                                                        <Image
                                                            src={Bukhaidze61d}
                                                            alt='banner immage'
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Bukhaidze62d}
                                                            alt='banner immage '
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Bukhaidze63d}
                                                            alt='banner immage'
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                            </Carousel>
                                        </Col>
                                        <Col xs='12'>
                                            <Row>
                                                <Col xs='12'>
                                                    <Link href={t.b2Link}>
                                                        <div className='mb-5 projects--title cursor'>
                                                            <p>{t.prj1d}</p>
                                                            <h2>{t.prj4t}</h2>
                                                        </div>
                                                    </Link>
                                                </Col>
                                                <Col xs='6'>
                                                    <div className=' projects--texts__basics'>
                                                        <p className='projects--texts__op'>{t.prj4l}</p>
                                                        <h3 className='project--location__mod projects--texts__basics'>
                                                            {t.prj1lt}
                                                        </h3>
                                                        <Link href={t.b2Link} passHref>
                                                            <a className='seo-link'>
                                                                <i className='project--see cursor '>
                                                                    {t.viewPrj}{' '}
                                                                    <Image
                                                                        src={Vector}
                                                                        alt='arrow'
                                                                        className='arrow'
                                                                    />
                                                                </i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </Col>
                                                <Col xs='6'>
                                                    <div>
                                                        <p className='projects--texts__op projects--texts__create'>
                                                            {t.prj1c}
                                                        </p>
                                                        <h3 className='projects--texts__basics projects--texts__done '>
                                                            {t.prj1ct}
                                                        </h3>
                                                    </div>
                                                    <div></div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className=' mt-5'>
                            <div className='test1313'>
                                <Container className='container-borderer'>
                                    <Row>
                                        <Col xs='12' className='projects__image'>
                                            <Carousel style={{ opacity: 1 }}>
                                                <Carousel.Item className='fuul__width  '>
                                                    <Row>
                                                        <Image
                                                            src={Bukhaidze1}
                                                            alt='banner immage'
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Bukhaidze2}
                                                            alt='banner immage '
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Bukhaidze3}
                                                            alt='banner immage'
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                            </Carousel>
                                        </Col>
                                        <Col xs='12' className='projects__image_dark'>
                                            <Carousel style={{ opacity: 1 }}>
                                                <Carousel.Item className='fuul__width  '>
                                                    <Image
                                                        src={Bukhaidze1d}
                                                        alt='banner immage'
                                                        className='full_width'
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Bukhaidze2d}
                                                            alt='banner immage '
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                                <Carousel.Item className='fuul__width'>
                                                    <Row>
                                                        <Image
                                                            src={Bukhaidze3d}
                                                            alt='banner immage'
                                                            className='full_width'
                                                        />
                                                    </Row>
                                                </Carousel.Item>
                                            </Carousel>
                                        </Col>
                                        <Col xs='12'>
                                            <Row>
                                                <Col xs='12'>
                                                    <Link href={t.b1Link}>
                                                        <div className='mb-5 projects--title cursor'>
                                                            <p>{t.prj1d}</p>
                                                            <h2>{t.prj5t}</h2>
                                                        </div>
                                                    </Link>
                                                </Col>
                                                <Col xs='6'>
                                                    <div className=' projects--texts__basics'>
                                                        <p className='projects--texts__op'>{t.prj5l}</p>
                                                        <h3 className='project--location__mod projects--texts__basics'>
                                                            {t.prj1lt}
                                                        </h3>
                                                        <Link href={t.b1Link} passHref>
                                                            <a className='seo-link'>
                                                                <i className='project--see cursor '>
                                                                    {t.viewPrj}{' '}
                                                                    <Image
                                                                        src={Vector}
                                                                        alt='arrow'
                                                                        className='arrow'
                                                                    />
                                                                </i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </Col>
                                                <Col xs='6'>
                                                    <div>
                                                        <p className='projects--texts__op projects--texts__create'>
                                                            {t.prj1c}
                                                        </p>
                                                        <h3 className='projects--texts__basics projects--texts__done '>
                                                            {t.prj1ct}
                                                        </h3>
                                                    </div>
                                                    <div></div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                    <div className='parent_only_desktop'>
                        <div className='test1313'>
                            <Container className='container-borderer'>
                                <Row>
                                    <Col xs='3' className=''>
                                        <Link href={t.ocpLink}>
                                            <div className='mb-5 projects--title cursor'>
                                                <p>{t.prj1d}</p>
                                                <h2 className='mt-3'>{t.prj1t}</h2>
                                            </div>
                                        </Link>
                                        <div className='projects--legend__top projects--texts__basics'>
                                            <p className='projects--texts__op'>{t.prj1l}</p>
                                            <h3 className='project--location__mod projects--texts__basics'>
                                                {t.prj1lt}
                                            </h3>
                                        </div>
                                        <div className='projects--legend__bot'>
                                            <p className='projects--texts__op projects--texts__create'>
                                                {t.prj1c}
                                            </p>
                                            <h3 className='projects--texts__basics projects--texts__done '>
                                                {t.prj1ct}
                                            </h3>
                                        </div>
                                        <div>
                                            <Link href={t.ocpLink} passHref>
                                                <a className='seo-link'>
                                                    <i className='project--see cursor  '>
                                                        {t.viewPrj} <Image src={Vector} />
                                                    </i>
                                                </a>
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col className='border__left'></Col>
                                    <Col xs='8' className='projects-margin-fixer projects__image'>
                                        <Carousel style={{ opacity: 1 }}>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Image
                                                    src={Hero}
                                                    alt='banner immage'
                                                    className='full_width'
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Panorama4}
                                                        alt='banner immage '
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Panorama5}
                                                        alt='banner immage'
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                    <Col xs='8' className='projects-margin-fixer projects__image_dark'>
                                        <Carousel style={{ opacity: 1 }}>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Image
                                                    src={Herod}
                                                    alt='banner immage'
                                                    className='full_width'
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Panorama4d}
                                                        alt='banner immage '
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Panorama5d}
                                                        alt='banner immage'
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className='test1313'>
                            <Container className='container-borderer'>
                                <Row>
                                    <Col xs='3' className=''>
                                        <Link href={t.ezoLink}>
                                            <div className='mb-5 projects--title cursor'>
                                                <p>{t.prj2d}</p>
                                                <h2 className='mt-3'>{t.prj2t}</h2>
                                            </div>
                                        </Link>
                                        <div className='projects--legend__top projects--texts__basics'>
                                            <p className='projects--texts__op'>{t.prj2l}</p>
                                            <h3 className='project--location__mod projects--texts__basics'>
                                                {t.prj2lt}
                                            </h3>
                                        </div>
                                        <div className='projects--legend__bot'>
                                            <p className='projects--texts__op projects--texts__create'>
                                                {t.prj2c}
                                            </p>
                                            <h3 className='projects--texts__basics projects--texts__done '>
                                                {t.prj2ct}
                                            </h3>
                                        </div>
                                        <div>
                                            <Link href={t.ezoLink} passHref>
                                                <a className='seo-link'>
                                                    <i className='project--see cursor '>
                                                        {t.viewPrj} <Image src={Vector} />
                                                    </i>
                                                </a>
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col className='border__left'></Col>
                                    <Col xs='8' className='projects-margin-fixer projects__image'>
                                        <Carousel style={{ opacity: 1 }}>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Image
                                                    src={Ezo1}
                                                    alt='banner immage'
                                                    className='full_width'
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Ezo2}
                                                        alt='banner immage '
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Ezo3}
                                                        alt='banner immage'
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                    <Col xs='8' className='projects-margin-fixer projects__image_dark'>
                                        <Carousel style={{ opacity: 1 }}>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Image
                                                    src={Ezo1d}
                                                    alt='banner immage'
                                                    className='full_width'
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Ezo2d}
                                                        alt='banner immage '
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Ezo3d}
                                                        alt='banner immage'
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    {/* //ADDED */}
                    <div className='parent_only_desktop'>
                        <div className='test1313'>
                            <Container className='container-borderer'>
                                <Row>
                                    <Col xs='3' className=''>
                                        <Link href={t.taghiLink}>
                                            <div className='mb-5 projects--title cursor'>
                                                <p>{t.prj3d}</p>
                                                <h2 className='mt-3'>{t.prj3t}</h2>
                                            </div>
                                        </Link>
                                        <div className='projects--legend__top projects--texts__basics'>
                                            <p className='projects--texts__op'>{t.prj3l}</p>
                                            <h3 className='project--location__mod projects--texts__basics'>
                                                {t.prj3lt}
                                            </h3>
                                        </div>
                                        <div className='projects--legend__bot'>
                                            <p className='projects--texts__op projects--texts__create'>
                                                {t.prj3c}
                                            </p>
                                            <h3 className='projects--texts__basics projects--texts__done '>
                                                {t.prj3ct}
                                            </h3>
                                        </div>
                                        <div>
                                            <Link href={t.taghiLink} passHref>
                                                <a className='seo-link'>
                                                    <i className='project--see cursor  '>
                                                        {t.viewPrj} <Image src={Vector} />
                                                    </i>
                                                </a>
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col className='border__left'></Col>
                                    <Col xs='8' className='projects-margin-fixer projects__image'>
                                        <Carousel style={{ opacity: 1 }}>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Image
                                                    src={Taghi1}
                                                    alt='banner immage'
                                                    className='full_width'
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Taghi2}
                                                        alt='banner immage'
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Taghi3}
                                                        alt='banner immage'
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                    <Col xs='8' className='projects-margin-fixer projects__image_dark'>
                                        <Carousel style={{ opacity: 1 }}>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Image
                                                    src={Taghi1d}
                                                    alt='banner immage'
                                                    className='full_width'
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Taghi2d}
                                                        alt='banner immage '
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Taghi3d}
                                                        alt='banner immage'
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className='parent_only_desktop'>
                        <div className='test1313'>
                            <Container className='container-borderer'>
                                <Row>
                                    <Col xs='3' className=''>
                                        <Link href={t.b1Link}>
                                            <div className='mb-5 projects--title cursor'>
                                                <p>{t.prj4d}</p>
                                                <h2 className='mt-3'>{t.prj4t}</h2>
                                            </div>
                                        </Link>
                                        <div className='projects--legend__top projects--texts__basics'>
                                            <p className='projects--texts__op'>{t.prj4l}</p>
                                            <h3 className='project--location__mod projects--texts__basics'>
                                                {t.prj4lt}
                                            </h3>
                                        </div>
                                        <div className='projects--legend__bot'>
                                            <p className='projects--texts__op projects--texts__create'>
                                                {t.prj4c}
                                            </p>
                                            <h3 className='projects--texts__basics projects--texts__done '>
                                                {t.prj4ct}
                                            </h3>
                                        </div>
                                        <div>
                                            <Link href={t.b1Link} passHref>
                                                <a className='seo-link'>
                                                    <i className='project--see cursor '>
                                                        {t.viewPrj} <Image src={Vector} />
                                                    </i>
                                                </a>
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col className='border__left'></Col>

                                    <Col xs='8' className='projects-margin-fixer projects__image'>
                                        <Carousel style={{ opacity: 1 }}>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Image
                                                    src={Bukhaidze61}
                                                    alt='banner immage'
                                                    className='full_width'
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Bukhaidze62}
                                                        alt='banner immage '
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Bukhaidze63}
                                                        alt='banner immage'
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                    <Col xs='8' className='projects-margin-fixer projects__image_dark'>
                                        <Carousel style={{ opacity: 1 }}>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Image
                                                    src={Bukhaidze61d}
                                                    alt='banner immage'
                                                    className='full_width'
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Bukhaidze62d}
                                                        alt='banner immage '
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Bukhaidze63d}
                                                        alt='banner immage'
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className='parent_only_desktop'>
                        <div className='test1313'>
                            <Container className='container-borderer'>
                                <Row>
                                    <Col xs='3' className=''>
                                        <Link href={t.b2Link}>
                                            <div className='mb-5 projects--title cursor'>
                                                <p>{t.prj5d}</p>
                                                <h2 className='mt-3'>{t.prj5t}</h2>
                                            </div>
                                        </Link>
                                        <div className='projects--legend__top projects--texts__basics'>
                                            <p className='projects--texts__op'>{t.prj5l}</p>
                                            <h3 className='project--location__mod projects--texts__basics'>
                                                {t.prj5lt}
                                            </h3>
                                        </div>
                                        <div className='projects--legend__bot'>
                                            <p className='projects--texts__op projects--texts__create'>
                                                {t.prj5c}
                                            </p>
                                            <h3 className='projects--texts__basics projects--texts__done '>
                                                {t.prj5ct}
                                            </h3>
                                        </div>
                                        <div>
                                            <Link href={t.b2Link} passHref>
                                                <a className='seo-link'>
                                                    <i className='project--see cursor '>
                                                        {t.viewPrj} <Image src={Vector} />
                                                    </i>
                                                </a>
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col className='border__left'></Col>

                                    <Col xs='8' className='projects-margin-fixer projects__image'>
                                        <Carousel style={{ opacity: 1 }}>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Image
                                                    src={Bukhaidze1}
                                                    alt='banner immage'
                                                    className='full_width'
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Bukhaidze2}
                                                        alt='banner immage '
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Bukhaidze3}
                                                        alt='banner immage'
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                    <Col xs='8' className='projects-margin-fixer projects__image_dark'>
                                        <Carousel style={{ opacity: 1 }}>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Image
                                                    src={Bukhaidze1d}
                                                    alt='banner immage'
                                                    className='full_width'
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Bukhaidze2d}
                                                        alt='banner immage '
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                            <Carousel.Item className='fuul__width full_desktop'>
                                                <Row>
                                                    <Image
                                                        src={Bukhaidze3d}
                                                        alt='banner immage'
                                                        className='full_width'
                                                    />
                                                </Row>
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
