import React from "react";
import { TbAward } from "react-icons/tb";

const InfoItemHorizontal = () => {
  return (
    <div className="flex items-center gap-2 absolute bottom-0 left-0  py-4 px-8 w-[255px] h-[107px] shrink-0 [background:#FFF] shadow-[5px_5px_10px_0px_rgba(124,124,124,0.20)] rounded-[20px]">
      <div className="w-[60px] flex items-center justify-center rounded-full h-[60px] shrink-0 bg-[#ECF5FF]">
        <TbAward className="text-primary" size={30} />
      </div>
      <div className="flex flex-col w-auto">
        <p className="text-black text-lg font-normal leading-[30px] tracking-[0.4px]">
          Best Design Award.{" "}
        </p>
      </div>
    </div>
  );
};

export default InfoItemHorizontal;
