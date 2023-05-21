import React, { FC, useEffect } from "react";
import "./Contact.css";
import { ContactContainer } from "./containers";

interface ContactInt {
  setDarkNav: Function;
  CV: boolean;
}

const Contact: FC<ContactInt> = ({ setDarkNav, CV }) => {
  useEffect(() => {
    setDarkNav(true);
  }, [setDarkNav]);

  return (
    <div className="Contact">
      <div className="Contact-Wrapper">
        <div className="Contact-Wrapper-Content section-padding container">
          <h2>Contact Us</h2>
          <p>Hey! We're looking forward to hear from you!</p>
        </div>
        <ContactContainer CV={CV} />
      </div>
    </div>
  );
};

export default Contact;
