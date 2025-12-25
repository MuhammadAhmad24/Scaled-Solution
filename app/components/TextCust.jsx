"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './styles/TextCust.css'

gsap.registerPlugin(ScrollTrigger);

const TextCust = () => {

  const parentRef = useRef(null);
  const stepsRef = useRef([]);

  const items = [
    <div className="textAnimation" key="offer">
      <h3>The Offer</h3>
      <div className="offer-checklist">
        <p><span className="check-icon">✓</span> A pool of 1100+ pre-vetted developers across web, mobile, blockchain and AI.</p>
        <p><span className="check-icon">✓</span> Available in a simple month to month.</p>
        <p><span className="check-icon">✓</span> Subscription based model.</p>
      </div>
    </div>,

    <div className="textAnimation" key="direct">
      <h3>Direct Developers</h3>
      <img src="/animations/teamExpansion1.svg" alt="direct" />
    </div>,

    <div className="textAnimation" key="devteam">
      <h3>Software Development Team</h3>
      <img src="/animations/teamExpansion2.svg" alt="development" />
    </div>,

    <div className="textAnimation" key="agile">
      <h3>Agile Squad</h3>
      <img src="/animations/teamExpansion3.svg" alt="agile" />
    </div>
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {

      const total = stepsRef.current.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parentRef.current,
          start: "top top",
          end: "+=" + window.innerHeight * total * 2.5,  // LONGER scroll = smoother
          scrub: 0.8,  // smoother scrub
          pin: true,
        }
      });

      stepsRef.current.forEach((step, i) => {

        const pos = i * 3;  // more spacing = smooth stay

        // Fade In
        tl.fromTo(
          step,
          { scale: 0.7, opacity: 0, filter: "blur(20px)" },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "power2.out"
          },
          pos
        );

        // Stay visible (smooth hold)
        tl.to(
          step,
          {
            opacity: 1,
            duration: 1.2
          },
          pos + 1.3
        );

        // Fade Out
        tl.to(
          step,
          {
            scale: 0.85,
            opacity: 0,
            filter: "blur(15px)",
            duration: 1.5,
            ease: "power2.inOut"
          },
          pos + 2
        );

      });

    });

    return () => ctx.revert();
  }, []);


  return (
    <section className="tc-parent" ref={parentRef}>
      <div className="tc-inner">
        {items.map((item, i) => (
          <div
            key={i}
            className="tc-step"
            ref={(el) => (stepsRef.current[i] = el)}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TextCust;
