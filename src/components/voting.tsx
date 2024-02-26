import { header } from "~/styles/fonts";
import React from "react";

const Voting = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1
        className={`${header.className} z-[1] text-4xl text-oren shadow-teal-4 text-shadow text-stroke-width-1 text-stroke-color-cream`}
      >
        Guide Voting
      </h1>
      <div className="isolation: isolate mt-5 flex w-[80vw] md:w-[60vw] flex-col rounded-xl bg-teal-1 p-4 md:flex-row ">
        <div className="flex-container">
          <ol className="text-black-500 list-inside">
            <li className="m-2 mb-3 flex min-h-[30px] min-w-[500px] flex-grow flex-col items-center bg-white p-1.5 sm:min-w-[250px] md:min-w-[500px]"></li>
            <li className="m-2 mb-3 flex min-h-[30px] min-w-[500px] flex-grow flex-col items-center bg-white p-1.5 sm:min-w-[250px] md:min-w-[500px]"></li>
            <li className="m-2 mb-3 flex min-h-[30px] min-w-[500px] flex-grow flex-col items-center bg-white p-1.5 sm:min-w-[250px] md:min-w-[500px]"></li>
            <li className="m-2 mb-3 flex min-h-[30px] min-w-[500px] flex-grow flex-col items-center bg-white p-1.5 sm:min-w-[250px] md:min-w-[500px]"></li>
          </ol>
        </div>
        <div className="flex items-center justify-center p-8">
          <p className="text-2xl text-white">#GERAKINKLUSIF</p>
        </div>
      </div>
    </div>
  );
};

export default Voting;
