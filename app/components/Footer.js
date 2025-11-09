"use client";


import styles from "./styles/Footer.module.css";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  useEffect(() => {});
  return (
    <footer className={styles.Footer}>
      <div className={styles.left}>
        <figure className={styles.logo}>
          <svg
            width="195"
            height="39"
            viewBox="0 0 195 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.66067 11.0088L12.3562 33.7406C12.5622 34.2671 12.6864 34.822 12.7247 35.3859C12.7247 35.6999 12.7247 36.0246 13.1474 36.0246C13.5701 36.0246 13.5701 35.6999 13.5701 35.3859C13.6084 34.822 13.7327 34.2671 13.9386 33.7406L21.6342 11.0088H26.2948L16.5399 38.0705H9.75488L0 11.0088H4.66067Z"
              fill="currentColor"
            ></path>
            <path
              d="M51.2886 25.6219H30.9334C31.1393 30.3848 34.3259 34.7254 39.7344 34.7254C43.6039 34.7254 45.5115 32.2899 46.4653 29.2265H50.92C50.4319 31.8658 49.0251 34.2477 46.9485 35.9512C44.8719 37.6547 42.259 38.5702 39.5719 38.5357C31.3019 38.5357 26.793 32.0409 26.793 24.5611C26.793 16.2477 31.9305 10.5864 39.4635 10.5864C45.2947 10.5864 51.3861 14.4508 51.3861 23.7709C51.3886 24.3892 51.356 25.0072 51.2886 25.6219V25.6219ZM31.1393 22.2338H47.1481C46.7796 17.2544 44.0266 14.1802 39.7778 14.1802C34.0007 14.1802 31.7246 17.7848 31.1393 22.2338Z"
              fill="currentColor"
            ></path>
            <path
              d="M79.3818 22.0176V38.1139H75.1438V22.2341C75.1438 15.9341 72.2824 14.1805 68.5105 14.1805C64.381 14.1805 59.8395 18.1532 59.8395 24.6155V38.1139H55.6016V11.0522H59.8395V13.3254C59.8346 14.3196 59.6549 15.3052 59.3084 16.2372C59.1567 16.6594 58.8857 17.1357 59.3084 17.3197C59.7311 17.5037 59.8395 17.114 59.8937 16.9517C60.6982 15.1188 62.0055 13.5506 63.6645 12.4282C65.3234 11.3057 67.2665 10.6749 69.2692 10.6084C75.5665 10.6084 79.3818 14.0831 79.3818 22.0176Z"
              fill="currentColor"
            ></path>
            <path
              d="M92.1078 14.6135V30.4933C92.1078 33.5675 92.7473 34.5201 95.7171 34.5201H99.7383V38.1139H95.7171C90.0918 38.1139 87.8699 36.4794 87.8699 30.1794V14.6135H83.6211V11.0089H87.8699V3.43164H92.1078V11.0089H99.695V14.6135H92.1078Z"
              fill="currentColor"
            ></path>
            <path
              d="M108.289 16.8323C110.088 12.4374 111.54 10.5864 118.358 10.5864V14.9163C110.456 14.3859 108.18 17.1895 108.18 24.2905V38.1027H103.953V11.0411H108.191V13.206C108.201 14.2861 108.021 15.3595 107.66 16.3776C107.497 16.7998 107.346 17.2761 107.768 17.3302C108.191 17.3843 108.224 17.1029 108.289 16.8323Z"
              fill="currentColor"
            ></path>
            <path
              d="M122.434 0H127.094V5.49894H122.434V0ZM122.64 11.0087H126.888V38.0704H122.64V11.0087Z"
              fill="currentColor"
            ></path>
            <path
              d="M137.489 0V38.1137H133.219V0H137.489Z"
              fill="currentColor"
            ></path>
            <path
              d="M167.188 24.5614C167.188 32.2361 162.408 38.5361 154.463 38.5361C146.518 38.5361 141.738 32.2361 141.738 24.5614C141.738 16.8867 146.507 10.6084 154.463 10.6084C162.419 10.6084 167.188 16.8867 167.188 24.5614ZM162.939 24.5614C162.939 18.9542 159.817 14.397 154.463 14.397C149.109 14.397 145.976 18.9542 145.976 24.5614C145.976 30.1686 149.109 34.7258 154.463 34.7258C159.817 34.7258 162.939 30.1794 162.939 24.5614V24.5614Z"
              fill="currentColor"
            ></path>
            <path
              d="M183.238 10.6084C190.349 10.6084 194.532 15.5877 194.955 20.7728H190.826C190.649 18.9511 189.77 17.2694 188.374 16.0835C186.979 14.8976 185.176 14.3006 183.347 14.4187C177.299 14.4187 174.6 19.0733 174.6 24.5831C174.6 30.0928 177.299 34.7474 183.347 34.7474C185.176 34.8656 186.979 34.2685 188.374 33.0826C189.77 31.8967 190.649 30.215 190.826 28.3933H194.998C194.576 33.5892 190.435 38.5577 183.282 38.5577C175.272 38.5577 170.395 32.2577 170.395 24.5831C170.395 16.9084 175.077 10.6084 183.238 10.6084Z"
              fill="currentColor"
            ></path>
          </svg>
        </figure>
        <div className={styles.links}>
          <div className={styles.linksCol}>
            <Link href="">Data integration</Link>
            <Link href="">Data visualization</Link>
            <Link href="">Analytical alignment</Link>
          </div>
          <div className={styles.space}></div>
          <div className={styles.linksCol}>
            <Link href="">About</Link>
            <Link href="">Careers</Link>
            <Link href="">Team</Link>
            <Link href="">Clients</Link>
            <Link href="">Contact</Link>
            <Link href="">Blog</Link>
            <Link href="">Privacy Policy</Link>
          </div>
          <div className={styles.space}></div>
          <div className={styles.linksCol}>
            <p>© ventriloc 2024</p>
          </div>
          <div className={styles.space}></div>
          <div className={styles.linksCol}>
            <p>
              Developed by
              <Link href="https://facebook.com/S3eedKh3led/">
                <span>Saeed Khaled</span>
                <span>Saeed Khaled</span>
              </Link>
            </p>
          </div>
          <div className={styles.space}></div>
          <div className={styles.linksCol}>
            <Link href="">Cookies preferences</Link>
          </div>
        </div>
      </div>
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
      <div className={styles.footerMobile}>
        <div className={styles.links}>
          <div className={styles.linksCol}>
            <Link href="">Data integration</Link>
            <Link href="">Data visualization</Link>
            <Link href="">Analytical alignment</Link>
          </div>
          <div className={styles.linksCol}>
            <Link href="">About</Link>
            <Link href="">Careers</Link>
            <Link href="">Team</Link>
            <Link href="">Clients</Link>
            <Link href="">Contact</Link>
            <Link href="">Blog</Link>
            <Link href="">Privacy Policy</Link>
          </div>
        </div>
        <div className={styles.hr}></div>
        <div className={styles.copyRights}>
          <div className={styles.left}>
            <div className={styles.linksCol}>
              <p>© ventriloc 2024</p>
            </div>
            <div className={styles.linksCol}>
              <Link href="">Cookies preferences</Link>
            </div>
          </div>
          <div className={styles.linksCol}>
            <p>
              Developed by
              <Link href="https://facebook.com/S3eedKh3led/">
                <span>Saeed Khaled</span>
                <span>Saeed Khaled</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
