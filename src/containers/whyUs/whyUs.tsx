import React from "react";
import "./whyUs.css";
import { Explanation } from "../../components";
import server from "../../assets/server.png";
import server1 from "../../assets/server1.png";
import server2 from "../../assets/server2.png";
// import server3 from "../../assets/server3.png";
// import server4 from "../../assets/server4.png";
// import server5 from "../../assets/server5.png";

const WhyUsData = [
  {
    title: "Perfection",
    text: "We have years of experience leading massive and global projects",
    grad: "linear-gradient(135deg, rgba(157, 187, 252, 1) 0%, rgba(168, 227, 241, 1) 100%)",
    img: server,
  },
  {
    title: "Reliability",
    text: "Our company is based on confidentiality and reliability.",
    grad: "linear-gradient(135deg, rgba(165, 158, 244, 1) 0%, rgba(222, 202, 254, 1) 100%)",
    img: server1,
  },
  {
    title: "Quality Service",
    text: "We have years of experience leading massive and global projects",
    grad: "linear-gradient(135deg, rgba(255, 153, 149, 1) 0%, rgba(254, 214, 192, 1) 100%)",
    img: server2,
  },
  // {
  //   title: "Perfection",
  //   text: "We have years of experience leading massive and global projects",
  //   grad: "linear-gradient(135deg, rgba(255, 179, 232, 1) 0%, rgba(254, 219, 230, 1) 100%)",
  //   img: server3,
  // },
  // {
  //   title: "Perfection",
  //   text: "We have years of experience leading massive and global projects",
  //   grad: "linear-gradient(135deg, rgba(254, 192, 134, 1) 0%, rgba(255, 242, 190, 1) 100%)",
  //   img: server4,
  // },
  // {
  //   title: "Perfection",
  //   text: "We have years of experience leading massive and global projects",
  //   grad: "linear-gradient(135deg, rgba(131, 226, 176, 1) 0%, rgba(228, 248, 180, 1) 100%)",
  //   img: server5,
  // },
];

function WhyUs() {
  return (
    <div className="WhyUs-Outside-Wrapper" id="whyus">
      <div className="WhyUs-Wrapper section-padding container">
        <div>
          <h2>Why Us</h2>
        </div>
        <div className="WhyUs-Content">
          {WhyUsData.map((item, index) => (
            <Explanation
              title={item.title}
              text={item.text}
              grad={item.grad}
              img={item.img}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
