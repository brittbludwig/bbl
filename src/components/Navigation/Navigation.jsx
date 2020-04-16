import React, { useState, useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import content from "../../static/content/content";
import { navigation, sections } from "../../static/labels/labels";
import { store } from "../../store/store";

const Navigation = () => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;

  const [isNavOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!isNavOpen);

  const pageSections = Object.values(content);
  let template = [];
  pageSections.forEach((section, index) => {
    if (index > 0) {
      template.push(
        <li className="Navigation__menu-item" key={section.id}>
          <Link smooth to={`#${section.id}`} className="Navigation__link">
            {section.name}
          </Link>
        </li>
      );
    }
  });

  return (
    <div
      className={`Navigation ${
        activeSection ? "Navigation--" + activeSection : ""
      }`}
    >
      <Container>
        <Row>
          <Col xs="10" md="3">
            <Link
              smooth
              to={`#${sections.section1}`}
              className="Navigation__link Navigation__link--home"
            >
              {navigation.siteTitle}
            </Link>
          </Col>
          <Col xs="2" md="9">
            <Navbar className="Navigation__bar" light expand="lg" id="navbar">
              <NavbarToggler onClick={toggleNav}>
                <div
                  className={`Navigation__close-icon ${
                    isNavOpen ? "Navigation__close-icon--open" : ""
                  }`}
                >
                  <span />
                  <span />
                  <span />
                </div>
              </NavbarToggler>
              <Collapse isOpen={isNavOpen} navbar>
                <div className="Navigation__links-wrap">
                  <div
                    className={`Navigation__links ${
                      isNavOpen ? "Navigation__links--open" : ""
                    }`}
                  >
                    <ul className="Navigation__menu">{template}</ul>
                  </div>
                </div>
              </Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navigation;
