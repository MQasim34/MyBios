import { FaTimes } from "react-icons/fa";

const PortDetails = ({ data, handleCloseDetails }) => {
  const { img, title, department, details } = data;
  // console.log("details :", data);
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-40 bg-[rgba(0,0,0,.5)]">
      <div
        className="portDetails fixed md:w-[70%] w-full z-10 top-[50%] left-[50%] md:h-auto h-[98%] p-3 translate-x-[-50%] translate-y-[-50%]  overflow-hidden"
        style={
          {
            // color: theme === "darkTheme" ? "#fff" : "#301551",
          }
        }
      >
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
                  className="pdbtn hover:bg-[red] hover:text-white ease-in-out duration-300"
                >
                  like this
                </button>
                <button
                  type="button"
                  className="pdbtn hover:bg-[red] hover:text-white ease-in-out duration-300"
                >
                  view project
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
