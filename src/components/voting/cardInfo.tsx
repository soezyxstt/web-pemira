interface CardInfoProps {
  name: string;
  jurusan: string;
  visi: string;
  moto: string;
  photoSrc: string;
}

const CardInfo = ({ name, jurusan, visi, moto, photoSrc }: CardInfoProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white p-4 shadow-lg border-red-4">
      <h1 className="text-2xl font-bold text-brown-3">{name}</h1>
      <p className="text-center text-brown-3">{jurusan}</p>
      <h1 className="text-4xl font-bold text-red-5">{visi}</h1>
      <button className="rounded-md bg-red-3 px-4 py-2 text-lg font-bold text-white">
        {moto}
      </button>
      {/* <img
        src={photoSrc}
        alt="photo"
        className="w-32 h-32 rounded-full object-cover"
      /> */}
    </div>
  );
};

export default CardInfo;
