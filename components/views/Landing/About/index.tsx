import MainTitle from "@/components/MainTitle";
import SmallHaeder from "@/components/SmallHaeder";
import DefaultButton from "@/components/shared/DefaultButton";
import React from "react";
import { IoDownloadOutline } from "react-icons/io5";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Left side - Profile and mockups */}
        <div className="relative gap-4 flex justify-center">
          {" "}
          {/* Profile image */}
          <div className="w-8/12">
            <div className="w-full h-96 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
              <Image
                src={"/images/IMG_3737.jpg"}
                width={400}
                height={400}
                alt=""
                className="w-full h-full object-cover rounded-lg object-top"
              />
            </div>
          </div>
          {/* Device mockups */}
          <div className="w-4/12 flex flex-col items-center gap-4 justify-center">
            {/* Phone mockup */}
            <div className="w-full h-1/2 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl p-4 shadow-lg">
              <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JS</span>
                </div>
              </div>
            </div>

            {/* Tablet mockup */}
            <div className=" w-full h-1/2 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl p-3 shadow-lg">
              <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                <div className="text-xs text-gray-600">
                  <div className="w-20 h-16 bg-red-500 rounded-lg mb-2"></div>
                  <div className="space-y-1">
                    <div className="w-16 h-1 bg-gray-300 rounded"></div>
                    <div className="w-12 h-1 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col gap-3">
          <SmallHaeder title="About Me" />

          <div className="space-y-6">
            <MainTitle title="I Enjoy Solving Problems With Scalable Solutions" />

            <div className="space-y-4 text-gray-600">
              <p className="text-base leading-relaxed">
                Quisruam est, qui dolorem ipsum quia dolor sit amet, consectetur
                aeci velit, sed quia non numquam eius modi tempora incidunt lao
                magnam aliquam quaerat voluptatem reprehenderit.
              </p>

              <p className="text-base leading-relaxed">
                Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
                reprehenderit non numquam eius.
              </p>
            </div>

            <div className="pt-4">
              <DefaultButton
                rounded="lg"
                title="Download CV"
                icon={<IoDownloadOutline size={20} />}
                iconPosition="end"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
