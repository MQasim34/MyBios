import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { testimonial } from "../siteData/features";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonial = () => {
  const [currentSilder, setCurrentSilder] = useState(0);

  // add arrow Icons
  const CustomPrevArrow = (props) => (
    <button {...props} className="custom-arrow custom-prev-arrow">
      <FaArrowLeft className="innerIconn" />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="custom-arrow custom-next-arrow">
      <FaArrowRight className="innerIconn" />
    </button>
  );

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSilder(index),
    speed: 800,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div
      id="testimonial"
      className=" lg:container m-auto lg:px-0 px-3 md:pt-24 pt-[75px] border-b md:pb-28 pb-14 "
    >
      <div className="features text-center flex flex-col gap-2">
        <h3 className="text-[--headingColor] font-[500] text-sm capitalize">
          popular Testimonial
        </h3>
        <h1 className="color-[--headingColor] flex flex-col md:gap-3 gap-0 lg:text-5xl leading-tight sm:text-3xl text-lg uppercase font-[700] ">
          my Testimonial
        </h1>
      </div>

      {/*  */}

      <div className="md:w-[850px] w-full m-auto mt-11">
        <Slider {...settings}>
          {testimonial.map((slide, index) => (
            <div key={index} className=" px-2">
              <div className="flex md:flex-row flex-col justify-center gap-5">
                <div className="testimonila p-7">
                  <div className="flex flex-col gap-5">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="rounded-[10px]"
                    />
                    <span>{slide.subTitle}</span>
                    <div className="flex flex-col gap-2">
                      <h1 className="md:text-xl sm:text-lg text-sm font-[600]">
                        {slide.title}
                      </h1>
                      <h3 className="md:text-sm font-[400]">
                        {slide.subTitle}
                      </h3>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col gap-3 md:w-[60%]">
                  <div className="md:flex hidden">
                    <img
                      src={slide.quote}
                      alt={slide.quote}
                      className=""
                      width={130}
                    />
                  </div>
                  <div className="testimonila p-7 flex flex-col gap-4">
                    <div className="flex justify-between items-center border-b pb-6">
                      <div className="flex flex-col gap-2">
                        <h1 className="font-[600] text-xl uppercase">
                          {slide.title2}
                        </h1>
                        <span>{slide.workdate}</span>
                      </div>
                      <div>
                        <img src={slide.rating} alt="" />
                      </div>
                    </div>
                    <div>
                      <p className=" feauterCard:hover:text-white ease-in-out duration-300">
                        {slide.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <p className="hidden">{currentSilder}</p>
      </div>
    </div>
  );
};

export default Testimonial;
