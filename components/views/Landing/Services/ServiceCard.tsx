import React from "react";
import { IoIosBarcode } from "react-icons/io";
import { LuQrCode } from "react-icons/lu";

const ServiceCard = ({
  title,
  description,
  icon,
}: {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className="group *:transition-all 
      bg-white hover:bg-primary ease-in-out duration-300
     min-w-full xl:min-w-[377px] w-full max-w-full h-[361px] py-11  shrink-0  shadow-[8px_8px_20px_3px_rgba(147,147,147,0.13)] flex flex-col gap-5"
    >
      <div className="flex flex-col gap-5 px-8">
        <div className="w-[60px] h-[60px] flex items-center justify-center">
          {icon && React.isValidElement(icon) ? (
            React.cloneElement(icon as React.ReactElement<any>, {
              className: `text-[#F22225] group-hover:text-white transition-colors duration-300`,
            })
          ) : (
            <IoIosBarcode className="text-primary" size={30} />
          )}
        </div>

        <h2 className="text-mirage group-hover:text-white text-start text-[26px] font-medium leading-[normal] tracking-[0.52px]">
          {title || "Service Title"}
        </h2>

        <p className="text-[#757B82] group-hover:text-white text-lg font-normal leading-7">
          {description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </p>
      </div>

      <span className="text-primary group-hover:text-white text-lg font-normal border-l-2 px-8 border-l-primary group-hover:border-l-white cursor-pointer leading-7">
        Read More
      </span>
    </div>
  );
};

export default ServiceCard;
