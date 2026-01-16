"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import NavBar from "../components/NavBar";
import TeamSection from "../components/TeamSection";
import NewFooter from "../components/NewFooter";
import Link from "next/link";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const partnerRefs = useRef([]);
  const logos = [
    "abb",
    "barclays",
    "cintas",
    "groupon",
    "knowles",
    "lumatax",
    "moment",
    "nbc",
    "replenium",
  ];

useEffect(() => {
  partnerRefs.current.forEach((marquee, index) => {
    const inner = marquee.querySelector(".marquee__inner");

    // duplicate content 2-3 times for seamless scroll
    inner.innerHTML += inner.innerHTML + inner.innerHTML;

    // wait for images to load to get correct width
    const images = inner.querySelectorAll("img");
    let loaded = 0;
    images.forEach((img) => {
      if (img.complete) loaded++;
      else img.onload = () => { loaded++; startAnimation(); };
    });

    if (loaded === images.length) startAnimation();

    function startAnimation() {
      const totalWidth = inner.scrollWidth / 3; // one set of logos

      gsap.to(inner, {
        x: index % 2 === 0 ? -totalWidth : totalWidth, // direction
        duration: 30,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const val = parseFloat(x); // remove px
            return (val % totalWidth) + "px"; // wrap continuously
          },
        },
      });
    }
  });
}, []);



  return (
    <>
      <NavBar />

      {/* ===== ABOUT ===== */}
      <section className="about-section">
        <div className="floating-accents">
          <div className="accent accent1"></div>
          <div className="accent accent2"></div>
          <div className="accent accent3"></div>
        </div>
        <div className="animated-grid"></div>

        <svg className="hero-blob" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#00bcd4" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path fill="url(#blobGradient)">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
              M423,305Q408,360,358,388Q308,416,250,410Q192,404,153,367Q114,330,122,269Q130,208,171,162Q212,116,270,103Q328,90,377,124Q426,158,433,209Q440,260,423,305Z;
              M435,320Q422,380,367,406Q312,432,261,412Q210,392,163,351Q116,310,120,255Q124,200,165,158Q206,116,260,104Q314,92,369,117Q424,142,437,196Q450,250,435,320Z;
              M423,305Q408,360,358,388Q308,416,250,410Q192,404,153,367Q114,330,122,269Q130,208,171,162Q212,116,270,103Q328,90,377,124Q426,158,433,209Q440,260,423,305Z;
            "
            />
          </path>
        </svg>

        <div className="about-content">
          <h2>Who We Are</h2>
          <p className="about-text">
            Scaled Solutions is an IT consulting firm that helps
            organizations design, build, and optimize their cloud, AI,
            data, and integration capabilities, primarily using Microsoft
            Azure technologies. We deliver end-to-end solutions, from
            architecture and data strategy through to implementation
            and ongoing managed services.
            <br />
            We also provide offshore staffing services through a hybrid
            delivery model
          </p>
        </div>

        <div className="strategy-left">
          <ul>
            <li>
              A pool of 1100+ pre-vetted developers across
              web, mobile, cloud and AI.
            </li>
            <li>
              Our Cloud and AI accelerator help your
              business to get competitive advantage
            </li>
            <li>
              Consultants worked with 500 fortune
              companies, bring wealth of experience
            </li>
          </ul>
        </div>
      </section>

      {/* ===== What we Deliver ===== */}
      <section className="deliver-wrapper">
        <h2>What We Deliver</h2>
        <div>
          <div>
            <div className="video-box">
              <video
                src="/cloud.mp4"
                controls
                muted
                playsInline
                className="services-video"
              />
            </div>
            <h3>Cloud Services</h3>
          </div>

          <div>
            <div className="video-box">
              <video
                src="/product-development/hero-video.mp4"
                controls
                muted
                playsInline
                className="services-video"
              />
            </div>
            <h3>AI and Data Services</h3>
          </div>

          <div>
            <div className="video-box">
              <video
                src="/interagration-service.mp4"
                controls
                muted
                playsInline
                className="services-video"
              />
            </div>
            <h3>Integration Services</h3>
          </div>

          <div>
            <div className="video-box">
              <video
                src="/Poduct_deveopment.mp4"
                controls
                muted
                playsInline
                className="services-video"
              />
            </div>
            <h3>Product Development</h3>
          </div>
        </div>
      </section>

      {/* ===== Partner Marquee ===== */}
      <section className="partners-wrapper">
        <div className="partner">
          <h2>Trusted partner of</h2>

          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="marquee"
              ref={(el) => (partnerRefs.current[index] = el)}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="marquee__inner">
                  {logos.map((logo) => (
                    <div key={logo} className="marquee__part">
                      <img src={`/logos/${logo}.svg`} alt={logo} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}

          <h3>At Scaled Solutions, we are <span>Azure Experts</span>. Having decades of experience with Microsoft and Azure technologies</h3>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="team-wrapper">
        <TeamSection />
      </section>

      <NewFooter />
    </>
  );
}
