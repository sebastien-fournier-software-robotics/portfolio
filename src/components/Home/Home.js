import React, { useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { ParticleSphere } from "../shared";
import Type from "./Type";
import {
    AiOutlineDownload,
} from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { useLanguage } from "../../context/LanguageContext";
import pdf from "../../assets/CV_sebastien_fournier.pdf";

function Home() {
    const { t } = useLanguage();

    const scrollToContact = useCallback((e) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, []);

    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row className="align-items-center">
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                {t("home.greeting")}{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    🤖
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                {t("home.iAm")}
                                <strong className="main-name"> SEBASTIEN FOURNIER</strong>
                            </h1>

                            <div className="home-type-wrap">
                                <Type />
                            </div>

                            <div className="home-buttons">
                                <Button
                                    className="home-contact-btn"
                                    onClick={scrollToContact}
                                >
                                    <MdOutlineEmail style={{ marginBottom: "2px" }} />
                                    &nbsp;{t("home.contactBtn")}
                                </Button>

                                <Button
                                    variant="primary"
                                    href={pdf}
                                    target="_blank"
                                    className="home-download-btn"
                                >
                                    <AiOutlineDownload style={{ marginBottom: "2px" }} />
                                    &nbsp;{t("home.downloadCV")}
                                </Button>
                            </div>
                        </Col>

                        <Col md={5} className="home-sphere-col">
                            <ParticleSphere />
                        </Col>
                    </Row>
                    <Row className="home-scroll-hint-row">
                        <Col xs={12} className="d-flex justify-content-center">
                            <div className="home-scroll-hint" aria-hidden="true">
                                <span className="home-scroll-hint-arrow" aria-hidden="true">
                                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M1 1l6 6 6-6" />
                                    </svg>
                                </span>
                                <span className="home-scroll-hint-text">{t("home.scrollHint")}</span>
                                <span className="home-scroll-hint-delimiter" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;
