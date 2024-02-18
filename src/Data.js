import { FaUser, FaHome } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";
import { BsChatQuoteFill } from "react-icons/bs";
import proImg1 from "./assets/portfolioImgs/1.webp";
import proImg2 from "./assets/portfolioImgs/2.webp";
import proLogo1 from "./assets/portfolioImgs/logo1.webp";
import proLogo2 from "./assets/portfolioImgs/logo2.webp";
import cer1 from "./assets/cert/computer-network-fundamentals.webp";
import cer2 from "./assets/cert/introduction-network.webp";
import cer3 from "./assets/cert/Erhical-hacking.webp";
import cer4 from "./assets/cert/intro-cyber-sec.webp";
import cer5 from "./assets/cert/react-coursera.webp";
import cer6 from "./assets/cert/React-native.webp";
import cer7 from "./assets/cert/intro-to-FrontEnd.webp";
import cer8 from "./assets/cert/uiux.webp";
import cerPDF1 from "./assets/cert/computer-network-fundamentals.pdf";
import cerPDF2 from "./assets/cert/introduction network.pdf";
import cerPDF3 from "./assets/cert/Erhical hacking.pdf";
import cerPDF4 from "./assets/cert/intro-cyber-sec.pdf";
import cerPDF5 from "./assets/cert/react coursera.pdf";
import cerPDF6 from "./assets/cert/React-native.pdf";
import cerPDF7 from "./assets/cert/intro-to-FrontEnd.pdf";
import cerPDF8 from "./assets/cert/uiux.pdf";

export const personalInfo = [
  { name: "First name", val: "Salah Eldin" },
  { name: "Last name", val: "Hamed" },
  { name: "Age", val: "21 Years" },
  { name: "Nationality", val: "Egypt" },
  { name: "Address", val: "Cairo / Nasr City" },
  { name: "Phone", val: "+01116648153" },
  { name: "Languages", val: ["Arabic, ", "English"] },
  { name: "Email", val: "school12p@gmail.com" },
];

export const skills = [
  { name: "Html", percent: "90" },
  { name: "Css", percent: "80" },
  { name: "JavaScript", percent: "75" },
  { name: "Wordpress", percent: "85" },
  { name: "ReactJs", percent: "85" },
  { name: "React Native", percent: "45" },
  { name: "NodeJs", percent: "65" },
  { name: "SEO", percent: "70" },
  { name: "UI/UX", percent: "75" },
  { name: "Photoshop", percent: "95" },
];

export const pages = [
  {
    name: "home",
    icon: <FaHome size={46} className="relative z-10 p-3" />,
    path: "/",
  },
  {
    name: "about",
    icon: <FaUser size={46} className="relative z-10 p-3" />,
    path: "/about",
  },
  {
    name: "portfolio",
    icon: <MdOutlineWork size={46} className="relative z-10 p-3" />,
    path: "/portfolio",
  },
  {
    name: "contact",
    icon: <IoMdMailOpen size={46} className="relative z-10 p-3" />,
    path: "/contact",
  },
  {
    name: "blog",
    icon: <BsChatQuoteFill size={46} className="relative z-10 p-3" />,
    path: "/blog",
  },
];

export const portfolioData = [
  {
    name: "magnify portal",
    des: "A portal for clients to see their 360 project and a dashboard for admin, full control for each user. ",
    langs: ["reactjs", "nodejs", "tailwindCss", "express", "mongoDB"],
    proImg: proImg1,
    logoImg: proLogo1,
    bgColor: "#d9b694",
    type: "website",
  },
  {
    name: "GBA Think Tank",
    des: "Think-Tank (GBA Think-Tank) is an international business and trade cooperation networking think-tank.",
    langs: ["reactjs", "tailwindCss"],
    proImg: proImg2,
    logoImg: proLogo2,
    bgColor: "#0c243c",
    type: "website",
  },
];

export const Certificate = [
  {
    name: "Computer Network Fundamentals",
    from: "Mahara-Tech",
    img: cer1,
    pdf: cerPDF1,
  },
  {
    name: "introduction to network security",
    from: "Mahara-Tech",
    img: cer2,
    pdf: cerPDF2,
  },
  { name: "Ethical Hacking ", from: "Mahara-Tech", img: cer3, pdf: cerPDF3 },
  {
    name: "Introduction to Cyber Security",
    from: "Mahara-Tech",
    img: cer4,
    pdf: cerPDF4,
  },
  { name: "React basic", from: "Meta", img: cer5, pdf: cerPDF5 },
  { name: "React native", from: "Meta", img: cer6, pdf: cerPDF6 },
  { name: "introduction to Front-End ", from: "Meta", img: cer7, pdf: cerPDF7 },
  { name: "user experince design", from: "edrak", img: cer8, pdf: cerPDF8 },
];
