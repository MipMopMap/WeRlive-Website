import React, { FC, useState, useRef } from "react";
import "./hero.css";
import { Button } from "../../components";
import emailjs from "@emailjs/browser";
import pic from "../../assets/pic-test.webp";
import blob from "../../assets/blob-mask.svg";

interface HeroInt {
  offsetY: number;
}

const Hero: FC<HeroInt> = ({ offsetY }) => {
  const [openAlert, setOpenAlert] = useState<Boolean>(false);
  const [buttonText, setButtonText] = useState<string>("Job Alerts");
  const [animate, setAnimate] = useState<boolean>(true);
  const [submitText, setSubmitText] = useState<string>("Send");
  const form = useRef<any>();

  const handleAlert = () => {
    setOpenAlert(true);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitText("Sending...");

    emailjs
      .sendForm(
        "service_298harr",
        "template_gknucbq",
        form.current,
        "i-053KC2B-IomQu89"
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpenAlert(false);
          setButtonText("Thank you!");
          setAnimate(false);
          setSubmitText("Thank you");
        },
        (error) => {
          alert(JSON.stringify(error));
          setSubmitText("Try Again");
        }
      );
  };

  function useTilt() {
    const ref = React.useRef(null);

    React.useEffect(() => {
      if (!ref.current) {
        return;
      }

      const state: any = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined,
      };

      let el: HTMLDivElement = ref.current;

      const handleMouseMove = (e: any) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;

        el.style.setProperty("--px", `${px}`);
        el.style.setProperty("--py", `${py}`);
      };

      el.addEventListener("mousemove", handleMouseMove);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    return ref;
  }
  const ref = useTilt();

  return (
    <div
      className="Hero-Wrapping"
      style={
        {
          "--paralax-transform": `translateY(${offsetY * 0.2}px)`,
        } as React.CSSProperties
      }
      id="hero"
    >
      <div className="Hero-Content section-padding container">
        <div className="Hero-Info">
          <h1>We Are WeRlive</h1>
          <p>
            We believe that every IT business must strive for growth otherwise
            will freeze and will be forgotten.
          </p>

          {openAlert ? (
            <div className="JobAlerts-Form">
              <form action="submit" onSubmit={handleSubmit} ref={form}>
                <input
                  placeholder="Email"
                  required
                  type="email"
                  name="email"
                ></input>
                <button type="submit">{submitText}</button>
              </form>
            </div>
          ) : (
            <div
              onClick={handleAlert}
              className={`${animate ? "Form-Button-Submitted" : null}`}
            >
              <Button text={buttonText} accent />
            </div>
          )}
        </div>
        <div className="Hero-Image" ref={ref}>
          <img src={blob} alt="Bloby" className="bloby" />
          <img src={pic} alt="Illustration" />
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1655746188">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
