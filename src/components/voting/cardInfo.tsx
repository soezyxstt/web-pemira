import Image from "next/image";
import { body } from "~/styles/fonts";

interface CardInfoProps {
  name: string;
  jurusan: string;
  angkatan: string;
  visi: string;
  moto: string;
  photoSrc: string;
}

const CardInfo = ({
  name,
  jurusan,
  angkatan,
  visi,
  moto,
  photoSrc,
}: CardInfoProps) => {
  return (
    <div className=" relative flex h-32 w-full rounded-xl border-[3px] border-red-5 shadow shadow-black ">
      <div className="flex w-32">
        <Image
          src={photoSrc}
          alt="calon"
          width={70}
          height={70}
          className="flex-1"
        />
      </div>
      <div
        className={`${body.className}  flex flex-1 flex-col rounded-br-xl rounded-tr-xl bg-brown-1 text-center text-red-5 `}
      >
        <Image
          src="/bintang/16.png"
          alt="bintang"
          width={60}
          height={60}
          className="absolute -left-6 -top-6 rotate-45"
        />
        <h1 className="text-xl">{name}</h1>
        <p className="text-xs">{`${jurusan}'${angkatan}`}</p>
        <p className="text-xs">{visi}</p>
        <div className="flex-1"></div>
        <p className="m-1 text-xs">{moto}</p>
      </div>
    </div>
  );
};

export default CardInfo;
