import MainTitle from "@/components/MainTitle";
import SmallHaeder from "@/components/SmallHaeder";
import React from "react";
import ServiceCard from "./ServiceCard";
import { LuQrCode } from "react-icons/lu";
import { IoCodeSlash } from "react-icons/io5";
import { FaFigma } from "react-icons/fa6";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { ease: "easeInOut", duration: 1 },
      }}
      viewport={{ once: true }}
      className="flex flex-col container gap-20 mx-auto"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <SmallHaeder title="My Services" />
        <div className="w-[565px] max-w-full *:text-center">
          <MainTitle title="Provide Wide Range of Digital Services" />
        </div>
      </div>

      <div className=" w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <ServiceCard
          title="Web Design"
          icon={<LuQrCode size={55} className="icon" />}
          description=" Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na
          aibus minima veniam."
        />
        <ServiceCard
          title="Web Development"
          icon={<IoCodeSlash size={55} className="icon" />}
          description=" Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na
          aibus minima veniam."
        />
        <ServiceCard
          title="UI/UX Design"
          icon={<FaFigma size={55} className="icon" />}
          description=" Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na
            aibus minima veniam."
        />
      </div>
    </motion.div>
  );
};

export default Services;
