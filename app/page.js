"use client";
import styles from "./page.module.css";
import stylesNavBar from "./components/styles/NavBar.module.css";
import stylesFooter from "./components/styles/Footer.module.css";
import NavBar from "./components/NavBar";
import NewFooter from "./components/NewFooter";
import FinalService from './components/FinalService'
import Link from "next/link";
import ScrollingCards from './components/ScrollingCards'
gsap.registerPlugin(ScrollTrigger);
import { valueAtPercentage, ScrollObserver } from 'aatjs'
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

const texts = ["300_Clients", "9_Products", "96_Live Web"];

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



export default function Home() {
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
    gsap.fromTo(
      `.${styles.section_2} .${styles.body} #${styles.textSection_2}`,
      {
        y: "50%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        delay: 1.4,
        duration: 0.8,
      }
    );
    gsap.fromTo(
      `.${styles.section_2} .${styles.body} .${styles.video}`,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1.6,
        duration: 0.8,
      }
    );
    gsap.fromTo(
      `.${styles.section_2} svg:nth-child(2)`,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0,
        duration: 0.8,
      }
    );
    gsap.fromTo(
      `.${styles.section_2} svg:nth-child(3)`,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.2,
        duration: 0.8,
      }
    );
    // ----------- Section 3 Animation ----------- //
    gsap.fromTo(
      `.${styles.section_3} .${styles.head} h2 span:nth-child(1)`,
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: "-40%",
        opacity: 1,
        ease: CustomEase.create("custom", "M0,0,C0.215,0.61,0.355,1,1,1"),
        duration: 0.8,
        scrollTrigger: {
          trigger: `.${styles.section_3} .${styles.head}`,
          toggleActions: "play reverse play reverse", // <--- This is key
        },
      }
    );

    gsap.fromTo(
      `.${styles.section_3} .${styles.head} h2 span:nth-child(3)`,
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: "40%",
        opacity: 1,
        ease: CustomEase.create("custom", "M0,0,C0.215,0.61,0.355,1,1,1"),
        duration: 0.8,
        scrollTrigger: {
          trigger: `.${styles.section_3} .${styles.head}`,
          toggleActions: "play reverse play reverse",
        },
      }
    );
    gsap.fromTo(
      `.${styles.section_3} .${styles.head} h2 svg`,
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: `.${styles.section_3} .${styles.head}`,
        },
        opacity: 1,
        delay: 0.4,
        duration: 1,
      }
    );
    gsap.fromTo(
      `.${styles.section_3} .${styles.body} .${styles.card}:nth-child(1)`,
      {
        y: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: `.${styles.section_3} .${styles.body}`,
        },
        y: 0,
        opacity: 1,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      `.${styles.section_3} .${styles.body} .${styles.card}:nth-child(2)`,
      {
        y: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: `.${styles.section_3} .${styles.body}`,
        },
        y: 0,
        opacity: 1,
        delay: 0.2,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      `.${styles.section_3} .${styles.body} .${styles.card}:nth-child(3)`,
      {
        y: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: `.${styles.section_3} .${styles.body}`,
        },
        y: 0,
        opacity: 1,
        delay: 0.4,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      `.${styles.section_3} .${styles.head} p`,
      {
        x: 150,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: `.${styles.section_3}`,
        },
        x: 0,
        opacity: 1,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      `.${styles.section_3} .${styles.partner} h2`,
      {
        x: 150,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: `.${styles.section_3} .${styles.partner}`,
        },
        x: 0,
        opacity: 1,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      `.${styles.section_3} .${styles.partner} .${styles.marquee}:nth-child(2) .${styles.marquee__inner}`,
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: `.${styles.partner}`,
        },
        opacity: 1,
        duration: 1.5,
      }
    );
    gsap.fromTo(
      `.${styles.section_3} .${styles.partner} .${styles.marquee}:nth-child(3) .${styles.marquee__inner}`,
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: `.${styles.partner}`,
        },
        opacity: 1,
        duration: 1.5,
      }
    );
    // ----------- Section 4 Animation ----------- //
    gsap.fromTo(
      `.${styles.section_4} .${styles.logoImages} .${styles.stripe_animations}:nth-child(1) svg path`,
      {
        y: "101%",
      },
      {
        y: "0%",
        ease: CustomEase.create("custom", "M0,0,C0.215,0.61,0.355,1,1,1"),
        scrollTrigger: {
          trigger: `.${styles.section_4}`,
        },
      }
    );
    gsap.fromTo(
      `.${styles.section_4} .${styles.logoImages} .${styles.stripe_animations}:nth-child(2) svg path`,
      {
        y: "101%",
      },
      {
        y: "0%",
        delay: 0.1,
        ease: CustomEase.create("custom", "M0,0,C0.215,0.61,0.355,1,1,1"),
        scrollTrigger: {
          trigger: `.${styles.section_4}`,
        },
      }
    );
    gsap.fromTo(
      `.${styles.section_4} .${styles.logoImages} .${styles.stripe_animations}:nth-child(3) svg path`,
      {
        y: "101%",
      },
      {
        y: "0%",
        delay: 0.2,
        ease: CustomEase.create("custom", "M0,0,C0.215,0.61,0.355,1,1,1"),
        scrollTrigger: {
          trigger: `.${styles.section_4}`,
        },
      }
    );
    gsap.fromTo(
      `.${styles.section_4} .${styles.logoImages} .${styles.stripe_animations}:nth-child(4) svg path`,
      {
        y: "101%",
      },
      {
        y: "0%",
        delay: 0.3,
        ease: CustomEase.create("custom", "M0,0,C0.215,0.61,0.355,1,1,1"),
        scrollTrigger: {
          trigger: `.${styles.section_4}`,
        },
      }
    );
    gsap.fromTo(
      `.${styles.section_4} h3 .${styles.spanSection_4}:nth-child(1)`,
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.3,
        ease: CustomEase.create("custom", "M0,0,C0.215,0.61,0.355,1,1,1"),
        scrollTrigger: {
          trigger: `.${styles.section_4} h3`,
        },
      }
    );
    gsap.fromTo(
      `.${styles.section_4} h3 .${styles.spanSection_4}:nth-child(2)`,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.3,
        ease: CustomEase.create("custom", "M0,0,C0.215,0.61,0.355,1,1,1"),
        scrollTrigger: {
          trigger: `.${styles.section_4} h3`,
        },
      }
    );
    gsap.fromTo(
      `.${styles.section_4} .${styles.hr} div`,
      {
        opacity: 0,
        transform: "scale3d(0, 1, 1)",
      },
      {
        transform: "scale3d(1, 1, 1)",
        opacity: 1,
        duration: 1,
        delay: 0,
        // ease: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        ease: CustomEase.create("custom", "M0,0,C0.645,0.045,0.355,1,1,1"),
        scrollTrigger: {
          trigger: `.${styles.section_4} .${styles.hr}`,
        },
      }
    );
    gsap.fromTo(
      `.${styles.section_4} .${styles.title}`,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: `.${styles.section_4} .${styles.title}`,
        },
      }
    );
    // ----------- Section 5 Animation ----------- //
    gsap.fromTo(
      `.${styles.section_5} .${styles.faq} .${styles.left}`,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: `.${styles.faq}`,
        },
      }
    );
    gsap.fromTo(
      `.${styles.section_5} .${styles.faq} .${styles.questions} .${styles.question}:nth-child(1)`,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.6,
        scrollTrigger: {
          trigger: `.${styles.faq}`,
        },
      }
    );
    gsap.fromTo(
      `.${styles.section_5} .${styles.faq} .${styles.questions} .${styles.question}:nth-child(2)`,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.7,
        scrollTrigger: {
          trigger: `.${styles.faq}`,
        },
      }
    );
    gsap.fromTo(
      `.${styles.section_5} .${styles.faq} .${styles.questions} .${styles.question}:nth-child(3)`,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.8,
        scrollTrigger: {
          trigger: `.${styles.faq}`,
        },
      }
    );
    gsap.fromTo(
      `.${styles.section_5} .${styles.faq} .${styles.questions} .${styles.question}:nth-child(4)`,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.9,
        scrollTrigger: {
          trigger: `.${styles.faq}`,
        },
      }
    );
    // ----------- Section 6 Animation ----------- //
    gsap.fromTo(
      `.${styles.section_6} #${styles.h3Section6}`,
      {
        opacity: 0,
        x: 200,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: `.${styles.section_6}`,
        },
      }
    );
    gsap.fromTo(
      `.${styles.section_6} svg`,
      {
        opacity: 0,
        x: 200,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: `.${styles.section_6}`,
        },
      }
    );
    gsap.fromTo(
      `.${styles.section_6} .${styles.body} .${styles.posts}`,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: `.${styles.section_6}`,
        },
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

    

    // ---------------------------
    // Allow native wheel scroll on .success-container
    // const container = document.querySelector('.success-container');
    // container.addEventListener('wheel', (e) => {
    //   e.stopPropagation(); // prevent Lenis from hijacking wheel scroll
    // });

    // ----------- Scale Video ----------- //
    if (!isMobile) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(
        `.${styles.section_2} .${styles.body} .${styles.video} .${styles.vid}`,
        {
          width: "1000px",
          scrollTrigger: {
            trigger: `.${styles.section_2}`,
            start: "top 33%",
            end: "bottom bottom",
            scrub: true,
            // markers: true,
          },
        }
      );

    }
    // ----------- Smooth Scroll ----------- //
    if (!isMobile) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(`.${styles.section_2} svg:nth-child(2)`, {
        scrollTrigger: {
          trigger: `.${styles.section_2}`,
          start: "top 33%",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
        y: "12rem",
      });
    }
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
    gsap.to(`.${styles.section_4} .${styles.BackGround}`, {
      width: "100%",
      duration: 10,
      scrollTrigger: {
        trigger: `.${styles.section_4}`,
        scrub: 1,
        start: "top 80%",
        end: "bottom 80%",
        // markers: true,
      },
    });
    // ----------- Sticky Cards Section5 ----------- //
    if (!isMobile) {
      gsap.fromTo(
        `.${styles.section_5} .${styles.sticky} .${styles.cards}`,
        {
          x: "100%",
        },
        {
          x: 0,
          scrollTrigger: {
            trigger: `.${styles.sticky}`,
            scrub: 1,
            // markers: true,
            start: "top 80%",
            end: "bottom 80%",
          },
        }
      );
    }
    // ----------- Animation Card 1 Section5 ----------- //
    if (!isMobile) {
      gsap.fromTo(
        `.${styles.section_5} .${styles.sticky} .${styles.cards} .${styles.cardSticky}:nth-child(1)`,
        {
          rotate: "-13deg",
        },
        {
          rotate: "-4deg",
          scrollTrigger: {
            trigger: `.${styles.sticky}`,
            scrub: 1,
            // markers: true,
            start: "top 80%",
            end: "bottom 80%",
          },
        }
      );
    }
    // ----------- Animation Card 2 Section5 ----------- //
    if (!isMobile) {
      gsap.fromTo(
        `.${styles.section_5} .${styles.sticky} .${styles.cards} .${styles.cardSticky}:nth-child(2)`,
        {
          rotate: "-7deg",
          x: "60%",
        },
        {
          x: "-13%",
          rotate: "10deg",
          scrollTrigger: {
            trigger: `.${styles.sticky}`,
            scrub: 1,
            // markers: true,
            start: "top 80%",
            end: "bottom 80%",
          },
        }
      );
    }
    // ----------- Animation Card 3 Section5 ----------- //
    if (!isMobile) {
      gsap.fromTo(
        `.${styles.section_5} .${styles.sticky} .${styles.cards} .${styles.cardSticky}:nth-child(3)`,
        {
          x: "120%",
          rotate: "-13deg",
        },
        {
          x: "-20%",
          rotate: "-4deg",
          scrollTrigger: {
            trigger: `.${styles.sticky}`,
            scrub: 1,
            // markers: true,
            start: "top 80%",
            end: "bottom 80%",
          },
        }
      );
    }
    // ----------- Animation Card 4 Section5 ----------- //
    if (!isMobile) {
      gsap.fromTo(
        `.${styles.section_5} .${styles.sticky} .${styles.cards} .${styles.cardSticky}:nth-child(4)`,
        {
          rotate: "-7deg",
          x: "180%",
        },
        {
          x: "-35%",
          rotate: "10deg",
          scrollTrigger: {
            trigger: `.${styles.sticky}`,
            scrub: 1,
            start: "top 80%",
            end: "bottom 80%",
            // markers: true,
          },
        }
      );
    }
    // ----------- Animation fanSvg Section6 ----------- //
    if (window.innerWidth >= 1024) {
      gsap.to(`.${styles.section_6} .${styles.fanSvg}`, {
        rotate: 360,
        scrollTrigger: {
          trigger: `.${styles.section_6}`,
          scrub: 1,
          // markers: true,
        },
      });
    } else {
      null;
    }
    // ------------------- Height Section 8 ------------------- //
    // var menuServices = document.querySelector(`.${stylesFooter.page}`);
    // var backSection = document.querySelector(`.${styles.section_8}`);

    // var heightMenuServices = menuServices.offsetHeight;
    // backSection.style.height = heightMenuServices + "px";
  }, []);
  
  // ----------- handleQuestionClick ----------- //
  const [activeIndex, setActiveIndex] = useState(null);
  const questions = [
    {
      question: "Do you do organizational strategy?",
      answer:
        "Although we are able to fully understand a strategic plan, our expertise is focused on analytical alignment. We leave it to other management consulting firms to set up organizational strategies. However, once this strategy and the objectives are in place, we will be able to support you on an analytical level to ensure the implementation of tools and strategies to help monitor the achievement of these objectives.",
    },
    {
      question: "Are you able to develop custom visuals in Power BI?",
      answer:
        "Absolutely! We have developed customized visuals on several occasions for partners. However, we always try to use default visuals or Microsoft-certified custom visuals to ensure optimal stability in the reports we develop.",
    },
    {
      question: "Are you able to integrate directly from Power BI?",
      answer:
        "Yes, we regularly use Dataflows in Power BI to integrate data when it is the best option according to your needs. Moreover, our experts take great pleasure in creating advanced functions in Power Query using M language to save you a lot of time!",
    },
    {
      question:
        "Are you able to integrate data from sources outside my organization?",
      answer: (
        <>
          Of course. For example, our experts have worked on several projects
          where extracting data from different web pages was required, a process
          commonly called web scraping (Rest assured, we confirm it&apos;s legal
          when we do it!).
        </>
      ),
    },
  ];
  const handleQuestionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const textRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".metrics-stack",
        start: "top top",
        end: `+=${(texts.length + 1) * 100}vh`,
        scrub: true,
        pin: true,
      }
    });

    textRefs.current.forEach((el, i) => {
      tl.fromTo(
        el,
        { scale: 0, opacity: 0, filter: "blur(30px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power2.out"
        },
        i // position in timeline
      ).to(
        el,
        {
          scale: 2,
          opacity: 0,
          filter: "blur(30px)",
          duration: 0.5,
          ease: "power2.in"
        },
        i + 0.5 // start fade out after fade in
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#0B1C23" }}>
      <NavBar />
      <main className={styles.page}>
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
              <svg
                width="243"
                height="526"
                viewBox="0 0 243 526"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M86.8975 274.745C81.9629 272.26 76.1857 269.774 76.1857 262.92C76.1857 256.065 81.9629 253.58 86.8975 251.095C144.829 227.404 184.908 206.079 210.022 166.354C232.529 130.799 243 80.5315 243 0H134.679C139.614 73.5566 132.874 127.552 113.296 166.354C91.7519 209.125 54.4814 233.337 0 244.962V281.038C54.4814 292.663 91.7519 316.875 113.296 359.646C132.874 398.448 139.614 452.443 134.679 526H243C243 445.469 232.529 395.201 210.022 359.646C184.908 319.56 144.829 298.235 86.8975 274.745Z"
                  fill="#198190"
                ></path>
              </svg>
            </Link>
          </div>
          <div className={styles.scaleGif}></div>
        </section>

        <div className="" style={{ marginTop: '20px' }}>
          < ScrollingCards />
        </div>


        <section className={`${styles.section_3} ${styles.section}`}>


          <div className={styles.head}>
            <p>Services</p>
            <h2>
              <span className={styles.span1} style={{ zIndex: '50 !important' }}>We make the</span>
              <span className={styles.span2} style={{ zIndex: '50 !important' }}>complex things</span>
              <span className={styles.span2} style={{ color: "#2996a7", paddingTop: "1.2rem", zIndex: '10 !important' }}>
                <span>simple</span>.
              </span>
              <svg
                class="d-none d-lg-block position-absolute t-0 l-0 w-100 h-100"
                width="1328"
                height="166"
                viewBox="0 0 1328 166"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M715 83H42.5C20.1325 83 2 101.132 2 123.5V123.5C2 145.868 20.1325 164 42.5 164H715"
                  stroke="#2996a7"
                  vector-effect="non-scaling-stroke"
                ></path>
                <path
                  d="M712.5 83L1285.5 83C1307.87 83 1326 64.8675 1326 42.5V42.5C1326 20.1325 1307.87 2.00005 1285.5 2.00005L712.5 2.00005"
                  stroke="#2996a7"
                  vector-effect="non-scaling-stroke"
                ></path>
                <path
                  d="M715 164H42.5C20.1325 164 2 145.868 2 123.5C2 101.132 20.1325 83 42.5 83H1065L1285.5 83C1307.87 83 1326 64.8675 1326 42.5C1326 20.1325 1307.87 2.00005 1285.5 2.00004H712.5"
                  stroke="#2996a7"
                  stroke-width="1"
                  vector-effect="non-scaling-stroke"
                ></path>
              </svg>
            </h2>
          </div>

          {/* ---------------------------------------------- */}

          <div className={styles.body}>
            {/* Card 1 */}
            <Link href="/cloudservices">
              <div className={`${styles.card} ${styles.extraClass}`}>
                <object
                  type="image/svg+xml"
                  data="/svgs/1.svg"
                  className={styles.svgElementMobile}
                  aria-label="Animated SVG"
                />
                <div className={styles.title}>
                  <h3>
                    <span>Clouds</span> Services
                  </h3>
                  <p>Together, we maximize the value of your data.</p>
                  <div className={styles.hr}></div>
                  <svg
                    className="pb-row-services__service__icon z-1000" // ✅ use className instead of class
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 6.72H6.72V12H5.28V6.72H0V5.28H5.28V0H6.72V5.28H12V6.72Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/aidataservices">
              <div className={`${styles.card} ${styles.extraClass}`}>
                <object
                  type="image/svg+xml"
                  data="/svgs/2.svg"
                  className={styles.svgElementMobile}
                  aria-label="Animated SVG"
                />
                <div className={styles.title}>
                  <h3>
                    <span>Ai & Data</span> Services
                  </h3>
                  <p>Together, we visualize value from your data.</p>
                  <div className={styles.hr}></div>
                  <svg
                    className="pb-row-services__service__icon z-1000"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 6.72H6.72V12H5.28V6.72H0V5.28H5.28V0H6.72V5.28H12V6.72Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/integrationservices">
              <div className={`${styles.card} ${styles.extraClass}`}>
                <object
                  type="image/svg+xml"
                  data="/svgs/3.svg"
                  className={styles.svgElementMobile}
                  aria-label="Animated SVG"
                />
                <div className={styles.title}>
                  <h3>
                    <span>Integration</span> Services
                  </h3>
                  <p>Together, we retrieve value from your data.</p>
                  <div className={styles.hr}></div>
                  <svg
                    className="pb-row-services__service__icon z-1000"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 6.72H6.72V12H5.28V6.72H0V5.28H5.28V0H6.72V5.28H12V6.72Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>



            {/* Card 4 */}
            <Link href="/productdevelopment">
              <div className={`${styles.card} ${styles.extraClass}`}>
                <object
                  type="image/svg+xml"
                  data="/svgs/4.svg"
                  className={styles.svgElementMobile}
                  aria-label="Animated SVG"
                />
                <div className={styles.title}>
                  <h3>
                    <span>Product</span> Development
                  </h3>
                  <p>Together, we maximize the value of your data.</p>
                  <div className={styles.hr}></div>
                  <svg
                    className="pb-row-services__service__icon z-1000"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 6.72H6.72V12H5.28V6.72H0V5.28H5.28V0H6.72V5.28H12V6.72Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>


          {/* ---------------------------------------------- */}

          <div className={styles.partner}>
            <h2>Trusted partner of</h2>
            <div className={styles.marquee}>
              <div className={styles.marquee__inner}>
                <div className={styles.marquee__part}>
                  <img src={"/logos/abb.svg"} alt="abb" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/barclays.svg"} alt="barclays" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/cintas.svg"} alt="cintas" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/groupon.svg"} alt="groupon" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/knowles.svg"} alt="knowles" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/lumatax.svg"} alt="lumatax" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/moment.svg"} alt="moment" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/nbc.svg"} alt="nbc" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/replenium.svg"} alt="replenium" />
                </div>
              </div>
              <div className={styles.marquee__inner}>
                <div className={styles.marquee__part}>
                  <img src={"/logos/abb.svg"} alt="abb" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/barclays.svg"} alt="barclays" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/cintas.svg"} alt="cintas" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/groupon.svg"} alt="groupon" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/knowles.svg"} alt="knowles" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/lumatax.svg"} alt="lumatax" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/moment.svg"} alt="moment" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/nbc.svg"} alt="nbc" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/replenium.svg"} alt="replenium" />
                </div>
              </div>
              <div className={styles.marquee__inner}>
                <div className={styles.marquee__part}>
                  <img src={"/logos/abb.svg"} alt="abb" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/barclays.svg"} alt="barclays" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/cintas.svg"} alt="cintas" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/groupon.svg"} alt="groupon" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/knowles.svg"} alt="knowles" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/lumatax.svg"} alt="lumatax" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/moment.svg"} alt="moment" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/nbc.svg"} alt="nbc" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/replenium.svg"} alt="replenium" />
                </div>
              </div>
              <div className={styles.marquee__inner}>
                <div className={styles.marquee__part}>
                  <img src={"/logos/abb.svg"} alt="abb" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/barclays.svg"} alt="barclays" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/cintas.svg"} alt="cintas" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/groupon.svg"} alt="groupon" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/knowles.svg"} alt="knowles" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/lumatax.svg"} alt="lumatax" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/moment.svg"} alt="moment" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/nbc.svg"} alt="nbc" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/replenium.svg"} alt="replenium" />
                </div>
              </div>
            </div>
            <div className={styles.marquee}>
              <div className={styles.marquee__inner}>
                <div className={styles.marquee__part}>
                  <img src={"/logos/abb.svg"} alt="abb" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/barclays.svg"} alt="barclays" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/cintas.svg"} alt="cintas" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/groupon.svg"} alt="groupon" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/knowles.svg"} alt="knowles" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/lumatax.svg"} alt="lumatax" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/moment.svg"} alt="moment" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/nbc.svg"} alt="nbc" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/replenium.svg"} alt="replenium" />
                </div>
              </div>
              <div className={styles.marquee__inner}>
                <div className={styles.marquee__part}>
                  <img src={"/logos/abb.svg"} alt="abb" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/barclays.svg"} alt="barclays" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/cintas.svg"} alt="cintas" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/groupon.svg"} alt="groupon" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/knowles.svg"} alt="knowles" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/lumatax.svg"} alt="lumatax" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/moment.svg"} alt="moment" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/nbc.svg"} alt="nbc" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/replenium.svg"} alt="replenium" />
                </div>
              </div>
              <div className={styles.marquee__inner}>
                <div className={styles.marquee__part}>
                  <img src={"/logos/abb.svg"} alt="abb" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/barclays.svg"} alt="barclays" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/cintas.svg"} alt="cintas" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/groupon.svg"} alt="groupon" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/knowles.svg"} alt="knowles" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/lumatax.svg"} alt="lumatax" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/moment.svg"} alt="moment" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/nbc.svg"} alt="nbc" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/replenium.svg"} alt="replenium" />
                </div>
              </div>
              <div className={styles.marquee__inner}>
                <div className={styles.marquee__part}>
                  <img src={"/logos/abb.svg"} alt="abb" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/barclays.svg"} alt="barclays" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/cintas.svg"} alt="cintas" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/groupon.svg"} alt="groupon" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/knowles.svg"} alt="knowles" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/lumatax.svg"} alt="lumatax" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/moment.svg"} alt="moment" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/nbc.svg"} alt="nbc" />
                </div>
                <div className={styles.marquee__part}>
                  <img src={"/logos/replenium.svg"} alt="replenium" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.section_4} ${styles.section}`}>
          <div className={styles.BackGround}></div>
          <h3>
            <span className={styles.spanSection_4}>
              We&apos;ll help <span>perfect</span>
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
              <Link href="#">As a team, we push boundaries.</Link>
              <Link href="#">About us</Link>
            </div>
            <p className={styles.text}>
              Our experts are above all passionate about organizational
              efficiency powered by the valuation of data. This passion has
              driven us to specialize in advanced methods of process automation
              and data analytics.
            </p>
          </div>
        </section>
        <section className={`${styles.section_5} ${styles.section}`}>

          <div className={styles.sticky} >
            <div className={styles.cards} >
              <div className={styles.cardSticky}>
                <p>
                  The ventriloc team has very specific expertise in the Power BI
                  tool and data visualization. The solution developed by their
                  team, which is consulted religiously every day, has now become
                  the reference for more than a hundred users. Thanks to the
                  ventriloc team!
                </p>
                <div className={styles.caption}>
                  <p>Mike Shenouda</p>
                  <p>Product Marketing Director</p>
                </div>
              </div>
              <div className={styles.cardSticky}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1885_5126)">
                    <path
                      d="M14.9547 29.9988C6.41445 29.8944 -0.169527 23.143 0.00332659 14.5618C0.16583 6.49886 6.91438 -0.110805 15.2662 0.000907296C23.4152 0.110551 30.1058 6.94984 29.9982 15.1059C29.8884 23.4119 23.1337 30.0981 14.9536 29.9978L14.9547 29.9988ZM26.2326 14.1594C26.7502 14.1594 27.2666 14.1594 27.7842 14.1594C28.8316 14.1594 28.8182 14.1594 28.7551 13.1344C28.7333 12.7837 28.6267 12.7041 28.2831 12.7672C27.4995 12.912 26.7077 12.9534 25.9252 12.7423C24.8136 12.4434 24.5983 11.6873 25.3746 10.8401C25.8838 10.2847 26.4997 9.87506 27.1859 9.58233C27.572 9.41787 27.6465 9.23478 27.4602 8.84689C26.8185 7.50841 25.9107 6.37059 24.8933 5.30726C24.6687 5.07245 24.5279 5.16555 24.3478 5.35277C23.7847 5.93719 23.202 6.50299 22.4309 6.81434C21.5314 7.17741 20.8752 6.73469 20.8814 5.76548C20.8866 4.89661 21.2095 4.11565 21.6111 3.36987C21.785 3.04611 21.7105 2.87544 21.4186 2.7089C20.0813 1.94553 18.626 1.55868 17.1169 1.32801C16.8054 1.28043 16.7495 1.40559 16.7215 1.68177C16.648 2.38411 16.5414 3.08335 16.2247 3.72776C15.9752 4.23461 15.6181 4.62974 15.0147 4.64319C14.4061 4.65663 14.109 4.20771 13.8627 3.74018C13.5139 3.07714 13.3535 2.35411 13.2468 1.61867C13.2179 1.41697 13.2137 1.26078 12.9229 1.28871C11.2689 1.4511 9.71834 1.90933 8.30446 2.80613C7.9484 3.03163 7.97117 3.21989 8.19371 3.53227C8.59531 4.09497 8.90375 4.71042 9.03521 5.40242C9.13457 5.92374 9.08075 6.40576 8.67294 6.78124C8.26823 7.15465 7.80867 7.02846 7.36049 6.86709C6.59662 6.59195 5.99215 6.08097 5.40838 5.53999C5.2614 5.40345 5.14858 5.23071 4.91466 5.47482C3.81129 6.63022 2.84662 7.87251 2.2763 9.38787C2.1552 9.70956 2.20282 9.86885 2.54128 10.0002C3.25029 10.2754 3.91894 10.6343 4.47476 11.168C4.8422 11.5208 5.09165 11.9397 4.94157 12.4589C4.79977 12.9472 4.35366 13.1064 3.91273 13.2233C3.20164 13.4137 2.46675 13.4219 1.75774 13.2895C1.2516 13.1944 1.1688 13.3909 1.15224 13.7953C1.09013 15.351 1.15845 16.8964 1.55073 18.4107C2.4564 21.91 4.36194 24.6977 7.4464 26.6392C8.01775 26.9992 8.01982 26.994 8.30756 26.4034C8.87167 25.2417 9.41818 24.0719 10.0102 22.9258C10.2224 22.5151 10.1945 22.3186 9.78976 22.0331C8.21855 20.9284 6.9475 19.532 6.40927 17.6577C5.36284 14.0105 6.51382 10.8815 9.02072 8.23557C10.6282 6.5392 12.7821 6.04063 15.0779 6.082C19.1705 6.15648 23.2506 9.26685 23.6574 13.7912C23.6833 14.0808 23.7744 14.1688 24.058 14.1625C24.7815 14.146 25.506 14.1574 26.2306 14.1584L26.2326 14.1594ZM16.7629 18.3228C17.0155 18.1821 17.2214 18.0942 17.3974 17.9659C17.9563 17.5584 17.9139 16.884 17.3187 16.5313C17.0921 16.3968 16.8499 16.3234 16.5839 16.3213C15.8262 16.3182 15.0696 16.3192 14.3119 16.3006C14.0645 16.2944 13.9393 16.3875 13.8627 16.6171C13.4777 17.7746 13.0905 18.931 12.6848 20.0812C12.5875 20.3585 12.6807 20.4174 12.928 20.4143C13.754 20.405 14.58 20.4071 15.406 20.3916C15.8003 20.3843 16.1978 20.3667 16.5704 20.2064C17.0072 20.0171 17.3229 19.7171 17.4036 19.2331C17.4792 18.7769 17.1552 18.5566 16.7629 18.3218V18.3228ZM21.7508 20.4164C22.2076 20.4191 22.3743 20.2188 22.2508 19.8154C22.2156 19.7006 22.1794 19.5858 22.1442 19.471C21.9951 18.9896 22.1528 18.6393 22.6172 18.42C23.1295 18.178 23.4432 17.7001 23.3852 17.2502C23.3303 16.8209 22.9256 16.462 22.3688 16.3606C22.2177 16.3327 22.0614 16.3223 21.9071 16.3203C21.1671 16.312 20.426 16.3306 19.688 16.2975C19.3226 16.2809 19.1777 16.4268 19.0742 16.7557C18.7575 17.7539 18.4262 18.749 18.0661 19.7316C17.7856 20.4971 17.8197 20.406 18.596 20.4195C18.8216 20.4236 18.9427 20.3378 19.0059 20.1237C19.099 19.8113 19.2398 19.5113 19.3102 19.1948C19.392 18.8317 19.5669 18.7014 19.9488 18.7107C20.8359 18.7314 20.8369 18.7107 21.0636 19.561C21.0946 19.6768 21.1381 19.7916 21.1515 19.9106C21.1961 20.3057 21.3772 20.5147 21.7519 20.4195L21.7508 20.4164ZM26.1488 16.3275C26.1488 16.3213 26.1488 16.314 26.1488 16.3078C25.7534 16.3078 25.358 16.3099 24.9626 16.3068C24.7846 16.3047 24.6273 16.3068 24.5558 16.524C24.1573 17.7291 23.7506 18.931 23.349 20.134C23.319 20.223 23.2517 20.316 23.3893 20.3947C23.7371 20.5933 24.3664 20.3502 24.5062 19.9551C24.7884 19.16 25.3483 18.7617 26.186 18.7603C26.7698 18.7583 27.3608 18.7707 27.896 18.4811C28.4663 18.1718 28.7457 17.6825 28.6505 17.1964C28.5615 16.7485 28.0502 16.3678 27.4364 16.3316C27.0079 16.3068 26.5773 16.3265 26.1478 16.3265L26.1488 16.3275Z"
                      fill="#EDD0C6"
                    />
                    <path
                      d="M14.8316 19.7957C14.8141 19.7957 14.7975 19.7977 14.7799 19.7957C14.5015 19.7532 14.0937 19.9415 13.9715 19.6767C13.8463 19.4047 14.1216 19.0716 14.2199 18.7654C14.2386 18.7065 14.2976 18.6185 14.341 18.6165C14.9331 18.5865 15.5365 18.4685 16.1058 18.7302C16.2931 18.8161 16.3625 19.0023 16.3221 19.2092C16.2652 19.4947 16.0572 19.6643 15.8015 19.7191C15.4858 19.7863 15.1567 19.7874 14.8337 19.8163C14.8337 19.8101 14.8327 19.8029 14.8316 19.7967V19.7957Z"
                      fill="#EDD0C6"
                    />
                    <path
                      d="M15.2645 17.9836C15.0503 17.9484 14.6673 18.1046 14.5762 17.9143C14.45 17.6515 14.718 17.3423 14.8008 17.0485C14.8246 16.9626 14.8878 16.8933 14.983 16.8892C15.4633 16.8675 15.9466 16.8209 16.4135 16.974C16.5656 17.0237 16.6846 17.1416 16.6991 17.3102C16.7188 17.5388 16.5884 17.7002 16.4052 17.817C16.0636 18.0343 15.6775 17.9774 15.2656 17.9846L15.2645 17.9836Z"
                      fill="#EDD0C6"
                    />
                    <path
                      d="M20.7658 18.1117C20.714 18.1117 20.6623 18.1117 20.6115 18.1117C19.5982 18.1117 19.5972 18.1045 19.9957 17.187C20.0743 17.006 20.1675 16.916 20.3724 16.9222C20.7844 16.9346 21.1963 16.9222 21.6083 16.9325C21.9167 16.9408 22.2159 17.0153 22.2583 17.3814C22.3049 17.7828 22.0275 17.9845 21.689 18.0569C21.3909 18.121 21.0752 18.1055 20.7668 18.1252C20.7668 18.121 20.7668 18.1158 20.7668 18.1117H20.7658Z"
                      fill="#EDD0C6"
                    />
                    <path
                      d="M26.0812 18.1429C26.0636 18.1429 26.046 18.145 26.0295 18.1429C25.7624 18.1088 25.365 18.2784 25.2573 18.0374C25.1217 17.7333 25.3205 17.3082 25.5296 17.094C25.9105 16.703 26.4673 16.9844 26.9465 16.941C27.1784 16.9203 27.3927 17.0123 27.4982 17.2471C27.6462 17.5771 27.3906 17.9712 26.9559 18.0881C26.8896 18.1057 26.8203 18.1201 26.752 18.1212C26.5284 18.1253 26.3048 18.1232 26.0802 18.1232V18.1429H26.0812Z"
                      fill="#EDD0C6"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1885_5126">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h4>Power BI Design system</h4>
                <p>
                  I had to do business with Ventriloc on several major projects.
                  They stand out for their understanding of business needs and
                  their translation into technical requirements. The delivery
                  plans are detailed and the deadlines respected. The quality of
                  the deliverables is irreproachable.
                </p>
                <div className={styles.caption}>
                  <p>Adrien Bourdon</p>
                  <p>BI Team Lead</p>
                </div>
              </div>
              <div className={styles.cardSticky}>
                <svg
                  width="172"
                  height="30"
                  viewBox="0 0 172 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8688 14.6754C10.8688 14.5693 10.8688 14.4633 10.8688 14.3572C10.8688 14.2512 10.8952 14.1451 10.9215 14.0656C10.9743 13.8005 11.0534 13.5619 11.1326 13.3233C11.1853 13.2172 11.2117 13.1377 11.2645 13.0316C11.2909 12.9786 11.3172 12.9256 11.3436 12.8991C11.3964 12.8196 11.4492 12.7135 11.5283 12.634C11.5547 12.581 11.5811 12.5544 11.6074 12.5014C11.8185 12.2098 12.0559 11.9447 12.2933 11.7061C12.3461 11.6531 12.3725 11.6265 12.4252 11.5735C12.7682 11.2819 13.1111 10.9903 13.5068 10.7517C13.5596 10.7252 13.6123 10.6721 13.6915 10.6456C13.8234 10.5661 13.9289 10.5131 14.0608 10.4335C14.5357 10.1684 15.0369 9.95632 15.5381 9.74423C16.0393 9.55865 16.5406 9.39959 17.0418 9.26703C17.8068 9.05494 18.5719 8.92238 19.3633 8.81633C19.8117 8.76331 20.2866 8.71029 20.7614 8.68377C21.1044 8.65726 21.4209 8.65726 21.7639 8.65726C24.2436 8.63075 26.6706 9.13447 28.9393 10.1419C29.124 10.2214 29.3087 10.0889 29.3087 9.9033C29.3087 9.47912 29.2823 9.02843 29.1768 8.60424C29.124 8.39215 28.9393 8.20657 28.7283 8.15355C26.8025 7.75587 24.824 7.51727 22.8719 7.46425C22.5025 7.46425 22.1596 7.43773 21.7903 7.43773H21.3418C20.524 7.43773 19.7062 7.49076 18.8884 7.54379C18.4663 7.5703 18.0442 7.62332 17.6485 7.67634C16.6725 7.78239 15.7228 7.94145 14.8522 8.12703C14.6148 8.18006 14.3774 8.23308 14.1663 8.2861C13.8234 8.36564 13.4804 8.44517 13.1639 8.55122C12.9528 8.60424 12.7418 8.68378 12.5307 8.7368C12.0031 8.89587 11.5019 9.08145 11.0271 9.26703C10.8424 9.34656 10.6577 9.4261 10.4731 9.50563C10.2093 9.63819 9.94547 9.74423 9.68167 9.87679C9.52338 9.95632 9.33872 10.0624 9.18044 10.1419C9.1013 10.1949 9.02216 10.2214 8.94301 10.2745C8.78473 10.354 8.65283 10.46 8.49455 10.5661C8.28351 10.6986 8.07246 10.8577 7.8878 11.0168C7.70314 11.1758 7.51847 11.3084 7.33381 11.4675C7.12277 11.6796 6.91173 11.8917 6.72706 12.1037C6.59516 12.2628 6.46326 12.4219 6.35774 12.6075C6.22584 12.8196 6.09393 13.0582 5.98841 13.2968C5.93565 13.4028 5.90927 13.5354 5.85651 13.6414C5.77737 13.933 5.72461 14.2512 5.72461 14.5693C5.72461 16.16 6.88535 17.6446 8.86387 18.8376C8.96939 18.9172 9.12768 18.8642 9.18044 18.7316C9.60252 17.5651 10.1038 16.4516 10.6841 15.3647C10.816 15.2056 10.8688 14.9405 10.8688 14.6754ZM23.7688 6.35077L23.8479 6.32426C23.9798 6.27124 24.0853 6.24473 24.1909 6.21822L24.2964 6.1917C24.3755 6.16519 24.4811 6.13867 24.5866 6.11216L24.6657 6.08566C24.7712 6.05915 24.9031 6.03263 25.0087 6.00612L25.0878 5.97961C25.1669 5.95309 25.2725 5.9531 25.3516 5.92659L25.4307 5.90008C25.5363 5.87356 25.6418 5.87356 25.7737 5.84705H25.8265C25.9056 5.84705 26.0111 5.82054 26.0903 5.82054H26.1694C26.2749 5.82054 26.3804 5.82054 26.486 5.82054H26.5387C26.6442 5.82054 26.7234 5.82054 26.8289 5.82054H26.8817C26.9872 5.82054 27.0927 5.84705 27.1719 5.84705H27.2246C27.3038 5.84705 27.4093 5.87356 27.4884 5.90008H27.5148C27.5939 5.92659 27.6995 5.92659 27.805 5.9531L27.8577 5.97961C27.9369 6.00612 28.0424 6.03263 28.1215 6.05915C28.2007 6.08566 28.2798 6.11217 28.359 6.16519L28.4117 6.1917C28.4909 6.21821 28.57 6.27124 28.6492 6.32426L28.7019 6.35077C28.7811 6.37728 28.8338 6.43031 28.913 6.48333L28.9393 6.50983C29.0185 6.56286 29.0976 6.61588 29.1504 6.6689L29.2031 6.72193C29.2823 6.77495 29.335 6.85448 29.4142 6.90751C29.6516 7.14611 29.8627 7.43774 30.0209 7.75587C30.1528 8.02099 30.2584 8.31262 30.3375 8.60424C30.4694 9.13447 30.5222 9.69121 30.4958 10.2479C30.4694 10.4865 30.443 10.7517 30.4166 10.9903C30.4166 11.0168 30.4166 11.0168 30.4166 11.0433C30.3903 11.2819 30.3375 11.5205 30.2584 11.7591L30.232 11.8121C29.7835 13.4558 29.0185 14.9935 28.016 16.3721C27.805 16.6637 27.5939 16.9288 27.3829 17.2205C27.2774 17.353 27.1455 17.4856 27.04 17.6446C26.697 18.0688 26.3277 18.4665 25.9056 18.8642C25.8265 18.9437 25.9056 19.0497 26.0111 19.0497C26.3277 18.9702 26.7234 18.8642 27.1455 18.7316C27.6467 18.599 28.0952 18.3074 28.4117 17.9097C28.4909 17.8037 28.5964 17.6977 28.6755 17.6181C29.1768 17.0084 29.678 16.3986 30.1265 15.7888C30.2847 15.5767 30.4166 15.3912 30.5749 15.1791C30.9442 14.6223 31.3136 14.0921 31.6301 13.5619C31.7884 13.2968 31.9203 13.0582 32.0522 12.8196C32.2369 12.5014 32.3952 12.2098 32.5271 11.8917C32.7381 11.494 32.8964 11.1228 33.0547 10.7517C33.1338 10.5661 33.213 10.3805 33.2921 10.1949C33.3185 10.1154 33.3712 10.0093 33.3976 9.92981L33.4504 9.79726C33.5031 9.6647 33.5559 9.50563 33.5823 9.37307C33.6087 9.26703 33.635 9.18749 33.6614 9.08145C33.7142 8.89587 33.7669 8.7368 33.7933 8.57773C33.8725 8.31262 33.9252 8.0475 33.9516 7.8089C33.978 7.64983 34.0044 7.46425 34.0307 7.30518C34.0571 7.14611 34.0571 6.98704 34.0835 6.82797C34.0835 6.66891 34.1099 6.50983 34.1099 6.37728C34.1099 6.21821 34.1099 6.08566 34.1099 5.92659C34.1099 5.84705 34.1099 5.79403 34.0835 5.71449C34.0835 5.58193 34.0571 5.42287 34.0307 5.29032C33.9252 4.52148 33.5823 3.83219 33.0547 3.27545C33.0019 3.22242 32.9755 3.19591 32.9228 3.14289L32.87 3.08986C32.8436 3.06335 32.8173 3.03684 32.7645 3.01033L32.7117 2.95731C32.6854 2.93079 32.659 2.90429 32.6062 2.87778L32.5271 2.82475C32.5007 2.79824 32.4743 2.77173 32.4479 2.77173L32.3688 2.7187C32.3424 2.69219 32.316 2.69219 32.2896 2.66568C32.2633 2.66568 32.2369 2.63917 32.2105 2.63917C32.1841 2.63917 32.1577 2.61266 32.105 2.58615L32.0258 2.55963L31.9203 2.50661L31.8412 2.4801L31.7357 2.45359L31.6565 2.42708L31.551 2.40057L31.4719 2.37406L31.3663 2.34755L31.2872 2.32103L31.1817 2.29452L31.0761 2.26801L30.9706 2.2415L30.8915 2.21499H30.7596L30.6541 2.18848H30.5485H30.443H30.3111H30.2056H30.0737C29.9682 2.18848 29.8626 2.18848 29.7835 2.18848H29.7307C29.6516 2.18848 29.5725 2.18848 29.4669 2.21499H29.3878C29.2823 2.21499 29.1768 2.2415 29.0712 2.2415H29.0185C28.9393 2.2415 28.8338 2.26801 28.7547 2.29452L28.6755 2.32103C28.57 2.34755 28.4645 2.34754 28.359 2.37406L28.3062 2.40057C28.2007 2.42708 28.1215 2.45359 28.016 2.45359L27.9369 2.4801C27.8314 2.50662 27.6995 2.53312 27.5939 2.55963H27.5676C27.462 2.58615 27.3565 2.61266 27.251 2.63917L27.1719 2.66568C27.0663 2.69219 26.9344 2.74522 26.8289 2.79824H26.8025C26.697 2.85126 26.5651 2.87777 26.4596 2.9308L26.3804 2.95731C26.2485 3.01033 26.143 3.03684 26.0111 3.08986C25.8792 3.14289 25.7737 3.19591 25.6418 3.24893L25.5363 3.27545C25.4307 3.32847 25.2988 3.38149 25.1933 3.43451L25.1669 3.46103C25.035 3.51405 24.9031 3.56707 24.7976 3.6466L24.6921 3.69963C24.5866 3.75265 24.4811 3.80567 24.3492 3.85869L24.2964 3.88521C24.1645 3.93823 24.0326 4.01777 23.9007 4.0973L23.7952 4.15032C23.6896 4.20334 23.5841 4.28288 23.4522 4.3359L23.3995 4.36242C23.2676 4.44195 23.1357 4.52148 23.0038 4.60102L22.9246 4.65404C22.8191 4.70706 22.7136 4.7866 22.5817 4.86613L22.5025 4.91915C22.3706 4.99868 22.2387 5.07822 22.1068 5.15776L22.0277 5.21078C21.9222 5.29031 21.8166 5.36985 21.6847 5.42287L21.6056 5.47589C21.4737 5.55543 21.3418 5.66147 21.2099 5.74101L21.1307 5.79403C21.0252 5.87357 20.9197 5.9531 20.7878 6.03263L20.7087 6.08566L20.313 6.37728C21.4209 6.37728 22.5289 6.35077 23.6369 6.32426L23.7688 6.35077ZM22.951 22.8674C22.0277 22.8674 20.8142 22.8939 20.2866 22.8939C20.1019 22.8939 19.9172 22.9204 19.759 22.9734L19.7062 22.9999C19.5743 23.0265 19.4688 23.0795 19.3369 23.106L19.2577 23.1325C19.1522 23.159 19.0731 23.1855 18.9676 23.212L18.8884 23.2385C18.7829 23.2651 18.651 23.2916 18.5455 23.3181L18.4663 23.3446C18.3608 23.3711 18.2817 23.3711 18.1761 23.3976L18.097 23.4241C17.9915 23.4506 17.8596 23.4506 17.7541 23.4771H17.7013C17.5958 23.4771 17.5166 23.5037 17.4111 23.5037H17.332C17.2265 23.5037 17.1209 23.5037 17.0154 23.5037H16.9626C16.8571 23.5037 16.778 23.5037 16.6725 23.5037H16.6197C16.5142 23.5037 16.435 23.4771 16.3295 23.4771H16.2768L16.013 23.4241H15.9866C15.9074 23.3976 15.8019 23.3711 15.7228 23.3711L15.67 23.3446C15.5909 23.3181 15.4853 23.2916 15.4062 23.2651C15.3271 23.2385 15.2479 23.212 15.1688 23.159L15.116 23.1325C15.0369 23.106 14.9577 23.053 14.8786 22.9999L14.8258 22.9734C14.7467 22.9204 14.6939 22.8939 14.6148 22.8409L14.5884 22.8144C14.5093 22.7613 14.4301 22.7083 14.3774 22.6553L14.3246 22.6288C14.2455 22.5758 14.1927 22.4962 14.1136 22.4432C13.8761 22.2046 13.6651 21.913 13.5068 21.5948C13.3749 21.3297 13.2694 21.0381 13.1903 20.7465C13.1639 20.6669 13.1375 20.5874 13.1375 20.5079C13.0847 20.2958 13.0584 20.0572 13.0584 19.8451C13.032 19.6065 13.032 19.3679 13.0584 19.1293C13.0584 18.8642 13.0847 18.6256 13.1375 18.3604C13.1375 18.3339 13.1375 18.3339 13.1375 18.3074C13.1639 18.0688 13.2166 17.8302 13.2958 17.5916L13.3222 17.5386C13.3749 17.3 13.4541 17.0349 13.5332 16.7963C13.6651 16.3721 13.8498 15.9479 14.0344 15.5502C14.1663 15.2586 14.2982 14.9935 14.4565 14.7019C14.6148 14.4102 14.7731 14.1186 14.9577 13.8535C15.1424 13.5619 15.3271 13.2968 15.5381 13.0051C15.7492 12.7135 15.9602 12.4484 16.1712 12.1568C16.6197 11.5735 17.1209 11.0433 17.6222 10.5131C17.6749 10.46 17.6222 10.3805 17.5694 10.407C17.3584 10.46 17.1737 10.5131 16.9626 10.5661C16.0393 10.8312 15.1952 11.3614 14.5884 12.1037C13.6123 13.2702 12.7154 14.5428 11.924 15.8419C11.7657 16.0805 11.6338 16.3456 11.5019 16.5842L11.4755 16.6107C11.37 16.8228 11.2645 17.0084 11.159 17.1939C11.0534 17.3795 10.9479 17.5916 10.8688 17.7772C10.7633 17.9628 10.6841 18.1749 10.605 18.3604C10.5258 18.546 10.4467 18.7316 10.3676 18.9437C10.2884 19.1293 10.2093 19.3148 10.1565 19.5004L10.1038 19.633C10.0246 19.8716 9.94547 20.1102 9.86633 20.3488C9.70805 20.8525 9.60252 21.3562 9.52338 21.8865C9.497 22.0455 9.47062 22.2046 9.47062 22.3637C9.44424 22.5227 9.44424 22.6818 9.44424 22.8409C9.44424 22.9204 9.44424 22.9999 9.44424 23.0795C9.44424 23.159 9.44424 23.2385 9.44424 23.2916C9.44424 23.4506 9.44424 23.5832 9.47062 23.7158C9.497 23.9278 9.52338 24.1399 9.54976 24.3255C9.6289 24.6967 9.76081 25.0678 9.94547 25.4125C10.0246 25.5715 10.1301 25.7306 10.262 25.8632C10.3412 25.9692 10.4203 26.0488 10.4995 26.1283C10.5522 26.1813 10.5786 26.2078 10.6314 26.2608C10.6577 26.2874 10.6577 26.2874 10.6841 26.3139C10.7105 26.3404 10.7369 26.3669 10.7633 26.3934L10.816 26.4464C10.8424 26.4729 10.8688 26.4994 10.8952 26.526C10.9215 26.5525 10.9479 26.5525 10.9479 26.579C10.9743 26.6055 11.0007 26.632 11.0271 26.632L11.0798 26.579C11.1062 26.6055 11.1326 26.6055 11.159 26.632L11.2381 26.6585C11.2645 26.685 11.2909 26.685 11.3436 26.7115L11.4228 26.7381L11.5283 26.7911L11.6074 26.8441L11.713 26.8706L11.7921 26.8971L11.8976 26.9236L11.9768 26.9501L12.1878 27.0032L12.2933 27.0297L12.3988 27.0562L12.5044 27.0827L12.6099 27.1092L12.7154 27.1357H12.8209H12.9528H13.0584H13.1903H13.2958H13.4541C13.5596 27.1357 13.6651 27.1357 13.7442 27.1357H13.797C13.8761 27.1357 13.9553 27.1357 14.0608 27.1092H14.1399C14.2455 27.1092 14.351 27.0827 14.4565 27.0827H14.5093C14.5884 27.0562 14.6939 27.0562 14.7731 27.0297L14.8522 27.0032C14.9577 26.9767 15.0633 26.9767 15.1688 26.9501H15.2215C15.3271 26.9236 15.4062 26.8971 15.5117 26.8971L15.5909 26.8706C15.6964 26.8441 15.8283 26.8176 15.9338 26.7911H15.9602C16.0657 26.7646 16.1712 26.7381 16.2768 26.7115L16.3559 26.685C16.4878 26.6585 16.5933 26.6055 16.7252 26.579H16.7516C16.8571 26.526 16.989 26.4994 17.0946 26.4464L17.2001 26.4199C17.3056 26.3669 17.4375 26.3404 17.5694 26.2874C17.7013 26.2343 17.8068 26.1813 17.9387 26.1283L18.0442 26.0753C18.1498 26.0222 18.2817 25.9692 18.3872 25.9162L18.4136 25.8897C18.5455 25.8367 18.651 25.7571 18.7829 25.7041L18.8884 25.6511C18.9939 25.5981 19.0995 25.545 19.2314 25.492L19.2841 25.4655C19.416 25.4125 19.5479 25.3329 19.6798 25.2534L19.7853 25.2004C19.8909 25.1474 19.9964 25.0678 20.1283 25.0148L20.2074 24.9883C20.3393 24.9088 20.4712 24.8292 20.6031 24.7497L20.7087 24.6967C20.8142 24.6436 20.9197 24.5641 21.0252 24.4846L21.1044 24.4316C21.2363 24.352 21.3682 24.2725 21.5001 24.193L21.5792 24.1399C21.6847 24.0604 21.7903 23.9809 21.9222 23.9278L22.0013 23.8748C22.1332 23.7953 22.2651 23.6892 22.397 23.6097L22.4761 23.5567C22.5817 23.4771 22.6872 23.3976 22.8191 23.3181L22.8982 23.2651L23.0565 23.1325C23.0829 22.9999 23.0565 22.8674 22.951 22.8674ZM37.5657 13.4028C37.4602 13.1642 37.3547 12.9256 37.1964 12.7135C37.0909 12.5279 36.959 12.3689 36.8271 12.2098C36.6424 11.9712 36.4314 11.7591 36.2203 11.5735C36.062 11.4144 35.8774 11.2554 35.6927 11.1228C35.5081 10.9638 35.297 10.8312 35.086 10.6721L34.9541 10.5926C34.7958 10.4866 34.5847 10.5661 34.5056 10.7517C34.0571 11.9712 33.5031 13.1112 32.7909 14.1981C32.6854 14.3572 32.6326 14.5163 32.6326 14.7019C32.6326 16.7432 30.786 18.5195 27.9633 19.6065C27.462 19.7921 26.9608 19.9511 26.4596 20.0837C25.6946 20.2958 24.9295 20.4283 24.1381 20.5344C23.6896 20.5874 23.2148 20.6404 22.7399 20.6669C22.397 20.6935 22.0804 20.6934 21.7375 20.6934C19.205 20.7465 16.6988 20.2162 14.4038 19.1293C14.2455 19.0497 14.0344 19.1558 14.0344 19.3679C14.0344 19.6065 14.0608 19.8451 14.0872 20.0837C14.1663 20.6934 14.6148 21.1707 15.2215 21.3032C17.0154 21.6479 18.8357 21.8599 20.6559 21.913C21.0252 21.913 21.3682 21.9395 21.7375 21.9395H22.186C23.0038 21.9395 23.8215 21.8865 24.6393 21.8334C25.0614 21.8069 25.4835 21.7539 25.8792 21.7009C32.7381 20.879 37.7768 18.0953 37.7768 14.7814C37.7768 14.4633 37.724 14.1716 37.6449 13.88C37.6712 13.6414 37.6185 13.5088 37.5657 13.4028Z"
                    fill="#EDD0C6"
                  />
                  <path
                    d="M88.0298 6.27139C85.9722 6.24488 84.0728 7.33185 83.0176 9.10811V7.17277C83.0176 6.85464 82.7801 6.61604 82.4636 6.61604H79.9047C79.5881 6.61604 79.3507 6.85464 79.3507 7.17277V22.1517C79.3507 22.4699 79.5881 22.7085 79.9047 22.7085H82.4636C82.7801 22.7085 83.0176 22.4699 83.0176 22.1517V13.6151C83.0176 11.123 84.4949 9.61183 86.6317 9.61183C88.8212 9.61183 90.0611 11.0434 90.0611 13.5355V22.1252C90.0611 22.4434 90.3249 22.682 90.6151 22.682H93.174C93.4906 22.682 93.728 22.4434 93.728 22.1252V12.4486C93.728 8.71044 91.644 6.27139 88.0298 6.27139ZM50.7016 13.1909C48.8286 12.5811 47.0875 12.1039 47.0875 10.9374V10.8844C47.0875 9.92996 47.9053 9.26718 49.3298 9.26718C50.7544 9.34672 52.1525 9.7709 53.366 10.5132C53.6298 10.6723 53.9728 10.5662 54.1311 10.3011L55.0544 8.6309C55.2127 8.36579 55.1071 8.02114 54.8433 7.88859C53.2077 6.90766 51.3347 6.37744 49.4354 6.35093C46.2433 6.35093 43.7372 8.20673 43.7372 11.2555V11.3086C43.7372 14.3839 46.3752 15.3648 48.7495 16.0276C50.6225 16.6108 52.3372 17.035 52.3372 18.2811V18.3341C52.3372 19.3945 51.4139 20.0838 49.8574 20.0838C48.1427 20.0308 46.4544 19.4476 45.0562 18.4401C44.7924 18.2545 44.4495 18.3341 44.2912 18.5992L43.2624 20.1634C43.1041 20.402 43.1568 20.7466 43.3943 20.9322C45.2673 22.2578 47.4832 23.0001 49.7519 23.0266C53.1022 23.0266 55.6875 21.3564 55.6875 17.9629V17.9099C55.6875 14.9936 53.0495 13.9332 50.7016 13.1909ZM67.0838 6.27139C64.8415 6.21836 62.6519 7.09324 61.0427 8.65742C59.4335 10.2481 58.5366 12.422 58.5366 14.6755V14.7285C58.5366 16.982 59.4335 19.1294 61.0427 20.6936C62.6519 22.2578 64.8151 23.1061 67.0311 23.0531C69.2734 23.1061 71.463 22.2578 73.0722 20.6671C74.6814 19.1029 75.6047 16.929 75.6047 14.649V14.596C75.6047 12.3425 74.7078 10.1951 73.0986 8.6044C71.5157 7.06674 69.3262 6.21836 67.0838 6.27139ZM71.9378 14.755C71.9378 17.5387 70.0648 19.8717 67.0838 19.8717C64.2875 19.8452 62.0979 17.4857 62.2035 14.702V14.649C62.2035 11.8388 64.0765 9.5323 67.0311 9.5323C69.8274 9.55881 72.0697 11.8918 71.9378 14.702V14.755ZM105.203 6.27139C103.093 6.27139 101.062 7.09325 99.5844 8.6044C98.1071 10.089 97.263 12.1304 97.263 14.2513V14.7285C97.1838 16.9555 98.0016 19.1294 99.5581 20.6936C101.115 22.2843 103.251 23.1326 105.467 23.0796C107.789 23.1592 110.057 22.2048 111.64 20.4815C111.851 20.2429 111.851 19.8983 111.614 19.6862L110.242 18.4666C110.031 18.2811 109.715 18.2811 109.503 18.4666C108.448 19.5006 106.997 20.0573 105.52 20.0573C103.146 20.1369 101.115 18.3606 100.903 15.9746H112.168C112.458 15.9746 112.695 15.736 112.722 15.4443C112.722 15.2588 112.748 15.0997 112.748 14.9406C112.801 10.3276 110.242 6.32441 105.203 6.27139ZM100.93 13.5355C101.273 11.0434 102.856 9.29369 105.098 9.29369C107.525 9.29369 108.923 11.1495 109.161 13.5355H100.93ZM143.218 6.37743C141.292 6.35092 139.366 6.72208 137.599 7.51743C137.335 7.62347 137.203 7.94161 137.282 8.20673L137.941 10.1155C138.047 10.4072 138.364 10.5662 138.654 10.4602C139.946 9.92997 141.318 9.66485 142.69 9.66485C145.249 9.66485 146.647 10.8844 146.647 13.1113V13.403C145.222 12.9258 143.719 12.7137 142.215 12.7402C138.495 12.7402 135.726 14.4369 135.726 18.016V18.069C135.726 21.3034 138.39 23.0266 141.424 23.0266C143.402 23.1061 145.328 22.2313 146.621 20.7201V22.1517C146.621 22.4699 146.858 22.7085 147.175 22.7085H149.707C150.024 22.7085 150.261 22.4699 150.261 22.1517V13.1644C150.261 8.86951 147.966 6.37743 143.218 6.37743ZM146.726 16.876C146.726 18.8908 144.906 20.2694 142.479 20.2694C140.738 20.2694 139.392 19.4211 139.392 17.8834V17.8304C139.392 16.2662 140.764 15.3383 143.059 15.3383C144.299 15.3383 145.565 15.5504 146.726 15.9746V16.876ZM163.399 6.2979C160.892 6.40395 159.23 7.99463 158.307 10.2216V7.14627C158.307 6.82813 158.07 6.58953 157.753 6.58953H155.194C154.878 6.58953 154.64 6.82813 154.64 7.14627V22.1252C154.64 22.4434 154.878 22.682 155.194 22.682H157.753C158.07 22.682 158.307 22.4434 158.307 22.1252V16.5578C158.307 12.5016 160.312 10.4072 163.451 10.1951C163.741 10.1686 163.979 9.92997 163.979 9.63834V6.82813C163.979 6.5365 163.715 6.2979 163.399 6.2979ZM125.595 6.27139C123.38 6.27139 121.348 7.41138 120.161 9.29369V7.17277C120.161 6.85464 119.924 6.61604 119.607 6.61604H117.048C116.732 6.61604 116.494 6.85464 116.494 7.17277V27.0298C116.494 27.348 116.732 27.5866 117.048 27.5866H119.607C119.924 27.5866 120.161 27.348 120.161 27.0298V20.2164C121.401 22.0192 123.432 23.0796 125.595 23.0531C129.421 23.0531 133.061 20.0308 133.061 14.702V14.649C133.061 9.29369 129.394 6.27139 125.595 6.27139ZM129.341 14.702C129.341 17.8569 127.284 19.8452 124.751 19.8452C122.272 19.8452 120.082 17.8039 120.082 14.702V14.649C120.082 11.5737 122.272 9.50578 124.751 9.50578C127.231 9.50578 129.341 11.5472 129.341 14.649V14.702Z"
                    fill="#EDD0C6"
                  />
                </svg>
                <p>
                  Ventriloc is one of the most professional company with high
                  performers I had the pleasure of working with in my career.
                  The dedication to their craft is nothing short of inspiring.
                  Not only did they have a unique ability to understand our
                  organization and pain points, but their constant communication
                  helped lift our spirits in challenging situations.
                </p>
                <div className={styles.caption}>
                  <p>Mofa Sergieh</p>
                  <p>Director Processes & Control</p>
                </div>
              </div>
              <div className={styles.cardSticky}>
                <svg
                  width="243"
                  height="526"
                  viewBox="0 0 243 526"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M86.8975 274.745C81.9629 272.26 76.1857 269.774 76.1857 262.92C76.1857 256.065 81.9629 253.58 86.8975 251.095C144.829 227.404 184.908 206.079 210.022 166.354C232.529 130.799 243 80.5315 243 0H134.679C139.614 73.5566 132.874 127.552 113.296 166.354C91.7519 209.125 54.4814 233.337 0 244.962V281.038C54.4814 292.663 91.7519 316.875 113.296 359.646C132.874 398.448 139.614 452.443 134.679 526H243C243 445.469 232.529 395.201 210.022 359.646C184.908 319.56 144.829 298.235 86.8975 274.745Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>
                  Let&apos;s
                  <br />
                  connect
                </span>
                <div></div>
                <button className={styles.btn}>Contact us</button>
              </div>
            </div>
          </div>
          <Swiper
            className={styles.swiper}
            spaceBetween={20}
            slidesPerView={3}
            modules={[Pagination]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              450: {
                slidesPerView: 1.5,
              },
              600: {
                slidesPerView: 2,
              },
              769: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              el: `.${styles.swiperPagination}`,
            }}
          >
            <div className={styles.swiperPagination}></div>
            <SwiperSlide className={styles.cardSticky}>

              <p>
                The ventriloc team has very specific expertise in the Power BI
                tool and data visualization. The solution developed by their
                team, which is consulted religiously every day, has now become
                the reference for more than a hundred users. Thanks to the
                ventriloc team!
              </p>
              <div className={styles.caption}>
                <p>Mike Shenouda</p>
                <p>Product Marketing Director</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.cardSticky}>

              <h4>Power BI Design system</h4>
              <p>
                I had to do business with Ventriloc on several major projects.
                They stand out for their understanding of business needs and
                their translation into technical requirements. The delivery
                plans are detailed and the deadlines respected. The quality of
                the deliverables is irreproachable.
              </p>
              <div className={styles.caption}>
                <p>Adrien Bourdon</p>
                <p>BI Team Lead</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.cardSticky}>

              <p>
                Ventriloc is one of the most professional company with high
                performers I had the pleasure of working with in my career. The
                dedication to their craft is nothing short of inspiring. Not
                only did they have a unique ability to understand our
                organization and pain points, but their constant communication
                helped lift our spirits in challenging situations.
              </p>
              <div className={styles.caption}>
                <p>Mofa Sergieh</p>
                <p>Director Processes & Control</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.cardSticky}>

              <span>
                Let&apos;s
                <br />
                connect
              </span>
              <div></div>
              <button className={styles.btn}>Contact us</button>
            </SwiperSlide>
          </Swiper>
          {/* hdhhhhhhdhd */}
          {/* here i want when i scroll to this area then scrolling should stop and that this component should 
show its logic of matrix scorlling of text */}
          {/* ...existing code... */}

          <div className="textcust-pin-area" style={{ marginTop: '20px' }}>
            <TextCust />
          </div>
          {/* ...existing code... */}

          <div className={styles.faq} >
            <div className={styles.left}>
              <h2>FAQ</h2>
              <p>
                Here are some of our most asked questions. If yours is not
                there, contact us.
              </p>
            </div>
            <div className={styles.questions}>
              {questions.map((item, index) => (
                <button
                  key={index}
                  className={`${styles.question} ${activeIndex === index ? styles.active : ""
                    }`}
                  onClick={() => handleQuestionClick(index)}
                >
                  <div className={styles.head}>
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5.04H5.04V9H3.96V5.04H0V3.96H3.96V0H5.04V3.96H9V5.04Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <p>{item.question}</p>
                  </div>
                  <p className={styles.answer}>{item.answer}</p>
                </button>
              ))}
            </div>
          </div>
        </section>
        <section className={`${styles.section_6} ${styles.section}`}>
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
        </section>
        <section className={`${styles.section_7} ${styles.section}`}>
          <div className={styles.container}>
            <h3>
              To make <span>good</span>
              <br />
              business <button>Contact us</button> <span>decisions</span>
              <br />
              at the right time.
            </h3>
            <h3>
              To make <span>good</span> business <br />
              <span>decisions</span> at the right time.
            </h3>
            <button>Contact us</button>
          </div>
        </section>
      </main>
      <NewFooter />
    </div>
  );
}
