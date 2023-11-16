import { useState } from "react";

const Resume = () => {
  const [acticeTab, setActiceTab] = useState(1);

  const handleTabs = (tanNo) => {
    setActiceTab(tanNo);
  };
  return (
    <div
      id="resume"
      className="lg:container m-auto lg:px-0 px-3 md:pt-24 pt-16 border-b md:pb-28 pb-14"
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

      <div className="pt-11 flex justify-center">
        <div className="resumTabs flex flex-wrap justify-center items-center">
          <button
            className={`${
              acticeTab === 1 ? "activetab" : ""
            } resumBtn text-[24px] font-[600] py-6 px-[60px]`}
            onClick={() => handleTabs(1)}
          >
            Education
          </button>
          <button
            className={`${
              acticeTab === 2 ? "activetab" : ""
            } resumBtn text-[24px] font-[600] py-6 px-[60px]`}
            onClick={() => handleTabs(2)}
          >
            Education
          </button>
          <button
            className={`${
              acticeTab === 3 ? "activetab" : ""
            } resumBtn text-[24px] font-[600] py-6 px-[60px]`}
            onClick={() => handleTabs(3)}
          >
            Education
          </button>
          <button
            className={`${
              acticeTab === 4 ? "activetab" : ""
            } resumBtn text-[24px] font-[600] py-6 px-[60px]`}
            onClick={() => handleTabs(4)}
          >
            Education
          </button>
        </div>
      </div>

      {/*  */}
      <div className="pt-11">
        {acticeTab === 1 && (
          <div>
            <h1>tab 1</h1>
          </div>
        )}
        {acticeTab === 2 && (
          <div>
            <h1>tab 2</h1>
          </div>
        )}
        {acticeTab === 3 && (
          <div>
            <h1>tab 3</h1>
          </div>
        )}
        {acticeTab === 4 && (
          <div>
            <h1>tab 4</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
