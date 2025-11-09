"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollPinSection() {
  const sectionRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const btn1 = btn1Ref.current;
    const btn2 = btn2Ref.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=600",         // total scroll space
        scrub: true,
        pin: true,
        // markers: true,
      },
    });

    // Button 1 moves up first (0 → 450px up)
    tl.to(btn1, { y: -520 }, 0);

    // Button 2 starts after button 1 finishes (delayed by "+=0.3" scroll time)
    tl.to(btn2, { y: -1050 }, "+=0.3");

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="pin-section">
        <div className="mydiv">
       <section className="brand-card-wrapper" style={{ marginTop: '2rem' }}>
      <div className="brand-card">
        <div className="red-dot"></div>
        <h1 className="card-title">BRAND DESIGN 1</h1>
        <hr className="card-divider" />
        <ul className="card-list">
          <li>VISUAL IDENTITY</li>
          <li>LOGO DESIGN</li>
          <li>PRINTED MATERIALS & STATIONERY</li>
          <li>CUSTOM TYPOGRAPHY</li>
          <li>BRAND GUIDELINES</li>
          <li>COLOR PALETTE</li>
        </ul>
      </div>
    </section>
    <section className="brand-card-wrapper" ref={btn1Ref}>
      <div className="brand-card">
        <div className="red-dot"></div>
        <h1 className="card-title">BRAND DESIGN 2</h1>
        <hr className="card-divider" />
        <ul className="card-list">
          <li>VISUAL IDENTITY</li>
          <li>LOGO DESIGN</li>
          <li>PRINTED MATERIALS & STATIONERY</li>
          <li>CUSTOM TYPOGRAPHY</li>
          <li>BRAND GUIDELINES</li>
          <li>COLOR PALETTE</li>
        </ul>
      </div>
    </section>
       <section className="brand-card-wrapper" ref={btn2Ref}>
      <div className="brand-card">
        <div className="red-dot"></div>
        <h1 className="card-title">BRAND DESIGN 3</h1>
        <hr className="card-divider" />
        <ul className="card-list">
          <li>VISUAL IDENTITY</li>
          <li>LOGO DESIGN</li>
          <li>PRINTED MATERIALS & STATIONERY</li>
          <li>CUSTOM TYPOGRAPHY</li>
          <li>BRAND GUIDELINES</li>
          <li>COLOR PALETTE</li>
        </ul>
      </div>
    </section></div>
      {/* <button ref={btn2Ref} className="scroll-button second">
        Button 2
      </button> */}
    </section>
  );
}


import "./service.css";


export default function ServiceCom() {
  return (
<>
  <div style={{ fontFamily: "Inter, sans-serif" }}>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@600;800&display=swap"
      rel="stylesheet"
    />
    <div style={{ height: "65vh", padding: "2rem", fontFamily: "Inter, sans-serif",background: '#401d19' }}>
      <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />

      {/* <h1 style="
        font-family: 'Anton', sans-serif;
        font-size: 59px;
        letter-spacing: -0.03em;
        line-height: 0.9em;
        color: black;
        text-transform: uppercase;
      "></h1> */}
      <h1
  style={{
    textTransform: "uppercase",
    fontSize: "clamp(2rem, 5vh, 4rem)",
    fontWeight: 'normal',
    borderBottom: '1px solid white',
    marginBottom: '1rem',
  }}
>
  Services
</h1>

<h1
  style={{
    maxWidth: '90vw',
    textTransform: "uppercase",
    fontWeight: 'bold',
    fontSize: "clamp(2.5rem, 11vh, 6rem)",
    fontFamily: 'Inter, sans',
    letterSpacing: '-0.02em',
    lineHeight: '1.1em',
    color: 'wheat',
    wordBreak: 'break-word',
  }}
>
  Where <br />
  Uniqueness <br />
  comes alive
</h1>

    </div>

    <ScrollPinSection />

    <div style={{ height: "10vh", padding: "" }}>
      <h1 className="special-text">Scaled Solutions Is Your Cloud Comfort</h1>
    </div>
  </div>
</>
  );
}
