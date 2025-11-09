"use client";

import { useState } from "react";
import NavBar from "../components/NavBar";
import NewFooter from "../components/NewFooter";
import SuccessStoriesSection from "../components/SuccessStoriesSection";
import Link from "next/link";
import "./deliveryPartner.css";
// import "../styles/SuccessStories.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "../page.module.css";



export default function DeliveryPartnerPage() {
  return (
    <>
      <NavBar />

      {/* ===== Hero Section ===== */}
      <section className="delivery-hero">
        <div className="animated-grid"></div>
        <div className="animated-circle"></div>
        <svg class="hero-blob" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#198190" stop-opacity="0.4" />
              <stop offset="100%" stop-color="#00bcd4" stop-opacity="0.1" />
            </linearGradient>
          </defs>
          <path fill="url(#blobGradient)">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
              values="
      M423,305Q408,360,358,388Q308,416,250,410Q192,404,153,367Q114,330,122,269Q130,208,171,162Q212,116,270,103Q328,90,377,124Q426,158,433,209Q440,260,423,305Z;
      M435,320Q422,380,367,406Q312,432,261,412Q210,392,163,351Q116,310,120,255Q124,200,165,158Q206,116,260,104Q314,92,369,117Q424,142,437,196Q450,250,435,320Z;
      M423,305Q408,360,358,388Q308,416,250,410Q192,404,153,367Q114,330,122,269Q130,208,171,162Q212,116,270,103Q328,90,377,124Q426,158,433,209Q440,260,423,305Z;
      " />
          </path>
        </svg>

        <div className="aligned-container">
          <div className="left-column">
            <h1>
              <span className="highlight">Scaled Solutions</span> and <span className="highlight">Tkxel</span> <br />
              partnered in <span className="highlight">Australia</span> to <br />
              deliver{" "}
              <img
                className="arrow-icon"
                width="64"
                height="64"
                src="https://img.icons8.com/laces/64/198190/arrow.png"
                alt="arrow"
              />{" "}
              high quality <br />
              projects for our clients.
            </h1>

            <p>
              Tkxel is a global technology company headquartered
              in Reston, Virginia, specializing in AI-powered software
              solutions. Founded in 2008, the company has grown to over
              1,000 employees and maintains a presence in the U.S., U.K.,
              Poland, Portugal, and Pakistan.
            </p>

            <a href="#core" className="cta-btn">Core Services</a>
            <Link href="/productdevelopment">
              <button className="cta-btn2">Case Studies</button>
            </Link>
          </div>

          <div className="right-column">{/* Optional image or illustration */}</div>
        </div>

      </section>

      {/* ===== Core Services Section ===== */}
      <section className="core-services" id="core">

        <h2 className="benefits-title">
          Our Core <span className="highlight">Services</span>
        </h2>
        <div class="gradient-line"></div>

        <div className="core-services-container">

          <div className="core-card">
            <div className="core-card-inner">
              <div className="core-icon purple">
                {/* <i className="fa-solid fa-code"></i> */}
                <img src="/icons/code.png" alt="Custom Software Development Icon" />
              </div>
              <h3>Custom Software Development</h3>
            </div>
            <p>Tailored solutions for web, mobile, and desktop applications.</p>
          </div>

          <div className="core-card">
            <div className="core-card-inner">
              <div className="core-icon purple">
                {/* <i className="fa-solid fa-brain"></i> */}
                <img src="/icons/artificial.png" alt="AI and Machine Learning Icon" />
              </div>
              <h3>Artificial Intelligence & Machine Learning</h3>
            </div>
            <p>Implementing AI-driven strategies to enhance business operations.</p>
          </div>

          <div className="core-card">
            <div className="core-card-inner">
              <div className="core-icon purple">
                {/* <i className="fa-solid fa-cloud"></i> */}
                <img src="/icons/cloud.png" alt="Cloud Engineering Icon" />
              </div>
              <h3>Cloud Engineering</h3>
            </div>
            <p>Providing cloud migration, DevOps, and infrastructure optimization.</p>
          </div>

          <div className="core-card">
            <div className="core-card-inner">
              <div className="core-icon purple">
                {/* <i className="fa-solid fa-palette"></i> */}
                <img src="/icons/ui.png" alt="UI UX Design Icon" />
              </div>
              <h3>UI/UX Design</h3>
            </div>
            <p>Focusing on user-centric design for optimal user experiences.</p>
          </div>

          <div className="core-card">
            <div className="core-card-inner">
              <div className="core-icon purple">
                {/* <i className="fa-solid fa-shield-halved"></i> */}
                <img src="/icons/Cybersecurity.png" alt="Cybersecurity Icon" />
              </div>
              <h3>Cybersecurity</h3>
            </div>
            <p>Offering SOC/NOC services to safeguard digital assets.</p>
          </div>

          <div className="core-card">
            <div className="core-card-inner">
              <div className="core-icon purple">
                {/* <i className="fa-solid fa-cubes"></i> */}
                <img src="/icons/technology.png" alt="Emerging Technologies Icon" />
              </div>
              <h3>Emerging Technologies</h3>
            </div>
            <p>Expertise in blockchain, IoT, AR/VR, and robotic process automation.</p>
          </div>

        </div>

      </section>










      {/* industry focus section  */}

      {/* ===== Company Highlights Section ===== */}
      <section className="highlights-section">
        <div className="highlights-container">

          <div className="highlight-column">
            <h3 className="highlight-title">Industry Focus</h3>
            <p>
              Tkxel serves a diverse range of industries, including:
            </p>
            <ul>
              <li><i class="fa-solid fa-circle-check icon"></i>Healthcare</li>
              <li><i class="fa-solid fa-circle-check icon"></i>Education</li>
              <li><i class="fa-solid fa-circle-check icon"></i>Financial Services</li>
              <li><i class="fa-solid fa-circle-check icon"></i>Retail</li>
              <li><i class="fa-solid fa-circle-check icon"></i>Technology</li>
            </ul>
            <p>
              The company collaborates with clients ranging from startups to Fortune 500 companies, delivering scalable and innovative solutions.
            </p>
          </div>

          <div className="highlight-column">
            <h3 className="highlight-title">Recognitions & Certifications</h3>
            <p>
              Tkxel has been recognized for its rapid growth and excellence in service:
            </p>
            <ul>
              <li> <i class="fa-solid fa-circle-check icon"></i> Featured on the Inc. 5000 list of fastest-growing private companies.</li>
              <li> <i class="fa-solid fa-circle-check icon"></i> Certified in CMMI DEV 3, ISO 9001, ISO 27001, and ISO 20000 standards.</li>
            </ul>
          </div>

          <div className="highlight-column">
            <h3 className="highlight-title">Community Engagement</h3>
            <p>
              Tkxel actively engages in social initiatives and industry development:
            </p>
            <ul>
              <li> <i class="fa-solid fa-circle-check icon"></i> Supports STEM education and tech bootcamps for youth.</li>
              <li> <i class="fa-solid fa-circle-check icon"></i> Encourages volunteerism and sustainable technology practices.</li>
            </ul>
          </div>

          <div className="highlight-column">
            <h3 className="highlight-title">Corporate Responsibility</h3>
            <p>
              Tkxel remains committed to empowering communities through technology education, sustainability, and inclusive hiring initiatives.
            </p>
            <ul>
              <li> <i class="fa-solid fa-circle-check icon"></i> Promotes sustainability and green tech programs.</li>
              <li> <i class="fa-solid fa-circle-check icon"></i> Fosters workplace diversity and inclusion.</li>
            </ul>
          </div>

        </div>
      </section>



      <SuccessStoriesSection />





      <NewFooter />
    </>
  );
}
