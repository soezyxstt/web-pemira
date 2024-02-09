import { HTMLAttributes } from "react";
import { cn } from "~/lib/utils";
import Card from "./cardSelect";

const ForthPage = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex w-[calc(100vw-6rem)] flex-col items-center gap-3",
        className,
      )}
    >
      <h1 className="text-4xl">apakah sudah yakin dengan pilihan anda?</h1>
      <h1 className="text-4xl text-red-4 drop-shadow-xl">mwa-wm</h1>
      <div className="mt-8 grid w-full flex-1 grid-cols-4 gap-8 px-32">
        <Card
          nama="Fielda"
          nomor="01"
          foto="/logo.png"
          className="bg-brown-1 hover:bg-brown-1 cursor-default [div_&_img]:w-24 [div_&_img]:h-24 [div_&_img]:mb-8"
        />
        <Card
          nama="Nabiel"
          nomor="02"
          foto="/logo.png"
          className="bg-brown-1 hover:bg-brown-1 cursor-default [div_&_img]:w-24 [div_&_img]:h-24 [div_&_img]:mb-8"
        />
        <Card
          nama="Hilap"
          nomor="03"
          foto="/logo.png"
          className="bg-brown-1 hover:bg-brown-1 cursor-default [div_&_img]:w-24 [div_&_img]:h-24 [div_&_img]:mb-8"
        />
        <Card nomor='04' isKotakKosong className="bg-brown-1 hover:bg-brown-1 cursor-default [div_&_img]:w-24 [div_&_img]:h-24 [div_&_img]:mb-8" />
      </div>
    </div>
  );
};

export default ForthPage;
