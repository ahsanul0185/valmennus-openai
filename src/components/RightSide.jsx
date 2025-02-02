import React from "react";
import SettingsIcon from "../utils/SettingsIcon";
import { useAppContext } from "../contexts/AppContext";
import arrow_right from "../assets/arrow-right.svg";
import icon_logout from "../assets/icon-logout-white.svg";

const topics = [
  "Aritmeettiset ja geometriset lukujonot",
  "Summakaavat ja niiden soveltaminen",
  "Sarjojen konvergenssi",
  "Tehtävät lukuun",
];

const RightSide = () => {
  const { dataContent_1, dataContent_2, contentData } = useAppContext();

  return (
    <div className="relative hidden lg:block h-screen w-72 py-8 px-4 z-10">
    
      <button
        onClick={() =>
          (window.location.href = "https://dashboard-edai.netlify.app/")
        }
        className="flex items-center gap-3 text-sm duration-200 hover:bg-light/10 ml-auto pr-3"
      >
        <img draggable={false} src={icon_logout} alt="" className="size-3.5" />
        Kirjaudu u10S
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

      <button className="absolute left-5 bottom-16 text-sm flex gap-2">
        <span>{contentData[0].title}</span>{" "}
        <img className="size-3.5 mt-1" src={arrow_right} alt="" />{" "}
      </button>
    </div>
  );
};

export default RightSide;
