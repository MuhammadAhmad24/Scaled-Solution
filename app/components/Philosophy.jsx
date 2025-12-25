import { useState } from "react";
import "./Philosophy.css";

const philosophyData = [
    {
        id: "innovation",
        title: "Innovation with purpose",
        heading: "Innovation with purpose",
        text: "Every solution we deliver is tested, reliable, and aligned with real business goals so our clients avoid costly tech debt and achieve measurable growth.",
        image: "https://xenabler.digital/theme/assets/about-us/innovation-with-purpose.svg",
    },
    {
        id: "human",
        title: "Human-centric design",
        heading: "Human-centric design",
        text: "Our products are built for people. We believe technology should simplify everyday lives, and create exceptional user experiences.",
        image: "https://xenabler.digital/theme/assets/about-us/human-centric-design.svg",
    },
    {
        id: "long",
        title: "Long-term relationships",
        heading: "Long-term relationships",
        text: "We grow with our clients by building sustainable, trust-driven relationships that ensure scalability, profitability, and continued success.",
        image: "https://xenabler.digital/theme/assets/about-us/long-term-relationships.svg",
    },
    {
        id: "risk",
        title: "Risk-aware agility",
        heading: "Risk-aware agility",
        text: "Through lean and agile methods, we minimize risks, reduce delivery time and cost, and keep every solution aligned with real business outcomes.",
        image: "https://xenabler.digital/theme/assets/about-us/risk-aware-agility.svg",
    },
    {
        id: "continuous",
        title: "Continuous improvements",
        heading: "Continuous improvements",
        text: "We embed innovation as a culture. With deep expertise in AI, SaaS, Blockchain, Cloud, and scalable architectures, we ensure that products evolve alongside your business and customer needs.",
        image: "https://xenabler.digital/theme/assets/about-us/continuous-improvements.svg",
    },
];

export default function Philosophy() {
    const [active, setActive] = useState(philosophyData[0]);

    return (
        <section className="philosophy">
            <h2>Our Philosophy</h2>

            <div className="philosophy-box">
                {/* LEFT */}
                <div className="philosophy-left">
                    {philosophyData.map((item) => (
                        <button
                            key={item.id}
                            className={`philosophy-tab ${active.id === item.id ? "active" : ""
                                }`}
                            onClick={() => setActive(item)}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>

                {/* RIGHT */}
                <div className="philosophy-right">
                    <div className="content">
                        <h3>{active.heading}</h3>
                        <p>{active.text}</p>
                    </div>

                    <div className="image">
                        <img src={active.image} alt={active.heading} />
                    </div>
                </div>
            </div>
        </section>
    );
}
