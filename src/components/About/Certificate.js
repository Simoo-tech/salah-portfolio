import { useState } from "react";
import { Certificate } from "../../Data";
import { IoIosClose, IoMdDownload } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export const Certificates = () => {
  const [show, setShow] = useState(false);
  const [certNo, setCerNo] = useState(0);

  // show certrificate
  const ShowCertificates = Certificate.map((cer, i) => {
    return (
      <div
        key={i}
        className={`fixed top-0 left-0 w-full h-screen py-5 justify-center items-center z-50 
           ${show && certNo === i ? "flex" : "hidden"}
          before:absolute before:w-full before:h-full before:bg-black before:opacity-85 `}
      >
        <IoIosClose
          className=" rounded-full cursor-pointer text-white absolute top-5 right-5 self-start bg-color4"
          size={40}
          onClick={() => {
            setShow(false);
            setCerNo(0);
          }}
        />
        {/* img  */}
        <div
          className="img-holder relative h-fit w-11/12 flex gap-6 justify-center items-center
        xs:flex-col
        lg:flex-row"
        >
          <img
            src={cer.img}
            alt={cer.name}
            className={` relative 
            md:w-11/12 md:max-h-[640px]  
            lg:w-9/12 lg:max-h-[600px]  
            xl:w-8/12 xl:max-h-[680px]  `}
          />

          {/* controllers */}
          <div
            className="btns w-fit flex items-center gap-5 justify-center 
            xs:flex-row
            lg:flex-col"
          >
            <MdKeyboardArrowUp
              size={40}
              onClick={() => {
                if (certNo === 0) {
                  setCerNo(0);
                } else {
                  setCerNo(parseInt(certNo) - 1);
                }
              }}
              className={`${
                certNo === 0 && "opacity-50"
              } rounded-full cursor-pointer text-white bg-color4 xs:-rotate-90 lg:rotate-0`}
            />
            <span>{certNo + 1 + "/" + Certificate.length}</span>
            <MdKeyboardArrowDown
              size={40}
              onClick={() => {
                if (certNo === Certificate.length - 1) {
                  setCerNo(Certificate.length - 1);
                } else {
                  setCerNo(parseInt(certNo) + 1);
                }
              }}
              className={`${
                i === Certificate.length - 1 && "opacity-50"
              } rounded-full cursor-pointer text-white bg-color4 xs:-rotate-90 lg:rotate-0`}
            />
            <a
              href={cer.pdf}
              download={cer.name}
              aria-label="download-certificate"
            >
              <IoMdDownload
                size={30}
                aria-label="download"
                name="download"
                className={`rounded-lg p-1 cursor-pointer text-color4 bg-white `}
              />
            </a>
          </div>
        </div>
      </div>
    );
  });

  // certificates map
  const Certificates = Certificate.map((cer, i) => {
    return (
      <button
        aria-label="close"
        name="close"
        onClick={() => {
          setShow(true);
          setCerNo(i);
        }}
        key={i}
        id="skill"
        className={`w-full flex flex-col relative gap-1 group h-fit`}
      >
        <div
          className="absolute bottom-0 w-full h-[45%] bg-gradient-to-t from-black to-transparent left-0 flex flex-col justify-end py-3 px-3
        opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 items-start"
        >
          <p className="text-lg font-semibold capitalize">{cer.name}</p>
          <p className="capitalize">{cer.from}</p>
        </div>
        <img src={cer.img} alt={cer.name} />
      </button>
    );
  });

  return (
    <div id="skill" className="flex justify-center flex-col items-center">
      <h4 className="text-2xl font-bold uppercase pt-10 border-t-2 text-center border-color4 w-6/12">
        My Certificate
      </h4>
      <div className="w-full mt-16 grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Certificates}
      </div>
      {ShowCertificates}
    </div>
  );
};
