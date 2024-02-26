import { header } from "~/styles/fonts";

const Voting = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1
        className={`${header.className} z-[1] text-4xl text-oren shadow-teal-4 text-shadow text-stroke-width-1 text-stroke-color-cream`}
      >
        Guide Voting
      </h1>
      <div className="isolate mt-10 flex w-[80vw] md:w-[60vw] flex-col rounded-xl bg-teal-1 p-4 md:flex-row ">
        <div className="flex-container flex-1">
          <ol className="text-black list-inside text-sm *:rounded">
            <li className="m-2 mb-3 flex min-h-[30px] flex-grow flex-col bg-white p-1.5 sm:min-w-[250px] ">asddsa</li>
            <li className="m-2 mb-3 flex min-h-[30px] flex-grow flex-col bg-white p-1.5 sm:min-w-[250px] ">dsada</li>
            <li className="m-2 mb-3 flex min-h-[30px] flex-grow flex-col bg-white p-1.5 sm:min-w-[250px] ">dsadas</li>
            <li className="m-2 mb-3 flex min-h-[30px] flex-grow flex-col bg-white p-1.5 sm:min-w-[250px] ">dasdas</li>
          </ol>
        </div>
        <div className="flex items-center justify-center p-4">
          <p className="md:text-2xl text-white">#GERAKINKLUSIF</p>
        </div>
      </div>
    </div>
  );
};

export default Voting;
