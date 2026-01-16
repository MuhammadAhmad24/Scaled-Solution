import { useEffect, useState, useRef } from "react";
import "./TeamSection.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


const teamData = [
    {
        name: "Adnan Akbar",
        role: "Founder & Principal Technologist",
        link: "#",
        image: "/team/adnan_profile_pic.png",
        content: [
            "Adnan is the Founder and Principal Technologist at Scaled Solutions, bringing over 20 years of experience across software engineering, cloud platforms, and enterprise architecture. With more than a decade leading high-performing engineering teams, he combines deep technical expertise with a strong understanding of how technology supports real business outcomes. His background spans cloud, integration, and application architecture, with hands-on delivery across both Azure and AWS.",
            "In his role, Adnan leads complex initiatives from early strategy and solution design through to build, deployment, and continuous improvement. He has extensive experience designing and delivering SaaS, PaaS, and IaaS solutions, as well as building automation and AI-driven capabilities that scale. Known for his practical, execution-focused approach, Adnan works closely with clients and teams to ensure solutions are robust, well-architected, and aligned to long-term goals, not just short-term delivery."
        ]
    },
    {
        name: "Brendon Miszka",
        role: "Product Development Practice Advisor",
        link: "#",
        image: "/team/brendon_profile_pic.png",
        content: [
            "Brendon Miszka brings a strong technical leadership background and strategic perspective to our consulting team as Product Development Practice Advisor. Brendon has guided cross-functional teams to design and deliver robust solutions in complex, high-stakes environments. He combines deep analytical skills with a user-centric mindset to drive product innovation and operational excellence.",
            "Brendon’s approach blends technical acumen with a clear business focus. He has a track record of translating business goals into actionable product strategies, collaborating effectively with stakeholders across engineering, operations, and leadership. This experience gives him a unique ability to advise on both product direction and implementation pathways that align with organisational objectives."
        ]
    },
    {
        name: "Ahmed Hussain",
        role: "Chief Strategy Officer & Principal Data Consultant",
        link: "#",
        image: "/team/shiraz_profile_pic.png",
        content: [
            "Ahmed serves as Chief Strategy Officer and Principal Data Consultant at Scaled Solutions, where he helps organizations turn data into clear, actionable direction. With a strong background in data architecture, analytics, and cloud platforms, he works at the intersection of business strategy and technical execution, ensuring data initiatives are grounded in real outcomes, not theory.",
            "In his role, Ahmed partners closely with senior leaders to define data strategies, modernize platforms, and unlock value from analytics and AI investments. He brings a practical, structured approach to complex problems, guiding teams through everything from data foundations to advanced insights, while keeping a strong focus on scalability, governance, and long-term impact."
        ]
    },
    {
        name: "Haseeb Khan",
        role: "Chief Delivery Officer and VP Tkxel",
        link: "#",
        image: "/team/haseeb_profile_pic.png",
        content: [
            "With over 20 years of experience in the software development industry, he has led teams delivering custom software solutions across cloud, web, and mobile platforms, as well as high-end games and enterprise-scale systems used globally. He has played a leading role in software architecture, establishing strong foundations for enterprise-class solutions through thoughtful design, development, and deployment, with a consistent focus on best practices. By effectively aligning technology with business outcomes, he has successfully delivered projects for global organizations including NBCUniversal, AOL, ABB, The Wall Street Journal, Honeywell, Toyota, and General Electric."
        ]
    },
    {
        name: "Haisum Riaz",
        role: "Chief DevOps and MLOPs Lead",
        link: "#",
        image: "/team/haisum_profile_pic.png",
        content: [
            "Haisum leads our DevOps and MLOps practice, bringing a strong blend of engineering depth and pragmatic delivery experience. He specializes in building reliable, secure, and scalable platforms that help teams move faster without compromising quality or governance. With a sharp eye for automation and system design, Haisum focuses on turning complex infrastructure and machine learning workflows into something teams can operate with confidence.",
            "As Chief DevOps and MLOps Lead, Haisum works closely with engineering, data, and business stakeholders to design CI/CD pipelines, cloud-native platforms, and end-to-end MLOps frameworks that support real-world production needs. His approach is hands-on and outcome-driven, ensuring solutions are not just technically sound, but practical, maintainable, and aligned with long-term business goals."
        ]
    }
];

export default function TeamSection() {
    const [members, setMembers] = useState(teamData);
    const intervalRef = useRef(null);


    const next = () => {
        setMembers(prev => {
            const updated = [...prev];
            const first = updated.shift();
            updated.push(first);
            return updated;
        });
    };

    // PREV → RIGHT rotation
    const prev = () => {
        setMembers(prev => {
            const updated = [...prev];
            const last = updated.pop();
            updated.unshift(last);
            return updated;
        });
    };

    const rotate = (index) => {
        setMembers(prev => {
            const updated = [
                ...prev.slice(index),
                ...prev.slice(0, index)
            ];
            return updated;
        });
        resetAutoRotate();
    };


    const resetAutoRotate = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(next, 10000);
    };

    useEffect(() => {
        intervalRef.current = setInterval(next, 10000);
        return () => clearInterval(intervalRef.current);
    }, []);


    const active = members[0];

    return (
        <section className="team">
            <h2>Our Team</h2>
            <div className="team-main">
                <img src={active.image} alt={active.name} />
                <div className="team-info">
                    <h2>{active.name}</h2>
                    <h4>{active.role}</h4>

                    {active.content.map((text, i) => (
                        <p key={i}>{text}</p>
                    ))}

                    {/* <a href={active.link}>LinkedIn Profile <i className="fa-brands fa-linkedin"></i></a> */}

                    <div className="team-thumbs-wrapper">
                        <div className="team-thumbs">
                            {members.slice(1).map((member) => (
                                <img
                                    key={member.name}
                                    src={member.image}
                                    alt={member.name}
                                    onClick={() => rotate(members.indexOf(member))}
                                />
                            ))}
                        </div>

                        <div className="btn-wrapper">
                            <button className="arrow-btn" onClick={() => { prev(); resetAutoRotate(); }}>
                                <i className="fa-solid fa-arrow-left"></i>
                            </button>
                            <button className="arrow-btn" onClick={() => { next(); resetAutoRotate(); }}>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>

                        </div>
                    </div>
                </div>
            </div>



            <div className="team-mobile">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1.75}
                    navigation
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.25,
                        },
                        500: {
                            slidesPerView: 1.75,
                        },
                    }}
                    autoplay={{ delay: 10000, disableOnInteraction: false }}
                    className="team-swiper"
                >
                    {teamData.map((member, index) => (
                        <SwiperSlide key={index}>
                            <div className="team-card">
                                <img src={member.image} alt={member.name} />

                                <div className="card-info">
                                    <h3>{member.name}</h3>
                                    <h6 className="role">{member.role}</h6>

                                    <div className="team-content">
                                        {member.content.map((para, i) => (
                                            <p key={i}>{para}</p>
                                        ))}
                                    </div>

                                    {/* <a
                                        href={member.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="linkedin-link"
                                    >
                                        LinkedIn Profile <i className="fa-brands fa-linkedin"></i>
                                    </a> */}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
