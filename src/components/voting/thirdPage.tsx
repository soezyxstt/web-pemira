import { HTMLAttributes } from "react";
import { cn } from "~/lib/utils";
import Card from "./cardSelect";

const ThirdPage = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex w-[calc(100vw-6rem)] flex-col items-center gap-3 relative",
        className,
      )}
    >
      <h1 className="text-4xl">apakah sudah yakin dengan pilihan anda?</h1>
      <h1 className="text-4xl text-blue-5 drop-shadow-xl">k3m</h1>
      <div className="mt-8 grid w-full flex-1 grid-cols-4 gap-8 px-32">
        <Card
          nama="Fielda"
          nomor="01"
          foto="/logo.png"
          className="cursor-default bg-brown-1 hover:bg-brown-1 [div_&_img]:mb-8 [div_&_img]:h-24 [div_&_img]:w-24"
          variant="blue"
        />
        <Card
          nama="Nabiel"
          nomor="02"
          foto="/logo.png"
          className="cursor-default bg-brown-1 hover:bg-brown-1 [div_&_img]:mb-8 [div_&_img]:h-24 [div_&_img]:w-24"
          variant="blue"
        />
        <Card
          nama="Hilap"
          nomor="03"
          foto="/logo.png"
          className="cursor-default bg-brown-1 hover:bg-brown-1 [div_&_img]:mb-8 [div_&_img]:h-24 [div_&_img]:w-24"
          variant="blue"
        />
        <Card
          isKotakKosong
          className="cursor-default bg-brown-1 hover:bg-brown-1 [div_&_img]:mb-8 [div_&_img]:h-24 [div_&_img]:w-24"
          variant="blue"
          nomor='04'
        />
      </div>
    </div>
  );
};

export default ThirdPage;
