import consulting from "../../assets/consulting.webp";
import projectmanagement from "../../assets/project.webp";
import venture from "../../assets/venture.webp";
import integration from "../../assets/integration.webp";

const CARD_DATA = [
  {
    title: "Consulting",
    text: "We believe that every IT business has diverse needs. For that reason, we aim to know and understand your business, adopt the right way of implementing your tight and focused strategies to achieve maximum goals. We use the best engineers to create your specific plan and methods while using the minimum resources, time, and costs for the best performance.",
    left: false,
    img: consulting,
  },
  {
    title: "Project Management",
    text: "As we acquired years of practice in project management, we lead and accompany your project from the Idea-Stage throughout the Problem-Solving steps until the Final-Product stage, including full implementation and client satisfaction survey. Every project is curated to adjust your needs.",
    left: true,
    img: projectmanagement,
  },
  {
    title: "Ventures",
    text: "We at WeRlive are looking for you: The best team & idea. From your early-stage or MVP to introducing you to the Start-up Echo-System and investors from several family offices.",
    left: false,
    img: venture,
    button: true,
  },
  {
    title: "Integrations",
    text: "WeRlive assist's you whether you are the company or if you're looking for your next job. We look for the best professionals to integrate with the industry or the right candidate for your company's needs. WeRlive specializes in recruitments for Software and Hardware, IT, QA, systems, networks, the Internet, Executives, and more.",
    left: true,
    img: integration,
  },
];

export { CARD_DATA };
