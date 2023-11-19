import { features } from "../siteData/features";

const Features = () => {
  return (
    <div
      id="features"
      className=" lg:container m-auto lg:px-0 px-3 md:pt-24 pt-[70px] border-b md:pb-28 pb-14 "
    >
      <div className="features text-center flex flex-col md:gap-4 gap-3">
        <h3 className="text-[--headingColor] font-[500] text-lg">Features</h3>
        <h1 className="color-[--headingColor] flex flex-col md:gap-3 gap-0 lg:text-5xl leading-tight sm:text-3xl text-lg uppercase font-[700] ">
          what i do
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center md:gap-6 gap-3 md:mt-11 mt-6">
        {features.map((de, index) => (
          <div
            key={index}
            className=" feauterCard lg:w-[32%]  md:w-[48%] w-full p-11  hover:bg-[red] hover:text-white ease-in-out duration-300"
          >
            <div className="flex flex-col gap-4">
              <img src={de.Img} className="featureIcon w-6" />
              <h1 className=" hover:text-white ease-in-out duration-300 capitalize font-[700] lg:text-2xl md:text-lg text-sm">
                {de.title}
              </h1>
              <p className=" feauterCard:hover:text-white ease-in-out duration-300">
                {de.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
