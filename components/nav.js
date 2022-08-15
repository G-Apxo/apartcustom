import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../assets/logo.svg";
import en from "../locales/enHeader";
import ru from "../locales/ruHeader";
import ge from "../locales/geHeader";
import { Container, Form, Row, Col } from "react-bootstrap";

export default function Nav({ mode, setMode }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "ru" ? ru : ge;

  const changeLanguage = e => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  function myFunction() {
    var element = document.body;

    element.classList.toggle("dark-mode");
    // element.classlist = "dark-mode" ? setMode(false) : setMode(true);
  }
  return (
    <div className="nav__container">
      <Container className="mobile_container">
        <Row>
          <Col xs="12" className="social__mobile">
            <ul className="navbar-nav">
              <li className="mobile_social_platgorms ">
                {" "}
                <a href="tel:+995-32-2-11-11-44" className="soc__icon__mobile text-dark">
                  +995 32 2 11 11 44
                </a>
                <span className="soc__icon text-dark"> | </span>{" "}
              </li>
              <li className="mobile_social_platgorms">
                {" "}
                <a className="soc__icon__mobile text-dark" href="#">
                  {t.v}{" "}
                </a>{" "}
                <span className="text-dark soc__icon"> |</span>{" "}
              </li>
              <li className="mobile_social_platgorms">
                <a className="soc__icon__mobile text-dark" href="#">
                  {t.w}
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <a className="navbar-brand nav_white" href="/">
              <Image className="logo" src={Logo} alt="Picture of the author" />
            </a>
          </Col>
          <Col xs="12">
            <div className="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn menu__dark" htmlFor="menu__toggle">
                <span></span>
              </label>
              <ul className="menu__box">
                <li>
                  <a className="menu__item" href="#">
                    {t.about}
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="#">
                    {t.investing}
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="#">
                    {t.projects}
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="#">
                    {t.blog}
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="#">
                    {t.contact}
                  </a>
                </li>
                <li className="menu__item_mobile">
                  <select
                    onChange={changeLanguage}
                    defaultValue={locale}
                    className="form-select lang__drop menu__item"
                  >
                    <option className="text-dark" value="en">
                      EN
                    </option>
                    <option className="text-dark" value="ru">
                      RU
                    </option>
                    <option className="text-dark" value="ge">
                      GE
                    </option>
                  </select>
                </li>
                <li>
                  <Form>
                    <Form.Check
                      onClick={myFunction}
                      type="switch"
                      id="custom-switch"
                      className="white__switcher"
                    />
                  </Form>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="desktop__menu">
        <Row className="align-items-center">
          <Col xs="2">
            <a className="navbar-brand nav_white" href="/">
              <Image className="logo" src={Logo} alt="Picture of the author" />
            </a>
          </Col>
          <Col xs="5">
            <nav className="navbar navbar-expand-lg navbar-light">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse navbar13" id="navbarNav">
                <ul className="navbar-nav ">
                  <li className="nav-item active">
                    <a className="nav-link text-nowrap" href="/About">
                      {t.about}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/Investing">
                      {t.investing}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/projects">
                      {t.projects}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/Blog">
                      {t.blog}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/Contact">
                      {t.contact}
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </Col>

          <Col xs="2" className="d-flex justify-content-around">
            <select onChange={changeLanguage} defaultValue={locale} className="form-select lang__drop ">
              <option className="" value="en">
                EN
              </option>
              <option className="" value="ru">
                RU
              </option>
              <option className="" value="ge">
                GE
              </option>
            </select>
            <Form>
              <Form.Check onClick={myFunction} type="switch" id="custom-switch" className="white__switcher" />
            </Form>
          </Col>
          <Col xs="3">
            <ul className="navbar-nav">
              <li className="contact__platforms ">
                <a href="tel:+995-32-2-11-11-44" className="soc__icon text-dark">
                  +995 32 2 11 11 44
                </a>
                <span className="soc__icon text-dark"> | </span>{" "}
              </li>
              <li className="contact__platforms">
                <a className="soc__icon text-dark" href="#">
                  {t.v}{" "}
                </a>
                <span className="text-dark soc__icon"> |</span>{" "}
              </li>
              <li className="contact__platforms">
                <a className="soc__icon text-dark" href="#">
                  {t.w}
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* <nav className='navbar navbar-expand-lg navbar-light'>
      <ul className="flex navbar-nav">
        <li>
          <Link href="/">
          <a className="navbar-brand">
            <Image src={Logo} alt="Picture of the author" />
          </a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-8">
          <li>
            <a
              href="/About"
              className="text-white text-lg text-shadow-sm uppercase hidden md:block tracking-wide"
            >
              {t.about}
            </a>
          </li>
          <li>
            <a
              href="/Investing"
              className="text-white text-lg text-shadow-sm uppercase hidden md:block tracking-wide"
            >
              {t.investing}
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="text-white text-lg text-shadow-sm uppercase hidden md:block tracking-wide"
            >
              {t.projects}
            </a>
          </li>
          <li>
            <a
              href="/Blog"
              className="text-white text-lg text-shadow-sm uppercase hidden md:block tracking-wide"
            >
              {t.blog}
            </a>
          </li>
          <li>
            <a
              href="/Contact"
              className="text-white text-lg text-shadow-sm uppercase hidden md:block tracking-wide"
            >
              {t.contact}
            </a>
          </li>
          <li>
          <Form>
                <Form.Check  onClick={myFunction}
                  type="switch"
                  id="custom-switch"
                />
              </Form>
          </li>
          <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
          >
            <option className="text-black" value="en">EN</option>
            <option className="text-black" value="ru">RU</option>
          </select>
        </ul>
      </ul>
    </nav> */}
      </Container>
    </div>
  );
}
