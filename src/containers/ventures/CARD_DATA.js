import investly from "../../assets/investly.webp";
import securedrive from "../../assets/securedrive.webp";
import nickels from "../../assets/nickels.webp";

const CARD_DATA = [
  {
    title: "Golldy",
    description: "Golldy™ is an interactive VOD platform.",
    learnmore:
      "The future of broadcast – Be the host. Golldy™ is a new initiative project for interactive VOD. In golldy, unlike other streaming platforms, you can be the host, join the host, or participate passively in a stream. Golldy creates a curated list of streams especially for your taste, so you only get what you’re interested in and nothing else. On Golldy we are trying to bring back the real face-to-face conversation to society.",
    img: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/2IeCsMwJerY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    golldy: true,
  },
  {
    title: "SecureDrive",
    description: "An app that makes driving safer.",
    learnmore:
      "SecureDrive – Drive Safely. SecureDrive comes to protect the individual while preserving damage (physical and financial), that may be caused due to improper use of the cellphone device while driving. SecureDrive maintains logs for the vehicle/driver, which makes it possible to carry out an audit and retrospective checks on the incident.",
    img: securedrive,
    golldy: false,
  },
  {
    title: "Investly",
    description: "Find your next investment or funding.",
    learnmore:
      "Investly is an interactive crowdfunding marketplace that changes the rules of the game. Investly gives entrepreneurs the ability to reach new investors from anywhere in the world connecting them, let them pitch their ideas live, answer questions, and get funding for their projects, all in one place. Investly paves the way for established and amateur entrepreneurs alike and allows them to succeed.",
    img: investly,
    golldy: false,
  },
  {
    title: "Nickels",
    description: "A gaming app that supports the community.",
    learnmore:
      "A gaming app that supports the community by donations and with little to NO money needed to participate the sum of the reward is determined by the numbers of participants or by commercial companies who wishes to advertise on the app.",
    img: nickels,
    golldy: false,
  },
];

export default CARD_DATA;
