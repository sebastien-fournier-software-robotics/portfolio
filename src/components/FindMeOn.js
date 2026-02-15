import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function FindMeOn() {
    return (
        <Container id="contact">
            <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
                <Col md={12} className="home-about-social">
                    <h1>Find Me On</h1>
                    <p>
                        Feel free to <span className="purple">connect </span>with me
                    </p>
                    <ul className="home-about-social-links">
                        <li className="social-icons">
                            <a
                                href="mailto:seb.fournier.tech@proton.me"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <MdOutlineEmail />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/sebastienfournierconnect/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://github.com/sebastien-fournier-software-robotics"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default FindMeOn;
