import React, { FC } from "react";
import "./contactContainer.css";
import oded from "../../assets/oded.webp";
import { Form } from "../../components";

interface ContactContainerInt {
  CV?: boolean;
}

const ContactContainer: FC<ContactContainerInt> = ({ CV }) => {
  return (
    <div className="ContactContainer-Wrapper section-padding container">
      <div className="ContactContainer-Content">
        <div className="ContactContainer-Info">
          <h3>Info</h3>
          <div className="ContactContainer-Oded">
            <img src={oded} alt="Oded" />
            <div className="ContactContainer-Oded-Content">
              <a
                href="https://www.linkedin.com/in/oded-tagger-a5314637/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <p>Oded Tagger - Founder, Owner and CEO - WeRlive</p>
            </div>
          </div>
          <div className="Oded-Explanation">
            <p>
              IT professional with years of experience managing complex systems
              and projects. Results oriented, skilled at building highly
              effective teams. Excellent people skills and team player who can
              manage multiple tasks while achieving a positive outcome for the
              customer.
            </p>
          </div>
          <div className="ContactContainer-Social">
            <div className="ContactContainer-Bullets">
              <ul>
                <li>Trusted</li>
                <li>Experienced</li>
                <li>Proffesional</li>
              </ul>
            </div>
            <div className="ContactContainer-Links">
              <h3>Follow Us</h3>
              <div className="SVG-Links">
                <a
                  href="https://www.linkedin.com/company/werlive-ltd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/WeRliveLTD"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                  </svg>
                </a>

                <a href="mailto:support@golldy.com">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-.141-6.333c.63 0 1.141-.512 1.141-1.142v-9.05c0-.63-.511-1.142-1.141-1.142h-13.718c-.63 0-1.141.512-1.141 1.142v9.05c0 .63.511 1.142 1.141 1.142h13.718zm-6.859-4.058l-6.228-4.321-.014 7.712h12.457v-7.712l-6.215 4.321zm5.913-6.609c-1.745 1.215-5.913 4.153-5.913 4.153l-5.947-4.153h11.86z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Form CV={false} location="Contact Page" />
      </div>
    </div>
  );
};

export default ContactContainer;
