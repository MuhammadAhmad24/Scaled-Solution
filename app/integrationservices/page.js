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
                src="/video.mov"
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
              <h3 className="section-label">Integration Services</h3>
              <p>
                At Scaled Solutions, we're passionate about
                helping businesses harness the power of cloud
                technology. With years of experience and a team
                of certified experts, we provide tailored cloud
                solutions that drive innovation and efficiency.


                <br /><br />
                Our mission is to simplify cloud adoption and
                management, enabling our clients to focus on
                their core business while we handle their cloud
                infrastructure.

              </p>
            </div>

            <div>
              <ul className="gradient-icon-list">
                <li><a href="#sec1"><img src="/bullet-icons/api.png" alt="Cloud Strategy" />API Development</a></li>
                <li><a href="#sec2"><img src="/bullet-icons/app.png" alt="Cloud Strategy" />Enterprise Application</a></li>
                <li><a href="#sec3"><img src="/bullet-icons/data.png" alt="Cloud Strategy" />Data Integration</a></li>
                <li><a href="#sec4"><img src="/bullet-icons/legacy.png" alt="Cloud Strategy" />Legacy System</a></li>
                <li><a href="#sec5"><img src="/bullet-icons/middle.png" alt="Cloud Strategy" />Middleware Implementation</a></li>
                <li><a href="#sec6"><img src="/bullet-icons/migration.png" alt="Cloud Strategy" />Cloud Migration</a></li>
              </ul>
            </div>

          </div>
        </div>
      </section>




      {/* ======= Cloud Strategy & Advisory Section ======= */}
      <section className="strategy-section" id="sec1">
        <div className="section-heading section-wrapper">
          <h2>
            API <span className="highlight">Development </span> &amp; Management
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <p>
              We design, build, and manage robust APIs that enable
              secure and scalable communication between systems,
              partners, and digital platforms. Our services include
              RESTful and GraphQL API development, API versioning,
              access control, and traffic management using leading
              platforms such as Azure API Management, Mulesoft,
              and Apigee. We also help organizations set up
              governance models, API gateways, and developer
              portals to maximize reuse and performance of their API
              ecosystem.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/integration/api.jpg"
              alt="Cloud Strategy"
              className="strategy-image"
            />
          </div>
        </div>
      </section>








      {/* ======= Cloud Architecture & Implementation ======= */}
      <section className="strategy-section" id="sec2">
        <div className="section-heading section-wrapper">
          <h2>
            Enterprise <span className="highlight">Application </span>&amp; <span className="highlight">Integration</span>
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <h6>Cloud FinOps</h6>
            <p>
              Our consultants specialize in connecting
              complex enterprise applications (e.g., ERP, CRM,
              HRM, SCM) to create a seamless flow of data
              and processes across departments. We work
              with tools such as Azure Logic Apps, BizTalk,
              Boomi, and MuleSoft to reduce silos, improve
              data accuracy, and streamline business
              operations. Whether integrating Salesforce with
              SAP or Microsoft Dynamics with a customer
              portal, we ensure reliable and secure
              connectivity.


            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/integration/enterprise.jpg"
              alt="Cloud Strategy"
              className="strategy-image"
            />
          </div>
        </div>
      </section>







      {/* ======= Cloud Optimization & Operations ======= */}
      <section className="strategy-section" id="sec3">
        <div className="section-heading section-wrapper">
          <h2>
            Data <span className="highlight">Integration </span>&amp; Solutions
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <p>We help businesses unify data from disparate sources
              — whether on-premises, cloud-based, or hybrid — to
              enable real-time analytics, reporting, and business
              intelligence. Our team delivers ETL/ELT pipelines, data
              synchronization routines, and integration frameworks
              using tools like Azure Data Factory, Informatica, and
              Talend. We prioritize data quality, lineage tracking,
              and scalability to support your long-term data
              strategy.</p>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/integration/data.jpg"
              alt="Cloud Strategy"
              className="strategy-image"
            />
          </div>
        </div>
      </section>






      {/* ======= Cloud Optimization & Operations ======= */}
      <section className="strategy-section" id="sec4">
        <div className="section-heading section-wrapper">
          <h2>
            Legacy <span className="highlight">System </span>&amp; Modernization
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <h6>Cloud Native | Refactoring | Replatform </h6>
            <p>We assist clients in transforming outdated
              legacy systems into modern, cloud-native
              architectures without disrupting business
              continuity. Whether through re-platforming,
              re-architecting, or wrapping legacy systems
              with APIs, we help reduce technical debt and
              enable innovation. Our approach ensures
              backward compatibility where needed while
              gradually phasing in new technologies that
              support agility and future growth.</p>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">

            <img
              src="/integration/legacy.jpg"
              alt="Cloud Strategy"
              className="strategy-image"
            />
          </div>
        </div>
      </section>






      {/* ======= Cloud Optimization & Operations ======= */}
      <section className="strategy-section" id="sec5">
        <div className="section-heading section-wrapper">
          <h2>
            Middleware <span className="highlight"> </span>  <span className="highlight">Implementation</span>
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <p>Our team implements and configures middleware
              platforms that act as the backbone of enterprise
              integration. From message queues and service buses
              (like Azure Service Bus, RabbitMQ) to integration
              brokers and enterprise service buses (ESBs), we
              ensure reliable communication between applications
              and services. We also optimize middleware for high
              availability, performance monitoring, and secure
              message handling.</p>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/integration/middleware.jpg"
              alt="Cloud Strategy"
              className="strategy-image"
            />
          </div>
        </div>
      </section>

      <section className="migration-section" id="sec6">
        <h3>Cloud <span className="highlight">Migration</span></h3>
        <div className='card-wrapper'>
          {/* Card 1 */}
          <div className="card">
            <img
              src="/integration/portfolio.jpg"
              alt="Portfolio Analysis"
              className="strategy-image"
            />
            <div className="title">
              <h3>
                <span>Portfolio </span>
                Analysis
              </h3>
              <p>Assess which applications should
                be rehosted, refactored, replaced,
                or retired</p>
              <div className="hr"></div>
              <svg
                className="pb-row-services__service__icon z-1000" // ✅ use className instead of class
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 6.72H6.72V12H5.28V6.72H0V5.28H5.28V0H6.72V5.28H12V6.72Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img
              src="/integration/migration.jpg"
              alt="Migration"
              className="strategy-image"
            />
            <div className="title">
              <h3>
                <span>Data </span>Migration
              </h3>
              <p>Plan and execute secure, efficient
                data transfers to cloud
                environments</p>
              <div className="hr"></div>
              <svg
                className="pb-row-services__service__icon z-1000"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 6.72H6.72V12H5.28V6.72H0V5.28H5.28V0H6.72V5.28H12V6.72Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img
              src="/integration/minimal.jpg"
              alt="Minimal Disruption"
              className="strategy-image"
            />
            <div className="title">
              <h3>
                <span>Minimal </span>Disruption
              </h3>
              <p>Implement transitions with
                reduced downtime and business
                impact</p>
              <div className="hr"></div>
              <svg
                className="pb-row-services__service__icon z-1000"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 6.72H6.72V12H5.28V6.72H0V5.28H5.28V0H6.72V5.28H12V6.72Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card">
            <img
              src="/integration/legacy2.jpg"
              alt="Legacy System"
              className="strategy-image"
            />
            <div className="title">
              <h3>
                <span>Legacy </span>System
              </h3>
              <p>Transform outdated systems into
                cloud-native applications</p>
              <div className="hr"></div>
              <svg
                className="pb-row-services__service__icon z-1000"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 6.72H6.72V12H5.28V6.72H0V5.28H5.28V0H6.72V5.28H12V6.72Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>




      <NewFooter />
    </>
  );
}
