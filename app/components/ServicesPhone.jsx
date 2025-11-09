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
        end: "+=800",         // total scroll space
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
    <section ref={sectionRef} className="pin-section" >
       {/* <section className="brand-card-wrapper" style={{ marginTop: '2rem' }}>
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
    </section> */}
    {/* <section className="brand-card-wrapper" ref={btn1Ref}>
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
    </section> */}
    
   <section 
   style={{
  width: '370px',
  height: '490px',
  border: '2px solid #fff',
  borderRadius: '10px',
//   backgroundColor: '#2e1412', // Dark maroon background
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#f5eada',
  fontFamily: 'Poppins, sans-serif'
}}
>
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '80%',
  }}>
    <h1 style={{
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '10px',
      borderBottom: '1px solid #f5eada',
      width: '100%',
      paddingBottom: '8px'
    }}>
      BRAND DESIGN
    </h1>
    <ul style={{
      listStyle: 'none',
      padding: 0,
      margin: 0,
      lineHeight: '2em',
      fontSize: '14px',
      fontWeight: '500'
    }}>
      <li>VISUAL IDENTITY</li>
      <li>LOGO DESIGN</li>
      <li>CUSTOM TYPOGRAPHY</li>
      <li>PRINTED MATERIALS & STATIONERY</li>
      <li>BRAND GUIDELINES</li>
      <li>COLOR PALETTE</li>
    </ul>
  </div>
</section>
   <section 
   style={{
  width: '370px',
  height: '490px',
  border: '2px solid #fff',
  borderRadius: '10px',
  backgroundColor: '#2e1412', // Dark maroon background
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#f5eada',
  fontFamily: 'Poppins, sans-serif'
}}
ref={btn1Ref}>
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '80%',
  }}>
    <h1 style={{
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '10px',
      borderBottom: '1px solid #f5eada',
      width: '100%',
      paddingBottom: '8px'
    }}>
      BRAND DESIGN
    </h1>
    <ul style={{
      listStyle: 'none',
      padding: 0,
      margin: 0,
      lineHeight: '2em',
      fontSize: '14px',
      fontWeight: '500'
    }}>
      <li>VISUAL IDENTITY</li>
      <li>LOGO DESIGN</li>
      <li>CUSTOM TYPOGRAPHY</li>
      <li>PRINTED MATERIALS & STATIONERY</li>
      <li>BRAND GUIDELINES</li>
      <li>COLOR PALETTE</li>
    </ul>
  </div>
</section>
   <section ref={btn2Ref} style={{
  width: '370px',
  height: '490px',
  border: '2px solid #fff',
  borderRadius: '10px',
  backgroundColor: '#2e1412', // Dark maroon background
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#f5eada',
  fontFamily: 'Poppins, sans-serif'
}}>
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '80%',
  }}>
    <h1 style={{
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '10px',
      borderBottom: '1px solid #f5eada',
      width: '100%',
      paddingBottom: '8px'
    }}>
      BRAND DESIGN 3
    </h1>
    <ul style={{
      listStyle: 'none',
      padding: 0,
      margin: 0,
      lineHeight: '2em',
      fontSize: '14px',
      fontWeight: '500'
    }}>
      <li>VISUAL IDENTITY</li>
      <li>LOGO DESIGN</li>
      <li>CUSTOM TYPOGRAPHY</li>
      <li>PRINTED MATERIALS & STATIONERY</li>
      <li>BRAND GUIDELINES</li>
      <li>COLOR PALETTE</li>
    </ul>
  </div>
</section>

      {/* <button ref={btn2Ref} className="scroll-button second">
        Button 2
      </button> */}
    </section>
  );
}


import "./service_phone.css";


export default function ServicesPhone() {
  return (
<>
  <div style={{ fontFamily: "Inter, sans-serif" }}>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@600;800&display=swap"
      rel="stylesheet"
    />
    <div className="header-section" >
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
  
  className="header-title-primary"
  style={{borderBottom: '2px solid #fff', paddingBottom: '10px', marginBottom: '20px'}}
>
  Services
</h1>

<h1
  className=" header-title-secondary"
>
  Where <br />
  Uniqueness <br />
  comes alive
</h1>

    </div>

    <ScrollPinSection />

    <div style={{ height: "10vh", paddingLeft: "20px" }}>
      <h1 className="special-text">Scaled Solutions Is Your Cloud Comfort</h1>
    </div>
  </div>
</>
  );
}
