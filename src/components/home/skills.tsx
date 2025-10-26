"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import CardX from "../x-ui/cardx";
import { Card } from "../ui/card";
import { CirclePlus } from "lucide-react";
import BounceToggle from "../x-ui/bounce-toggle";

const skills = [
  {
    label: "",
  },
];

const Skills = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <div className="max-w-[95rem] mx-auto">
      <CardX className="grid grid-cols-2 p-5">
        {/* 1 */}
        <div className="flex flex-row gap-5 items-center border border-red-500">
          <p className={cn(isOn ? "text-red-500" : "")}>Design</p>
          <BounceToggle isOn={isOn} setIsOn={setIsOn} />
          <p className={cn(!isOn ? "text-red-500" : "")}>Branding</p>
        </div>

        {/* 2 */}
        <Card className="rounded-xl p-5">
          {/* 1 */}
          <div className="space-y-6">
            <p>Please 2</p>
            <div className="space-y-4">
              {["HTML", "CSS", "JavaScript", "React", "TypeScript"].map(
                (skill) => (
                  <div key={skill} className="flex flex-row gap-2 items-center">
                    <CirclePlus size={20} />
                    <span
                      key={skill}
                      className={cn("text-sm font-medium", {
                        "text-red-500": isOn,
                      })}
                    >
                      {skill}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* 2 */}
          <div></div>
        </Card>
      </CardX>
    </div>
  );
};

export default Skills;
