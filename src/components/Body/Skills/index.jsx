import React, { useState } from "react";
import "./index.scss";
import { skills } from "../../../assets/data";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import SkillCard from "./skillCard";

const Skill = ({ theme }) => {
  const [skillType, setSkillType] = useState("all");
  return (
    <div className="skills">
      <section className="text-center">
        <h2 className="">Skills</h2>
        <p>A list of technologies that I use on a regular basis.</p>
      </section>
      <section className="skill_catagory mx-auto d-flex flex-wrap justify-content-between">
        <div
          className="skill_label"
          onClick={() => setSkillType("all")}
          style={{
            backgroundColor: skillType === "all" && "#c6f6d5",
            color: skillType === "all" && "#22543d",
          }}
        >
          <AiTwotoneThunderbolt />
        All Skills
        </div>
        <div
          className="skill_label"
          onClick={() => setSkillType("development")}
          style={{
            backgroundColor:
              skillType === "development" && theme === "dark"
                ? "#edf2f7"
                : skillType === "development" && theme === "light"
                ? "#171923"
                : null,
            color:
              skillType === "development" && theme === "dark"
                ? "#1a202c"
                : skillType === "development" && theme === "light"
                ? "#edf2f7"
                : "unset",
          }}
        >
        </div>
      </section>
      <section className="skill_list mx-auto">
        {skillType === "all" &&
          skills.map((item, index) => (
            <SkillCard
              name={item.name}
              description={item.description}
              link={item.link}
              type={item.type}
              image={item.image}
              theme={theme}
            />
          ))}
      </section>
    </div>
  );
};

export default Skill;
