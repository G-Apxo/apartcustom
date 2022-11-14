import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo from '../assets/logo_white.svg';
import en from '../locales/enHeader';
import ru from '../locales/ruHeader';
import ge from '../locales/geHeader';
import { Container, Form, Row, Col } from 'react-bootstrap';

export default function Nav({ mode, setMode }) {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : locale === 'ru' ? ru : ge;

    const changeLanguage = e => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale });
    };

    function myFunction() {
        var element = document.body;
        element.classList.toggle('dark-mode');
        // element.classlist = "dark-mode" ? setMode(false) : setMode(true);
    }

    function LebalHandler() {
        var element = document.body;

        element.classList.toggle('fixed');
        // element.classlist = "dark-mode" ? setMode(false) : setMode(true);
    }
    return (
        <div className='nav__container'>
            <Container className='mobile_container'>
                <Row>
                    <Col xs='12' className='social__mobile'>
                        <ul className='navbar-nav'>
                            <li className=' mobile_social_platgorms'>
                                {' '}
                                <a href='tel:+995-32-2-11-11-44' className='soc__icon__mobile firstNum'>
                                    +995 32 2 11 11 44
                                </a>
                                <span className='soc__icon__mobile'> | </span>{' '}
                            </li>
                            <li className=' mobile_social_platgorms'>
                                {' '}
                                <a className='soc__icon__mobile' href='viber://chat?number=+995544444431'>
                                    {t.v}{' '}
                                </a>{' '}
                                <span className='soc__icon__mobile'> |</span>{' '}
                            </li>
                            <li className=' mobile_social_platgorms'>
                                <a className='soc__icon__mobile' href='https://wa.me/995544444431'>
                                    {t.w}
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs='6'>
                        <a className='navbar-brand nav_white' href='/'>
                            <Image className='logo' src={Logo} alt='Picture of the author' />
                        </a>
                    </Col>
                    <Col xs='6'>
                        <div className='hamburger-menu navColor'>
                            <input id='menu__toggle' type='checkbox' />
                            <label
                                className='menu__btn dark__x'
                                onClick={LebalHandler}
                                htmlFor='menu__toggle'
                            >
                                <span></span>
                            </label>
                            <ul className='menu__box'>
                                <li>
                                    <Link className='menu__item' href='/about'>
                                        {t.about}
                                    </Link>
                                </li>
                                <li>
                                    <Link className='menu__item' href='/invest-in-real-estate-in-tbilisi'>
                                        {t.investing}
                                    </Link>
                                </li>
                                <li>
                                    <Link className='menu__item' href='/projects'>
                                        {t.projects}
                                    </Link>
                                </li>
                                <li>
                                    <Link className='menu__item' href='/blog'>
                                        {t.blog}
                                    </Link>
                                </li>
                                <li>
                                    <Link className='menu__item' href='/contact'>
                                        {t.contact}
                                    </Link>
                                </li>
                                <li>
                                    <select
                                        onChange={changeLanguage}
                                        defaultValue={locale}
                                        className='form-select lang__drop menu__item  otherPgs'
                                    >
                                        <option className='text-dark' value='ge'>
                                            GE
                                        </option>
                                        <option className='text-dark' value='en'>
                                            EN
                                        </option>
                                        <option className='text-dark' value='ru'>
                                            RU
                                        </option>
                                    </select>
                                </li>
                                <Form>
                                    <Form.Check
                                        onClick={myFunction}
                                        type='switch'
                                        id='custom-switch'
                                        className='white__switcher'
                                    />
                                </Form>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='desktop__menu homeNav'>
                <Row className='align-items-center'>
                    <Col xs='2'>
                        <a className='navbar-brand nav_white' href='/'>
                            <Image className='logo' src={Logo} alt='Picture of the author' />
                        </a>
                    </Col>
                    <Col xs='5'>
                        <nav className='navbar navbar-expand-lg navbar-light'>
                            <button
                                className='navbar-toggler'
                                type='button'
                                data-toggle='collapse'
                                data-target='#navbarNav'
                                aria-controls='navbarNav'
                                aria-expanded='false'
                                aria-label='Toggle navigation'
                            >
                                <span className='navbar-toggler-icon'></span>
                            </button>
                            <div className='collapse navbar-collapse navbar13' id='navbarNav'>
                                <ul className='navbar-nav '>
                                    <li className='nav-link'>
                                        <Link className='nav-link text-white text-nowrap' href='/about'>
                                            {t.about}
                                        </Link>
                                    </li>
                                    <li className='nav-link'>
                                        <Link
                                            className='nav-link text-white'
                                            href='/invest-in-real-estate-in-tbilisi'
                                        >
                                            {t.investing}
                                        </Link>
                                    </li>
                                    <li className='nav-link '>
                                        <Link className='nav-link text-white' href='/projects'>
                                            {t.projects}
                                        </Link>
                                    </li>
                                    <li className='nav-link '>
                                        <Link className='nav-link text-white' href='/blog'>
                                            {t.blog}
                                        </Link>
                                    </li>
                                    <li className='nav-link '>
                                        <Link className='nav-link text-white' href='/contact'>
                                            {t.contact}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </Col>

                    <Col xs='2' className='d-flex justify-content-around'>
                        <select
                            onChange={changeLanguage}
                            defaultValue={locale}
                            className='form-select lang__drop_white '
                        >
                            <option className='text-white' value='ge'>
                                GE
                            </option>
                            <option className='text-white' value='en'>
                                EN
                            </option>
                            <option className='text-white' value='ru'>
                                RU
                            </option>
                        </select>
                        <Form>
                            <Form.Check
                                onClick={myFunction}
                                type='switch'
                                id='custom-switch'
                                className='white__switcher'
                            />
                        </Form>
                    </Col>
                    <Col xs='3'>
                        <ul className='navbar-nav'>
                            <li className='contact__platforms '>
                                {' '}
                                <a href='tel:+995-32-2-11-11-44' className='soc__icon'>
                                    +995 32 2 11 11 44
                                </a>
                                <span className='soc__icon'> | </span>{' '}
                            </li>
                            <li className='contact__platforms'>
                                {' '}
                                <a className='soc__icon' href='viber://chat?number=+995544444431'>
                                    {t.v}{' '}
                                </a>{' '}
                                <span className='soc__icon'> |</span>{' '}
                            </li>
                            <li className='contact__platforms'>
                                <a className='soc__icon' href='https://wa.me/995544444431'>
                                    {t.w}
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
