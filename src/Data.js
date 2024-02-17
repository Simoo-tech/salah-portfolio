import { FaUser, FaHome } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";
import { BsChatQuoteFill } from "react-icons/bs";
import proImg1 from "./assets/portfolioImgs/1.webp";
import proLogo1 from "./assets/portfolioImgs/logo1.png";

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
    name: "magnify",
    des: "A portal for clients to see their 360 project and a dashboard for admin, full control for each user ",
    langs: ["reactjs", "nodejs", "tailwindCss", "express", "mongoDB"],
    proImg: proImg1,
    logoImg: proLogo1,
    bgColor: "#d9b694",
    type: "website",
  },
  {
    name: "magnify",
    des: "A portal for clients to see their 360 project and a dashboard for admin, full control for each user ",
    langs: ["reactjs", "nodejs", "tailwindCss", "express", "mongoDB"],
    proImg: proImg1,
    logoImg: proLogo1,
    bgColor: "#d9b694",
    type: "website",
  },
  {
    name: "magnify",
    des: "A portal for clients to see their 360 project and a dashboard for admin, full control for each user ",
    langs: ["reactjs", "nodejs", "tailwindCss", "express", "mongoDB"],
    proImg: proImg1,
    logoImg: proLogo1,
    bgColor: "#d9b694",
    type: "website",
  },
];
