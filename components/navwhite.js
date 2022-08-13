import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../assets/logo_white.svg";
import en from "../locales/enHeader";
import ru from "../locales/ruHeader";
import ge from "../locales/geHeader";
import { Container, Form, Row, Col } from "react-bootstrap";

export default function Nav({ mode, setMode }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "ru" ? ru : ge;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  function myFunction() {
    var element = document.body;

    element.classList.toggle("dark-mode");
    element.classlist = "dark-mode" ? setMode(false) : setMode(true);
  }
  return (
    <div className="nav__container">
      <Container className="mobile_container">
        <Col xs="6">
        <a className="navbar-brand nav_white" href="/">
              <Image className="logo" src={Logo} alt="Picture of the author" />
            </a>
        </Col>
        <Col xs="6">
        <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
        <ul className="menu__box">
          <li><a className="menu__item" href="#">Hhome</a></li>
          <li><a className="menu__item" href="#">About us</a></li>
          <li><a className="menu__item" href="#">prpjects</a></li>
          <li><a className="menu__item" href="#">invesign</a></li>
          <li><a className="menu__item" href="#">blog</a></li>
          <li><a className="menu__item" href="#">contact</a></li>
        </ul>
      </div>
        </Col>
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
                    <a className="nav-link text-white text-nowrap" href="/About">
                      {t.about}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/Investing">
                      {t.investing}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/projects">
                      {t.projects}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/Blog">
                      {t.blog}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/Contact">
                      {t.contact}
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </Col>

          <Col xs="2" className="d-flex justify-content-around">
          <select
              onChange={changeLanguage}
              defaultValue={locale}
              className="form-select lang__drop_white "
            >
              <option className="text-white" value="en">
                EN
              </option>
              <option className="text-white" value="ru">
                RU
              </option>
              <option className="text-white" value="ge">
                GE
              </option>
            </select>
            <Form>
              <Form.Check
                onClick={myFunction}
                type="switch"
                id="custom-switch"
                className="white__switcher"
              />
            </Form>
          </Col>
          <Col xs="3">
            <ul className="navbar-nav">
              <li className="contact__platforms "> <a href="tel:+995-32-2-11-11-44" className="soc__icon">+995 32 2 11 11 44</a><span className="soc__icon"> | </span>  </li>
              <li className="contact__platforms"> <a className="soc__icon" href="#">{t.v} </a> <span className="soc__icon"> |</span> </li>
              <li className="contact__platforms"><a className="soc__icon"href="#">{t.w}</a></li>
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
