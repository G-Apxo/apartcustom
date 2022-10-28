import Nav from '../components/nav';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import en from '../locales/enHome';
import ru from '../locales/ruHome';
import ge from '../locales/geHome';
import Slide1 from '../assets/slider.png';
import Taghi from '../assets/taghi.svg';
import Apart_showroom from '../assets/apartshowroom.svg';
import Footer from '../components/footer';
import Navwhite from '../components/navwhite';
import Malongo from '../assets/malongo-dark-mode.png';
import Tbc from '../assets/tbc-logo-geo2.svg';
import Readmore from '../assets/readmore.svg';
import Ezo from '../assets/sep10tika/ezologof.png';
import OCP from '../assets/projectslider/ocp_logo_white.png';
import TaghiWhite from '../assets/sep10tika/taghilogof.png';
import BB1 from '../assets/finalsep9/bukhaidzeb1.png';
import BB2 from '../assets/finalsep9/bukhaidzeb2.png';
import OpenPage from '../components/openpage/openPage';
import { useTitle } from '../components/title';
import Head from 'next/head';
import useWindowSize from '../hooks/useWindowSize/useWindowSize';

// MOBILE IMGS
import ocpd1 from '../assets/mobilephotos/ocpd1.png';
import ocpn1 from '../assets/mobilephotos/ocpn1.png';
import ezod1 from '../assets/mobilephotos/ezod1.png';
import ezon1 from '../assets/mobilephotos/ezon1.png';
import taghid1 from '../assets/mobilephotos/taghid1.png';
import taghin1 from '../assets/mobilephotos/taghin1.png';
import b1d1 from '../assets/mobilephotos/b1d1.png';
import b1n1 from '../assets/mobilephotos/b1n1.png';
import b2d1 from '../assets/mobilephotos/b2d1.png';
import b2n1 from '../assets/mobilephotos/b2n1.png';
import CookieConsent from 'react-cookie-consent';
export default function IndexPage() {
    const { width } = useWindowSize();
    const [showBanner, setBanner] = useState(true);
    const [mode, setMode] = useState(true);
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : locale === 'ru' ? ru : ge;

    const darkmode = () => {
        const element = document.body;
        element.classList.add('dark-mode');
        document.getElementsByClassName('overlay_choose')[0].style.setProperty('display', 'none');
    };
    const whitemode = () => {
        document.getElementsByClassName('overlay_choose')[0].style.setProperty('display', 'none');
    };
    const darkmodemobile = () => {
        const element = document.body;
        element.classList.add('dark-mode');
        document.getElementsByClassName('overlay_choose_mobile')[0].style.setProperty('display', 'none');
    };
    const whitemodemobile = () => {
        document.getElementsByClassName('overlay_choose_mobile')[0].style.setProperty('display', 'none');
    };

    return (
        <>
            <Head>
                <title>{t.titlet}</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <script async src='https://www.googletagmanager.com/gtag/js?id=G-H58RBQJ53W'></script>
                <script>
                    window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date()); gtag('config', 'G-H58RBQJ53W');
                </script>
            </Head>
            <Navwhite mode={mode} setMode={setMode} />
            <CookieConsent>
                This website uses cookies to enhance the user experience.
                <div className='overlay_choose desktop__view'>
                    <Row className='opener-container-n'>
                        <Col
                            onClick={whitemode}
                            xs='12'
                            lg='12'
                            md='12'
                            sm='12'
                            xl='6'
                            xxl='6'
                            className='apart__night d-flex align-content-center align-items-cente justify-content-center '
                        >
                            <h1 className='headers__for_start daytext'>Apart during day</h1>
                        </Col>
                        <Col
                            onClick={darkmode}
                            xs='12'
                            lg='12'
                            md='12'
                            sm='12'
                            xl='6'
                            xxl='6'
                            className='apart__day d-flex align-content-center align-items-cente justify-content-center '
                        >
                            <h1 className='headers__for_start nighttext'>Apart during night</h1>
                        </Col>
                    </Row>
                </div>
                <div className='overlay_choose_mobile mob__view'>
                    <Row className='opener-container-n'>
                        <Col
                            onTouchStart={whitemodemobile}
                            xs='12'
                            lg='12'
                            md='12'
                            sm='12'
                            xl='6'
                            xxl='6'
                            className='apart__night_mobile d-flex align-content-center align-items-cente justify-content-center '
                        >
                            <h1 className='headers__for_start daytext'>Apart during day</h1>
                        </Col>
                        <Col
                            onTouchStart={darkmodemobile}
                            xs='12'
                            lg='12'
                            md='12'
                            sm='12'
                            xl='6'
                            xxl='6'
                            className='apart__day_mobile d-flex align-content-center align-items-cente justify-content-center '
                        >
                            <h1 className='headers__for_start nighttext'>Apart during night</h1>
                        </Col>
                    </Row>
                </div>
            </CookieConsent>
            <Carousel slide={true} style={{ opacity: 1 }} className='carousle__inner'>
                <Carousel.Item interval={5000} className='fuul__width'>
                    <div className='container__video projects__image'>
                        {width > 800 ? (
                            <video loop autoPlay muted playsInline className='video vid-bg'>
                                <source
                                    src=' https://vdieos.netlify.app/src/OCP_Intro.mp4'
                                    type='video/mp4'
                                />
                            </video>
                        ) : (
                            // <Image src={ocpd1} />
                            <Image src={ocpd1} />
                        )}

                        <Container>
                            <div className='overlay'>
                                <Container className='innerContent'>
                                    {width > 800 ? (
                                        <Col xl='4'>
                                            {/* <p className="text-white"> {t.sliderd}</p> */}
                                            <a href='/projects/oldcity'>
                                                <Image src={OCP} className='slider_logo mt-3' />
                                                {/* <p className="text-white text-white-read-more">{t.readmore}</p> */}
                                            </a>
                                        </Col>
                                    ) : (
                                        <Col xl='4'>
                                            {/* <p className="text-white"> {t.sliderd}</p> */}

                                            <Image src={OCP} className='slider_logo mt-3' />
                                            {/* <p className="text-white text-white-read-more">{t.readmore}</p> */}
                                        </Col>
                                    )}
                                </Container>
                            </div>
                        </Container>
                    </div>
                    <div className='container__video projects__image_dark'>
                        {width > 800 ? (
                            <video loop autoPlay muted playsInline className='video vid-bg'>
                                <source src='https://vdieos.netlify.app/src/ocp-night.mp4' type='video/mp4' />
                            </video>
                        ) : (
                            <Image src={ocpn1} />
                        )}
                        <Container>
                            <div className='overlay'>
                                <Container className='innerContent'>
                                    {width > 800 ? (
                                        <Col xl='4'>
                                            <a href='/projects/oldcity'>
                                                <Image src={OCP} className='slider_logo mt-3' />
                                            </a>
                                        </Col>
                                    ) : (
                                        <Col xl='4'>
                                            <Image src={OCP} className='slider_logo mt-3' />
                                        </Col>
                                    )}
                                </Container>
                            </div>
                        </Container>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={5000} className='fuul__width'>
                    <div className='container__video projects__image'>
                        {width > 800 ? (
                            <video loop autoPlay muted playsInline className='video'>
                                <source src='https://vdieos.netlify.app/src/EZO_Intro.mp4' type='video/mp4' />
                            </video>
                        ) : (
                            <Image src={ezod1} />
                        )}

                        <Container>
                            <div className='overlay'>
                                <Container className='innerContent'>
                                    {width > 800 ? (
                                        <Col xl='4'>
                                            <a href='/projects/ezo'>
                                                <Image src={Ezo} className='slider_logo' />
                                            </a>
                                        </Col>
                                    ) : (
                                        <Col xl='4'>
                                            <Image src={Ezo} className='slider_logo' />
                                        </Col>
                                    )}
                                </Container>
                            </div>
                        </Container>
                    </div>
                    <div className='container__video projects__image_dark'>
                        {width > 800 ? (
                            <video loop autoPlay muted playsInline className='video'>
                                <source src='https://vdieos.netlify.app/src/ezo-night.mp4' type='video/mp4' />
                            </video>
                        ) : (
                            <Image src={ezon1} />
                        )}

                        <Container>
                            <div className='overlay'>
                                <Container className='innerContent'>
                                    {width > 800 ? (
                                        <Col xl='4'>
                                            <a href='/projects/ezo'>
                                                <Image src={Ezo} className='slider_logo' />
                                            </a>
                                        </Col>
                                    ) : (
                                        <Col xl='4'>
                                            <Image src={Ezo} className='slider_logo' />
                                        </Col>
                                    )}
                                </Container>
                            </div>
                        </Container>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={5000} className='fuul__width'>
                    <div className='container__video projects__image'>
                        {width > 800 ? (
                            <video loop autoPlay muted playsInline className='video'>
                                <source
                                    src='https://vdieos.netlify.app/src/Taghi_Intro.mp4'
                                    type='video/mp4'
                                />
                            </video>
                        ) : (
                            <Image src={taghid1} />
                        )}

                        <Container>
                            <div className='overlay'>
                                <Container className='innerContent'>
                                    {width > 800 ? (
                                        <Col xl='4'>
                                            <a href='/projects/taghi'>
                                                <Image src={TaghiWhite} className='slider_logo' />
                                            </a>
                                        </Col>
                                    ) : (
                                        <Col xl='4'>
                                            <Image src={TaghiWhite} className='slider_logo' />
                                        </Col>
                                    )}
                                </Container>
                            </div>
                        </Container>
                    </div>
                    <div className='container__video projects__image_dark'>
                        {width > 800 ? (
                            <video loop autoPlay muted playsInline className='video'>
                                <source
                                    src='https://vdieos.netlify.app/src/taghi-night.mp4'
                                    type='video/mp4'
                                />
                            </video>
                        ) : (
                            <Image src={taghin1} />
                        )}

                        <Container>
                            <div className='overlayN'>
                                <Container className='innerContent'>
                                    {width > 800 ? (
                                        <Col xl='4'>
                                            <a href='/projects/taghi'>
                                                <Image src={TaghiWhite} className='slider_logo' />
                                            </a>
                                        </Col>
                                    ) : (
                                        <Col xl='4'>
                                            <Image src={TaghiWhite} className='slider_logo' />
                                        </Col>
                                    )}
                                </Container>
                            </div>
                        </Container>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={5000} className='fuul__width'>
                    <div className='container__video projects__image'>
                        {width > 800 ? (
                            <video loop autoPlay muted playsInline className='video'>
                                <source
                                    src='https://vdieos.netlify.app/src/Bukhaidze_6_Intro.mp4'
                                    type='video/mp4'
                                />
                            </video>
                        ) : (
                            <Image src={b1d1} />
                        )}

                        <Container>
                            <div className='overlay'>
                                <Container className='innerContent'>
                                    {width > 800 ? (
                                        <Col xl='4'>
                                            <a href='/projects/BukhaidzeB1'>
                                                <Image src={BB1} className='slider_logo' />
                                            </a>
                                        </Col>
                                    ) : (
                                        <Col xl='4'>
                                            <Image src={BB1} className='slider_logo' />
                                        </Col>
                                    )}
                                </Container>
                            </div>
                        </Container>
                    </div>
                    <div className='container__video projects__image_dark'>
                        {width > 800 ? (
                            <video loop autoPlay muted playsInline className='video'>
                                <source
                                    src='https://vdieos.netlify.app/src/bukhaidze-6-night.mp4'
                                    type='video/mp4'
                                />
                            </video>
                        ) : (
                            <Image src={b1n1} />
                        )}

                        <Container>
                            <div className='overlayN'>
                                <Container className='innerContent'>
                                    {width > 800 ? (
                                        <Col xl='4'>
                                            <a href='/projects/BukhaidzeB1'>
                                                <Image src={BB1} className='slider_logo' />
                                            </a>
                                        </Col>
                                    ) : (
                                        <Col xl='4'>
                                            <Image src={BB1} className='slider_logo' />
                                        </Col>
                                    )}
                                </Container>
                            </div>
                        </Container>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={5000} className='fuul__width'>
                    <div className='container__video projects__image'>
                        {width > 800 ? (
                            <video loop autoPlay muted playsInline className='video'>
                                <source
                                    src='https://vdieos.netlify.app/src/Bukhaidze_6a_Intro.mp4'
                                    type='video/mp4'
                                />
                            </video>
                        ) : (
                            <Image src={b2d1} />
                        )}

                        <Container>
                            <div className='overlay'>
                                <Container className='innerContent'>
                                    {width > 800 ? (
                                        <Col xl='4'>
                                            <a href='/projects/BukhaidzeB2'>
                                                <Image src={BB2} className='slider_logo' />
                                            </a>
                                        </Col>
                                    ) : (
                                        <Col xl='4'>
                                            <Image src={BB2} className='slider_logo' />
                                        </Col>
                                    )}
                                </Container>
                            </div>
                        </Container>
                    </div>
                    <div className='container__video projects__image_dark'>
                        {width > 800 ? (
                            <video loop autoPlay muted playsInline className='video'>
                                <source
                                    src='https://vdieos.netlify.app/src/bukhaidze-6a-night.mp4'
                                    type='video/mp4'
                                />
                            </video>
                        ) : (
                            <Image src={b2n1} />
                        )}

                        <Container>
                            <div className='overlayN'>
                                <Container className='innerContent'>
                                    {width > 800 ? (
                                        <Col xl='4'>
                                            <a href='/projects/BukhaidzeB2'>
                                                <Image src={BB2} className='slider_logo' />
                                            </a>
                                        </Col>
                                    ) : (
                                        <Col xl='4'>
                                            <Image src={BB2} className='slider_logo' />
                                        </Col>
                                    )}
                                </Container>
                            </div>
                        </Container>
                    </div>
                </Carousel.Item>
            </Carousel>
            <Container className='container-marginer mt-60 additional__padding '>
                <Row className='justify-content-between'>
                    <Col xs='12' lg='6' md='6' sm='6' xl='6' xxl='6'>
                        <Row>
                            <Col xs='12' lg='3' md='3' sm='3' xl='3' xxl='3'>
                                <p className='home--section__texts'>{t.aabout}</p>
                            </Col>
                            <Col></Col>
                            <Col xs='12' lg='8' md='8' sm='8' xl='8' xxl='8'>
                                <h1 className='section1-title'>{t.aheader}</h1>

                                <p className='section1-subtitle'>{t.ap}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs='12' lg='5' md='5' sm='5' xl='5' xxl='5'>
                        <Col xs='12' className='col-5'>
                            <p className='section1-form-text'>{t.contactInfo}</p>
                            <h4 className='section-1-form-subtext'>{t.aparttype}</h4>
                            <Row>
                                <Col xs='6' lg='6' md='6' sm='6' xl='3' xxl='3'>
                                    <Form>
                                        {['checkbox'].map(type => (
                                            <div key={`inline-${type}`}>
                                                <Form.Check
                                                    inline
                                                    label={t.b1}
                                                    name='group1'
                                                    type={type}
                                                    id={`inline-${type}-1`}
                                                />
                                            </div>
                                        ))}
                                    </Form>
                                </Col>
                                <Col xs='6' lg='6' md='6' sm='6' xl='3' xxl='3'>
                                    <Form>
                                        {['checkbox'].map(type => (
                                            <div key={`inline-${type}`} className=' home--inputs'>
                                                <Form.Check
                                                    className='text-nowrap'
                                                    inline
                                                    label={t.b2}
                                                    name='group1'
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                            </div>
                                        ))}
                                    </Form>
                                </Col>
                                <Col xs='6' lg='6' md='6' sm='6' xl='3' xxl='3'>
                                    <Form>
                                        {['checkbox'].map(type => (
                                            <div key={`inline-${type}`} className='home--inputs'>
                                                <Form.Check
                                                    inline
                                                    label={t.b3}
                                                    name='group1'
                                                    type={type}
                                                    id={`inline-${type}-3`}
                                                />
                                            </div>
                                        ))}
                                    </Form>
                                </Col>
                                <Col xs='6' lg='6' md='6' sm='6' xl='3' xxl='3'>
                                    <Form>
                                        {['checkbox'].map(type => (
                                            <div key={`inline-${type}`} className='home--inputs'>
                                                <Form.Check
                                                    inline
                                                    label={t.b4}
                                                    name='group1'
                                                    type={type}
                                                    id={`inline-${type}-4`}
                                                />
                                            </div>
                                        ))}
                                    </Form>
                                </Col>
                                <Col className='mb-60'>
                                    <div xs='12' className='mb-md-0 mb-5 home--inputs'>
                                        {/* <Form id="contact-form" name="contact-form" action="mail.php" method="POST">
                      <Col xs="12">
                        <div className="md-form mb-0 contact-placeholder-text">
                          <Form.Control
                            type="text"
                            id="name"
                            name="name"
                            className="form-control input__main"
                            placeholder={t.name}
                          />
                        </div>
                      </Col>
                      <Col xs="12">
                        <div className="md-form mb-0 contact-placeholder-text">
                          <Form.Control
                            type="mail"
                            id="email"
                            name="email"
                            className="form-control input__main"
                            placeholder={t.email}
                          />
                        </div>
                      </Col>
                      <Col xs="12">
                        <div className="md-form mb-0 contact-placeholder-text">
                          <Form.Control
                            type="phone"
                            id="email"
                            name="email"
                            className="form-control input__main"
                            placeholder={t.telnum}
                          />
                        </div>
                      </Col>
                    </Form>
                    <div className="text-center text-md-left home--get-contacted">
                      <Button className="btn-send">{t.getContacted}</Button>
                    </div> */}
                                        <form
                                            id='contact-form'
                                            name='contact-form'
                                            action='https://formsubmit.co/sales@apart.ge'
                                            method='POST'
                                            className=''
                                        >
                                            <div className='col-12'>
                                                <div className='md-form mb-0 contact-placeholder-text'>
                                                    <input
                                                        name='name'
                                                        placeholder={t.name}
                                                        type='text'
                                                        id='name'
                                                        required
                                                        className='form-control input__main form-control'
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-12'>
                                                <div className='md-form mb-0 contact-placeholder-text'>
                                                    <input
                                                        name='email'
                                                        placeholder={t.email}
                                                        type='mail'
                                                        id='email'
                                                        required
                                                        className='form-control input__main form-control'
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-12'>
                                                <div className='md-form mb-0 contact-placeholder-text'>
                                                    <input
                                                        name='number'
                                                        placeholder={t.telnum}
                                                        type='phone'
                                                        id='email'
                                                        required
                                                        className='form-control input__main form-control'
                                                    />
                                                </div>
                                            </div>
                                            <div className='text-center text-md-left home--get-contacted'>
                                                <button type='submit' className='btn-send btn btn-primary'>
                                                    {t.getContacted}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </Container>
            <Container className='mb-60'>
                <Row>
                    <Col xs='12' lg='2' md='2' sm='2' xl='2' xxl='2'>
                        <p className='home--section__texts'>{t.pm}</p>
                    </Col>
                    <Col xs='12' lg='10' md='10' sm='10' xl='10' xxl='10'>
                        <iframe
                            src='https://snazzymaps.com/embed/408105'
                            width='100%'
                            height='400px'
                            // style="border:none;"
                        ></iframe>
                    </Col>
                </Row>
            </Container>
            <Container className='partners-container mb-60 mt-60'>
                <Row className='justify-content-between align-items-center'>
                    <Col xs='12' lg='2' md='2' sm='2' xl='2' xxl='2'>
                        <div className='partners home--section__texts'>
                            <p className='home--section__texts'>{t.partners}</p>
                        </div>
                    </Col>
                    <Col xs='12' lg='10' md='10' sm='10' xl='10' xxl='10'>
                        <Row className='justify-content-between'>
                            <div className='col-4 '>
                                <div className='partners'>
                                    <Image
                                        src={Apart_showroom}
                                        alt='banner immage'
                                        className='partners_wite'
                                    />
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='partners'>
                                    <Image src={Malongo} alt='banner immage' className='partners_wite' />
                                </div>
                            </div>
                            <div className='col-4 d-flex justify-content-evenly'>
                                <div className='partners'>
                                    <Image src={Tbc} alt='banner immage' className='partners_wite' />
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    );
}
