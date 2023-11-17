import { blog } from "../siteData/features";

const Blog = () => {
  return (
    <div
      id="blog"
      className=" lg:container m-auto lg:px-0 px-3 md:pt-24 pt-16 border-b md:pb-28 pb-14 "
    >
      <div className="features flex text-center flex-col gap-4">
        <h3 className="text-[--headingColor] font-[500] uppercase text-lg">
          visit my blog and keep your feedback
        </h3>
        <h1 className="color-[--headingColor] flex flex-col md:gap-3 gap-0 lg:text-5xl leading-tight sm:text-3xl text-lg uppercase font-[700] ">
          my blog
        </h1>
      </div>

      {/*  */}
      <div className="flex flex-wrap justify-center md:gap-6 gap-3 md:mt-11 mt-6">
        {blog.map((de, index) => (
          <div
            key={index}
            className=" portfolioCard lg:w-[32%]  md:w-[48%] w-full p-11 ease-in-out duration-300"
          >
            <div className="flex flex-col gap-4">
              <img src={de.img} className="featureIcon" />
              <div className="flex justify-between items-center">
                <h3>{de.category}</h3>
                <p>{de.time}</p>
              </div>
              <button
                className=" cursor-pointer ease-in-out duration-300 capitalize font-[600] lg:text-1xl md:text-lg text-sm h-300px]"
                // onClick={handleOpenDetails}
              >
                {de.title}
              </button>
              <p className="ease-in-out duration-300">{de.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
