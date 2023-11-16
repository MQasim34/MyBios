// import { useState } from "react";

const PortDetails = ({ handleCloseDetails }) => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-40 bg-[rgba(0,0,0,.5)]">
      <div className="portDetails fixed md:max-w-3xl w-full h-96 z-10 top-[50%] left-[50%] px-3 translate-x-[-50%] translate-y-[-50%]  overflow-hidden">
        <div className="p-5 portDetailsinner w-full h-screen">
          <button
            type="button"
            className=" text-white cursor-pointer"
            onClick={handleCloseDetails}
          >
            click for close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortDetails;
