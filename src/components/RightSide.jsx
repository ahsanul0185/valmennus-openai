import React from "react";
import SettingsIcon from "../utils/SettingsIcon";

const topics = [
  "Aritmeettiset ja geometriset lukujonot",
  "Summakaavat ja niiden soveltaminen",
  "Sarjojen konvergenssi",
  "Tehtävät lukuun",
];

const RightSide = () => {
  return (
    <div className="hidden lg:block h-screen w-72 py-8 px-4">
      {/* Settings icon */}
      <SettingsIcon />

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

      <div></div>
    </div>
  );
};

export default RightSide;
