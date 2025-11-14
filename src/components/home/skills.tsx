"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import CardX from "../x-ui/cardx";
import { CirclePlus, Quote } from "lucide-react";
import BounceToggle from "../x-ui/bounce-toggle";
import ButtonX from "../x-ui/button";
import { PersonAvatar } from "../ui/avatar-profile";

import { motion } from "framer-motion";

enum SkillsCategory {
  FRONTEND = "FRONTEND",
  BACKEND = "BACKEND",
}

const skills = [
  {
    category: SkillsCategory.FRONTEND,
    skills: [
      "React JS",
      "Next JS",
      "ShadCN",
      "React Native",
      "Redux",
      "MobX",
      "Framer Motion",
      "Tailwind",
    ],
  },
  {
    category: SkillsCategory.BACKEND,
    skills: ["PostgreSQL", "Node JS", "Prisma", "Firebase"],
  },
];

const Skills = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <div className="max-w-[80rem] mx-auto">
      <CardX
        className="grid grid-cols-2 lg:p-12 2xl:p-18 gap-4"
        cardcolor="bg-glass-500"
      >
        {/* 1 */}
        <div className="flex flex-col justify-between">
          <div className={"flex flex-row items-center gap-4"}>
            <p
              className={cn(
                isOn ? "text-red-500" : "",
                "transition-all ease-in-out duration-200 text-base font-semibold lg:text-lg 2xl:text-lg transition-all ease-in-out duration-300"
              )}
            >
              Frontend
            </p>
            <BounceToggle isOn={isOn} setIsOn={setIsOn} />
            <p
              className={cn(
                !isOn ? "text-red-500" : "",
                "transition-all ease-in-out duration-200 text-base font-semibold lg:text-lg 2xl:text-lg transition-all ease-in-out duration-300"
              )}
            >
              Backend
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <div className="flex flex-row items-center gap-1 bg-glass-200 rounded-full p-1 px-3 w-fit">
              <div className="w-1 h-1 rounded-full bg-green-500"></div>
              <p className="text-xs">Available to work</p>
            </div>
            <ButtonX>See More</ButtonX>
          </div>
        </div>

        {/* 2 */}
        <motion.div
          layout
          style={{ height: isOn ? "43rem" : "35rem" }}
          className="flex flex-col rounded-xl p-6 lg:p-12 bg-white/70 rotate-2 space-y-15"
        >
          {/* 1 */}
          <div className="space-y-6 transition-all ease-in-out duration-200">
            <p className={"font-semibold text-lg 2xl:text-xl"}>Skills</p>
            <div className="space-y-4">
              {skills
                .filter((item) =>
                  isOn
                    ? item.category === SkillsCategory.FRONTEND
                    : item.category === SkillsCategory.BACKEND
                )
                .map((item, index) => (
                  <div key={index} className="space-y-4">
                    {item.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-row gap-3 items-center"
                      >
                        <CirclePlus size={20} />
                        <span
                          className={cn("text-sm !text-gray-500", {
                            "text-red-500": isOn,
                          })}
                        >
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>

          <div className={"space-y-4 mt-auto"}>
            {/* 1 */}
            <div className="grid grid-cols-4 gap-4">
              <p className="col-span-3 font-light">
                Deniz created a website for us that exceeded all expectations.
                Professional, creative, and reliable. No one could have done it
                better. He is simply the best designer in the World.
              </p>
              <Quote size={18} className="text-gray-500 ml-auto" />
            </div>

            {/* 2 */}
            <div className="flex flex-row gap-4">
              <PersonAvatar
                name="David E"
                imageUrl="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg"
              />
              <div>
                <p className="font-semibold">David Etuk</p>
                <p className="text-gray-500">Software Engineer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </CardX>
    </div>
  );
};

export default Skills;
