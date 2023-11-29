import { useState } from "react";
import { FaRegThumbsUp, FaTimes } from "react-icons/fa";

const PortDetails = ({ data, handleCloseDetails }) => {
  const { link, img, title, department, details } = data;

  // like and dislike functionality

  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const LikedDislikedfun = () => {
    if (!liked) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-40 bg-[rgba(0,0,0,.5)]">
      <div className="portDetails fixed md:w-[70%] w-full z-10 top-[50%] left-[50%] md:h-auto h-[98%] p-3 translate-x-[-50%] translate-y-[-50%]  overflow-hidden">
        <div className="p-[30px] portDetailsinner rounded">
          <div className="flx justify-end items-end text-right">
            <button
              type="button"
              className="menuClose hover:text-white ease-in-out duration-300 cursor-pointer
            fontSize={23}"
              onClick={handleCloseDetails}
            >
              <FaTimes />
            </button>
          </div>

          {/*  */}
          <div className="flex md:flex-row flex-col justify-between items-center gap-3 pt-3">
            <div className="md:w-[50%] w-full">
              <img src={img} alt="" className="rounded-lg md:w-[400px] " />
            </div>
            <div className="md:w-[50%] w-full flex flex-col gap-3">
              <h3>{department}</h3>
              <h1>{title}</h1>
              <p>{details}</p>
              <div className="flex justify-start items-center gap-3">
                <button
                  type="button"
                  className={`pdbtn hover:bg-[red] flex justify-center gap-1 w-12 h-9 items-center hover:text-white ease-in-out duration-300 
                  // ${!liked && "py-[8.5px]"}`}
                  onClick={LikedDislikedfun}
                  style={{
                    backgroundColor: liked && "#301551",
                    color: liked && "#fff",
                  }}
                >
                  <div>
                    <FaRegThumbsUp />
                  </div>
                  <div className="pt-[3px]">{liked && count}</div>
                </button>
                <button
                  type="button"
                  className="pdbtn px-4 py-[6px] hover:bg-[red] hover:text-white ease-in-out duration-300"
                >
                  <a href={link} target="_black">
                    view project
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default PortDetails;
