"use client";

import { useState } from "react";
import "./styles/PopUp.css";

export default function PopUp({ videoIndexes = [], imageIndexes = [] }) {
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
                "Lumatax approached us to develop a customized SAAS-based tax filing platform for 50 states...",
            quote:
                "Tkxel’s can-do attitude and speed of work exceeded expectations.",
            author: "Robert Schulte",
            role: "CTO, Lumatax",
        },
        {
            title: "Delivered Responsive SAAS Solution for Personality Assessment",
            overview:
                "F4S partnered with Tkxel to build a behavior analytics platform...",
            quote:
                "Tkxel has proven to be our single reliable software development partner.",
            author: "Michelle Duval",
            role: "Founder & CEO, Fingerprint for Success",
        },
        {
            title: "Digital Learning Platform Improved Community Well-Being",
            overview:
                "Tkxel collaborated with the Seventh Day Adventist Church to create an LMS for holistic growth...",
            quote:
                "I extend my gratitude to Tkxel for developing a thorough Digital Health platform.",
            author: "Geraldine Przybylko",
            role: "Health Strategist Consultant",
        },
        {
            title: "Next-Generation Replenishment Platform Using NLP",
            overview:
                "Tkxel built Replenium’s intelligent replenishment system leveraging Python, MongoDB, and Azure ML...",
            quote:
                "Tkxel’s collaboration was seamless and of the highest quality.",
            author: "Umair Bashir",
            role: "CTO, Replenium",
        },
    ];

    const imageStories = [
        {
            image: "/custom.png",
            title: "Developed Custom CRM and Smart Solutions for Data Management",
            overview:
                "Tkxel developed a smart solution for a blood bank’s stock entry process...",
            quote:
                "Tkxel has proven beyond par that they excel not just in building and integrating with our team...",
            author: "Mary Jane Brower",
            role: "COO, Southern Biologics",
        },
        {
            image: "/nokia.png",
            title: "Elevated Nokia’s User Experience and Reach",
            overview:
                "Tkxel provided Nokia with mobile app development services...",
            quote:
                "Tkxel’s team brought a depth of app development expertise crucial for our success.",
            author: "Emmanuel Neilz",
            role: "CTO, Nokia",
        },
        {
            image: "/honeywell.png",
            title: "Developed Intuitive Mobile Apps for Honeywell",
            overview:
                "Tkxel’s expertise in app development enabled Honeywell to enhance their offerings...",
            quote:
                "I'm genuinely impressed with the expertise Tkxel brought to our video software project.",
            author: "Jason Urso",
            role: "CTO, Honeywell",
        },
        {
            image: "/groupon.png",
            title: "Redesigned Groupon's Frontend to Enhance Global User Experience",
            overview:
                "Tkxel’s platform development services empowered Groupon to create a robust and user-friendly digital platform...",
            quote:
                "Groupon's partnership with Tkxel has been transformative.",
            author: "Umair Bashir",
            role: "Director, Groupon",
        },
    ];

    return (
        <>
            <section className="success-stories">
                <div className="success-container">

                    {/* Only selected video stories */}
                    {videoIndexes.map((i) => {
                        const story = videoStories[i];
                        return (
                            <div key={`video-${i}`} className="story-block">
                                <div
                                    className="story-video"
                                    onClick={() => setOpenVideo(videos[i])}
                                >
                                    <img
                                        src={`https://img.youtube.com/vi/${videos[i]}/hqdefault.jpg`}
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
                        );
                    })}

                    {/* Only selected image stories */}
                    {imageIndexes.map((i) => {
                        const story = imageStories[i];
                        return (
                            <div key={`image-${i}`} className="story-block">
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
                        );
                    })}
                </div>
            </section>

            {/* Video Modal */}
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
