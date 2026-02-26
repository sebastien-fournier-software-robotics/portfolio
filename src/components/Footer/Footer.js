import React, { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLanguage } from "../../context/LanguageContext";

const getCurrentYear = () => new Date().getFullYear();

function Footer() {
    const { t } = useLanguage();
    const year = useMemo(getCurrentYear, []);
    return (
        <Container fluid className="footer">
            <Row>
                <Col md={12} className="footer-copywright">
                    <h3>©{year} Sébastien Fournier | Portfolio | {t("footer.allRightsReserved")}</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
