"use client";
import styles from "./page.module.css";
import stylesNavBar from "./components/styles/NavBar.module.css";
import stylesFooter from "./components/styles/Footer.module.css";
import NavBar from "./components/NavBar";
import NewFooter from "./components/NewFooter";
import FinalService from './components/FinalService'
import Link from "next/link";
// import ScrollingCards from './components/ScrollingCards'
import dynamic from "next/dynamic";

const ScrollingCards = dynamic(() => import('./components/ScrollingCards'), {
  ssr: false
});

gsap.registerPlugin(ScrollTrigger);
// import { valueAtPercentage, ScrollObserver } from 'aatjs'
const cardData = [

  {
    title: "Card Title",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta
    error nam eaque. Eum fuga laborum quos expedita iste saepe
    similique, unde possimus quia at magnam sed cupiditate?
    Reprehenderit, harum!`,
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100",
  },
  {
    title: "Card Title 4",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta
    error nam eaque. Eum fuga laborum quos expedita iste saepe
    similique, unde possimus quia at magnam sed cupiditate?
    Reprehenderit, harum!`,
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100",
  },
  {
    title: "Card Title",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta
    error nam eaque. Eum fuga laborum quos expedita iste saepe
    similique, unde possimus quia at magnam sed cupiditate?
    Reprehenderit, harum!`,
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100",
  },
  // Duplicate or unique cards can be added
  // Add more if needed
  // ...
];

// const texts = ["300_Clients", "9_Products", "96_Live Web"];

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";
//import Lenis from "@studio-freight/lenis";
import Lenis from "lenis";
import { useEffect, useState, useRef } from "react";
import Footer from "./components/Footer";
import { isMobile } from "react-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import TextCust from "./components/TextCust";
import FaqComponent from "./components/FaqComponent";

gsap.registerPlugin(ScrollTrigger, CustomEase);

ScrollTrigger.defaults({
  start: "top 90%",
  end: "bottom 10%",
});

export default function Home() {
  const section3Ref = useRef(null);
  const headRef = useRef(null);
  const pRef = useRef(null);
  const span1Ref = useRef(null);
  const span2Ref2 = useRef(null);
  const cardRefs = useRef([]);
  const partnerRef = useRef(null);
  const marqueeRefs = useRef([]);

  useEffect(() => {
    const t = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500); // mobile layout settle time

    return () => clearTimeout(t);
  }, []);


  useEffect(() => {
    // ----------- NavBar Animation ----------- //
    gsap.fromTo(
      `.${stylesNavBar.NavBar}`,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 0.8,
      }
    );
    // ----------- Section 1 Animation ----------- //
    gsap.fromTo(
      `.${styles.section_1} .${styles.head} h1 .${styles.spanHeadSection_1}:nth-child(1)`,
      {
        y: "50%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        delay: 0.8,
        duration: 0.8,
      }
    );
    gsap.fromTo(
      `.${styles.section_1} .${styles.head} h1 .${styles.spanHeadSection_1}:nth-child(2)`,
      {
        y: "50%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        delay: 1,
        duration: 0.8,
      }
    );
    gsap.fromTo(
      `.${styles.section_1} .${styles.head} .${styles.btn}`,
      {
        y: "80%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        delay: 1.2,
        duration: 0.8,
      }
    );

    // ----------- Smooth Scroll ----------- //
    const lenis = new Lenis({
      duration: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });



    // // ----------- Marquee ----------- //
    gsap.to(`.${styles.marquee}:nth-child(2) .${styles.marquee__inner}`, {
      xPercent: -100,
      duration: 30,
      repeat: -1,
      ease: "linear",
      overwrite: "auto", // استخدام خاصية overwrite لتجنب التقطيع
    });
    gsap.to(`.${styles.marquee}:nth-child(3) .${styles.marquee__inner}`, {
      xPercent: 100,
      duration: 30,
      repeat: -1,
      ease: "linear",
      overwrite: "auto", // استخدام خاصية overwrite لتجنب التقطيع
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);


  useEffect(() => {
    if (!span1Ref.current || !span2Ref2.current || !headRef.current) return;

    const ctx = gsap.context(() => {

      gsap.set(span1Ref.current, { x: "-100%", opacity: 0 });
      gsap.set(span2Ref2.current, { x: "100%", opacity: 0 });


      // ---- LEFT span ----
      gsap.to(span1Ref.current, {
        x: "-40%",
        opacity: 1,
        duration: 0.8,
        ease: CustomEase.create("custom", "M0,0,C0.215,0.61,0.355,1,1,1"),
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      // ---- RIGHT span ----
      gsap.to(span2Ref2.current, {
        x: "40%",
        opacity: 1,
        duration: 0.8,
        ease: CustomEase.create("custom", "M0,0,C0.215,0.61,0.355,1,1,1"),
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      // ---- SVG ----
      gsap.fromTo(
        headRef.current.querySelector("svg"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 0.4,
          scrollTrigger: {
            trigger: headRef.current,
          },
        }
      );

    });

    return () => ctx.revert();
  }, []);



  useEffect(() => {
    const ctx = gsap.context(() => {
      // ---------- Cards Animation ----------
      cardRefs.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            delay: i * 0.2,
            duration: 0.5,
            scrollTrigger: { trigger: section3Ref.current.querySelector(`.${card.className.split(" ")[0]}`) },
          }
        );
      });

      // ---------- Partner Heading ----------
      gsap.fromTo(
        partnerRef.current.querySelector("h2"),
        { x: 150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: { trigger: partnerRef.current },
        }
      );

      // ---------- Marquee Animation ----------
      marqueeRefs.current.forEach((marquee) => {
        gsap.fromTo(
          marquee,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.5,
            scrollTrigger: { trigger: partnerRef.current },
          }
        );
      });
    }, section3Ref);

    return () => ctx.revert();
  }, []);



  const sectionRef = useRef(null);


  const spanRefs = useRef([]);
  spanRefs.current = [];

  const hrRef = useRef(null);
  const titleRef = useRef(null);

  const addSpanRef = (el) => {
    if (el && !spanRefs.current.includes(el)) {
      spanRefs.current.push(el);
    }
  };

  useEffect(() => {

    // HEADING SPAN ANIMATIONS
    gsap.fromTo(
      spanRefs.current[0],
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        delay: 0.3,
        ease: CustomEase.create(
          "custom",
          "M0,0,C0.215,0.61,0.355,1,1,1"
        ),
        scrollTrigger: { trigger: spanRefs.current[0] },
      }
    );

    gsap.fromTo(
      spanRefs.current[1],
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        delay: 0.3,
        ease: CustomEase.create(
          "custom",
          "M0,0,C0.215,0.61,0.355,1,1,1"
        ),
        scrollTrigger: { trigger: spanRefs.current[1] },
      }
    );

    // HR LINE
    const hrInnerDiv = hrRef.current.querySelector("div");

    gsap.fromTo(
      hrInnerDiv,
      { opacity: 0, transform: "scale3d(0,1,1)" },
      {
        opacity: 1,
        transform: "scale3d(1,1,1)",
        duration: 1,
        ease: CustomEase.create(
          "custom",
          "M0,0,C0.645,0.045,0.355,1,1,1"
        ),
        scrollTrigger: { trigger: hrRef.current },
      }
    );

    // TITLE TEXT
    gsap.fromTo(
      titleRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: { trigger: titleRef.current },
      }
    );
  }, []);


  const stickyRef = useRef(null);
  const cardsRef = useRef(null);
  const sCardRefs = useRef([]);
  sCardRefs.current = [];

  // Helper to add card/question refs
  const addCardRef = (el) => { if (el && !sCardRefs.current.includes(el)) sCardRefs.current.push(el); };


  // ---------- GSAP Animations ----------
  useEffect(() => {
    // ----- Sticky cards horizontal + rotation animation -----
    if (!isMobile && stickyRef.current && cardsRef.current) {
      // Move entire cards wrapper horizontally
      gsap.fromTo(cardsRef.current, { x: "100%" }, {
        x: 0,
        scrollTrigger: {
          trigger: stickyRef.current,
          scrub: 1,
          start: "top 80%",
          end: "bottom 80%",
        },
      });

      // Animate individual cards rotation & x
      const cardAnimations = [
        { xFrom: "0%", xTo: "0%", rotateFrom: "-13deg", rotateTo: "-4deg" },
        { xFrom: "60%", xTo: "-13%", rotateFrom: "-7deg", rotateTo: "10deg" },
        { xFrom: "120%", xTo: "-20%", rotateFrom: "-13deg", rotateTo: "-4deg" },
        { xFrom: "180%", xTo: "-35%", rotateFrom: "-7deg", rotateTo: "10deg" },
      ];

      if (!stickyRef.current) return;

      sCardRefs.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              x: cardAnimations[i].xFrom,
              rotate: cardAnimations[i].rotateFrom,
            },
            {
              x: cardAnimations[i].xTo,
              rotate: cardAnimations[i].rotateTo,
              scrollTrigger: {
                trigger: stickyRef.current,
                scrub: 1,
                start: "top 80%",
                end: "bottom 80%",
              },
            }
          );
        }
      });

    }


  }, [isMobile]);

  return (
    <div style={{ backgroundColor: "#0B1C23" }}>
      <NavBar />
      <main className={styles.page}>
        <div className={styles.animatedCircle}></div>
        <div className={styles.floatingAccents}>
          <div className={`${styles.accent} ${styles.accent1}`}></div>
          <div className={`${styles.accent} ${styles.accent2}`}></div>
          <div className={`${styles.accent} ${styles.accent3}`}></div>
        </div>
        <div className={styles.animatedGrid}></div>
        <section className={`${styles.section_1} ${styles.section}`}>
          <div className={styles.head}>
            <h1>
              <span className={styles.spanHeadSection_1}>
                <span>Smart</span>, Scaleable,
              </span>
              <span className={styles.spanHeadSection_1}>
                Secure <span>That&apos;s</span> Cloud With
                <span> Us</span>.
              </span>
            </h1>
            <Link href="/contact" className={styles.btn}>
              <p>Let&apos;s work together</p>
            </Link>
          </div>
          <div className={styles.scaleGif}></div>
        </section>

        <div className="scrollingCardsWrapper" style={{ marginTop: '20px' }}>
          < ScrollingCards />
        </div>


        <section ref={section3Ref} className={`${styles.section_3} ${styles.section}`}>
          {/* Heading */}
          <div ref={headRef} className={styles.head}>
            <p ref={pRef}>Services</p>
            <h2>
              <span ref={span1Ref} className={styles.span1}>We make the</span>
              <span className={styles.span2}>complex things</span>
              <span ref={span2Ref2} className={styles.span2} style={{ paddingTop: "1.2rem" }}>
                <span style={{ color: "#2996a7" }}> simple.</span></span>
              <svg className="d-none d-lg-block position-absolute t-0 l-0 w-100 h-100" width="1328" height="166" viewBox="0 0 1328 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M715 83H42.5C20.1325 83 2 101.132 2 123.5V123.5C2 145.868 20.1325 164 42.5 164H715" stroke="#2996a7" vectorEffect="non-scaling-stroke"></path>
                <path d="M712.5 83L1285.5 83C1307.87 83 1326 64.8675 1326 42.5V42.5C1326 20.1325 1307.87 2.00005 1285.5 2.00005L712.5 2.00005" stroke="#2996a7" vectorEffect="non-scaling-stroke"></path>
                <path d="M715 164H42.5C20.1325 164 2 145.868 2 123.5C2 101.132 20.1325 83 42.5 83H1065L1285.5 83C1307.87 83 1326 64.8675 1326 42.5C1326 20.1325 1307.87 2.00005 1285.5 2.00004H712.5" stroke="#2996a7" strokeWidth="1" vectorEffect="non-scaling-stroke"></path>
              </svg>
            </h2>
          </div>

          {/* Cards */}
          <div className={styles.body}>
            <Link href="/cloudservices">
              <div className={`${styles.card} ${styles.extraClass}`} ref={(el) => (cardRefs.current[0] = el)}>
                <div className={styles.bgSvgElementcloud} aria-label="Animated SVG"></div>
                <div className={styles.title}>
                  <h3><span>Clouds</span> Services</h3>
                  <p>Together, we maximize the value of your data.</p>
                  <div className={styles.hr}></div>
                  <svg className="pb-row-services__service__icon z-1000" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 6.72H6.72V12H5.28V6.72H0V5.28H5.28V0H6.72V5.28H12V6.72Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/aidataservices">
              <div className={`${styles.card} ${styles.extraClass}`} ref={(el) => (cardRefs.current[1] = el)}>
                <div className={styles.bgSvgElement} aria-label="Animated SVG"></div>
                <div className={styles.title}>
                  <h3><span>AI & Data</span> Services</h3>
                  <p>Together, we visualize value from your data.</p>
                  <div className={styles.hr}></div>
                  <svg className="pb-row-services__service__icon z-1000" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 6.72H6.72V12H5.28V6.72H0V5.28H5.28V0H6.72V5.28H12V6.72Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/integrationservices">
              <div className={`${styles.card} ${styles.extraClass}`} ref={(el) => (cardRefs.current[2] = el)}>
                <div className={styles.bgSvgElementintegration} aria-label="Animated SVG"></div>
                <div className={styles.title}>
                  <h3><span>Integration</span> Services</h3>
                  <p>Together, we retrieve value from your data.</p>
                  <div className={styles.hr}></div>
                  <svg className="pb-row-services__service__icon z-1000" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 6.72H6.72V12H5.28V6.72H0V5.28H5.28V0H6.72V5.28H12V6.72Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/productdevelopment">
              <div className={`${styles.card} ${styles.extraClass}`} ref={(el) => (cardRefs.current[3] = el)}>
                <div className={styles.bgSvgElementproduct} aria-label="Animated SVG"></div>
                <div className={styles.title}>
                  <h3><span>Product</span> Development</h3>
                  <p>Together, we maximize the value of your data.</p>
                  <div className={styles.hr}></div>
                  <svg className="pb-row-services__service__icon z-1000" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 6.72H6.72V12H5.28V6.72H0V5.28H5.28V0H6.72V5.28H12V6.72Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Partner Marquee */}
          <div ref={partnerRef} className={styles.partner}>
            <h2>Trusted partner of</h2>
            <div className={styles.marquee}>
              {[...Array(4)].map((_, i) => (
                <div key={i} className={styles.marquee__inner}>
                  {["abb", "barclays", "cintas", "groupon", "knowles", "lumatax", "moment", "nbc", "replenium"].map((logo) => (
                    <div key={logo} className={styles.marquee__part}>
                      <img src={`/logos/${logo}.svg`} alt={logo} />
                    </div>
                  ))}
                </div>
              ))}


            </div>
            <div className={styles.marquee}>
              {[...Array(4)].map((_, i) => (
                <div key={i} className={styles.marquee__inner}>
                  {["abb", "barclays", "cintas", "groupon", "knowles", "lumatax", "moment", "nbc", "replenium"].map((logo) => (
                    <div key={logo} className={styles.marquee__part}>
                      <img src={`/logos/${logo}.svg`} alt={logo} />
                    </div>
                  ))}
                </div>
              ))}

            </div>
          </div>
        </section>

        <section ref={sectionRef} className={`${styles.section_4} ${styles.section}`}>
          <div className={styles.BackGround}></div>

          <h3>
            <span ref={addSpanRef} className={styles.spanSection_4}>
              Helping you <span>optimize</span>
            </span>
            <span ref={addSpanRef} className={styles.spanSection_4}>
              Your Business <span>model</span>
            </span>
          </h3>

          <div ref={hrRef} className={styles.hr}>
            <div></div>
          </div>

          <div ref={titleRef} className={styles.title}>
            <div className={styles.links}>
              <Link href="#">As a team, we go beyond limits.</Link>
              <Link href="#">About us</Link>
            </div>
            <p className={styles.text}>
              Our experts are driven by a passion for organizational efficiency, powered by
              the strategic use of data. This passion has led us to specialize in advanced
              process automation, data analytics, cloud services, AI, system integration,
              and product development.
            </p>
          </div>
        </section>

        <section className={`${styles.section_5} ${styles.section}`}>
          {/* Sticky Cards */}
          <div className={styles.sticky} ref={stickyRef}>
            <div className={styles.cards} ref={cardsRef}>
              {/* Card 1 */}
              <div className={styles.cardSticky} ref={addCardRef}>
                <img src={'/FitnessM8-logo.png'} alt="FitnessM8-logo" />
                <p>
                  The Scaled Solutions team are true specialists in AI and cloud.
                  Their ability to transform raw data into actionable predictions
                  for clients puts them well ahead of the curve.
                </p>
                <div className={styles.caption}><p>Manager - Roman</p></div>
              </div>

              {/* Card 2 */}
              <div className={styles.cardSticky} ref={addCardRef}>
                <img src={'/knowles-logo.png'} alt="knowles-logo" />
                <h4>Scaled Solutions delivery partner</h4>
                <p>
                  “Tkxel has proven to be our single reliable software development partner,
                  helping us scale from the ground up with exceptional quality.”
                </p>
                <p>Michelle Duval</p>
                <div className={styles.caption}>
                  <p>Founder & CEO, </p>
                  <p>Fingerprint for Success</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className={styles.cardSticky} ref={addCardRef}>
                <img src={'/Xstream-sports.png'} alt="Xstream-sports" />
                <p>
                  Working with Scaled Solutions has completely transformed how we deliver live sports.
                  They built a powerful streaming platform for Extreme Sports and integrated AI
                  that automatically generates highlight reels in real time.
                  The result is a smoother, smarter experience for both our team and our fans.
                </p>
                <div className={styles.caption}><p>Director - Arafat</p></div>
              </div>

              {/* Card 4 - Contact */}
              <div className={styles.cardSticky} ref={addCardRef}>
                <Link href="/contact">
                  <button className={styles.btn}>Contact us</button>
                </Link>
              </div>
            </div>
          </div>

          <Swiper
            className={styles.swiper}
            spaceBetween={20}
            slidesPerView={3}
            modules={[Pagination]}
            breakpoints={{
              0: { slidesPerView: 1 },
              450: { slidesPerView: 1.5 },
              600: { slidesPerView: 2 },
              769: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ el: `.${styles.swiperPagination}` }}
          >
            <div className={styles.swiperPagination}></div>

            <SwiperSlide ref={addCardRef} className={styles.cardSticky}>
              <img src={'/FitnessM8-logo.png'} alt="FitnessM8-logo" />
              <p>
                The Scaled Solutions
                team are true specialists in AI and cloud.
                Their ability to transform raw data into
                actionable predictions for clients puts
                them well ahead of the curve.
              </p>
              <div className={styles.caption}>
                <p>Manager - Roman</p>
              </div>
            </SwiperSlide>

            <SwiperSlide ref={addCardRef} className={styles.cardSticky}>
              <img src={'/knowles-logo.png'} alt="knowles-logo" />
              <h4>Scaled Solutions delivery partner</h4>
              <p>
                “Tkxel has proven to be our single reliable
                software development partner, helping us
                scale from the ground up with exceptional
                quality.”
              </p>
              <p>Michelle Duval</p>
              <div className={styles.caption}>
                <p>Founder & CEO</p>
                <p>Fingerprint for Success</p>
              </div>
            </SwiperSlide>

            <SwiperSlide ref={addCardRef} className={styles.cardSticky}>
              <img src={'/Xstream-sports.png'} alt="Xstream-sports" />
              <p>
                Working with Scaled Solutions has completely
                transformed how we deliver live sports.
                They built a powerful streaming platform for
                Extreme Sports and integrated AI that
                generates highlight reels in real time.
              </p>
              <div className={styles.caption}>
                <p>Director - Arafat</p>
              </div>
            </SwiperSlide>

            <SwiperSlide ref={addCardRef} className={styles.cardSticky}>
              <Link href="/contact">
                <button className={styles.btn}>Contact us</button>
              </Link>
            </SwiperSlide>
          </Swiper>


          {/* TextCust Matrix Scroll */}
          <div className="textcust-pin-area" style={{ marginTop: '20px' }}>
            <TextCust />
          </div>

          <div className="faqWrapper">
            <FaqComponent />
          </div>


        </section>

        <section className={`${styles.section_7} ${styles.section}`}>
          <div className={styles.container}>
            <h3>
              Empowering <span>timely,</span>
              <br />
              smart business<span> decisions</span>
            </h3>
            <h3>
              To make <span>good</span> business <br />
              <span>decisions</span> at the right time.
            </h3>
            <Link href="/contact">
              <button>Contact us</button>
            </Link>
          </div>
        </section>
      </main>
      <NewFooter />
    </div>
  );
}



