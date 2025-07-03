import React from "react";

const SmallHaeder = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex items-center gap-0 *:bg-primary">
        <span className="inline-block w-10 h-[2px] "></span>
        <span className="inline-block w-2 h-2 rounded-full ml-[-1px]"></span>
      </div>
      <div className=" text-base font-medium leading-[normal] tracking-[0.32px]">
        {/* last word of the sentence */}
        <span>{title.split(" ").slice(0, -1).join(" ")} </span>
        <span className="text-primary"> {title.split(" ").slice(-1)}</span>
      </div>
    </div>
  );
};

export default SmallHaeder;
