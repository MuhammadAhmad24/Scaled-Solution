"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const texts = ["300_Clients", "9_Products", "96_Live Web"];

function TextCust() {
  const textRefs = useRef([]);
  const pinContainerRef = useRef();

  useEffect(() => {
    const stayDuration = 2.5;
    const animDuration = 1.2;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinContainerRef.current,
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
        // markers: true,
      },
    });

    textRefs.current.forEach((el, i) => {
      const start = i * (stayDuration + animDuration);
      tl.fromTo(
        el,
        { scale: 0, opacity: 0, filter: "blur(20px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: animDuration,
          ease: "power2.out",
        },
        start
      ).to(
        el,
        {
          scale: 1.6,
          opacity: 0,
          filter: "blur(20px)",
          duration: animDuration,
          ease: "power2.in",
        },
        start + stayDuration
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={pinContainerRef}
      style={{
        width: "82vw",
        height: "100vh",
        backgroundColor: "#0B1C23",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        
            // border: "1px solid #fff",
        padding: "1rem",
      }}
    >
      {texts.map((text, index) => (
        <div
          key={index}
          ref={(el) => (textRefs.current[index] = el)}
          style={{
            position: "absolute",
            top: "50%",
            left: "52%",
            transform: "translate(-50%, -50%) ",
            opacity: 0,
            filter: "blur(20px)",
            fontSize: "clamp(2rem, 9vw, 10rem)", // responsive font size
            fontWeight: "700",
            color: "#CBCBCB",
            fontFamily: "'Inter', sans-serif",
            whiteSpace: "nowrap",
            textAlign: "center",
            maxWidth: "100%",
            willChange: "transform, opacity, filter",
          }}
        >
          {text}
        </div>
      ))}
    </section>
  );
}

export default function App() {
  return (
<div style={{ fontFamily: "'Inter', sans-serif",  overflow: "hidden" }}>

      <div style={{ height: "200vh",
        
            // border: "1px solid #fff",
       }}>
        <TextCust />
      </div>

      
    </div>
  );
}
