import React, { FC, useState } from "react";
import "./footer.css";
import logo from "../../assets/roundlogo.svg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";

import { Terms, Privacy } from "..";

const MenuMenu = () => (
  <>
    <a href="/">Home</a>
    <a href="/jobs">Jobs</a>
    <a href="/contact">Contact</a>
  </>
);

interface FooterInt {}

const Footer: FC<FooterInt> = () => {
  const [terms, setTerms] = useState<boolean>(false);
  const [privacy, setPrivacy] = useState<boolean>(false);

  const openTerms = () => {
    setTerms(true);
  };

  const openPrivacy = () => {
    setPrivacy(true);
  };

  return (
    <div className="Footer-Wrapper container section-padding">
      <div className="Footer-Content ">
        <div className="Footer-Logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="Footer-Menu Footer-Links">
          <h3>Links</h3>
          <MenuMenu />
        </div>
        <div className="Footer-Company Footer-Links">
          <h3>Company</h3>
          <button onClick={openTerms}>Terms & Conditions</button>
          <button onClick={openPrivacy}>Privacy Policy</button>
        </div>
        <div className="Footer-Contact Footer-Links">
          <h3>Get In Touch</h3>
          <p>+(972)-505369237</p>
          <a href="mailto:support@golldy.com">Support@golldy.com</a>
          <div className="Footer-Social">
            <a
              href="https://www.facebook.com/WeRliveLTD"
              className="Footer-No"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/werlive-ltd/"
              className="Footer-No"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" className="Footer-LastImage" />
            </a>
          </div>
        </div>
      </div>
      <div className="Copyright">
        <p>© 2022 WeRliveLTD. All rights reserved.</p>
      </div>
      {terms ? <Terms setTerms={setTerms} /> : null}
      {privacy ? <Privacy setPrivacy={setPrivacy} /> : null}
    </div>
  );
};

export default Footer;
