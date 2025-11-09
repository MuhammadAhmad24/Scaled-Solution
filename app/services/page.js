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
              {/* <video
                src="https://static.vecteezy.com/system/resources/previews/046/778/264/mp4/cloud-computing-cloud-computing-concept-cloud-computing-technology-internet-and-big-data-network-connectivity-of-digital-data-hi-speed-internet-of-things-big-data-concept-free-video.mp4"
                controls
                muted
                playsInline
                className="services-video"
              /> */}
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
        </div>
      </section>




      {/* ======= Cloud Strategy & Advisory Section ======= */}
      <section className="strategy-section ">
        <div className="section-heading section-wrapper">
          <h2>
            Cloud <span className="highlight">strategy <br></br></span> &amp; advisory
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
      <section className="strategy-section ">
        <div className="section-heading section-wrapper">
          <h2>
            Cloud <span className="highlight">Architecture &amp;<br></br></span>Implementation
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
            {/* <img
        src="https://images.unsplash.com/photo-1639773759819-591538caea6f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
        alt="Cloud Strategy"
        className="strategy-image"
      /> */}
            <img
              src="/arti.jpg"
              alt="Cloud Strategy"
              className="strategy-image"
            />
          </div>
        </div>
      </section>







      {/* ======= Cloud Optimization & Operations ======= */}
      <section className="strategy-section ">
        <div className="section-heading section-wrapper">
          <h2>
            Cloud <span className="highlight">Optimization &amp;<br></br></span>Operations
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
            {/* <img
        src="https://images.unsplash.com/photo-1639773759819-591538caea6f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
        alt="Cloud Strategy"
        className="strategy-image"
      /> */}
            <img
              src="/opti.jpg"
              alt="Cloud Strategy"
              className="strategy-image"
            />
          </div>
        </div>
      </section>






      {/* ======= Cloud Optimization & Operations ======= */}
      <section className="strategy-section ">
        <div className="section-heading section-wrapper">
          <h2>
            Cloud <span className="highlight">Infra &amp;<br></br></span>Application <span className="highlight">DevSecOps</span>
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
            {/* <img
        src="https://images.unsplash.com/photo-1639773759819-591538caea6f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
        alt="Cloud Strategy"
        className="strategy-image"
      /> */}

            <img
              src="/infra.jpg"
              alt="Cloud Strategy"
              className="strategy-image"
            />
          </div>
        </div>
      </section>






      {/* ======= Cloud Optimization & Operations ======= */}
      <section className="strategy-section ">
        <div className="section-heading section-wrapper">
          <h2>
            Cloud <span className="highlight">Security<br></br></span>Identity  <span className="highlight">Compliance</span>
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
            {/* <img
        src="https://images.unsplash.com/photo-1639773759819-591538caea6f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
        alt="Cloud Strategy"
        className="strategy-image"
      /> */}
            <img
              src="/security.jpg"
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
