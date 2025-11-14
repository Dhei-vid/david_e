"use client";

import { FC } from "react";
import { Badge } from "../ui/badge";
import AnimateText1 from "../animations/animate-text1";
import ButtonX from "../x-ui/button";

interface IAgencyBanner {
  headerText: string;
  bodyText: string;
}

const AgencyBanner: FC<IAgencyBanner> = ({ headerText, bodyText }) => {
  return (
    <div className={"max-w-3xl mx-auto gap-6 p-2 flex flex-col items-center"}>
      <div className="flex flex-col items-center space-y-4 mb-8">
        <Badge className={"bg-glass-300 text-glass-900 w-fit text-red-500"}>
          {headerText}
        </Badge>
        <p className={"text-lg 2xl:text-3xl text-center text-grey-800"}>
          <AnimateText1 text={bodyText} delay={1} />
        </p>
      </div>
      <ButtonX className="bg-glass-500 hover:bg-glass-500 text-grey-900">
        Check it out
      </ButtonX>
    </div>
  );
};

export default AgencyBanner;
