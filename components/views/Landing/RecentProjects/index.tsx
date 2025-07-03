"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import SmallHeader from "@/components/SmallHaeder";
import MainTitle from "@/components/MainTitle";
import DefaultButton from "@/components/shared/DefaultButton";
import { FaArrowRight } from "react-icons/fa6";

const RecentProjects = () => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const projects = [
    {
      category: "Analytics, UI-UX",
      title: "Branding & Digital Video Campaign For George’s Cafe",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
      image: "/images/placeholder.svg", // placeholder
    },
    {
      category: "Mobile Apps",
      title: "Branding & Digital Video Campaign For George’s Cafe",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
      image: "/images/placeholder.svg", // placeholder
    },
    {
      category: "Web Development",
      title: "Branding & Digital Video Campaign For George’s Cafe",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
      image: "/images/placeholder.svg", // placeholder
    },
    {
      category: "Web Development",
      title: "Branding & Digital Video Campaign For George’s Cafe",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
      image: "/images/placeholder.svg", // placeholder
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-10">
        <div>
          <SmallHeader title="Recent Projects" />
          <MainTitle title="My Recent Projects" />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            className={`w-12 h-12 border flex items-center justify-center transition-colors ${
              isBeginning
                ? "border-gray-300 text-gray-300 cursor-not-allowed"
                : "border-red-500 text-primary hover:bg-red-500 hover:text-white"
            }`}
          >
            &larr;
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            className={`w-12 h-12 bg-white border flex items-center justify-center transition-colors ${
              isEnd
                ? "border-gray-300 text-gray-300 cursor-not-allowed"
                : "border-red-500  text-primary hover:text-white hover:bg-red-600"
            }`}
          >
            &rarr;
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        pagination={{
          clickable: true,
          enabled: true,
        }}
        slidesPerView={3}
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        className="mySwiper !h-[625px] !w-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <p className="text-red-500 mt-4">{project.category}</p>
              <h3 className="text-xl font-normal text-mirage mt-2 h-16">
                {project.title}
              </h3>
              <p className="text-gray-500 mt-2">{project.description}</p>
              <a
                href="#"
                className="text-red-500 mt-4 flex items-center gap-2  font-semibold"
              >
                View Case Studies <FaArrowRight color="#F22225" />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center">
        <DefaultButton title="Explore More" rounded="lg" />
      </div>
    </div>
  );
};

export default RecentProjects;
