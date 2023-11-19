// import { useState } from "react";

const Resume = () => {
  // const [acticeTab, setActiceTab] = useState(1);

  // const handleTabs = (tanNo) => {
  //   setActiceTab(tanNo);
  // };
  return (
    <div
      id="resume"
      className="lg:container m-auto lg:px-0 px-3 md:pt-24 pt-[75px] border-b md:pb-28 pb-14"
    >
      <div className="features text-center flex flex-col gap-4">
        <h3 className="text-[--headingColor] font-[500] text-sm">
          7+ YEARS OF EXPERIENCE
        </h3>
        <h1 className="color-[--headingColor] flex flex-col md:gap-3 gap-0 lg:text-5xl leading-tight sm:text-3xl text-xl uppercase font-[700] ">
          My Resume
        </h1>
      </div>

      {/* create tabs from here*/}
    </div>
  );
};

export default Resume;
