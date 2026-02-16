import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/robot_dev.png";
import { useLanguage } from "../../Context/LanguageContext";

function About() {
  const { t } = useLanguage();

  return (
    <>
      <Container fluid className="about-section" id="about">
        <Container>
          <Row className="align-items-center" style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
                {t("about.knowWho")}
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "30px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default About;
