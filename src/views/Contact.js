import { MdEmail } from "react-icons/md";
import {
  FaPhoneSquareAlt,
  FaFacebookF,
  FaLinkedin,
  FaGithub,
  FaCheckCircle,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <section
      id="contact-me"
      className="flex items-center flex-col py-10 overflow-y-scroll h-full relative"
    >
      <Helmet>
        <title>Salah Eldin | Contact Me</title>
      </Helmet>
      {/* page title */}
      <div
        id="page-title"
        className="text-white text-center relative font-extrabold uppercase z-0 
        xs:mb-5
        md:mb-16"
      >
        <h1
          className="opacity-5 w-full
        xs:text-7xl
        md:text-8xl
        lg:text-9xl"
        >
          contact
        </h1>
        <h2
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-100 w-full
          xs:text-4xl
          md:text-6xl
          lg:text-7xl "
        >
          get in <span className="text-color3">touch</span>
        </h2>
      </div>
      {/* container */}
      <div
        className="container flex items-start flex-wrap h-fit 
      xs:gap-10 xs:justify-center 
      lg:gap-0 lg:justify-between "
      >
        <div
          className="contact-info text-white flex flex-col gap-4
        xs:w-full
        md:w-10/12
        lg:w-3/12 "
        >
          <h3 className="text-2xl font-bold uppercase">
            make your offer now !
          </h3>
          <p className="text-pretty">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="email flex gap-3 items-center">
            <MdEmail size={35} className="text-color3" />
            <a href="mailto:school12p@gmail.com" aria-label="mail-me">
              <p className=" uppercase text-gray-300">mail me</p>
              <p>school12p@gmail.com</p>
            </a>
          </div>
          <div className="phone flex gap-3 items-center">
            <FaPhoneSquareAlt size={35} className="text-color3" />
            <a href="tel:+201116648153" aria-label="mail-me">
              <p className=" uppercase text-gray-300">call me</p>
              <p>+201116648153</p>
            </a>
          </div>
          <div className="social flex gap-4 mt-2">
            <Link
              to={"https://www.facebook.com/salaheddin.hamed"}
              target="_blank"
            >
              <FaFacebookF size={28} className="hover:scale-125 duration-200" />
            </Link>
            <Link to={"https://github.com/Simoo-tech"} target="_blank">
              <FaGithub size={28} className="hover:scale-125 duration-200" />
            </Link>
            <Link to={"https://www.instagram.com/salah_33_/"} target="_blank">
              <FaInstagram size={28} className="hover:scale-125 duration-200" />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/salah-eldin-hamed-840bb9225/"}
              target="_blank"
            >
              <FaLinkedin size={28} className="hover:scale-125 duration-200" />
            </Link>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
}

const Form = () => {
  //////////////// On Submit ////////////////////
  const form = useRef();
  const [send, setSend] = useState(false);
  const [data, setData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const HandleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `template_by5hndb`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        () => {
          setSend(true);
          setTimeout(() => setSend(false), 1000);
          setData({ user_name: "", user_email: "", subject: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="grid xs:grid-cols-1 md:grid-cols-3 mb-16 gap-4
      xs:w-full p-0
      md:w-10/12
      lg:w-9/12 lg:pl-10"
      ref={form}
      onSubmit={HandleSubmit}
    >
      <input
        required
        minLength={4}
        type="text"
        placeholder="your name"
        name="user_name"
        value={data.user_name}
        onChange={handleChange}
        className="p-3 rounded-2xl placeholder:uppercase bg-color4 text-white"
      />
      <input
        required
        type="email"
        placeholder="your email"
        name="user_email"
        value={data.user_email}
        onChange={handleChange}
        className="p-3 rounded-2xl placeholder:uppercase bg-color4 text-white"
      />
      <input
        required
        type="text"
        placeholder="your subject"
        name="subject"
        value={data.subject}
        onChange={handleChange}
        className="p-3 rounded-2xl placeholder:uppercase bg-color4 text-white"
      />
      <textarea
        required
        name="message"
        className="p-3 rounded-2xl col-span-full placeholder:uppercase bg-color4 text-white"
        rows={10}
        value={data.message}
        onChange={handleChange}
        placeholder="your message"
      />
      <div className="col-span-full flex-row flex items-center gap-5 ">
        <button
          type="submit"
          className=" border-2 border-color3 rounded-full flex items-center text-white
            uppercase relative font-medium group duration-300
            xs:h-[48px] xs:w-[150px] xs:justify-end xs:pr-10 xs:hover:pr-14
            md:h-[52px] md:w-[180px] md:justify-center md:pr-0 md:hover:pr-0"
        >
          <span className="relative z-10"> send</span>
          <span
            className="absolute left-0 h-full bg-color3 w-[45px] p-1 rounded-full flex justify-center items-center duration-300
            group-hover:w-full group-hover:justify-end"
          >
            <IoIosSend
              size={25}
              className="group-hover:rotate-45 group-hover:animate-pulse group-hover:mr-3"
            />
          </span>
        </button>
        {send && (
          <p className="flex gap-1 text-white text-xl capitalize">
            <FaCheckCircle size={28} color="green" /> message send
          </p>
        )}
      </div>
    </form>
  );
};
