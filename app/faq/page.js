"use client";
import React from 'react'
import FaqComponent from "../components/FaqComponent";
import NavBar from "../components/NavBar";
import NewFooter from "../components/NewFooter";
import "./style.css";

const Faq = () => {
  return (
    <>
      <NavBar />
      <div className='faq-wrapper'>
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
        <FaqComponent />
      </div>
      <NewFooter />
    </>
  )
}

export default Faq