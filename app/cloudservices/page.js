"use client";
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
                src="/cloud.mp4"
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
              <h3 className="section-label">Cloud Services</h3>
              <p>
                At Scaled Solutions, we're passionate about helping businesses harness
                the power of cloud technology. With years of experience and a team of
                certified experts, we provide tailored cloud solutions that drive
                innovation and efficiency.
                <br /><br />
                Our mission is to simplify cloud adoption and management, enabling our
                clients to focus on their core business while we handle their cloud
                infrastructure.
              </p>
            </div>

            <div>
              <ul className="gradient-icon-list">
                <li><a href="#strategy"> <img src="/bullet-icons/strategy.png" alt="Cloud Strategy" /> Cloud strategy</a></li>
                <li><a href="#architecture"><img src="/bullet-icons/artitecture.png" alt="Cloud Strategy" />Cloud Architecture</a></li>
                <li><a href="#optimization"><img src="/bullet-icons/optimization.png" alt="Cloud Strategy" />Cloud Optimization</a></li>
                <li><a href="#devSecOps"><img src="/bullet-icons/infra.png" alt="Cloud Strategy" />Application DevSecOps</a></li>
                <li><a href="#security"><img src="/bullet-icons/security.png" alt="Cloud Strategy" />Cloud Security</a></li>
                <li><a href="#migration"><img src="/bullet-icons/migration.png" alt="Cloud Strategy" />Cloud Migration</a></li>
              </ul>
            </div>

          </div>
        </div>
      </section>




      {/* ======= Cloud Strategy & Advisory Section ======= */}
      <section className="strategy-section" id="strategy">
        <div className="section-heading section-wrapper">
          <h2>
            Cloud <span className="highlight">strategy </span> &amp; advisory
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <ul>
              <li>
                <strong>Cloud Readiness Assessment:</strong> Evaluate your current
                infrastructure, applications, and business goals to determine the
                optimal cloud approach.
              </li>
              <li>
                <strong>Cloud Roadmap Development:</strong> Create a tailored
                migration and implementation plan with clear milestones and success
                metrics.
              </li>
              <li>
                <strong>Multi-Cloud Strategy:</strong> Design strategic approaches to
                leveraging multiple cloud providers for maximum resilience and
                performance.
              </li>
              <li>
                <strong>Cloud Governance Framework:</strong> Establish policies,
                procedures, and best practices for cloud resource management and
                security.
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/strategy.jpg"
              alt="Cloud Strategy"
              className="strategy-image"
            />
          </div>
        </div>
      </section>








      {/* ======= Cloud Architecture & Implementation ======= */}
      <section className="strategy-section" id="architecture">
        <div className="section-heading section-wrapper">
          <h2>
            Cloud <span className="highlight">Architecture &amp;</span>Implementation
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <ul>
              <li>
                <strong>Infrastructure as Code (IaC):</strong> Automate infrastructure provisioning using Terraform, CloudFormation, or Pulumi
              </li>
              <li>
                <strong>Containerization & Orchestration:</strong> Implement Docker, Kubernetes, and service mesh solutions
              </li>
              <li>
                <strong>Serverless Architecture: </strong> Design and build event-driven applications using AWS Lambda, Azure Functions, or Google Cloud Functions
              </li>
              <li>
                <strong>Microservices Implementation:</strong> Transform monolithic applications into scalable microservices
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/arti.jpg"
              alt="Cloud Strategy"
              className="strategy-image"
            />
          </div>
        </div>
      </section>







      {/* ======= Cloud Optimization & Operations ======= */}
      <section className="strategy-section" id="optimization">
        <div className="section-heading section-wrapper">
          <h2>
            Cloud <span className="highlight">Optimization &amp; </span>Operations
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <ul>
              <li>
                <strong>Cost Management:</strong>  Implement tagging strategies, right- sizing, and reserved instance planning
              </li>
              <li>
                <strong>Performance Tuning:</strong> Optimize cloud resources for maximum speed and efficiency
              </li>
              <li>
                <strong>Automated Scaling: </strong> Design solutions that dynamically adjust to demand
              </li>
              <li>
                <strong>Resource Utilization Analysis: </strong>  Identify underutilized resources and optimization opportunities
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/opti.jpg"
              alt="Cloud Strategy"
              className="strategy-image"
            />
          </div>
        </div>
      </section>






      {/* ======= Cloud Optimization & Operations ======= */}
      <section className="strategy-section" id="devSecOps">
        <div className="section-heading section-wrapper">
          <h2>
            Cloud <span className="highlight">Infra &amp; </span>Application <span className="highlight">DevSecOps</span>
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <ul>
              <li>
                <strong>CI/CD Pipeline Implementation:</strong>  Build automated workflows for application delivery
              </li>
              <li>
                <strong>Infrastructure Automation:</strong> Create self-healing, auto-scaling environments
              </li>
              <li>
                <strong>Monitoring & Observability:</strong> Implement comprehensive visibility into applications and infrastructure
              </li>
              <li>
                <strong>Site Reliability Engineering (SRE):  </strong> Apply software engineering principles to infrastructure operations
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">

            <img
              src="/infra.jpg"
              alt="Cloud Strategy"
              className="strategy-image"
            />
          </div>
        </div>
      </section>






      {/* ======= Cloud Optimization & Operations ======= */}
      <section className="strategy-section" id="security">
        <div className="section-heading section-wrapper">
          <h2>
            Cloud <span className="highlight">Security </span>Identity  <span className="highlight">Compliance</span>
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <ul>
              <li>
                <strong>Security Architecture Design: </strong>  Implement defense-in-depth strategies for cloud environments
              </li>
              <li>
                <strong>Identity & Access Management:</strong> Design least- privilege access controls and authentication systems
              </li>
              <li>
                <strong>Compliance Framework Implementation:</strong> Align cloud infrastructure with GDPR, HIPAA, SOC 2, and other regulatory requirements
              </li>
              <li>
                <strong>Security Monitoring & Response: </strong> Deploy solutions for continuous threat detection and incident management
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/security.jpg"
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
