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
import Lenis from "@studio-freight/lenis";
import { useEffect, useState, useRef } from "react";
import Footer from "./components/Footer";
import { isMobile } from "react-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import TextCust from "./components/TextCust";

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
    // ----------- Section 2 Animation ----------- //
    // gsap.fromTo(
    //   `.${styles.section_2} .${styles.body} #${styles.textSection_2}`,
    //   {
    //     y: "50%",
    //     opacity: 0,
    //   },
    //   {
    //     y: "0%",
    //     opacity: 1,
    //     delay: 1.4,
    //     duration: 0.8,
    //   }
    // );
    // gsap.fromTo(
    //   `.${styles.section_2} .${styles.body} .${styles.video}`,
    //   {
    //     y: 100,
    //     opacity: 0,
    //   },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     delay: 1.6,
    //     duration: 0.8,
    //   }
    // );
    // gsap.fromTo(
    //   `.${styles.section_2} svg:nth-child(2)`,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     delay: 0,
    //     duration: 0.8,
    //   }
    // );
    // gsap.fromTo(
    //   `.${styles.section_2} svg:nth-child(3)`,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     delay: 0.2,
    //     duration: 0.8,
    //   }
    // );
    // ----------- Section 3 Animation ----------- //
    // gsap.fromTo(
    //   `.${styles.section_3} .${styles.head} h2 span:nth-child(1)`,
    //   {
    //     x: "-100%",
    //     opacity: 0,
    //   },
    //   {
    //     x: "-40%",
    //     opacity: 1,
    //     ease: CustomEase.create("custom", "M0,0,C0.215,0.61,0.355,1,1,1"),
    //     duration: 0.8,
    //     scrollTrigger: {
    //       trigger: `.${styles.section_3} .${styles.head}`,
    //       toggleActions: "play reverse play reverse", // <--- This is key
    //     },
    //   }
    // );

    // gsap.fromTo(
    //   `.${styles.section_3} .${styles.head} h2 span:nth-child(3)`,
    //   {
    //     x: "100%",
    //     opacity: 0,
    //   },
    //   {
    //     x: "40%",
    //     opacity: 1,
    //     ease: CustomEase.create("custom", "M0,0,C0.215,0.61,0.355,1,1,1"),
    //     duration: 0.8,
    //     scrollTrigger: {
    //       trigger: `.${styles.section_3} .${styles.head}`,
    //       toggleActions: "play reverse play reverse",
    //     },
    //   }
    // );

    // gsap.fromTo(
    //   `.${styles.section_3} .${styles.head} h2 svg`,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: `.${styles.section_3} .${styles.head}`,
    //     },
    //     opacity: 1,
    //     delay: 0.4,
    //     duration: 1,
    //   }
    // );

    // gsap.fromTo(
    //   `.${styles.section_3} .${styles.body} .${styles.card}:nth-child(1)`,
    //   {
    //     y: 50,
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: `.${styles.section_3} .${styles.body}`,
    //     },
    //     y: 0,
    //     opacity: 1,
    //     duration: 0.5,
    //   }
    // );

    // gsap.fromTo(
    //   `.${styles.section_3} .${styles.body} .${styles.card}:nth-child(2)`,
    //   {
    //     y: 50,
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: `.${styles.section_3} .${styles.body}`,
    //     },
    //     y: 0,
    //     opacity: 1,
    //     delay: 0.2,
    //     duration: 0.5,
    //   }
    // );

    // gsap.fromTo(
    //   `.${styles.section_3} .${styles.body} .${styles.card}:nth-child(3)`,
    //   {
    //     y: 50,
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: `.${styles.section_3} .${styles.body}`,
    //     },
    //     y: 0,
    //     opacity: 1,
    //     delay: 0.4,
    //     duration: 0.5,
    //   }
    // );

    // gsap.fromTo(
    //   `.${styles.section_3} .${styles.head} p`,
    //   {
    //     x: 150,
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: `.${styles.section_3}`,
    //     },
    //     x: 0,
    //     opacity: 1,
    //     duration: 0.5,
    //   }
    // );

    // gsap.fromTo(
    //   `.${styles.section_3} .${styles.partner} h2`,
    //   {
    //     x: 150,
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: `.${styles.section_3} .${styles.partner}`,
    //     },
    //     x: 0,
    //     opacity: 1,
    //     duration: 0.5,
    //   }
    // );

    // gsap.fromTo(
    //   `.${styles.section_3} .${styles.partner} .${styles.marquee}:nth-child(2) .${styles.marquee__inner}`,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: `.${styles.partner}`,
    //     },
    //     opacity: 1,
    //     duration: 1.5,
    //   }
    // );

    // gsap.fromTo(
    //   `.${styles.section_3} .${styles.partner} .${styles.marquee}:nth-child(3) .${styles.marquee__inner}`,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: `.${styles.partner}`,
    //     },
    //     opacity: 1,
    //     duration: 1.5,
    //   }
    // );

    // ----------- Section 4 Animation ----------- //
    // gsap.fromTo(
    //   `.${styles.section_4} .${styles.logoImages} .${styles.stripe_animations}:nth-child(1) svg path`,
    //   {
    //     y: "101%",
    //   },
    //   {
    //     y: "0%",
    //     ease: CustomEase.create("custom", "M0,0,C0.215,0.61,0.355,1,1,1"),
    //     scrollTrigger: {
    //       trigger: `.${styles.section_4}`,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   `.${styles.section_4} .${styles.logoImages} .${styles.stripe_animations}:nth-child(2) svg path`,
    //   {
    //     y: "101%",
    //   },
    //   {
    //     y: "0%",
    //     delay: 0.1,
    //     ease: CustomEase.create("custom", "M0,0,C0.215,0.61,0.355,1,1,1"),
    //     scrollTrigger: {
    //       trigger: `.${styles.section_4}`,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   `.${styles.section_4} .${styles.logoImages} .${styles.stripe_animations}:nth-child(3) svg path`,
    //   {
    //     y: "101%",
    //   },
    //   {
    //     y: "0%",
    //     delay: 0.2,
    //     ease: CustomEase.create("custom", "M0,0,C0.215,0.61,0.355,1,1,1"),
    //     scrollTrigger: {
    //       trigger: `.${styles.section_4}`,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   `.${styles.section_4} .${styles.logoImages} .${styles.stripe_animations}:nth-child(4) svg path`,
    //   {
    //     y: "101%",
    //   },
    //   {
    //     y: "0%",
    //     delay: 0.3,
    //     ease: CustomEase.create("custom", "M0,0,C0.215,0.61,0.355,1,1,1"),
    //     scrollTrigger: {
    //       trigger: `.${styles.section_4}`,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   `.${styles.section_4} h3 .${styles.spanSection_4}:nth-child(1)`,
    //   {
    //     opacity: 0,
    //     x: 200,
    //   },
    //   {
    //     opacity: 1,
    //     x: 0,
    //     delay: 0.3,
    //     ease: CustomEase.create("custom", "M0,0,C0.215,0.61,0.355,1,1,1"),
    //     scrollTrigger: {
    //       trigger: `.${styles.section_4} h3`,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   `.${styles.section_4} h3 .${styles.spanSection_4}:nth-child(2)`,
    //   {
    //     opacity: 0,
    //     x: -200,
    //   },
    //   {
    //     opacity: 1,
    //     x: 0,
    //     delay: 0.3,
    //     ease: CustomEase.create("custom", "M0,0,C0.215,0.61,0.355,1,1,1"),
    //     scrollTrigger: {
    //       trigger: `.${styles.section_4} h3`,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   `.${styles.section_4} .${styles.hr} div`,
    //   {
    //     opacity: 0,
    //     transform: "scale3d(0, 1, 1)",
    //   },
    //   {
    //     transform: "scale3d(1, 1, 1)",
    //     opacity: 1,
    //     duration: 1,
    //     delay: 0,
    //     // ease: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    //     ease: CustomEase.create("custom", "M0,0,C0.645,0.045,0.355,1,1,1"),
    //     scrollTrigger: {
    //       trigger: `.${styles.section_4} .${styles.hr}`,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   `.${styles.section_4} .${styles.title}`,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     duration: 1,
    //     delay: 0.3,
    //     scrollTrigger: {
    //       trigger: `.${styles.section_4} .${styles.title}`,
    //     },
    //   }
    // );

    // ----------- Section 5 Animation ----------- //
    // gsap.fromTo(
    //   `.${styles.section_5} .${styles.faq} .${styles.left}`,
    //   {
    //     opacity: 0,
    //     y: 100,
    //   },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1,
    //     delay: 0.3,
    //     scrollTrigger: {
    //       trigger: `.${styles.faq}`,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   `.${styles.section_5} .${styles.faq} .${styles.questions} .${styles.question}:nth-child(1)`,
    //   {
    //     opacity: 0,
    //     x: 100,
    //   },
    //   {
    //     opacity: 1,
    //     x: 0,
    //     duration: 1,
    //     delay: 0.6,
    //     scrollTrigger: {
    //       trigger: `.${styles.faq}`,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   `.${styles.section_5} .${styles.faq} .${styles.questions} .${styles.question}:nth-child(2)`,
    //   {
    //     opacity: 0,
    //     x: 100,
    //   },
    //   {
    //     opacity: 1,
    //     x: 0,
    //     duration: 1,
    //     delay: 0.7,
    //     scrollTrigger: {
    //       trigger: `.${styles.faq}`,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   `.${styles.section_5} .${styles.faq} .${styles.questions} .${styles.question}:nth-child(3)`,
    //   {
    //     opacity: 0,
    //     x: 100,
    //   },
    //   {
    //     opacity: 1,
    //     x: 0,
    //     duration: 1,
    //     delay: 0.8,
    //     scrollTrigger: {
    //       trigger: `.${styles.faq}`,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   `.${styles.section_5} .${styles.faq} .${styles.questions} .${styles.question}:nth-child(4)`,
    //   {
    //     opacity: 0,
    //     x: 100,
    //   },
    //   {
    //     opacity: 1,
    //     x: 0,
    //     duration: 1,
    //     delay: 0.9,
    //     scrollTrigger: {
    //       trigger: `.${styles.faq}`,
    //     },
    //   }
    // );
    // // ----------- Section 6 Animation ----------- //
    // gsap.fromTo(
    //   `.${styles.section_6} #${styles.h3Section6}`,
    //   {
    //     opacity: 0,
    //     x: 200,
    //   },
    //   {
    //     x: 0,
    //     opacity: 1,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: `.${styles.section_6}`,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   `.${styles.section_6} svg`,
    //   {
    //     opacity: 0,
    //     x: 200,
    //   },
    //   {
    //     x: 0,
    //     opacity: 1,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: `.${styles.section_6}`,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   `.${styles.section_6} .${styles.body} .${styles.posts}`,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     delay: 0.2,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: `.${styles.section_6}`,
    //     },
    //   }
    // );
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



    // ---------------------------
    // Allow native wheel scroll on .success-container
    // const container = document.querySelector('.success-container');
    // container.addEventListener('wheel', (e) => {
    //   e.stopPropagation(); // prevent Lenis from hijacking wheel scroll
    // });

    // ----------- Scale Video ----------- //
    // if (!isMobile) {
    //   gsap.registerPlugin(ScrollTrigger);
    //   gsap.to(
    //     `.${styles.section_2} .${styles.body} .${styles.video} .${styles.vid}`,
    //     {
    //       width: "1000px",
    //       scrollTrigger: {
    //         trigger: `.${styles.section_2}`,
    //         start: "top 33%",
    //         end: "bottom bottom",
    //         scrub: true,  
    //         // markers: true,
    //       },
    //     }
    //   );

    // }
    // // ----------- Smooth Scroll ----------- //
    // if (!isMobile) {
    //   gsap.registerPlugin(ScrollTrigger);
    //   gsap.to(`.${styles.section_2} svg:nth-child(2)`, {
    //     scrollTrigger: {
    //       trigger: `.${styles.section_2}`,
    //       start: "top 33%",
    //       end: "bottom bottom",
    //       scrub: true,
    //       // markers: true,
    //     },
    //     y: "12rem",
    //   });
    // }
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
    // ----------- Scale BackGround Section4 ----------- //
    // gsap.to(`.${styles.section_4} .${styles.BackGround}`, {
    //   width: "100%",
    //   duration: 10,
    //   scrollTrigger: {
    //     trigger: `.${styles.section_4}`,
    //     scrub: 1,
    //     start: "top 80%",
    //     end: "bottom 80%",
    //     // markers: true,
    //   },
    // });
    // // ----------- Sticky Cards Section5 ----------- //
    // if (!isMobile) {
    //   gsap.fromTo(
    //     `.${styles.section_5} .${styles.sticky} .${styles.cards}`,
    //     {
    //       x: "100%",
    //     },
    //     {
    //       x: 0,
    //       scrollTrigger: {
    //         trigger: `.${styles.sticky}`,
    //         scrub: 1,
    //         // markers: true,
    //         start: "top 80%",
    //         end: "bottom 80%",
    //       },
    //     }
    //   );
    // }
    // // ----------- Animation Card 1 Section5 ----------- //
    // if (!isMobile) {
    //   gsap.fromTo(
    //     `.${styles.section_5} .${styles.sticky} .${styles.cards} .${styles.cardSticky}:nth-child(1)`,
    //     {
    //       rotate: "-13deg",
    //     },
    //     {
    //       rotate: "-4deg",
    //       scrollTrigger: {
    //         trigger: `.${styles.sticky}`,
    //         scrub: 1,
    //         // markers: true,
    //         start: "top 80%",
    //         end: "bottom 80%",
    //       },
    //     }
    //   );
    // }
    // // ----------- Animation Card 2 Section5 ----------- //
    // if (!isMobile) {
    //   gsap.fromTo(
    //     `.${styles.section_5} .${styles.sticky} .${styles.cards} .${styles.cardSticky}:nth-child(2)`,
    //     {
    //       rotate: "-7deg",
    //       x: "60%",
    //     },
    //     {
    //       x: "-13%",
    //       rotate: "10deg",
    //       scrollTrigger: {
    //         trigger: `.${styles.sticky}`,
    //         scrub: 1,
    //         // markers: true,
    //         start: "top 80%",
    //         end: "bottom 80%",
    //       },
    //     }
    //   );
    // }
    // // ----------- Animation Card 3 Section5 ----------- //
    // if (!isMobile) {
    //   gsap.fromTo(
    //     `.${styles.section_5} .${styles.sticky} .${styles.cards} .${styles.cardSticky}:nth-child(3)`,
    //     {
    //       x: "120%",
    //       rotate: "-13deg",
    //     },
    //     {
    //       x: "-20%",
    //       rotate: "-4deg",
    //       scrollTrigger: {
    //         trigger: `.${styles.sticky}`,
    //         scrub: 1,
    //         // markers: true,
    //         start: "top 80%",
    //         end: "bottom 80%",
    //       },
    //     }
    //   );
    // }
    // // ----------- Animation Card 4 Section5 ----------- //
    // if (!isMobile) {
    //   gsap.fromTo(
    //     `.${styles.section_5} .${styles.sticky} .${styles.cards} .${styles.cardSticky}:nth-child(4)`,
    //     {
    //       rotate: "-7deg",
    //       x: "180%",
    //     },
    //     {
    //       x: "-35%",
    //       rotate: "10deg",
    //       scrollTrigger: {
    //         trigger: `.${styles.sticky}`,
    //         scrub: 1,
    //         start: "top 80%",
    //         end: "bottom 80%",
    //         // markers: true,
    //       },
    //     }
    //   );
    // }
    // ----------- Animation fanSvg Section6 ----------- //
    // if (window.innerWidth >= 1024) {
    //   gsap.to(`.${styles.section_6} .${styles.fanSvg}`, {
    //     rotate: 360,
    //     scrollTrigger: {
    //       trigger: `.${styles.section_6}`,
    //       scrub: 1,
    //       // markers: true,
    //     },
    //   });
    // } else {
    //   null;
    // }

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    // ------------------- Height Section 8 ------------------- //
    // var menuServices = document.querySelector(`.${stylesFooter.page}`);
    // var backSection = document.querySelector(`.${styles.section_8}`);

    // var heightMenuServices = menuServices.offsetHeight;
    // backSection.style.height = heightMenuServices + "px";
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

  const faqRef = useRef(null);
  const faqLeftRef = useRef(null);
  const faqQuestionsRef = useRef([]);
  faqQuestionsRef.current = [];

  // Helper to add card/question refs
  const addCardRef = (el) => { if (el && !sCardRefs.current.includes(el)) sCardRefs.current.push(el); };
  const addQuestionRef = (el) => { if (el && !faqQuestionsRef.current.includes(el)) faqQuestionsRef.current.push(el); };

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

    // // ----- FAQ animations -----

    if (faqRef.current && faqLeftRef.current && faqQuestionsRef.current.length) {
      // Left heading fade in
      gsap.fromTo(
        faqLeftRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Questions stagger animation
      gsap.fromTo(
        faqQuestionsRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          stagger: 0.2,
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, [isMobile]);


  // ----------- handleQuestionClick ----------- //
  const [activeIndex, setActiveIndex] = useState(null);
  const questions = [
    {
      question: "What does Scaled Solutions specialize in?",
      answer:
        "Scaled Solutions is an IT consulting firm that helps organizations design, build, and optimize their Cloud, AI, Data, Integration, and Product Development capabilities—primarily using Microsoft Azure technologies. We deliver end-to-end solutions, from architecture and data strategy to implementation and ongoing managed services.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We work with clients across manufacturing, financial services, construction, and professional services. Our team adapts Azure frameworks to each industry’s specific compliance, data, and integration needs.",
    },
    {
      question: "How do you approach cloud modernization?",
      answer:
        "We begin by assessing your current environment and identifying the best migration path—whether lift-and-shift, re-platforming, or full cloud-native redesign. Our focus is on scalability, cost optimization, and secure architecture built on Azure infrastructure patterns.",
    },
    {
      question: "What AI and machine learning services do you offer?",
      answer:
        "We help organizations operationalize AI through Azure Machine Learning and Azure OpenAI. Our services include data preparation, model training, MLOps setup, and deploying predictive or generative AI models that integrate seamlessly into business workflows.",
    },
    {
      question: "Can you help us integrate AI with our existing systems?",
      answer:
        "Yes. We design API-based integration patterns using Azure API Management and event-driven services so that AI models can securely interact with your core systems, whether on-premises or in the cloud.",
    },
    {
      question: "What’s your expertise in data engineering and analytics?",
      answer:
        "Our team builds end-to-end Azure data platforms—using Synapse Analytics, Data Factory, and Data Lake—to ingest, transform, and curate data into bronze, silver, and gold layers. We also design Power BI dashboards that convert that curated data into clear insights.",
    },
    {
      question: "Do you offer product development services?",
      answer:
        "Yes. We design and build scalable digital products—web apps, portals, and APIs—using cloud-native architecture and DevOps pipelines. We also provide UX design and testing support to ensure strong user adoption and performance.",
    },
    {
      question: "What makes your integration services different?",
      answer:
        "We focus on real-time and batch integration using Azure Integration Services (Logic Apps, Service Bus, Event Grid, and API Management). Our approach ensures reliable communication between ERP, CRM, and eCommerce platforms while maintaining data accuracy and traceability.",
    },
    {
      question: "Do you provide managed services or ongoing support?",
      answer:
        "Absolutely. We offer ongoing support for monitoring, cost management, patching, and optimization. Our managed services are designed to keep your Azure environment secure, compliant, and continuously improving.",
    },
    {
      question: "How do you ensure security and compliance in Azure deployments?",
      answer:
        "Security is embedded in every step. We apply Microsoft’s Cloud Adoption Framework, use Azure Policy and Defender for Cloud for governance, and align with ISO 27001 and SOC 2 principles to meet enterprise security standards.",
    },
    {
      question: "Can you help us estimate ROI for cloud or AI investments?",
      answer:
        "Yes. We work with business and IT stakeholders to define measurable KPIs—like reduced downtime, faster data processing, or improved decision accuracy—and quantify ROI through cost savings and productivity gains enabled by Azure solutions.",
    },
    {
      question: "How long does a typical engagement last?",
      answer:
        "It depends on the scope. Strategy and architecture reviews may take a few weeks, while full data platform or AI projects can range from 3 to 9 months. We work iteratively so you see tangible value early in the process.",
    },
    {
      question: "Do you offer proof of concept (PoC) or pilot projects?",
      answer:
        "Yes. We frequently start with small-scale PoCs to validate architecture, performance, and business value before scaling to production. It’s a low-risk way for clients to experience results quickly.",
    },
    {
      question: "Can you work alongside our internal IT or data team?",
      answer:
        "Definitely. Most of our engagements involve close collaboration with in-house teams. We bring Azure best practices, automation, and governance frameworks while upskilling your team for long-term ownership.",
    },
    {
      question: "How can we get started with Scaled Solutions?",
      answer:
        "You can reach out via our contact form or email. We typically start with a discovery call to understand your business goals and technical environment, followed by a proposal outlining the recommended approach, timeline, and deliverables.",
    },
  ];

  const handleQuestionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  // const textRefs = useRef([]);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".metrics-stack",
  //       start: "top top",
  //       end: `+=${(texts.length + 1) * 100}vh`,
  //       scrub: true,
  //       pin: true,
  //     }
  //   });

  //   textRefs.current.forEach((el, i) => {
  //     tl.fromTo(
  //       el,
  //       { scale: 0, opacity: 0, filter: "blur(30px)" },
  //       {
  //         scale: 1,
  //         opacity: 1,
  //         filter: "blur(0px)",
  //         duration: 0.5,
  //         ease: "power2.out"
  //       },
  //       i // position in timeline
  //     ).to(
  //       el,
  //       {
  //         scale: 2,
  //         opacity: 0,
  //         filter: "blur(30px)",
  //         duration: 0.5,
  //         ease: "power2.in"
  //       },
  //       i + 0.5 // start fade out after fade in
  //     );
  //   });

  //   return () => {
  //     tl.kill();
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   };
  // }, []);

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
                  <h3><span>Ai & Data</span> Services</h3>
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

        {/* <section className={`${styles.section_4} ${styles.section}`}>
          <div className={styles.BackGround}></div>
          <h3>
            <span className={styles.spanSection_4}>
              Helping you <span>optimize</span>
            </span>
            <span className={styles.spanSection_4}>
              Your Business <span>model</span>
            </span>
          </h3>
          <div className={styles.hr}>
            <div></div>
          </div>
          <div className={styles.title}>
            <div className={styles.links}>
              <Link href="#">As a team, we go beyond limits.</Link>
              <Link href="#">About us</Link>
            </div>
            <p className={styles.text}>
              Our experts are driven by a passion for organizational efficiency, powered by the strategic use of data. This passion has led us to specialize in advanced process automation, data analytics, cloud services, AI, system integration, and product development.
            </p>
          </div>
        </section> */}

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
                <div className={styles.caption}><p>Director - Brendon</p></div>
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

          {/* Swiper */}
          {/* <Swiper
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
            {sCardRefs.current.map((card, idx) => (
              <SwiperSlide className={styles.cardSticky} key={idx}>
                {card?.innerHTML && <div dangerouslySetInnerHTML={{ __html: card.innerHTML }} />}
              </SwiperSlide>
            ))}
          </Swiper> */}

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
                <p>Director - Brendon</p>
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

          {/* FAQ Section */}
          <div id="faqs" className={styles.faq} ref={faqRef}>
            <div className={styles.left} ref={faqLeftRef}>
              <h2>FAQ</h2>
              <p>Here are some of our most asked questions. If yours is not there, contact us.</p>
            </div>
            <div className={styles.questions}>
              {questions.map((item, index) => (
                <button
                  key={index}
                  className={`${styles.question} ${activeIndex === index ? styles.active : ""}`}
                  onClick={() => handleQuestionClick(index)}
                  ref={addQuestionRef}
                >
                  <div className={styles.head}>
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5.04H5.04V9H3.96V5.04H0V3.96H3.96V0H5.04V3.96H9V5.04Z" fill="currentColor"></path>
                    </svg>
                    <p>{item.question}</p>
                  </div>
                  <p className={styles.answer}>{item.answer}</p>
                </button>
              ))}
            </div>
          </div>
        </section>
        {/* <section className={`${styles.section_6} ${styles.section}`}>
          <svg
            className={styles.fanSvg}
            width="67"
            height="67"
            viewBox="0 0 67 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M66.9329 29.1321L66.9332 30.5046L66.935 30.5028L66.9377 32.2259L66.9724 32.2254L66.9724 35.1913H66.941L66.9444 37.3247L66.9465 38.6954L45.2918 38.6614C43.3481 38.6565 41.6068 38.4493 39.1516 37.6275C38.9875 37.5664 38.8234 37.5054 38.6631 37.4517C38.651 37.4481 38.6386 37.4448 38.626 37.4414L38.626 37.4414C38.606 37.4361 38.5857 37.4307 38.5654 37.4239C38.4382 37.385 38.3166 37.3553 38.1986 37.333L38.1635 37.3257L38.1634 37.3257C38.1269 37.3179 38.0891 37.3098 38.0586 37.307C38.0457 37.3052 38.0328 37.3033 38.018 37.3033C38.0169 37.3033 38.0155 37.3032 38.014 37.303C38.0124 37.3029 38.0107 37.3026 38.0088 37.3023L38.0033 37.3014C38.0011 37.3011 37.999 37.3007 37.9969 37.3004C37.9954 37.3002 37.994 37.3 37.9926 37.2998L37.9885 37.2996L37.983 37.3051C37.9333 37.3032 37.8817 37.3031 37.8246 37.3122C37.2186 37.3868 37.2305 37.9137 37.4046 38.5146L37.4305 38.5994C37.4443 38.6462 37.4602 38.693 37.4767 38.7414L37.4767 38.7414L37.4935 38.7911L37.5786 39.027L37.5919 39.0628L37.6017 39.0888C37.6096 39.1095 37.6174 39.1302 37.6248 39.1505C37.6257 39.1551 37.6271 39.1593 37.6285 39.1634L37.6308 39.1705L37.6322 39.1763L37.6415 39.204C38.4485 41.6297 38.6539 43.3582 38.6569 45.2889L38.6909 66.9436L37.3202 66.9415L35.3008 66.9383V66.9688H32.6527L32.6522 66.9343L30.4987 66.931L29.128 66.9288L29.094 45.2741C29.0928 43.3304 29.2946 41.5898 30.1087 39.1371L30.1088 39.1369C30.1693 38.9731 30.2298 38.8093 30.283 38.6491C30.2851 38.6417 30.2872 38.6342 30.2892 38.6266C30.2905 38.6218 30.2918 38.617 30.2931 38.6121L30.2931 38.612C30.2984 38.5921 30.3037 38.5718 30.3105 38.5515C30.3489 38.4245 30.3782 38.3029 30.4002 38.185L30.4074 38.1499C30.4151 38.1134 30.423 38.0756 30.4257 38.0451L30.4257 38.045C30.4276 38.0321 30.4294 38.0193 30.4294 38.0045C30.4293 38.0009 30.4303 37.9953 30.4312 37.9898L30.4322 37.9833L30.4328 37.9784L30.433 37.9751L30.4275 37.9695C30.4292 37.9198 30.4291 37.8682 30.4198 37.8111C30.3434 37.2048 29.8165 37.2151 29.2161 37.3873L29.1314 37.413C29.0846 37.4267 29.0378 37.4424 28.9895 37.4587L28.9399 37.4753L28.7042 37.5597C28.684 37.567 28.6633 37.5748 28.6426 37.5826L28.6148 37.593L28.5809 37.6055L28.5789 37.606L28.5743 37.6072L28.568 37.6092L28.568 37.6092L28.5599 37.6117L28.5551 37.6129L28.5275 37.622C26.1042 38.4215 24.3764 38.6214 22.4457 38.6184L0.790967 38.5844L0.788816 37.2137L0.783821 34.0316L0.769532 34.0262L0.783797 34.0167L0.783468 33.807L0.780251 33.807L0.774898 30.3987L0.772747 29.028L22.4293 29.0528C24.373 29.0577 26.1143 29.2649 28.5695 30.0868L28.5697 30.0868C28.7337 30.1479 28.8977 30.2089 29.058 30.2626L29.0767 30.2679L29.0952 30.2728C29.1151 30.2781 29.1354 30.2836 29.1557 30.2904C29.2829 30.3293 29.4045 30.3589 29.5225 30.3812L29.5577 30.3886C29.5942 30.3963 29.632 30.4044 29.6625 30.4072C29.6754 30.4091 29.6883 30.411 29.7031 30.411C29.7068 30.411 29.7123 30.4119 29.7178 30.4128C29.7233 30.4138 29.7289 30.4147 29.7326 30.4147L29.7381 30.4092C29.7878 30.4111 29.8394 30.4112 29.8965 30.4021C30.5025 30.3275 30.4906 29.8006 30.3165 29.1997L30.2906 29.1149C30.2768 29.0681 30.2609 29.0213 30.2445 28.9729L30.2444 28.9728L30.2276 28.9232L30.1425 28.6873C30.1374 28.6732 30.132 28.6589 30.1266 28.6445L30.1194 28.6255C30.1115 28.6048 30.1037 28.584 30.0963 28.5637C30.0944 28.5545 30.0907 28.5472 30.0889 28.5379L30.0796 28.5103C29.2726 26.0845 29.0672 24.3561 29.0642 22.4253L29.0302 0.770621L30.4009 0.776457L32.7582 0.778883L32.7588 0.765747H35.1949L35.1953 0.781574L37.2159 0.783653L38.5866 0.785806L38.6298 22.4424C38.631 24.386 38.4292 26.1267 37.6151 28.5794C37.5546 28.7433 37.494 28.9072 37.4408 29.0674C37.4373 29.0794 37.434 29.0918 37.4307 29.1044L37.4307 29.1045C37.4255 29.1244 37.4201 29.1447 37.4134 29.165C37.3749 29.292 37.3456 29.4136 37.3237 29.5314L37.3164 29.5666C37.3088 29.6031 37.3008 29.6409 37.2981 29.6714L37.2981 29.6714C37.2963 29.6843 37.2944 29.6972 37.2945 29.7119L37.2942 29.7159C37.2939 29.7191 37.2933 29.7229 37.2927 29.7267L37.2913 29.7353C37.291 29.7376 37.2908 29.7397 37.2908 29.7414L37.2964 29.7469C37.2946 29.7967 37.2947 29.8483 37.304 29.9054C37.3805 30.5116 37.9074 30.5014 38.5077 30.3292L38.5924 30.3035C38.6391 30.2898 38.6858 30.2741 38.7341 30.2579L38.7342 30.2578L38.7839 30.2412L39.0196 30.1568C39.0294 30.1532 39.0394 30.1496 39.0494 30.1458C39.0598 30.1419 39.0703 30.138 39.0809 30.134L39.0813 30.1339C39.102 30.1261 39.1227 30.1183 39.143 30.1109C39.1465 30.1102 39.1498 30.1093 39.153 30.1082C39.1539 30.1079 39.1549 30.1076 39.1558 30.1073L39.1601 30.1059C39.1628 30.105 39.1657 30.1042 39.1687 30.1036L39.1963 30.0944C41.6196 29.295 43.3474 29.095 45.2781 29.0981L66.9329 29.1321ZM35.8903 30.6677L35.8903 30.668L37.0474 30.6698L37.0505 32.6339L37.0522 32.6339L37.0491 30.6696L35.8903 30.6677ZM37.0581 36.0917L37.0559 36.092L37.0574 37.0549L37.0596 37.0549L37.0581 36.0917ZM32.2429 37.0482L30.6747 37.0457L30.6747 37.0469L32.2429 37.0494L32.2429 37.0482Z"
              fill="currentColor"
            ></path>
          </svg>
          <h3 id={styles.h3Section6}>
            We like to read between the lines.
            <br />
            Read more on <span>our blog</span>
          </h3>
          <div className={styles.body}>
            <div className={styles.posts}>
              <div className={styles.post}>
                <div className={styles.left}>
                  <p className={styles.date}>
                    Business Intelligence — Case study — Power BI — July 3, 2023
                  </p>
                  <div className={styles.img}>
                    <img src={'/Power-BI-report.jpg'} alt="PowerBIReport" />
                  </div>
                  <h3 className={styles.title}>
                    A Power BI report for the Fondation du Collège de Lévis Golf
                    Tournament players
                  </h3>
                </div>
                <div className={styles.right}>
                  <div className={styles.img}>
                    <img src={'/Power-BI-report.jpg'} alt="PowerBIReport" />
                  </div>
                </div>
              </div>
              <div className={styles.hr}></div>
              <div className={styles.post}>
                <div className={styles.left}>
                  <p className={styles.date}>Uncategorized — May 27, 2023</p>
                  <div className={styles.img}>
                    <img
                      src={'/MicrosoftTeams-image-4.png'}
                      alt="MicrosoftTeamsImage4"
                    />
                  </div>
                  <h3 className={styles.title}>
                    How much does Microsoft Fabric cost? Price explained in
                    detail.
                  </h3>
                </div>
                <div className={styles.right}>
                  <div className={styles.img}>
                    <img
                      src={'/MicrosoftTeams-image-4.png'}
                      alt="MicrosoftTeamsImage4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
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



