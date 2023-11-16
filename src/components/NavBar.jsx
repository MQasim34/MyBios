// import { useRef } from "react";
import { useState } from "react";

import { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Logo } from "../assets/Images";
import Moon from "../assets/moon.png";
import sun from "../assets/sun.png";
import {
  DesktopBarLeft,
  DesktopBarRight,
  mobleNavBar,
} from "../siteData/features";

const NavBar = () => {
  // resize navBar
  const [isMobile, setIsMobile] = useState(false);

  const handelResize = () => {
    if (window.innerWidth <= 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    handelResize();
    //add eventListener
    window.addEventListener("resize", handelResize);
    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, []);

  // menubarhandle
  const [MenuBar, setmenuBar] = useState(false);
  const menubarhandle = () => {
    setmenuBar(!MenuBar);
  };

  // light and dark mode toggle btn

  const [theme, settheme] = useState("lgihtTheme");
  const themeToggle = () => {
    if (theme === "darkTheme") {
      settheme("lgihtTheme");
    } else {
      settheme("darkTheme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // header with y-axis when window scroll in y-axis

  useEffect(() => {
    window.addEventListener("scroll", handleYaxis);

    return () => {
      window.removeEventListener(scroll, handleYaxis);
    };
  }, []);

  const handleYaxis = () => {
    const scrollPosition = window.pageYOffset;
    const headerId = document.getElementById("headerwithId");
    const threshold = 100;

    if (scrollPosition > threshold) {
      headerId.style.padding = " 12px 0";
      headerId.style.transition = "all .01s ease-in-out";
      headerId.style.boxShadow = "0 0 20px #ccc";
      headerId.style.behavior = "smooth";
    } else {
      headerId.style.transition = "all .01s ease-in-out";
      headerId.style.padding = "12px 0";
      headerId.style.boxShadow = "none";
      headerId.style.behavior = "smooth";
    }
  };

  // setactive NavBar

  const [navBarActive, setnavBarActive] = useState("");

  return (
    <>
      <div
        id="headerwithId"
        className="header z-10 w-full bg-[--background-color] border-b md:py-5 py-2"
      >
        <nav className="container px-3 m-auto flex sm:flex-nowrap flex-wrap md:justify-center justify-between lg:gap-12 gap-4 items-center">
          {!isMobile ? (
            <div className="leftLinks">
              <ul className=" flex items-center md:gap-8 gap-3 m-0 p-0">
                {DesktopBarLeft.map((q) => (
                  <li
                    // style={}
                    key={q.id}
                    onClick={() => {
                      setnavBarActive(q.id);
                    }}
                  >
                    <a
                      href={`#${q.id}`}
                      className="block text-[--lighttextColor]  transition-all capitalize  font-[600] lg:text-sm text-xs"
                    >
                      {q.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="headerlogo lg:px-5 p-0 ">
            <a href="#home" className=" flex justify-center items-center">
              <span className=" md:w-16 w-12 md:h-16 h-12 rounded-full border-2 overflow-hidden bg-black">
                {" "}
                <img
                  src={Logo}
                  alt="My bio"
                  className="flex md:w-16 w-12 md:h-16 h-12 object-cover pt-2 scale-[1.2]"
                />{" "}
              </span>
              <span className="uppercase text-lg text-[--textColor] font-[700]">
                mybio
              </span>
            </a>
          </div>
          {!isMobile ? (
            <div className="rightLinks">
              <ul className=" flex items-center md:gap-8 gap-3 m-0 p-0">
                {DesktopBarRight.map((q) => (
                  <li key={q.id}>
                    <a
                      href={`#${q.id}`}
                      className="block text-[--lighttextColor]  transition-all capitalize  font-[600] lg:text-sm text-xs"
                      onClick={() => {}}
                    >
                      {q.title}
                    </a>
                  </li>
                ))}
                <li className="flex">
                  <button onClick={themeToggle}>
                    {theme === "darkTheme" ? (
                      <>
                        <img
                          src={sun}
                          alt="Sun with lightTheme"
                          width={25}
                          height={25}
                        />
                      </>
                    ) : (
                      <>
                        <img
                          src={Moon}
                          alt="Moon with Cloud "
                          width={25}
                          height={25}
                          style={{
                            filter:
                              "invert(16%) sepia(11%) saturate(5860%) hue-rotate(235deg) brightness(91%) contrast(109%)",
                          }}
                        />
                      </>
                    )}
                  </button>
                </li>
              </ul>
            </div>
          ) : null}
          {isMobile ? (
            <div className="flex justify-center items-center gap-4">
              <button onClick={themeToggle}>
                {theme === "darkTheme" ? (
                  <>
                    <img
                      src={sun}
                      alt="Sun with lightTheme"
                      width={25}
                      height={25}
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={Moon}
                      alt="Moon with Cloud "
                      width={25}
                      height={25}
                      style={{
                        filter:
                          "invert(16%) sepia(11%) saturate(5860%) hue-rotate(235deg) brightness(91%) contrast(109%)",
                      }}
                    />
                  </>
                )}
              </button>
              <div className="mobileBar cursor-pointer">
                <FaBars
                  fontSize={23}
                  style={{ color: theme === "lgihtTheme" ? "#301551" : "#fff" }}
                  onClick={() => {
                    menubarhandle();
                  }}
                />
              </div>
            </div>
          ) : null}

          {/* light and dark theme btn for mobile */}

          {/* mobile-menu */}
        </nav>
        {isMobile && MenuBar ? (
          <div className="fixed top-0 left-0 md:w-96 w-80 h-[100vh] z-10 bg-black">
            <ul className=" flex items-center md:gap-8 gap-3 m-0 p-0">
              {mobleNavBar.map((q) => (
                <li key={q.id}>
                  <a
                    href=""
                    className="block text-[--lighttextColor]  transition-all capitalize  font-[600] lg:text-sm text-xs"
                    onClick={() => {}}
                  >
                    {q.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default NavBar;
