import Nav from '../../components/nav';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { Button, Row, Container, Col, input, Form } from 'react-bootstrap';
import en from '../../locales/enProjectFloor';
import ru from '../../locales/ruProjectsFloor';
import ge from '../../locales/geProjectsFloor';
import Link from 'next/link';
import Taghi from '../../assets/projectslogofire/ocp_logo_black.png';
import Bukhaidze from '../../assets/projects_floor.png';
import Footer from '../../components/footer';
import Panorama1 from '../../assets/finalBotRenders/OCP/5-ocp-3.jpg';
import Panorama1d from '../../assets/finalBotRenders/OCP/5-ocp-3-night.jpg';
import Panorama2 from '../../assets/finalBotRenders/OCP/5-ocp-2.jpg';
import Panorama2d from '../../assets/finalBotRenders/OCP/5-ocp-2-night.jpg';
import Panorama3 from '../../assets/finalBotRenders/OCP/5-ocp-1.jpg';
import Panorama3d from '../../assets/finalBotRenders/OCP/5-ocp-1-night.jpg';
import Panorama4 from '../../assets/finalBotRenders/OCP/5-ocp-4.jpg';
import Panorama4d from '../../assets/finalBotRenders/OCP/5-ocp-4-night.jpg';
import Panorama5 from '../../assets/finalBotRenders/OCP/5-ocp-5.jpg';
import Panorama5d from '../../assets/finalBotRenders/OCP/5-ocp-5-night.jpg';
import Hero from '../../assets/GAMISRENDEREBI/OCP/9.jpg';
import Herod from '../../assets/GAMISRENDEREBI/OCP/10.jpg';
import Vector from '../../assets/seeprjvector.png';
import { useTitle } from '../../components/title';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Arrow from '../../assets/arrow/objrotate.png';
export default function IndexPage() {
    const [showBanner, setBanner] = useState(true);
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : locale === 'ru' ? ru : ge;

    // const calcInputVal = useRef(0);
    // const calcInputVal2 = useRef(0);
    // const calcInputVal3 = useRef(0);

    // const [calc, setCalc] = useState(0);

    // const calculated = () => {
    //   setCalc(calcInputVal + calcInputVal2 + calcInputVal3);
    // };
    // useTitle('Old City Panorama - Apart Development');
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
                            console.log('works');
                        });
                }, [router.events])}
                <title>{t.titlet}</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <meta property='og:title' content={t.titlet} />
                <meta name='description' content={t.metad}></meta>
                <meta property='og:image' content='https://imageholder.netlify.app/imgs/ocp.jpg' />
                <meta name='facebook-domain-verification' content='lj973bqb1is3jcy6uh3xa972y05kuu' />
            </Head>
            <Layout>
                <div className='hero'>
                    <Container>
                        <Row className='mt-120-important'>
                            {/* <Col xs="1" lg="1" md="1" sm="1" xl="1" xxl="1">
              <Link href="/projects">
                <p className="goback">
                  <BsArrowUpLeft />
                  {t.goBack}
                </p>
              </Link>
            </Col> */}
                        </Row>
                        <div className='mob__view'>
                            <Row className='justify-content-between mt-5'>
                                <Col xs='12' lg='12' md='12' sm='12' xl='2' xxl='2' className='mb-5'>
                                    <Image src={Taghi} className='Taghi' />
                                </Col>
                                <Col xs='6' lg='6' md='6' sm='6' xl='2' xxl='2'>
                                    <hr />
                                    <p className='basic-texts-14'>{t.treePlanted}</p>
                                    <h3 className='projects-floor-yard'>{t.treeNum}</h3>
                                </Col>
                                <Col xs='6' lg='6' md='6' sm='6' xl='3' xxl='3'>
                                    <hr />
                                    <p className='basic-texts-14'>{t.exhibitionSpace}</p>
                                    <h3 className='projects-floor-yard'>{t.esm}</h3>
                                </Col>
                            </Row>
                            <Row className='justify-content-between mt-5'>
                                <Col xs='12' lg='12' md='12' sm='12' xl='4' xxl='4' className='mt-3'>
                                    {/* <h3 className='projects-floor-title'> {t.chooseApart}</h3> */}
                                    {/* <p>{t.chooseFloor}</p> */}
                                </Col>
                                <Col xs='12' lg='12' md='12' sm='12' xl='4' xxl='4'>
                                    {/* <Form.Select aria-label="Default select example">
                  <option>{t.chooseFloor}</option>
                  <option value="1">{t.chooseOne}</option>
                  <option value="2">{t.chooseTwo}</option>
                  <option value="3">{t.chooseThree}</option>
                </Form.Select> */}
                                    {/* <div className='coming-soon projects__image'>Coming Soon</div> */}
                                    {/* <div className='coming-soon projects__image_dark'>Coming Soon</div> */}
                                </Col>
                            </Row>
                        </div>
                        <div className='desktop__view mt-120'>
                            <Row className='justify-content-between mt-5 '>
                                <Col xs='6' lg='2' md='2' sm='2' xl='2' xxl='2'>
                                    <Image src={Taghi} className='Taghi' />
                                </Col>
                                <Col xs='6' lg='4' md='4' sm='4' xl='4' xxl='4'>
                                    {/* <h3 className='projects-floor-title'> {t.chooseApart}</h3> */}
                                    {/* <p>{t.chooseFloor}</p> */}
                                </Col>
                            </Row>
                            <Row className='justify-content-between mt-5'>
                                <Col xs='6' lg='2' md='2' sm='2' xl='2' xxl='2'>
                                    <hr />
                                    <p className='basic-texts-14'>{t.treePlanted}</p>
                                    <h3 className='projects-floor-yard'>{t.treeNum}</h3>
                                </Col>
                                <Col xs='6' lg='3' md='3' sm='3' xl='3' xxl='3'>
                                    <hr />
                                    <p className='basic-texts-14'>{t.exhibitionSpace}</p>
                                    <h3 className='projects-floor-yard'>{t.esm}</h3>
                                </Col>
                                <Col
                                    xs='12'
                                    lg='4'
                                    md='4'
                                    sm='4'
                                    xl='4'
                                    xxl='4'
                                    className='coming-soon-container'
                                >
                                    {/* <Form.Select aria-label="Default select example">
                  <option>{t.chooseFloor}</option>
                  <option value="1">{t.chooseOne}</option>
                  <option value="2">{t.chooseTwo}</option>
                  <option value="3">{t.chooseThree}</option>
                </Form.Select> */}
                                    {/* <div className='coming-soon projects__image'>Coming Soon</div> */}
                                    {/* <div className='coming-soon projects__image_dark'>Coming Soon</div> */}
                                </Col>
                            </Row>
                        </div>

                        <Col xs='12' className='mt-5'>
                            <div className='projects__image'>
                                {/* <Link href="/ProjectsFloorSelector"> */}
                                <Image className='cursor' src={Hero} />
                                {/* </Link> */}
                            </div>

                            <div className='projects__image_dark'>
                                {/* <Link href="/ProjectsFloorSelector"> */}
                                <Image className='cursor' src={Herod} />
                                {/* </Link> */}
                            </div>
                        </Col>
                        <Row className=' mt-40 mb-40 flex-helper'>
                            <Col xs='6' lg='6' md='6' sm='6' xl='6' xxl='6'>
                                {' '}
                                <a href='https://fasadi.netlify.app/fasadi/' target='_blank'>
                                    <i className=' cursor flex-helper'>
                                        {t.seeapart} <Image src={Vector} alt='arrow' className='arrow-prj' />
                                    </i>
                                </a>
                            </Col>
                            <Col xs='6' lg='6' md='6' sm='6' xl='6' xxl='6'>
                                {' '}
                                <a href='https://360ocp.netlify.app/' target='_blank'>
                                    <i className=' cursor flex-helper'>
                                        {t.view} <Image src={Vector} alt='arrow' className='arrow-prj' />
                                    </i>
                                </a>
                            </Col>
                        </Row>
                        <Row className='justify-content-between mt-5'>
                            <Col xs='3'>
                                <hr />
                            </Col>
                            <Col xs='3'>
                                <hr />
                            </Col>
                        </Row>

                        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Name" />
            <Form.Control type="mail" placeholder="Email" />
            <Form.Control type="tel" placeholder="+( ___ )     Phone number" required />
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button> */}
                        <form action='/send-data-here' method='post'>
                            <Row className=' mt-5 form-row align-items-center'>
                                <Col xs='12' lg='12' md='12' sm='12' xl='3' xxl='3' className='mt-1'>
                                    <label htmlFor='name'></label>
                                    <input
                                        className='btn-test'
                                        type='text'
                                        id='name'
                                        name='name'
                                        placeholder={t.name}
                                    />
                                </Col>
                                <Col xs='12' lg='12' md='12' sm='12' xl='3' xxl='3' className='mt-1'>
                                    <label htmlFor='email'></label>
                                    <input
                                        className='btn-test'
                                        type='mail'
                                        id='email'
                                        name='email'
                                        placeholder={t.email}
                                    />
                                </Col>
                                <Col xs='12' lg='12' md='12' sm='12' xl='3' xxl='3' className='mt-1'>
                                    <label htmlFor='tel'></label>
                                    <input
                                        className='btn-test'
                                        type='tel'
                                        id='phone'
                                        name='phone'
                                        placeholder={t.num}
                                        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                                        required
                                    />
                                </Col>
                                <Col xs='12' lg='12' md='12' sm='12' xl='3' xxl='3' className='mt-1'>
                                    <Button className='btn-send'>{t.req}</Button>
                                </Col>
                            </Row>
                        </form>
                        {/* <Col xs="12 mt-5 mb-5">
            <input
              type="text"
              className="calculator"
              placeholder="Price 1"
              defaultValue="0"
              ref={calcInputVal}
            />
            <input
              type="text"
              className="calculator"
              placeholder="Price 2"
              defaultValue="0"
              ref={calcInputVal2}
            />
            <input
              type="text"
              className="calculator"
              placeholder="Price 3"
              defaultValue="0"
              ref={calcInputVal3}
            />
            <input
              type="text"
              className="calculator"
              placeholder={calc}
              value={calculated}
            />
          </Col> */}
                        <Row className='justify-content-between'>
                            <Col xs='12' lg='12' md='12' sm='12' xl='5' xxl='5'>
                                <h2>{t.aboutprj}</h2>
                                <p className='projects--floor-about-text basic-texts-14'>{t.apt}</p>
                                <Col xs='12'>
                                    <Row>
                                        <h2 className='advanteges__main_title'>{t.adv}</h2>
                                        <p className=' basic-texts-14 text-secondary mt-2 '>{t.first}</p>
                                        <Col xs='6' lg='2' md='2' sm='2' xl='3' xxl='3'>
                                            <p className='basic-texts-14'>{t.bigBrain}</p>
                                        </Col>
                                        <Col xs='6' lg='2' md='2' sm='2' xl='3' xxl='3'>
                                            <p className='basic-texts-14'>{t.bigBrain2}</p>
                                        </Col>
                                        <Col xs='6' lg='2' md='2' sm='2' xl='3' xxl='3'>
                                            <p className='basic-texts-14'>{t.bigBrain3}</p>
                                        </Col>
                                        <Col xs='6' lg='2' md='2' sm='2' xl='3' xxl='3'>
                                            <p className='basic-texts-14'>{t.bigBrain4}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        {/* <p className="projects-floor-first-one text-secondary mt-2 "></p> */}
                                        <Col xs='6' lg='2' md='2' sm='2' xl='3' xxl='3'>
                                            <p className='basic-texts-14'>{t.bigBrain5}</p>
                                        </Col>
                                        <Col xs='6' lg='2' md='2' sm='2' xl='3' xxl='3'>
                                            <p className='basic-texts-14'>{t.bigBrain6}</p>
                                        </Col>
                                        <Col xs='6' lg='2' md='2' sm='2' xl='3' xxl='3'>
                                            <p className='basic-texts-14'>{t.bigBrain9}</p>
                                        </Col>
                                        <Col xs='6' lg='2' md='2' sm='2' xl='3' xxl='3'>
                                            <p className='basic-texts-14'>{t.bigBrain8}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <p className='projects-floor-first-one text-secondary mt-2 basic-texts-14'>
                                            {t.first2}
                                        </p>
                                        <Col xs='12' lg='12' md='12' sm='12' xl='12' xxl='12'>
                                            <h5 className='basic-texts-14 code-overlay'>{t.bigBrain7}</h5>
                                        </Col>
                                    </Row>
                                </Col>
                            </Col>
                            <Col
                                xs='12'
                                lg='12'
                                md='12'
                                sm='12'
                                xl='6'
                                xxl='6'
                                className='d-flex justify-content-center align-items-center'
                            >
                                <div className=''>
                                    <iframe
                                        id='OCPFrame'
                                        className='iframe__mobile iframe_main'
                                        allowFullScreen
                                        // width="100%"
                                        height='600'
                                        loading='lazy'
                                        frameBorder='0'
                                        src='https://chic-douhua-dc8cf2.netlify.app/'
                                    ></iframe>
                                    <div className='anim-arrow'>
                                        <div>
                                            <Image src={Arrow} alt='arrow' className='maket-spin' />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Col xs='12' className='mt-120'>
                            <iframe
                                src='https://snazzymaps.com/embed/408105'
                                width='100%'
                                height='600px'
                                // style="border:none;"
                            ></iframe>
                        </Col>
                        <Col xs='12' className='mt-120 mb-120'>
                            <Row>
                                <Col xl='4'>
                                    <div className='projects__image'>
                                        {/* <Link href="/ProjectsFloorSelector"> */}
                                        <Image
                                            // className='cursor'
                                            src={Panorama3}
                                        />
                                        {/* </Link> */}
                                    </div>

                                    <div className='projects__image_dark'>
                                        {/* <Link href="/ProjectsFloorSelector"> */}
                                        <Image
                                            // className='cursor'
                                            src={Panorama3d}
                                        />
                                        {/* </Link> */}
                                    </div>
                                </Col>

                                <Col xl='8' className='lastPhotos'>
                                    <Row>
                                        <Col xl='6'>
                                            <div className='projects__image'>
                                                {/* <Link href="/ProjectsFloorSelector"> */}
                                                <Image
                                                    // className='cursor'
                                                    src={Panorama2}
                                                />
                                                {/* </Link> */}
                                            </div>

                                            <div className='projects__image_dark'>
                                                {/* <Link href="/ProjectsFloorSelector"> */}
                                                <Image
                                                    // className='cursor'
                                                    src={Panorama2d}
                                                />
                                                {/* </Link> */}
                                            </div>
                                        </Col>
                                        <Col xl='6'>
                                            <div className='projects__image'>
                                                {/* <Link href="/ProjectsFloorSelector"> */}
                                                <Image
                                                    // className='cursor'
                                                    src={Panorama1}
                                                />
                                                {/* </Link> */}
                                            </div>

                                            <div className='projects__image_dark'>
                                                {/* <Link href="/ProjectsFloorSelector"> */}
                                                <Image
                                                    // className='cursor'
                                                    src={Panorama1d}
                                                />
                                                {/* </Link> */}
                                            </div>
                                        </Col>
                                        <Col xl='6'>
                                            <div className='projects__image ocpTest'>
                                                {/* <Link href="/ProjectsFloorSelector"> */}
                                                <Image
                                                    // className='cursor'
                                                    src={Panorama4}
                                                />
                                                {/* </Link> */}
                                            </div>

                                            <div className='projects__image_dark ocpTest'>
                                                {/* <Link href="/ProjectsFloorSelector"> */}
                                                <Image
                                                    // className='cursor'
                                                    src={Panorama4d}
                                                />
                                                {/* </Link> */}
                                            </div>
                                        </Col>

                                        <Col xl='6'>
                                            <div className='projects__image ocpTest'>
                                                {/* <Link href="/ProjectsFloorSelector"> */}
                                                <Image
                                                    // className='cursor'
                                                    src={Panorama5}
                                                />
                                                {/* </Link> */}
                                            </div>

                                            <div className='projects__image_dark ocpTest'>
                                                {/* <Link href="/ProjectsFloorSelector"> */}
                                                <Image
                                                    // className='cursor'
                                                    src={Panorama5d}
                                                />
                                                {/* </Link> */}
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Container>
                </div>
            </Layout>
        </div>
    );
}
