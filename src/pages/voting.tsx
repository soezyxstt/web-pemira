import { type ReactNode } from "react";
import CardInfo from "~/components/voting/cardInfo";

const Voting = () => {
  return (
    <>
      <div className="">Voting</div>
      <CardInfo name='asw' jurusan='dasda' visi='dsadasa' moto='dsadas' photoSrc='dsadasda' />
      <CardInfo name='ewwrew' jurusan='dasda' visi='dsadasa' moto='qew1321' photoSrc='dsadasda' />
    </>
  );
};

Voting.getLayout = (page: ReactNode) => page;
export default Voting;
