import React from "react";
import { LuMessageCirclePlus } from "react-icons/lu";

const InfoItem = () => {
  return (
    <div className="flex flex-col gap-2 absolute top-0 right-0  py-4 px-9 w-[136px] h-[170px] shrink-0 [background:#FFF] shadow-[5px_5px_10px_0px_rgba(124,124,124,0.20)] rounded-[20px]">
      <div className="w-[60px] flex items-center justify-center rounded-full h-[60px] shrink-0 bg-[#ECF5FF]">
        <LuMessageCirclePlus className="text-primary" size={30} />
      </div>
      <div className="flex flex-col">
        <p className="text-black text-xl font-normal leading-[30px] tracking-[0.4px]">
          + 2K
        </p>
        <p className="text-[color:var(--Text-Gray,#757B82)] text-center text-xs font-normal leading-[22px] tracking-[0.24px]">
          Happy Customers
        </p>
      </div>
    </div>
  );
};

export default InfoItem;
