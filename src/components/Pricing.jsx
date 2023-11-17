import { useState } from "react";
import { pricing } from "../siteData/features";

const Pricing = () => {
  const [activetabs, setActivetabs] = useState(pricing[0].id);

  const handleTabclick = (tabID) => {
    setActivetabs(tabID);
  };

  // line split
  // const line = pricing.detail.split("\n ");
  return (
    <div
      id="pricing"
      className="lg:container m-auto lg:px-0 px-3 md:pt-24 pt-16 border-b md:pb-28 pb-14 "
    >
      <div className="flex md:felx-row flex-col md:gap-2 gap-4 justify-between ">
        <div className="features flex flex-col gap-4 md:text-left text-center">
          <h3 className="text-[--headingColor] font-[500] uppercase text-lg">
            pricing
          </h3>
          <h1 className="color-[--headingColor] flex flex-col md:gap-3 gap-0 lg:text-5xl leading-tight sm:text-3xl text-lg uppercase font-[700] ">
            my pricing
          </h1>
        </div>

        {/*  */}
        <div className="portfolioCard md:w-[51.3%] w-[94.3%] m-auto">
          <div className="flex flex-wrap resumTabs">
            {pricing.map((tab) => (
              <div
                key={tab.id}
                className={`cursor-pointer p-3 resumBtn text-[24px] font-[600] py-6 px-[60px] 
                 ${tab.id === activetabs ? "activetab" : ""} `}
                onClick={() => handleTabclick(tab.id)}
              >
                {tab.tabBtn}
              </div>
            ))}
          </div>
          {/*  */}
          <div>
            {pricing.map((tabs) => (
              <div key={tabs.id}>
                {activetabs === tabs.id && (
                  <div className="p-7">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <h1 className="color-[--headingColor] flex flex-col md:gap-3 gap-0 lg:text-xl leading-tight sm:text-sm text-lg uppercase font-[700] ">
                          {tabs.title}
                        </h1>
                        <h3 className="text-[--headingColor] font-[500] uppercase text-lg">
                          {tabs.subTitle}
                        </h3>
                      </div>
                      <div>
                        <h1 className="color-[--headingColor] flex flex-col md:gap-3 gap-0 lg:text-xl leading-tight sm:text-sm text-lg uppercase font-[700]">
                          ${tabs.price}.00
                        </h1>
                      </div>
                    </div>
                    <div>
                      <p className="flex md:w-[60%]">{tabs.detail}</p>
                      {/* <React.Fragment>
                          <p>{line}</p>
                        </React.Fragment> */}
                    </div>
                    <div className="flex flex-col">
                      <ul className="flex justify-between items-center">
                        <li>{tabs.li1}</li>
                        <li>{tabs.li2}</li>
                      </ul>
                      <div className="flex justify-between items-center"></div>
                      <div className="flex justify-between items-center"></div>
                      <div className="flex justify-between items-center"></div>
                      <div className="flex justify-between items-center"></div>
                      <div className="flex justify-between items-center"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
