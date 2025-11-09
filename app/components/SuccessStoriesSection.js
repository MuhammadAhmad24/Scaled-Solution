"use client";

import { useState } from "react";
import "./styles/SuccessStories.css";

export default function SuccessStoriesSection() {
  const [openVideo, setOpenVideo] = useState(null);

  const videos = [
    "YOQhaCIr87E",
    "icdVCDrMTg0",
    "CRt6Lo_vmHw",
    "Wwoh_C00jJs",
  ];

  const videoStories = [
    {
      title: "Revolutionized Tax Filing Efficiency",
      overview:
        "Lumatax approached us to develop a customized SAAS-based tax filing platform for 50 states. We created a backend system that efficiently verified credentials and a user interface for accountants and individuals, boosting productivity and accuracy.",
      quote:
        "Tkxel’s can-do attitude and speed of work exceeded expectations. What we thought would slow us down actually sped us up!",
      author: "Robert Schulte",
      role: "CTO, Lumatax",
    },
    {
      title:
        "Delivered Responsive SAAS Solution for Personality Assessment & Scoring",
      overview:
        "F4S, a Melbourne-based startup, partnered with Tkxel to build a behavior analytics platform with algorithm-based personality scoring for founders, HR teams, and investors. The result was a scalable, data-driven SAAS platform used globally.",
      quote:
        "Tkxel has proven to be our single reliable software development partner, helping us scale from the ground up with exceptional quality.",
      author: "Michelle Duval",
      role: "Founder & CEO, Fingerprint for Success",
    },
    {
      title: "Digital Learning Platform Improved Community Well-Being",
      overview:
        "Tkxel collaborated with the Seventh Day Adventist Church to create an LMS for holistic growth. With 90% user adoption worldwide, it enhanced the spiritual, physical, and mental well-being of users through modern UX and scalable architecture.",
      quote:
        "I extend my gratitude to Tkxel for developing a thorough Digital Health platform. The dedication and hard work are truly appreciated.",
      author: "Geraldine Przybylko",
      role: "Health Strategist Consultant",
    },
    {
      title:
        "Next-Generation Replenishment Platform Using NLP to Improve Search Results",
      overview:
        "Tkxel built Replenium’s intelligent replenishment system leveraging Python, MongoDB, and Azure ML. The system optimized inventory management, reduced costs, and revolutionized product search through NLP.",
      quote:
        "Tkxel’s collaboration was seamless and of the highest quality — truly at par with any top-tier U.S. development team.",
      author: "Umair Bashir",
      role: "CTO, Replenium",
    },
  ];

  // 🔹 New Image Stories Section
  const imageStories = [
    {
      image: "/custom.png",
      title: "Developed Custom CRM and Smart Solutions for Data Management",
      overview:
        "Tkxel developed a smart solution for a blood bank’s stock entry process by implementing Bluetooth connections for barcode scanning and creating printed manifests. The user-friendly desktop app increased efficiency and productivity, and visual reports were generated for data collection. Tkxel also developed a custom CRM for managing vendor and client data in a centralized view.",
      quote:
        "“Tkxel has proven beyond par that they excel not just in building and integrating with our team but building at a level that is at par with any US development team. Working with Tkxel is one of the best decisions we have made.”",
      author: "Mary Jane Brower",
      role: "COO, Southern Biologics",
    },
    {
      image: "/nokia.png",
      title: "Elevated Nokia’s User Experience and Reach",
      overview:
        "Tkxel provided Nokia with mobile app development services for their multiple platforms. Our expertise in app development allowed Nokia to enhance their user experience, expand their reach, and stay competitive in the mobile industry. Through a collaborative approach, Tkxel successfully delivered high- quality apps that aligned with Nokia’s brand and met the needs of their diverse user base.",
      quote:
        "“Tkxel’s team brought a depth of app development expertise that was crucial for our success. Their understanding f our brand and users helped us enhance our mobile presence significantly. The quality and innovation in their work were exactly what we needed to stay ahead in the competitive market.”",
      author: "Emmanuel Neilz",
      role: "CTO, Nokia",
    },
    {
      image: "/honeywell.png",
      title: "Developed Intuitive Mobile Apps for Honeywell",
      overview:
        "Tkxel’s expertise in app development enabled Honeywell to enhance their product offerings by creating intuitive and feature-rich mobile applications. By leveraging Tkxel’s technical proficiency and user-centric approach, Honeywell successfully improved customer experience, increased productivity, and strengthened their position in the market.",
      quote:
        "“I'm genuinely impressed with the expertise Tkxel brought to our video software project. Their team didn't just meet our expectations; they exceeded them, delivering a product that's not only technically advanced but also incredibly user-friendly. It's rare to find a partner who can truly translate complex needs into practical solutions like they did.”",
      author: "Jason Urso",
      role: "CTO, Honeywell",
    },
    {
      image: "/groupon.png",
      title: "Redesigned Groupon's Frontend to Enhanced Global User Experience",
      overview:
        "Tkxel’s platform development services empowered Groupon to create a robust and user-friendly digital platform. Through a collaborative approach, Tkxel successfully developed a solution that improved operational efficiency and customer experience. This partnership drove business growth and enhanced customer satisfaction for Groupon.",
      quote:
        "“Groupon's partnership with Tkxel has been transformative. Their expertise in digital solutions reshaped our platform, ensuring seamless global operations and significantly improving our user experience. Exceptional collaboration at every step!”",
      author: "Umair Bashir",
      role: "Director, Groupon",
    },
  ];

  return (
    <>
      <section className="success-stories">
        <div className="success-container">
          <h2 className="benefits-title">
            Success <span className="highlight">Stories</span>
          </h2>
          <div className="gradient-line"></div>

          <p className="success-subtext">
            Discover how Tkxel partners with global innovators to deliver
            impactful technology solutions across diverse industries.
          </p>

          {/* ---------------- VIDEO STORIES ---------------- */}
          {videoStories.map((story, index) => (
            <div key={index} className="story-block">
              <div
                className="story-video"
                onClick={() => setOpenVideo(videos[index])}
              >
                <img
                  src={`https://img.youtube.com/vi/${videos[index]}/hqdefault.jpg`}
                  alt="Play Video"
                  className="video-thumbnail"
                />
                <div className="play-icon">&#9658;</div>
              </div>

              <h3 className="story-title">{story.title}</h3>

              <div className="story-flex">
                <div className="story-box overview">
                  <h4>Overview</h4>
                  <p>{story.overview}</p>
                </div>

                <div className="story-box quote">
                  <p className="quote-text">“{story.quote}”</p>
                  <div className="quote-author">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                      alt={story.author}
                      className="author-img"
                    />
                    <div>
                      <h4>{story.author}</h4>
                      <p>{story.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* ---------------- IMAGE STORIES ---------------- */}
          {imageStories.map((story, index) => (
            <div key={index} className="story-block">
              <div className="story-video">
                <img
                  src={story.image}
                  alt={story.title}
                  className="video-thumbnail"
                />
              </div>

              <h3 className="story-title">{story.title}</h3>

              <div className="story-flex">
                <div className="story-box overview">
                  <h4>Overview</h4>
                  <p>{story.overview}</p>
                </div>

                <div className="story-box quote">
                  <p className="quote-text">“{story.quote}”</p>
                  <div className="quote-author">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                      alt={story.author}
                      className="author-img"
                    />
                    <div>
                      <h4>{story.author}</h4>
                      <p>{story.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- VIDEO MODAL ---------------- */}
      {openVideo && (
        <div className="video-modal" onClick={() => setOpenVideo(null)}>
          <div className="video-wrapper" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="900"
              height="506"
              src={`https://www.youtube.com/embed/${openVideo}?autoplay=1`}
              title="Client Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-btn" onClick={() => setOpenVideo(null)}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
