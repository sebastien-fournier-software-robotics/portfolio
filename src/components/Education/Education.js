import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineCalendar, AiOutlineRead } from "react-icons/ai";
import { useLanguage } from "../../Context/LanguageContext";

function Education() {
  const { t } = useLanguage();
  const entries = t("education.entries") || [];

  return (
    <section id="education" className="education-section experiences-section" style={{ minHeight: "50vh", padding: "80px 0" }}>
      <Container>
        <h1 className="project-heading">{t("education.title")}</h1>
        <p className="experiences-subtitle">{t("education.subtitle")}</p>

        <div className="experiences-timeline">
          <div className="experiences-timeline-track" aria-hidden="true" />
          {entries.map((entry, index) => (
            <div key={index} className="experiences-timeline-item">
              <div className="experiences-timeline-node">
                <span className="experiences-timeline-node-dot" />
              </div>
              <div className="experiences-timeline-connector" aria-hidden="true" />
              <div className="experiences-card">
                <Row className="align-items-start">
                  <Col md={3} className="experiences-meta">
                    <div className="experiences-period">
                      <AiOutlineCalendar className="experiences-meta-icon" />
                      <span>{entry.period}</span>
                    </div>
                    <div className="experiences-company">{entry.school}</div>
                  </Col>
                  <Col md={9} className="experiences-content">
                    <div className="experiences-role">
                      <AiOutlineRead className="experiences-meta-icon" />
                      <strong>{entry.degree}</strong>
                    </div>
                    <div className="experiences-description">{entry.description}</div>
                    {entry.tags && entry.tags.length > 0 && (
                      <div className="experiences-tags">
                        {entry.tags.map((tag, i) => (
                          <span key={i} className="experiences-tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </Col>
                </Row>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Education;
