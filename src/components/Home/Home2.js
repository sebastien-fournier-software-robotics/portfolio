import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FlipAvatar from "../FlipAvatar";
import { useLanguage } from "../../Context/LanguageContext";

function Home2() {
  const { t } = useLanguage();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
              {t("home2.title")}
            </h1>
            <p className="home-about-body">
              {t("home2.body")}
              <br />
              <br />
              {t("home2.interests")}
              <br />
              <br />
              {t("home2.frameworks")}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <FlipAvatar interval={5000} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
