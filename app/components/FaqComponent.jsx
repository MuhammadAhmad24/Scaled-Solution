"use client";
import { useEffect, useState, useRef } from "react";
import "./FaqComponent.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const FaqComponent = () => {

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


    const faqQuestionsRef = useRef([]);
    faqQuestionsRef.current = [];
    const faqRef = useRef(null);
    const faqLeftRef = useRef(null);
    const addQuestionRef = (el) => { if (el && !faqQuestionsRef.current.includes(el)) faqQuestionsRef.current.push(el); };


    useEffect(() => {

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
    }, [])

    const [activeIndex, setActiveIndex] = useState(null);
    const handleQuestionClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div>
            {/* FAQ Section */}
            <div id="faqs" className="faq" ref={faqRef}>
                <div className="left" ref={faqLeftRef}>
                    <h2>FAQ</h2>
                    <p>Here are some of our most asked questions. If yours is not there, contact us.</p>
                </div>
                <div className="questions">
                    {questions.map((item, index) => (
                        <button
                            key={index}
                            className={`question ${activeIndex === index ? "active" : ""}`}
                            onClick={() => handleQuestionClick(index)}
                            ref={addQuestionRef}
                        >
                            <div className="head">
                                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 5.04H5.04V9H3.96V5.04H0V3.96H3.96V0H5.04V3.96H9V5.04Z" fill="currentColor"></path>
                                </svg>
                                <p>{item.question}</p>
                            </div>
                            <p className="answer">{item.answer}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FaqComponent


