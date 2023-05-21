import React, { FC, useRef, useState } from "react";
import "./form.css";
import emailjs from "@emailjs/browser";

interface FormInt {
  CV?: boolean;
  location?: string;
}

const Form: FC<FormInt> = ({ CV, location }) => {
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [submitText, setSubmitText] = useState<string>("Send");
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setSubmitText("Sending...");

    emailjs
      .sendForm(
        "service_298harr",
        "template_86w6u1e",
        form.current,
        "i-053KC2B-IomQu89"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailSent(true);
          setSubmitText("Thank you");
        },
        (error) => {
          alert(JSON.stringify(error));
          setSubmitText("Try Again");
        }
      );
  };

  return (
    <div className="Form-Wrapper">
      {!emailSent ? (
        <form action="submit" ref={form} onSubmit={sendEmail}>
          <div className="Form-Location">
            <input
              type="text"
              value={location}
              required
              readOnly={true}
              name="subject"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="name"
              required
              id="name"
              name="name"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              id="email"
            />
          </div>
          <div>
            <input type="phone" placeholder="Phone" name="phone" id="phone" />
          </div>
          <div>
            <textarea placeholder="Message" name="message" id="message" />
          </div>
          {CV ? (
            <div className="Form-File-Div">
              <label htmlFor="file">
                File size should not exceed 500kb
                <input
                  type="file"
                  required
                  name="file"
                  id="file"
                  accept=".pdf, .png, .jpg, .jpeg, .docx"
                />
              </label>
            </div>
          ) : null}
          <button type="submit">{submitText}</button>
        </form>
      ) : (
        <div className="Thank-You scale-up-center">
          <h3>Thank you for contacting us!</h3>
          <p>We will contact you back shortly</p>
        </div>
      )}
    </div>
  );
};

export default Form;
