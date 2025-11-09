"use client";
import React, { useEffect, useRef } from "react";
import "./app.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

const TextPressure = dynamic(() => import('./TextPressure'), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function NewFooter() {
  const footerRef = useRef(null);
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    const targets = footerRef.current.querySelectorAll(".footer-animate");

    targets.forEach((el, i) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 40,
          filter: "blur(30px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          delay: i * 0.15,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  React.useEffect(() => setMounted(true), []);

  return (
    <section className="footer" ref={footerRef} >
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet"></link>
      <div className="container" style={{ paddingTop: "20px" }}>
        <div className="boxicon">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94_889)"
            ></rect>
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94_889)"
              strokeWidth="0.7"
            ></rect>
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94_889)"
            ></path>
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94_889)"
              strokeWidth="0.7"
            ></path>
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94_889)"
            ></path>
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94_889)"
              strokeWidth="0.7"
            ></path>

            <defs>
              <linearGradient
                id="paint0_linear_94_889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5FD4F4" stopOpacity="0.62" />
                <stop offset="1" stopColor="#5FD4F4" stopOpacity="0" />
              </linearGradient>

              <linearGradient
                id="paint1_linear_94_889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5FD4F4" stopOpacity="0" />
                <stop offset="1" stopColor="#5FD4F4" stopOpacity="0.51" />
              </linearGradient>

              <linearGradient
                id="paint2_linear_94_889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5FD4F4" stopOpacity="0.62" />
                <stop offset="1" stopColor="#5FD4F4" stopOpacity="0" />
              </linearGradient>

              <linearGradient
                id="paint3_linear_94_889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5FD4F4" stopOpacity="0" />
                <stop offset="1" stopColor="#5FD4F4" stopOpacity="0.51" />
              </linearGradient>

              <linearGradient
                id="paint4_linear_94_889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5FD4F4" stopOpacity="0.62" />
                <stop offset="1" stopColor="#5FD4F4" stopOpacity="0" />
              </linearGradient>

              <linearGradient
                id="paint5_linear_94_889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5FD4F4" stopOpacity="0" />
                <stop offset="1" stopColor="#5FD4F4" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="footer-email-row" >
          <a
            href="mailto:hello@finlay.studio"
            className="footer-top-heading email-animate"
          >
            <span className="footer-email-icon-wrap">
              <span className="footer-icon-wrap">
                <img
                  src="https://cdn.prod.website-files.com/67ed8747a07565224d85b333/67ee8b55a19679baad70ddf9_arrow-right%20(2).svg"
                  alt=""
                  className="footer-arrow-icon arrow-orange"
                  loading="lazy"
                />
                {/* <img
                  src="https://cdn.prod.website-files.com/67ed8747a07565224d85b333/67fb6925ee648dcac77e467f_arrow-right%20(1).svg"
                  alt=""
                  className="footer-arrow-icon arrow-black"
                  loading="lazy"
                /> */}
              </span>
            </span>
            <span className="footer-email-text">ScaleSol@gmail.com</span>
          </a>
        </div>
        <div className="footer-top-wrap">
          <div className="footer-content-wrap">
            <div className="footer-menu-wrap footer-animate">
              <p className="paragraph-small text-gray-2">(MAIN PAGES)</p>
              <div className="footer-menu-link">
                {[
                  { text: "Home", href: "/" },
                  { text: "About", href: "#" },
                  { text: "Team Expansion", href: "/teamexpansion" },
                  { text: "Delivery Partner", href: "/deliverypartner" },
                  { text: "Contact", href: "/contact" },
                ].map((item, i) => (
                  <a href={item.href} className="menu-link-list paragraph-large" key={i}>
                    {item.text}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-menu-wrap footer-animate">
              <p className="paragraph-small text-gray-2">(SERVICES PAGES)</p>
              <div className="footer-menu-link">
                {[
                  { text: "Cloud Services", href: "/cloudservices" },
                  { text: "Ai & Data Services", href: "/aidataservices" },
                  { text: "Integration Services", href: "/integrationservices" },
                  { text: "Product Development", href: "/productdevelopment" },
                ].map((item, i) => (
                  <a href={item.href} className="menu-link-list paragraph-large" key={i}>
                    {item.text}
                  </a>
                ))}
              </div>
            </div>


            <div className="footer-menu-wrap footer-menu-02 footer-animate">
              <p className="paragraph-small text-gray-2">(OFFICE)</p>
              <div className="footer-menu-link">
                <p className="paragraph-large">
                  123 Maplewood Drive<br />
                  Springfield, IL 62704<br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-wrap footer-animate" >
          <div className="text-pressure-container">
            {mounted && (
              <img
                src="/logo.png"
                alt="logo"
                style={{
                  height: "auto",
                  objectFit: "contain"
                }}
              />
            )}
          </div>


          <div className="footer-bottom-right">
            <p className="paragraph-large text-gray-2">
              © 2025 - Design & Developed by Scaled Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
