import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import arrow_right from "../assets/arrow-right.svg";
import icon_logout from "../assets/icon-logout-white.svg";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const topics = [
  "Aritmeettiset ja geometriset lukujonot",
  "Summakaavat ja niiden soveltaminen",
  "Sarjojen konvergenssi",
  "Tehtävät lukuun",
];

const RightSide = ({ currentContentData }) => {

  const location = useLocation();

  const [button, setButton] = useState({ text: "", path: "" });
  const {contentData, setSelectedContent} = useAppContext()

  useEffect(() => {
    switch (currentContentData[0].title) {
      case contentData[0][0].title:
        setButton({ text: contentData[1][0].title, path: "/taloustieto" });
        break;
      case contentData[1][0].title:
        setButton({ text: contentData[0][0].title, path: "/" });
        break;
    }

    setSelectedContent(currentContentData[0].details);
  }, [location.pathname])
  

  return (
    <div className="relative hidden lg:block h-screen w-72 py-8 px-4 z-10">
    
      <button
        onClick={() =>
          (window.location.href = "https://dashboard-edai.netlify.app/")
        }
        className="flex items-center gap-3 text-sm duration-200 hover:bg-light/10 ml-auto pr-3"
      >
        <img draggable={false} src={icon_logout} alt="" className="size-3.5" />
        Kojelauta u10S
      </button>

      <div className="mt-40">
        <h2 className="mb-4">Lukujonot ja sarjat</h2>

        <ul className="text-xs flex flex-col gap-3">
          {topics.map((topic, idx) => (
            <li
              key={idx}
              className="cursor-pointer hover:translate-x-1 duration-200"
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>

      <Link to={button.path} className="absolute left-5 bottom-16 text-sm flex gap-2">
        <span>{ button.text}</span>{" "}
        <img className="size-3.5 mt-1" src={arrow_right} alt="" />{" "}
      </Link>
    </div>
  );
};

export default RightSide;
