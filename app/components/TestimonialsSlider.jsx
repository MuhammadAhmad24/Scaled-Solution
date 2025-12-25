"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./testimonials.css";

export default function TestimonialsSlider() {
    return (
        <section className="testimonials">
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={2}
                loop={false}
                navigation
                breakpoints={{
                    0: {
                        slidesPerView: "1.25",
                    },
                    900: {
                        slidesPerView: 2,
                    },
                }}
                className="testimonials-swiper"
            >
                <SwiperSlide>
                    <div className="testimonial-card">
                        <h6>
                            “x-enabler does not only deliver a product to your requirements but they also do a massive effort to understand your business needs and make sure the user experience and the functional elements of the product are top-notch.”
                        </h6>
                        <div>
                            <img src="https://xenabler.digital/storage/testimonials/September2024/ZBeVnpgMAWUDaZNJABUk.jpg" alt="ParKiwi"></img>
                            <div>
                                <p>Shmulik Kahlon</p>
                                <span>ParKiwi</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="testimonial-card">
                        <h6>
                            “x-enabler has been a pivotal member of Cared Australia journey allowing us to enable our B2C solution in lean and agile way.”
                        </h6>
                        <div>
                            <img src="https://xenabler.digital/storage/testimonials/September2024/JqIqN1lriLMQBfKvPfQo.jpg" alt="Mehul Shah"></img>
                            <div>
                                <p>Mehul Shah</p>
                                <span>Cared Australia</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="testimonial-card">
                        <h6>
                            “x-enabler is a strong partner who helped us building job management system across various platforms. They know the value of money and time for market.”

                        </h6>
                        <div>
                            <img src="https://xenabler.digital/storage/testimonials/September2024/x4btKbg2P6yb7uI7NuLa.jpg" alt="TradieCom"></img>
                            <div>
                                <p>Ali Khan</p>
                                <span>TradieCom</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="testimonial-card">
                        <h6>
                            “Outstanding team with great work ethic and first-class customer service. I highly recommend their services to anyone requiring mobile app development skills.”
                        </h6>
                        <div>
                            <img src="https://xenabler.digital/storage/testimonials/October2024/umgqgS66w8kY3v4N1rbe.jpg" alt="Wheelchair Book & Ride"></img>
                            <div>
                                <p>Adrian Mascia</p>
                                <span>Wheelchair Book & Ride</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="testimonial-card">
                        <h6>
                            “Gami and his team at x-enabler were instrumental in helping us build and launch our mobile apps quickly and at an affordable startup cost.”
                        </h6>
                        <div>
                            <img src="https://xenabler.digital/storage/testimonials/October2024/YlB4LOHiXJSDsGemqpAP.webp" alt="The Gifted"></img>
                            <div>
                                <p>Sivan Atad</p>
                                <span>The Gifted</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="testimonial-card">
                        <h6>
                            “If you want it done good, there are plenty of developers available. But if you want it done right choose x-enabler. Thank you Prashant and the team for always being present for us and we look forward to our continued journey together!”
                        </h6>
                        <div>
                            <img src="https://xenabler.digital/storage/testimonials/October2024/PuRicGGUle1xWg1EZWg4.webp" alt="RacerClub"></img>
                            <div>
                                <p>Matthew Ng</p>
                                <span>RacerClub</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="testimonial-card">
                        <h6>
                            “My honest experience with x-enabler, they had helped me till today with some of the most challenging projects that most developers can’t wrap their heads around. Thanks x-enabler team!!”

                        </h6>
                        <div>
                            <img src="https://xenabler.digital/storage/testimonials/October2024/WCErzc2vu6jQ6p2JUCfK.png" alt="Crypto Toast"></img>
                            <div>
                                <p>Matthew Ng</p>
                                <span>Crypto Toast</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="testimonial-card">
                        <h6>
                            “Being in the web3 space for over two years now I have been through my far share of developers. Some good, some okay, and some outright terrible. x-enabler is not only good, but an outstanding team that has helped me till today.”
                        </h6>
                        <div>
                            <img src="https://xenabler.digital/storage/testimonials/October2024/eTXnE4uL08PqPI98ydAA.png" alt="Irish Oracle"></img>
                            <div>
                                <p>Matthew Ng</p>
                                <span>Irish Oracle</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
