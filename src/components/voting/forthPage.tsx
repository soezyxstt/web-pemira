import { type HTMLAttributes } from "react";
import { cn } from "~/lib/utils";
import Card from "./cardSelect";
import { useSearchParams } from 'next/navigation';
import { names } from '~/data/k3m';

const ForthPage = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  const searchParams = useSearchParams();
  const mwa_wm = searchParams.get("mwa_wm")?.split("-") ?? [];
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
        {mwa_wm.map((nomor, index) => {
          if (nomor === "") {
            return null;
          } else if (nomor === "04") {
            return (
              <Card
                order={index}
                key={index}
                nomor={nomor}
                className="cursor-default hover:bg-cream"
                isKotakKosong
              />
            );
          }
          return (
            <Card
              order={index}
              nama={names[parseInt(nomor) - 1]}
              key={index}
              nomor={nomor}
              className="cursor-default hover:bg-cream"
            />
          );
        })}
        {["01", "02", "03", "04"].map((nomor, index) => {
          if (mwa_wm.includes(nomor)) {
            return null;
          }
          return (
            <Card
              order={null}
              key={index}
              nomor={""}
              nama="Tidak Memilih"
              className="cursor-default hover:bg-cream"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ForthPage;
