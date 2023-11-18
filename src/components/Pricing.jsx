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
      className="lg:container m-auto lg:px-0 px-3 md:pt-24 pt-20 border-b md:pb-28 pb-14 "
    >
      <div className=" relative flex md:flex-row flex-col md:gap-2 gap-4 justify-between ">
        <div className="features md:sticky  top-36 flex flex-col md:gap-4 ga-2 h-[100%] text-center md:w-[44%] w-full">
          <h3 className="text-[--headingColor] font-[500] uppercase text-lg">
            pricing
          </h3>
          <h1 className="color-[--headingColor] flex flex-col md:gap-3 gap-0 lg:text-5xl leading-tight sm:text-3xl text-lg uppercase font-[700] ">
            my pricing
          </h1>
        </div>

        {/*  */}
        <div className="portfolioCard md:w-[44.3%] w-[100%] m-auto">
          <div className="flex md:flex-nowrap justify-between items-center resumTabs">
            {pricing.map((tab) => (
              <div
                key={tab.id}
                className={`w-full flex text-center cursor-pointer md:p-1 p-0 resumBtn 
                 ${tab.id === activetabs ? "activetab" : ""} `}
                onClick={() => handleTabclick(tab.id)}
              >
                <h1 className="md:text-[24px] text-sm font-[600] md:py-6 py-5 w-full px-[17px]">
                  {" "}
                  {tab.tabBtn}
                </h1>
              </div>
            ))}
          </div>
          {/*  */}
          <div>
            {pricing.map((tabs) => (
              <div key={tabs.id}>
                {activetabs === tabs.id && (
                  <div className="flex flex-col md:gap-5 gap-5 px-7 py-7">
                    <div className="flex justify-between items-center gap-2">
                      <div className="flex flex-col gap-1">
                        <h1 className="color-[--headingColor] flex flex-col md:gap-3 gap-0 lg:text-xl leading-tight sm:text-sm text-sm uppercase md:font-[700] font-[600]">
                          {tabs.title}
                        </h1>
                        <h3 className="text-[--headingColor] font-[500] uppercase md:text-lg text-sm">
                          {tabs.subTitle}
                        </h3>
                      </div>
                      <div>
                        <h1 className="contactshadow px-3 py-2 color-[--headingColor] flex flex-col md:gap-3 gap-0 lg:text-xl leading-tight sm:text-sm text-sm uppercase font-[700]">
                          ${tabs.price}.00
                        </h1>
                      </div>
                    </div>
                    <div>
                      <p className="flex md:w-[60%] md:text-sm text-xs">
                        {tabs.detail}
                      </p>
                      {/* <React.Fragment>
                          <p>{line}</p>
                        </React.Fragment> */}
                    </div>
                    <div className="pricingCard flex flex-col gap-3 px-5">
                      <ul className="flex sm:flex-row justify-between items-center">
                        <li className="text-[--headingColor] md:text-lg text-sm">
                          {tabs.li1}
                        </li>
                        <li className="text-[--headingColor] md:text-lg text-sm">
                          {tabs.li2}
                        </li>
                      </ul>
                      <ul className="flex sm:flex-row justify-between items-center">
                        <li className="text-[--headingColor] md:text-lg text-sm">
                          {tabs.li3}
                        </li>
                        <li className="text-[--headingColor] md:text-lg text-sm">
                          {tabs.li4}
                        </li>
                      </ul>
                      <ul className="flex sm:flex-row justify-between items-center">
                        <li className="text-[--headingColor] md:text-lg text-sm">
                          {tabs.li5}
                        </li>
                        <li className="text-[--headingColor] md:text-lg text-sm">
                          {tabs.li6}
                        </li>
                      </ul>
                      <ul className="flex sm:flex-row justify-between items-center">
                        <li className="text-[--headingColor] md:text-lg text-sm">
                          {tabs.li7}
                        </li>
                        <li className="text-[--headingColor] md:text-lg text-sm">
                          {tabs.li8}
                        </li>
                      </ul>
                      <ul className="flex sm:flex-row justify-between items-center">
                        <li className="text-[--headingColor] md:text-lg text-sm">
                          {tabs.li9}
                        </li>
                        <li className="text-[--headingColor] md:text-lg text-sm">
                          {tabs.li10}
                        </li>
                      </ul>
                      <ul className="flex sm:flex-row justify-between items-center">
                        <li className="text-[--headingColor] md:text-lg text-sm">
                          {tabs.li11}
                        </li>
                        <li className="text-[--headingColor] md:text-lg text-sm">
                          {tabs.li12}
                        </li>
                      </ul>
                    </div>
                    <div className="md:pt-7">
                      <button
                        type="submit"
                        className="contactBtn w-full cursor-pointer"
                      >
                        order now
                      </button>
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
