"use client";

import NavBar from "../components/NavBar";
import NewFooter from "../components/NewFooter";
import Link from "next/link";
import "./teamExpansion.css";


export default function TeamExpansionPage() {
  return (
    <>
      <NavBar />

      {/* ===== Hero Section ===== */}
      <section className="team-hero">
        <div className="animated-circle"></div>
                <div className="animated-grid"></div>
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
          {/* Left Column */}
          <div className="left-column">
            <h1>
              <span className="highlight">Subscription</span> Based<br />Development.
            </h1>
            <p>Hire top 3% developers in a simple month to month subscription based model.</p>

            <Link href="/contact">
              <button className="cta-btn">Let’s Collaborate</button>
            </Link>

            <Link href="/productdevelopment">
              <button className="cta-btn cta-btn2">Case Studies</button>
            </Link>
          </div>

          {/* Right Column */}
          <div className="right-column"></div>
        </div>
      </section>






      {/* ===== The Offer Section ===== */}
      <section className="the-offer-section">


        <div className="main-offer-sec">



          <div className="offer-header">
            <div className="offer-left">
              <h2 className="offer-title">The <span className="highlight">Offer</span></h2>
              <div className="offer-checklist">
                <p><span className="check-icon">&#10003;</span> A pool of 1100+ pre-vetted developers across web, mobile, blockchain and AI.</p>
                <p><span className="check-icon">&#10003;</span> Available in a simple month to month.</p>
                <p><span className="check-icon">&#10003;</span> Subscription based model.</p>
              </div>
            </div>

            <div className="offer-header-icon">

              <img className="offerimg" width="120" src="/icons/team.png" alt="people-working-together" />
            </div>
          </div>

          <div className="offer-cards-container">
            <a href="#directdevelopers" className="offer-card">
              <img src="/icons/code.png" alt="Custom Software Development Icon" />
              <h3>Direct Develops</h3>
              <p>Ventrilo develops innovative data solutions for humans in charge of making informed decisions.</p>
            </a>

            <a href="#softwaredev" className="offer-card">
              <img className="iconimg" width="64" height="64" src="/icons/software.png" alt="external-development-web-design-and-development-flatart-icons-outline-flatarticons-2" />
              <h3>Software Dev</h3>
              <p>Ventrilo develops innovative data solutions for humans in charge of making informed decisions.</p>
            </a>

            <a href="#agilesquad" className="offer-card">
              <img className="iconimg" width="58" height="58" src="/icons/agile.png" alt="external-bulb-lean-thinking-sbts2018-outline-sbts2018" />
              <h3>Agile Squad</h3>
              <p>Ventrilo develops innovative data solutions for humans in charge of making informed decisions.</p>
            </a>
          </div>



        </div>
      </section>
      {/* ------------------------------------------- */}










      {/* ===== Image Sections ===== */}
      <section className="team-image-group">
        <div className="image-section">
          <h2 className="image-section-title" id="directdevelopers">Direct Developers</h2>
          <img
            src="https://scaledsols.my.canva.site/_assets/media/fa5edcbc47a0baabf9448a29b319ac30.png"
            alt="Direct Developers"
            className="image-section-img"
          />
        </div>

        {/* 2️⃣ Software Development Team */}
        <div className="image-section" id="softwaredev">
          <h2 className="image-section-title">Software Development Team</h2>
          <img
            src="https://scaledsols.my.canva.site/_assets/media/3ff24e31e7f25081a8791b6f8ef44732.png"
            alt="Software Development Team"
            className="image-section-img"
          />
        </div>

        {/* 3️⃣ Agile Squad */}
        <div className="image-section" id="agilesquad">
          <h2 className="image-section-title">Agile Squad</h2>
          <img
            src="https://scaledsols.my.canva.site/_assets/media/be290c6512d40e2694bfd8f35160f4b8.png"
            alt="Agile Squad"
            className="image-section-img"
          />
        </div>

      </section>




      <NewFooter />
    </>
  );
}
