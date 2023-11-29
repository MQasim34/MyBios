import { useState } from "react";
import { portfolio } from "../siteData/features";
import PortDetails from "./detailsPage/PortDetails";

const Portfolio = () => {
  const [detailsCard, setDetailsCard] = useState(false);

  const handleOpenDetails = (id) => {
    setDetailsCard(id);
  };

  const handleCloseDetails = () => {
    setDetailsCard(false);
  };

  return (
    <div
      id="portfolio"
      className="lg:container m-auto lg:px-0 px-3 md:pt-24 pt-[75px] border-b md:pb-28 pb-14"
    >
      <div className="features text-center flex flex-col gap-4">
        <h3 className="text-[--headingColor] font-[500] text-sm">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </h3>
        <h1 className="color-[--headingColor] flex flex-col md:gap-3 gap-0 lg:text-5xl leading-tight sm:text-3xl text-xl uppercase font-[700] ">
          My Portfolio
        </h1>
      </div>

      {/* with map */}

      <div className="flex flex-wrap justify-center md:gap-6 gap-3 md:mt-11 mt-6">
        {portfolio.map((de) => (
          <div
            key={de.id}
            className=" portfolioCard lg:w-[32%]  md:w-[48%] w-full p-11 ease-in-out duration-300"
          >
            <div className="flex flex-col gap-4">
              <img src={de.img} className="featureIcon" />
              <div className="flex justify-between items-center">
                <h3>{de.department}</h3>
                <p>{de.links}</p>
              </div>
              <button
                className=" cursor-pointer ease-in-out duration-300 capitalize font-[600] lg:text-1xl md:text-lg text-sm h-300px]"
                onClick={() => handleOpenDetails(de.id)}
              >
                {de.title}
              </button>
              <p className="ease-in-out duration-300">{de.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
      {detailsCard && (
        <PortDetails
          data={portfolio.find((item) => item.id === detailsCard)}
          handleCloseDetails={handleCloseDetails}
        />
      )}
    </div>
  );
};

export default Portfolio;
