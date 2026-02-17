import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import { useLanguage } from "../../Context/LanguageContext";

function Experiences() {
  const { t } = useLanguage();
  const entries = t("experiences.entries") || [];

  return (
    <section id="experiences" className="experiences-section" style={{ minHeight: "50vh", padding: "80px 0" }}>
      <Container>
        <h1 className="project-heading">{t("experiences.title")}</h1>
        <p className="experiences-subtitle">{t("experiences.subtitle")}</p>

        <div className="experiences-timeline">
          <div className="experiences-timeline-track" aria-hidden="true" />
          {entries.map((exp, index) => (
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
                      <span>{exp.period}</span>
                    </div>
                    <div className="experiences-company">{exp.company}</div>
                  </Col>
                  <Col md={9} className="experiences-content">
                    <div className="experiences-role">
                      <FaBriefcase className="experiences-meta-icon" />
                      <strong>{exp.role}</strong>
                    </div>
                    <div className="experiences-description">{exp.description}</div>
                    {exp.tags && exp.tags.length > 0 && (
                      <div className="experiences-tags">
                        {exp.tags.map((tag, i) => (
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

export default Experiences;
