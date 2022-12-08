import Nav from '../components/nav';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Button, Row, Container, Col, input, Form } from 'react-bootstrap';
import en from '../locales/enInvesting';
import ru from '../locales/ruInvesting';
import ge from '../locales/geInvesting';
import Video from '../assets/video.svg';
import day from '../public/apartNov25/invest.jpg';
import night from '../assets/finalsep9/investing-night.jpg';
import ocpDay from '../public/apartNov25/investCards/OLDCITYDAY.jpg';
import ocpNight from '../public/apartNov25/investCards/OLDCITYNIGHT.jpg';
import ezoDay from '../public/apartNov25/investCards/EZODAY.jpg';
import ezoNight from '../public/apartNov25/investCards/EZONIGHT.jpg';
import taghiDay from '../public/apartNov25/investCards/TAGHIDAY.jpg';
import taghiNight from '../public/apartNov25/investCards/TAGHINIGHT.jpg';
import Footer from '../components/footer';
import { useTitle } from '../components/title';
import Head from 'next/head';
import Layout from '../components/Layout';
import Script from 'next/script';
export default function IndexPage() {
    const [showBanner, setBanner] = useState(true);
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : locale === 'ru' ? ru : ge;

    return (
        <div>
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
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <meta property='og:title' content={t.titlet} />
                <meta name='description' content={t.metad}></meta>
                <meta property='og:image' content='https://imageholder.netlify.app/imgs/investing.jpg' />
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
                <div className='hero'>
                    <div>
                        <div className='contact__section'>
                            <Container className='mt-120 '>
                                <Row>
                                    <Col xs='12' lg='6' md='6' sm='6' xl='6' xxl='6'>
                                        <h1 className='investing-title'>{t.titlett}</h1>
                                        <p className='investing-title_subtext'>{t.tp1}</p>
                                    </Col>
                                    <Col xs='12' lg='12' md='6' sm='6' xl='6' xxl='6'>
                                        <iframe
                                            id='investingIframe'
                                            width='100%'
                                            height='360'
                                            src='https://www.youtube.com/embed/byWDpnrPMa8'
                                            title='YouTube video player'
                                            frameBorder='0'
                                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                            allowFullScreen
                                        ></iframe>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className='mt-60 '>
                                <Row>
                                    <Col xs='12' lg='12' md='6' sm='6' xl='6' xxl='6'>
                                        <iframe
                                            id='investingIframe'
                                            width='100%'
                                            height='360'
                                            src='https://www.youtube.com/embed/PJbNd_1SC5c'
                                            title='YouTube video player'
                                            frameBorder='0'
                                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                            allowFullScreen
                                        ></iframe>
                                    </Col>
                                    <Col xs='12' lg='12' md='6' sm='6' xl='6' xxl='6'>
                                        <h2 className='investing-title'>{t.titlett2}</h2>
                                        <p className='investing-title_subtext'>{t.tp2}</p>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col xs='12' lg='12' md='12' sm='12' xl='12' xxl='12'>
                                        <h2 className='investing-title mt-60'>{t.titlett3}</h2>
                                        <p className='investing-title_subtext'>{t.tp3}</p>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className='mt-120 mb-120'>
                                <Row className='mb-60'>
                                    <h2>{t.services}</h2>
                                </Row>
                                <Row className='desktop__view'>
                                    <Col xs='12' lg='12' md='12' sm='12' xl='12' xxl='12'>
                                        <Row>
                                            <Col xs='6' lg='3' md='3' sm='3' xl='3' xxl='3'>
                                                <p className='counter_content'>{t.spa}</p>
                                            </Col>
                                            <Col xs='6' lg='3' md='3' sm='3' xl='3' xxl='3'>
                                                <p className='counter_content'>{t.pool}</p>
                                            </Col>
                                            <Col xs='6' lg='3' md='3' sm='3' xl='3' xxl='3'>
                                                <p className='counter_content'>{t.fitness}</p>
                                            </Col>
                                            <Col xs='6' lg='3' md='3' sm='3' xl='3' xxl='3'>
                                                <p className='counter_content'>{t.cafe}</p>
                                            </Col>
                                            <Col xs='6' lg='3' md='3' sm='3' xl='3' xxl='3' className='mt-3'>
                                                <p className='counter_content'>{t.room}</p>
                                            </Col>
                                            <Col xs='6' lg='3' md='3' sm='3' xl='3' xxl='3' className='mt-3'>
                                                <p className='counter_content'>{t.consierge}</p>
                                            </Col>
                                            <Col xs='6' lg='3' md='3' sm='3' xl='3' xxl='3' className='mt-3'>
                                                <p className='counter_content'>{t.hour}</p>
                                            </Col>
                                            <Col xs='6' lg='3' md='3' sm='3' xl='3' xxl='3' className='mt-3'>
                                                <p className='counter_content'>{t.cleaning}</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col xs='12' lg='12' md='12' sm='12' xl='12' xxl='12'>
                                        <h2 className='investing-title mt-60'>{t.cardTitle}</h2>
                                        <Row className='mb-60 '>
                                            <Col xs='12' lg='4' md='12' sm='12' xl='4' xxl='4'>
                                                <div className='projects__image'>
                                                    <Link href='/projects/old-city-panorama' passHref>
                                                        <a>
                                                            <Image src={ocpDay} alt='projects' />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className='projects__image_dark'>
                                                    <Link href='/projects/old-city-panorama' passHref>
                                                        <a>
                                                            <Image src={ocpNight} alt='projects' />
                                                        </a>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col xs='12' lg='4' md='12' sm='12' xl='4' xxl='4'>
                                                <div className='projects__image'>
                                                    <Link href='/projects/ezo' passHref>
                                                        <a>
                                                            <Image src={ezoDay} alt='projects' />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className='projects__image_dark'>
                                                    <Link href='/projects/ezo' passHref>
                                                        <a>
                                                            <Image src={ezoNight} alt='projects' />
                                                        </a>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col xs='12' lg='4' md='12' sm='12' xl='4' xxl='4'>
                                                <div className='projects__image'>
                                                    <Link href='/projects/taghi' passHref>
                                                        <a>
                                                            <Image src={taghiDay} alt='projects' />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className='projects__image_dark'>
                                                    <Link href='/projects/taghi' passHref>
                                                        <a>
                                                            <Image src={taghiNight} alt='projects' />
                                                        </a>
                                                    </Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>

                            <Container>
                                {/* <Row className="investing-goal mb-80">
                <h3>{t.bonus}</h3>
              </Row> */}
                                <Row className='investing-goal mb-80'>
                                    <h2>{t.goal}</h2>
                                </Row>
                                <Row>
                                    <Col xxl='4' xs='12' lg='4' md='4' sm='4' xl='4'>
                                        <h2>{t.apartForPersonUse}</h2>
                                        <p className='investing-title_subtext mt-30'>{t.textAp1}</p>

                                        {/* TODO ADD texts
                                         <p className='investing-title_subtext '>{t.test1}</p>
                                        <p className='investing-title_subtext '>{t.test2}</p> */}
                                    </Col>
                                    <Col className='mt-80' xxl='4' xs='12' lg='4' md='4' sm='4' xl='4'>
                                        <div className='projects__image'>
                                            <Image src={day} alt='marketing' />
                                        </div>
                                        <div className='projects__image_dark'>
                                            <Image src={day} alt='marketing' />
                                        </div>
                                    </Col>
                                    <Col xxl='4' lg='4' md='4' sm='4' xl='4' xs='12'>
                                        <h2 className='special-margin-class'>{t.apartForCommercialUse}</h2>
                                        <p className='investing-title_subtext mt-30'>{t.textAp2}</p>
                                    </Col>
                                </Row>
                                <Row className='special-margin-row justify-content-between'>
                                    <Col xxl='6' xs='12' lg='6' md='6' sm='6' xl='6'>
                                        <h2>{t.pmAndRs}</h2>
                                        <p className='investing-title_subtext mt-30'>{t.pmText}</p>
                                        <p className='investing-title_subtext mt-30 bold'>{t.pmText2}</p>
                                    </Col>
                                    <Col xs='12' lg='5' md='5' sm='5' xl='5' xxl='5'>
                                        <Col xs='12' className='col-5 mb-120'>
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
                                                            <div
                                                                key={`inline-${type}`}
                                                                className=' home--inputs'
                                                            >
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
                                                            <div
                                                                key={`inline-${type}`}
                                                                className='home--inputs'
                                                            >
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
                                                            <div
                                                                key={`inline-${type}`}
                                                                className='home--inputs'
                                                            >
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
                                                            action='https://api.web3forms.com/submit'
                                                            method='POST'
                                                            className=''
                                                        >
                                                            <div className='col-12'>
                                                                <div className='md-form mb-0 contact-placeholder-text'>
                                                                    <input
                                                                        type='hidden'
                                                                        name='access_key'
                                                                        value='b6497681-c3af-4de3-aadc-3245d46562dd'
                                                                    />
                                                                    <input
                                                                        type='hidden'
                                                                        name='redirect'
                                                                        value='https://web3forms.com/success'
                                                                    />
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
                                                                <button
                                                                    type='submit'
                                                                    className='btn-send btn btn-primary'
                                                                >
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
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
