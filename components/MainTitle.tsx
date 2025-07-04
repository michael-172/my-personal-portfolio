import React from "react";

const MainTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="text-mirage w-full text-3xl lg:text-[46px] font-medium leading-normal xl:leading-[56px] tracking-[0.92px]">
      {title}
    </h2>
  );
};

export default MainTitle;
