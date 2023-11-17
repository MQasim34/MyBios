import { Logo } from "../assets/Images";
// import LogoImg from "../assets/LogoImg.png";

const Footer = () => {
  return (
    <div className=" lg:container m-auto lg:px-0 px-3 md:pt-24 pt-8 border-b md:pb-24 pb-8 ">
      <div className="headerlogo text-center lg:px-5 p-0 ">
        <a href="#home" className=" inline-flex justify-center items-center">
          <span className=" md:w-16 w-12 md:h-16 h-12 rounded-full border-2 overflow-hidden bg-black">
            <img
              src={Logo}
              alt="My-bio"
              className="flex md:w-16 w-12 md:h-16 h-12 object-cover pt-2 scale-[1.2]"
            />
          </span>
          <span className="uppercase text-lg text-[--textColor] font-[700]">
            mybio
          </span>
        </a>
      </div>
      <div className="pt-4 text-center">
        <p>© 2023. All rights reserved by MyBios</p>
      </div>
    </div>
  );
};

export default Footer;
