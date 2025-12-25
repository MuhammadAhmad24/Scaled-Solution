import { useEffect, useState } from "react";
import "./TeamSection.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


const teamData = [
    {
        name: "Tony Singh",
        role: "Partner – Capital & Growth",
        link: "#",
        image: "/team/avatar1.jpg",
        content: [
            "A seasoned professional with a diverse background spanning technology, law, and business, Tony brings his unique talent for aligning capital and products for maximum impact, guiding Founders and teams through product development cycles. Tony has a track record of growing revenues and product impact, having exited 2 health tech businesses and deploying over $100M in investments. His experience in growth strategies make him well-equipped to guide clients through the entire product development cycle, from inception to execution.",
            "As a seasoned consultant to many startups and scaleups, he is responsible for providing vision and strategy, and ensuring clients and products succeed. He is experienced in developing strategic and tactical roadmaps, marketing and sales execution, business development, and investment discovery. Tony has a talent for fostering relationships with investors and managing investor relationships."
        ]
    },
    {
        name: "Pradip Gami",
        role: "CTO and Co Founder",
        link: "#",
        image: "/team/avatar2.jpg",
        content: [
            "Pradip has over a decade of experience in building software products and leading engineering teams. He began his career as a software engineer and grew into leadership by taking on new challenges and always learning. In 2018, he co-founded xenabler with the goal of helping businesses use technology in a smarter and more effective way.",
            "As CTO, he manages technology decisions, product success, and the growth of engineering teams across different platforms including Web, Mobile, Cloud, and AI. Pradip enjoys mentoring people, improving the way teams work, and creating solutions that help companies grow faster and serve their customers better."
        ]
    },
    {
        name: "Ashvin Patel",
        role: "Head of Engineering",
        link: "#",
        image: "/team/avatar3.jpg",
        content: [
            "Ashvin has more than 13 years of experience in software development and engineering leadership. He started his career as a Mobile Engineer, creating user friendly apps that solved real problems. Later, he moved into full stack web development, where he worked on scalable and secure products for different industries. Over time, Ashvin grew into a leadership role because of his strong technical skills and passion for helping teams do their best work.",
            "Today, as Head of Engineering, he focuses on guiding teams, improving delivery processes, and making sure technology supports business goals. He believes in teamwork, learning, and building products that create real impact."
        ]
    },
    {
        name: "Sachin Gupta",
        role: "VP, Strategic Partnerships and Alliances",
        link: "#",
        image: "/team/avatar4.jpg",
        content: [
            "Sachin Gupta is a relationship focused leader who helps businesses grow through the right partnerships and technology solutions. He has a strong academic background in Computer Science and started his career working in analytics and business transformation. These early roles helped him understand how data, teamwork, and technology can create real business value. Over the years, he has worked with organizations across North America, APAC, and EMEA, gaining a global outlook on how companies scale and innovate.",
            "At xenabler, he builds strategic alliances, supports enterprise customers, and drives new opportunities. Sachin believes true success comes from trust, collaboration, and helping others grow."
        ]
    },
    {
        name: "Prashant Gami",
        role: "Founder & CEO",
        link: "#",
        image: "/team/avatar5.jpg",
        content: [
            "For decades, Prashant has been helping businesses stay ahead of their competition by creating a culture of continuous innovation that adds significant value. After scaling multiple businesses and leading some of Australia’s biggest dev teams, Prashant is using his expertise, in-depth knowledge and passion for technology to drive your business’s hypergrowth.",
            "He is leading innovation using technology at xenabler – a successful IT innovation company, where he has digitally transformed a number of Australian businesses using innovative technologies.",
            "Beyond his work of leading innovation, he has helped in creating a number of businesses across HealthTech and FinTech that are currently growing at a rapid rate."
        ]
    }
];

export default function TeamSection() {
    const [members, setMembers] = useState(teamData);

    // Auto rotate
    useEffect(() => {
        const interval = setInterval(() => {
            rotate(1);
        }, 5000);
        return () => clearInterval(interval);
    }, [members]);

    const rotate = (index) => {
        const updated = [...members];
        const selected = updated.splice(index, 1)[0];
        updated.unshift(selected);
        setMembers(updated);
    };

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

                    <a href={active.link}>LinkedIn Profile <i className="fa-brands fa-linkedin"></i></a>

                    <div className="team-thumbs">
                        {members.slice(1).map((member, index) => (
                            <img
                                key={index}
                                src={member.image}
                                alt={member.name}
                                onClick={() => rotate(index + 1)}
                            />
                        ))}
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
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
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

                                    <a
                                        href={member.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="linkedin-link"
                                    >
                                        LinkedIn Profile <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
