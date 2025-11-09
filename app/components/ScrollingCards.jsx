"use client";
import React, { useEffect, useRef, useState } from "react";
import "./NewsletterSection.css";
import { ScrollObserver, valueAtPercentage } from "aatjs";
import PopUp from './PopUp'

import Link from "next/link";
import gsap from "gsap";

const ScrollingCards = () => {
  const cardsRef = useRef([]);
  const [activeTestimonial, setActiveTestimonial] = useState(null); // <-- new state

  useEffect(() => {
    const cardsContainer = document.querySelector(".cards");
    const cards = cardsRef.current;

    if (!cardsContainer || cards.length === 0) return;

    // CSS variables
    cardsContainer.style.setProperty("--cards-count", cards.length);
    cardsContainer.style.setProperty(
      "--card-height",
      `${cards[0].clientHeight}px`
    );

    // Entrance animation
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.3, ease: "power4.out" }
    );

    // Scroll-based effects
    cards.forEach((card, index) => {
      const offsetTop = 20 + index * 20;
      card.style.paddingTop = `${offsetTop}px`;

      if (index === cards.length - 1) return;

      const toScale = 1 - (cards.length - 1 - index) * 0.1;
      const nextCard = cards[index + 1];
      const cardInner = card.querySelector(".card__inner");

      ScrollObserver.Element(nextCard, {
        offsetTop,
        offsetBottom: window.innerHeight - card.clientHeight,
      }).onScroll(({ percentageY }) => {
        cardInner.style.scale = valueAtPercentage({ from: 1, to: toScale, percentage: percentageY });
        cardInner.style.filter = `brightness(${valueAtPercentage({ from: 1, to: 0.6, percentage: percentageY })})`;
      });
    });
  }, []);


// inside your component
useEffect(() => {
  const popupContent = document.querySelector('.popup-content');
  if (!popupContent) return;

  const stopLenis = (e) => e.stopPropagation();
  popupContent.addEventListener('wheel', stopLenis);

  // cleanup on unmount / popup close
  return () => {
    popupContent.removeEventListener('wheel', stopLenis);
  };
}, [activeTestimonial]); // run only when popup opens/closes


  const cardData = [
    {
      title: "Cloud Services",
      viewMoreLink: "/cloudservices",
      description: [
        "Scale infrastructure with on-demand resources.",
        "Maximize uptime with reliable cloud hosting.",
        "Unlock the full value of your cloud data.",
      ],
      video: "/cloud.mp4",
      testimonial: <PopUp videoIndexes={[0]} />
    },
    {
      title: "AI and Data Services",
      viewMoreLink: "/aidataservices",
      description: [
        "Harness data with Azure-powered AI solutions.",
        "Transform raw data into actionable insights.",
        "Automate intelligence for smarter decisions.",
      ],
      video: "/product-development/hero-video.mp4",
      testimonial: <PopUp videoIndexes={[1]} />
    },
    {
      title: "Integration Services",
      viewMoreLink: "/integrationservices",
      description: [
        "Seamlessly connect applications across platforms.",
        "Automate workflows for efficiency and speed.",
        "Retrieve deeper value from your data integration.",
      ],
      video: "/video.mov",
      testimonial: <PopUp videoIndexes={[2]} />
    },
    {
      title: "Product Development",
      viewMoreLink: "/productdevelopment",
      description: [
        "Transform ideas into innovative digital products.",
        "Iterate quickly with agile development practices.",
        "Build the future by leveraging data-driven design.",
      ],
      video: "/video.mov",
      testimonial: <PopUp videoIndexes={[3]} />
    },
  ];

  // Function to open popup
  const openTestimonialPopup = (testimonial) => {
    setActiveTestimonial(testimonial);
  };

  // Function to close popup
  const closeTestimonialPopup = () => {
    setActiveTestimonial(null);
  };

  return (
    <>
      <div className="cards">
        <div className="forphone">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="card"
              data-index={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="card__inner">
                <div className="card__content">
                  <div className="card__content-inner">
                    <h1 className="card__title">{card.title}</h1>
                    <ul style={{ paddingTop: "20px" }}>
                      {card.description.map((line, i) => (
                        <p key={i} style={{ marginBottom: "10px" }}>
                          {line}
                        </p>
                      ))}
                    </ul>
                    <div className={'buttonRow'}>
                      <Link href={card.viewMoreLink}>
                        <button className={'btn'}>View More</button>
                      </Link>
                      <button
                        className={'btn'}
                        onClick={() => openTestimonialPopup(card.testimonial)}
                      >
                        Testimonials
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card__image-container">
                  <video
                    src={card.video}
                    loop
                    autoPlay
                    muted
                    playsInline
                    controls
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Popup */}
      {activeTestimonial && (
        <div className="testimonial-popup">
          <div className="popup-overlay" onClick={closeTestimonialPopup}></div>
          <div className="popup-content">
            <button className="close-btn" onClick={closeTestimonialPopup}>
              &times;
            </button>
            <p>{activeTestimonial}</p>
          </div>
        </div>
      )}

      <div className="space"></div>
    </>
  );
};

export default ScrollingCards;
