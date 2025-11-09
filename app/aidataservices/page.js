"use client";
// import styles from "../../page.module.css";
import NavBar from "../components/NavBar";
import NewFooter from "../components/NewFooter";
import Link from "next/link";
import "./services.css";

export default function ServicesPage() {
  return (
    <>
      <NavBar />

      <section className="services-hero">
        <div className="floating-accents">
          <div className="accent accent1"></div>
          <div className="accent accent2"></div>
          <div className="accent accent3"></div>
        </div>

        <div className="animated-grid"></div>

        <div className="animated-circle"></div>

        <div className="services-container section-wrapper">
          {/* LEFT COLUMN */}
          <div className="left-column">
            <div className="top-line"></div>

            <h1>
              <span className="highlight">Transforming,</span><br /> businesses with <br />
              <span className="highlight">cloud-first</span> solutions.
            </h1>

            <Link href="/contact">
              <button className="cta-btn">Let's work Together</button>
            </Link>

            <div className="video-box">
              <video
                src="/product-development/hero-video.mp4"
                controls
                muted
                playsInline
                className="services-video"
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="right-column">
            <div>
              <h3 className="section-label">AI and Data Services</h3>
              <p>
                In today’s digital era, artificial intelligence is only as powerful as the data that fuels
                it. Our Azure-based AI and Data services are designed to help organizations harness the
                full potential of their data — from ingestion and transformation to analytics, machine
                learning, and intelligent automation. Each layer of this ecosystem plays a critical role:
                data ingestion and warehousing establish the foundation, Power BI enables insight and
                visualization, Azure Machine Learning (ML) Studio productionalizes predictive models,
                and Azure OpenAI integrated via APIs brings intelligent language and decision-making
                capabilities to life. Together, they form a complete, scalable pipeline — turning raw
                data into actionable intelligence.
              </p>
            </div>

            <div>
              <ul className="gradient-icon-list">
                <li><a href="#sec1"><img src="/bullet-icons/migration.png" alt="Cloud Strategy" />Data Ingestion</a></li>
                <li><a href="#sec2"><img src="/bullet-icons/monitor.png" alt="Cloud Strategy" />Business Intelligence</a></li>
                <li><a href="#sec3"><img src="/bullet-icons/innovation.png" alt="Cloud Strategy" />MLOps</a></li>
                <li><a href="#sec4"><img src="/bullet-icons/innovation2.png" alt="Cloud Strategy" />Intelligent Applications</a></li>
                <li><a href="#sec5"><img src="/bullet-icons/testing.png" alt="Cloud Strategy" />Conclusion</a></li>
              </ul>
            </div>

          </div>
        </div>
      </section>




      {/* ======= Data Ingestion ======= */}
      <section className="strategy-section" id="sec1">
        <div className="section-heading section-wrapper">
          <h2>
            Data Ingestion, Transformation, and Warehousing with <span className="highlight">Azure Synapse</span> &amp; Data Factory
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <p>
              Every AI initiative begins with data. We leverage Azure
              Synapse Analytics and Azure Data Factory (ADF) to
              design and orchestrate robust ETL (Extract, Transform,
              Load) pipelines that collect, cleanse, and structure data
              from disparate systems such as ERP, CRM, IoT, and
              third-party APIs.
            </p>
            <p>
              Our architecture follows the Bronze–Silver–Gold data
              layering principle:
            </p>

            <ul>
              <li>
                <strong>Bronze Layer:</strong> Stores raw, unprocessed data as
                ingested from the source systems. It acts as the
                immutable data lake foundation.
              </li>
              <li>
                <strong>Silver Layer:</strong> Cleansed, conformed, and enriched data —
                standardized for consistency and data quality across all domains.
              </li>
              <li>
                <strong>Gold Layer:</strong> Curated and business-ready datasets,
                optimized for reporting, analytics, and machine learning consumption.
              </li>
            </ul>

            <p>
              This layered approach ensures data lineage,
              governance, and performance at scale — enabling a
              single source of truth across the enterprise.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/aidata/2.png"
              alt="Cloud Strategy"
              className="strategy-image"
            />
          </div>
        </div>
      </section>








      {/* ======= Power BI ======= */}
      <section className="strategy-section" id="sec2">

        <div className="section-heading section-wrapper">
          <h2>
            Business Intelligence and Insights with
            <span className="highlight"> Power BI</span>
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <p>
              Once your data is curated and modeled, Power BI transforms it into
              powerful, interactive visualizations. We help clients build dashboards and
              analytics that connect directly to Azure Synapse or Data Lakehouse
              environments.
            </p>

            <p>Our Power BI implementations include:</p>

            <ul>
              <li>Real-time data streaming dashboards.</li>
              <li>Role-based and secure workspace design.</li>
              <li>Data modeling for self-service analytics.</li>
              <li>
                Integration with Azure Active Directory for governance and access
                control.
              </li>
            </ul>

            <p>
              By consuming the <strong>Gold Layer</strong> datasets, Power BI bridges the
              gap between raw data and strategic decision-making — allowing your teams
              to visualize performance, discover trends, and act with confidence.
            </p>
          </div>



          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/aidata/1.jpg"
              alt="Cloud Strategy"
              className="strategy-image"
            />
          </div>
        </div>
      </section>







      {/* ======= MLOps ======= */}
      <section className="strategy-section" id="sec3">
        <div className="section-heading section-wrapper">
          <h2>
            MLOps and Model Lifecycle Management with
            <span className="highlight"> Azure Machine Learning </span>Studio
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <p>
              Data becomes truly powerful when it fuels predictive and intelligent
              applications. Using Azure Machine Learning Studio, we help organizations
              develop, train, deploy, and monitor machine learning models in a
              production-ready environment.
            </p>

            <p>Our MLOps framework enables:</p>

            <ul>
              <li>
                Automated training and retraining pipelines using versioned data and
                code.
              </li>
              <li>
                CI/CD integration for seamless deployment of models as REST endpoints.
              </li>
              <li>
                Model registry and governance for auditability and compliance.
              </li>
              <li>
                Scalable inference endpoints for real-time predictions.
              </li>
            </ul>

            <p>
              This ensures your models stay accurate and relevant, adapting continuously
              to new data and business changes — bridging the gap between data science
              experimentation and enterprise production environments.
            </p>
          </div>



          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/aidata/4.png"
              alt="Cloud Strategy"
              className="strategy-image"
            />
          </div>
        </div>
      </section>






      {/* ======= Intelligent Application ======= */}
      <section className="strategy-section" id="sec4">
        <div className="section-heading section-wrapper">
          <h2>
            Intelligent Applications with{" "}
            <span className="highlight">Azure API Management</span> &amp;{" "}
            <span className="highlight">Azure OpenAI</span>
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <p>
              To take AI a step further, we integrate Azure OpenAI Service
              <br />
              with enterprise APIs using Azure API Management (APIM) — enabling secure,
              scalable access to Large Language Models (LLMs) and predictive analytics.
            </p>

            <p>Through this architecture:</p>

            <ul>
              <li>
                User interfaces or applications send prompts to LLM endpoints securely
                managed through APIM.
              </li>
              <li>
                The LLM (via Azure OpenAI) processes contextual input, such as natural
                language queries or unstructured documents.
              </li>
              <li>
                The LLM output is intelligently fused with predictive models deployed in
                Azure ML Studio — combining generative reasoning with statistical
                prediction.
              </li>
            </ul>

            <p>This powerful integration unlocks advanced scenarios such as:</p>

            <ul>
              <li>Intelligent chatbots that reason using your proprietary data.</li>
              <li>
                Automated document summarization and classification enhanced by ML
                insights.
              </li>
              <li>
                Natural language–driven analytics and decision support systems.
              </li>
            </ul>

            <p>
              Together, <strong>APIM</strong> and <strong>Azure OpenAI</strong> transform
              static data into dynamic, conversational intelligence — accessible across
              your enterprise applications.
            </p>
          </div>



          {/* RIGHT SIDE */}
          <div className="strategy-right">

            <img
              src="/aidata/6.png"
              alt="Cloud Strategy"
              className="strategy-image"
            />
          </div>
        </div>
      </section>






      {/* ======= Conclusion ======= */}
      <section className="strategy-section" id="sec5">
        <div className="section-heading section-wrapper">
          <h2>
            Conclusion: A
            <span className="highlight"> Unified AI </span> &amp; <span className="highlight">Data Ecosystem</span>
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <p>
              Our Azure-driven AI and Data services unify the worlds of data engineering,
              analytics, and artificial intelligence into a single, governed ecosystem.
              From ingestion to insight, prediction, and intelligent automation — we help
              organizations modernize their data landscape, accelerate AI adoption, and
              realize measurable business outcomes.
            </p>
          </div>


          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/aidata/7.jpg"
              alt="Cloud Strategy"
              className="strategy-image"
            />
          </div>
        </div>
      </section>


      <NewFooter />
    </>
  );
}
