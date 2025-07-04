import React from "react";
import SmallHaeder from "./SmallHaeder";
import MainTitle from "./MainTitle";
import { Button } from "antd";
import DefaultButton from "./shared/DefaultButton";
import { FaArrowRight, FaPlus } from "react-icons/fa6";
import { LuMessageCirclePlus } from "react-icons/lu";
import InfoItem from "./views/Landing/InfoItem";
import InfoItemHorizontal from "./views/Landing/InfoItemHorizontal";
import { motion } from "framer-motion";

const LandingSection = () => {
  return (
    <div className="w-full relative flex shrink-0 [background:#EDF5FE] h-[calc(100vh-100px)] max-h-[825px]">
      <div className="px-4 xl:px-0 container mx-auto   w-full h-full *:w-full *:h-full  grid grid-cols-1 xl:grid-cols-2 gap-[90px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { ease: "easeInOut", duration: 1 },
          }}
          className="1 flex  flex-col"
        >
          <div className="w-full h-full items-start justify-center flex flex-col gap-6 lg:gap-12">
            <div className="flex flex-col gap-8">
              {" "}
              <SmallHaeder title="Hello There" />
              <MainTitle title="I’m Michale Smith Ui & Ux Designer" />
              <p className="text-[color:var(--Text-Gray,#757B82)] text-lg font-normal leading-7">
                I am creative designer based in New York, and I am very
                passionate and dedicated to my work.
              </p>
            </div>
            <DefaultButton
              rounded="lg"
              title="Hire Me"
              iconPosition="end"
              icon={<FaArrowRight className="animate-pulse" />}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { ease: "easeInOut", duration: 1 },
          }}
          className="2 hidden xl:flex xl:items-center xl:flex-col xl:justify-center"
        >
          <div className="circle relative h-[560px] w-[560px] bg-[rgba(242,34,37,0.10)] flex items-center justify-center rounded-full">
            <InfoItem />
            <InfoItemHorizontal />
            <div className="w-[90%] h-[90%] rounded-full bg-[rgba(242,34,37,0.30)] flex items-center justify-center">
              <div className="w-[90%] h-[90%] rounded-full bg-[rgba(242,34,37,0.08)] flex items-center justify-center"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingSection;
