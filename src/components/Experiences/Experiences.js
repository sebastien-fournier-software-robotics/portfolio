import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineCalendar, AiOutlineProject, AiOutlineCheckCircle, AiOutlineRocket, AiOutlineLineChart } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import { useLanguage } from "../../Context/LanguageContext";

function Experiences() {
  const { t } = useLanguage();
  const entries = t("experiences.entries") || [];

  const renderBlock = (labelKey, IconComponent, items) => {
    if (!items || (Array.isArray(items) && items.length === 0)) return null;
    const list = Array.isArray(items) ? items : [items];
    const label = t(`experiences.labels.${labelKey}`);
    return (
      <div key={labelKey} className={`experiences-block experiences-block--${labelKey}`}>
        <div className="experiences-block-header">
          <span className="experiences-block-icon-wrap">
            <IconComponent className="experiences-block-icon" />
          </span>
          <span className="experiences-block-label">{label}</span>
        </div>
        <ul className="experiences-block-list">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

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

                    {exp.project && (
                      <div className="experiences-block experiences-block--project">
                        <div className="experiences-block-header">
                          <span className="experiences-block-icon-wrap">
                            <AiOutlineProject className="experiences-block-icon" />
                          </span>
                          <span className="experiences-block-label">{t("experiences.labels.project")}</span>
                        </div>
                        <p className="experiences-block-text">{exp.project}</p>
                      </div>
                    )}
                    {renderBlock("missions", AiOutlineCheckCircle, exp.missions)}
                    {renderBlock("achievements", AiOutlineRocket, exp.achievements)}
                    {renderBlock("results", AiOutlineLineChart, exp.results)}

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
