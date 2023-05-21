import React from "react";
import "./clients.css";
import bank from "../../assets/bank.png";
import comblack from "../../assets/comblack.svg";
import bluetech from "../../assets/bluetech.png";
import logica from "../../assets/logica.png";
import octally from "../../assets/octally.png";
import reichman from "../../assets/reichman.png";
import yossi from "../../assets/yossi.png";
import ahim from "../../assets/ahim.png";
import xplg from "../../assets/xplg.png";
import meitav from "../../assets/meitav.png";
import cognni from "../../assets/cognni.png";

function Clients() {
  return (
    <div className="Clients-Wrapper section-padding container" id="clients">
      <div className="Clients-Title">
        <h2>Clients</h2>
        <p>Some companies we've been working with.</p>
      </div>
      <div className="Clients-Content">
        <div className="Clients-Content-Column">
          <div className="Client-Box">
            <img src={ahim} alt="ahim" />
          </div>
          <div className="Client-Box">
            <img src={xplg} alt="xplg" />
          </div>
        </div>
        <div className="Clients-Content-Column">
          <div className="Client-Box">
            <img src={comblack} alt="comblack" />
          </div>
          <div className="Client-Box">
            <img src={yossi} alt="yossi" />
          </div>
        </div>
        <div className="Clients-Content-Column">
          <div className="Client-Box">
            <img src={bluetech} alt="bluetech" />
          </div>
          <div className="Client-Box">
            <img src={bank} alt="bank hapoalim" />
          </div>
          <div className="Client-Box">
            <img src={logica} alt="logica" />
          </div>
        </div>
        <div className="Clients-Content-Column">
          <div className="Client-Box">
            <img src={octally} alt="octally" />
          </div>
          <div className="Client-Box">
            <img src={reichman} alt="reichman" />
          </div>
        </div>
        <div className="Clients-Content-Column">
          <div className="Client-Box">
            <img src={meitav} alt="meitav" />
          </div>
          <div className="Client-Box">
            <img src={cognni} alt="cognni" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
