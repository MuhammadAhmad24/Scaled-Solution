"use client";
import NavBar from "../components/NavBar";
import NewFooter from "../components/NewFooter";
import "./services.css";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <NavBar />

      <div className="menuContact">
        <div className="body">
          <div className="head">
            <div className="left">
              <p>Contact form</p>
              <p>
                Every good partnership starts with coffee.
                <br /> Now lets make an appointment.
              </p>
            </div>
            <div className="right">
              <Link className="link" href="https://www.linkedin.com/company/ventriloc">
                LinkedIn
              </Link>
              <Link className="link" href="mailto:info@ScaledSol.ca">
                info@ScaledSol.ca
              </Link>
              <Link className="link" href="tel:18193453223">
                819-345-3223
              </Link>
            </div>
          </div>
          <form className="form">
            <div className="top">
              <div className="left">
                <input type="text" id="name" placeholder="Name*" />
                <input type="email" id="email" placeholder="E-mail" />
                <input type="text" id="company" placeholder="Company" />
              </div>
              <div className="right">
                <input type="text" id="first-name" placeholder="First name*" />
                <input type="tel" id="phone" placeholder="Phone" aria-invalid="false" />
                <input type="text" id="looking-for" placeholder="I am looking for help for *" />
              </div>
            </div>
            <input type="text" id="message" placeholder="Message" />
            <button className="btn">Send</button>
          </form>
        </div>
      </div>

      <NewFooter />
    </>
  );
}
