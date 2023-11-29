import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BannerImg } from "../assets/Images";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="bg-[#616161a1] relative">
      <div
        id="home"
        className=" relative MainHome lg:container m-auto w-full md:pt-40 pt-24 px-3"
      >
        <div className="flex md:flex-row flex-col-reverse md:gap-3 gap-8 border-b md:pb-[120px] pb-8">
          <div className=" homeLeft md:w-[60%] w-full md:pt-24 ">
            <div className="flex flex-col justify-between md:gap-16 gap-6">
              <div className="flex flex-col md:gap-8 gap-3">
                <h3 className="text-[--headingColor] font-[500] text-sm">
                  WELCOME TO MY WORLD
                </h3>
                <h1 className="color-[--headingColor] flex flex-col md:gap-3 gap-0 lg:text-5xl leading-tight sm:text-3xl text-xl uppercase font-[700] ">
                  <div>
                    hi, I&#39;m{" "}
                    <span className="" style={{ color: "red" }}>
                      M.Qasim
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "red" }}>a</span> {""}
                    <span>
                      <Typewriter
                        words={["Front-End Developer"]}
                        loop={Infinity}
                        cursor
                        cursorStyle="|"
                        typeSpeed={20}
                        deleteSpeed={20}
                        delaySpeed={3000}
                        cursorBlinkings={false}
                      />
                    </span>
                  </div>
                </h1>
                <p className="color-[--paraColor] sm:text-lg text-sm">
                  I use animation as a third dimension by which to simplify
                  <br className="lg:block hidden" />
                  experiences and kuiding thro each and every interaction. I’m
                  not
                  <br className="lg:block hidden" />
                  adding motion just to spruce things up, but doing it in ways
                  that.
                </p>
              </div>
              <div className="flex md:justify-start  items-center gap-10 flex-wrap">
                <div className="flex flex-col md:gap-3 gap-2">
                  <h3 className="md:font-[500] font-[600] uppercase md:text-sm text-xs">
                    find with me
                  </h3>
                  <div className="flex md:gap-3 gap-2 justify-center items-center">
                    <a
                      href="#"
                      className="homeSocialIcons hover:bg-[red] hover:text-white ease-in-out duration-300"
                    >
                      <FaFacebookF className="md:w-full w-3" />
                    </a>
                    <a
                      href=""
                      className="homeSocialIcons hover:bg-[red] hover:text-white ease-in-out duration-300"
                    >
                      <FaInstagram className="md:w-full w-3" />
                    </a>
                    <a
                      href=""
                      className="homeSocialIcons hover:bg-[red] hover:text-white ease-in-out duration-300"
                    >
                      <FaLinkedinIn className="md:w-full w-3" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col md:gap-3 gap-2">
                  <h3 className="md:font-[500] font-[600] uppercase md:text-sm text-xs">
                    BEST SKILL ON
                  </h3>
                  <div className="flex md:gap-3 gap-2 justify-center items-center">
                    <a
                      href="#"
                      className="homeSocialIcons hover:bg-[red] hover:text-white ease-in-out duration-300"
                    >
                      <FaFacebookF className="md:w-full w-3" />
                    </a>
                    <a
                      href=""
                      className="homeSocialIcons hover:bg-[red] hover:text-white ease-in-out duration-300"
                    >
                      <FaInstagram className="md:w-full w-3" />
                    </a>
                    <a
                      href=""
                      className="homeSocialIcons hover:bg-[red] hover:text-white ease-in-out duration-300"
                    >
                      <FaLinkedinIn className="md:w-full w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="homeRight md:w-2/5 w-[90%] m-auto">
            <div className="relative bannerimgIner w-full flex items-center md:justify-end justify-center">
              <img
                src={BannerImg}
                alt="banner img"
                className="flex w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
