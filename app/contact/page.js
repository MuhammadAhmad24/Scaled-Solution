"use client";
import NavBar from "../components/NavBar";
import NewFooter from "../components/NewFooter";
import "./services.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ServicesPage() {

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=1")) {
      setSuccess(true);
    }
  }, []);
  return (
    <>
      <NavBar />

      <div className="menuContact">
        <div className="animated-grid"></div>
        <div className="animated-circle"></div>
        <div className="body">
          <div className="head">
            <div className="left">
              <p>Contact form</p>
              <p>
                Every good partnership starts with coffee.
                <br /> Now lets make an appointment.
              </p>
            </div>
            <div className="left">
              <p>Contact:</p>
              <div>
                Scaled Solutions Pty Ltd <br/> Level 1, 1.01, 222 <br/> Pitt Street Sydney NSW 2000  <br/> 
                <a className="link" href="tel:+1300128930">
                Phone: 1300128930
                </a><br/>
                <a className="link" href="mailto:contact@scaledsolutions.com.au">
                Email: contact@scaledsolutions.com.au
                </a>
              </div>
            </div>
          </div>

          {success && (
            <p className="success">✅ Thank you! We received your message.</p>
          )}

          <form
            className="form"
            method="POST"
            action="https://api.web3forms.com/submit"
          >
            {/* Required Web3Forms Key */}
            <input
              type="hidden"
              name="access_key"
              value="05658f62-c562-41df-9331-1115118f0bc7"
            />

            {/* Redirect After Success */}
            <input
              type="hidden"
              name="redirect"
              value="https://www.scaledsolutions.com.au/contact?success=1"
            />

            <div className="top">
              <div className="left">
                {/* Full Name */}
                <input
                  type="text"
                  id="full-name"
                  name="name" // required field for Web3Forms
                  placeholder="Full name*"
                  required
                  autoComplete="name"
                />

                {/* Company */}
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company"
                  autoComplete="organization"
                />
              </div>

              <div className="right">
                {/* Email */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail*"
                  required
                  autoComplete="email"
                />

                {/* Looking For */}
                <input
                  type="text"
                  id="looking-for"
                  name="help"
                  placeholder="I am looking for help for *"
                  required
                  autoComplete="off"
                />
              </div>

            </div>

            {/* Message */}
            <input
              type="text"
              id="message"
              name="message"
              placeholder="Message*"
              autoComplete="off"
              required
            />

            <button className="btn">Send</button>
          </form>


        </div>
      </div>

      <NewFooter />
    </>
  );
}





