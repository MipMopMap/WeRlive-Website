import React, { FC, useState, useEffect, useRef } from "react";
import "./ventures.css";
import { Venture, NoHoverVenture } from "../../components";
import CARD_DATA from "./CARD_DATA";

interface VenturesInt {}

const MODAL_DATA = {
  title: "",
  description: "",
  learnmore: "",
  img: "",
  golldy: false,
};

const Ventures: FC<VenturesInt> = () => {
  const [currentVenture, setCurrentVenture] = useState({
    ...MODAL_DATA,
  });

  const [openModal, setOpenModal] = useState(Boolean);
  const [closeModal, setCloseModal] = useState(Boolean);

  const handleClose = () => {
    setCloseModal(true);
    setTimeout(() => {
      setOpenModal(false);
      setCloseModal(false);
    }, 500);
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: { target: any }) => {
      if (openModal && !ref.current?.contains(e.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [openModal]);

  return (
    <div className="Ventures-Wrapper container section-padding" id="ventures">
      <div className="Ventures-Content">
        <div className="Ventures-Title">
          <h2>Our Ventures</h2>
          <p>Smart solutions are at the core of all that we do at WeRLive.</p>
        </div>
        <div className="Ventures-Cards">
          {CARD_DATA.map((venture, index) => (
            <Venture
              venture={venture}
              setCurrentVenture={setCurrentVenture}
              setOpenModal={setOpenModal}
              key={index}
            />
          ))}
        </div>
        <div className="Ventures-No-Hover">
          {CARD_DATA.map((venture, index) => (
            <NoHoverVenture venture={venture} key={index} />
          ))}
        </div>
        {openModal ? (
          <div
            className={`Venture-Modal Venture-${
              currentVenture.title
            } scale-up-center ${closeModal ? "scale-out-center" : ""}`}
            ref={ref}
          >
            <svg
              onClick={handleClose}
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="white"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
            </svg>
            <div className="Venture-Modal-Content">
              <h3>{currentVenture.title}</h3>
              <p>{currentVenture.learnmore}</p>
            </div>
            {currentVenture.golldy ? (
              <div className="Venture-Modal-Ill">{currentVenture.img}</div>
            ) : (
              <div className="Venture-Modal-Ill">
                <img src={currentVenture.img} alt={`${currentVenture.title}`} />
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Ventures;
