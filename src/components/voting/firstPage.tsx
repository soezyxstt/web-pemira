import { HTMLAttributes } from "react";
import Card from "./cardSelect";
import { cn } from "~/lib/utils";
import { useSearchParams } from 'next/navigation';
import { names } from '~/data/k3m';

const FirstPage = ({ className }: {} & HTMLAttributes<HTMLDivElement>) => {
  const searchParams = useSearchParams();
  const k3m = searchParams.get("k3m");
  return (
    <div className={cn("flex w-[calc(100vw-6rem)] gap-8", className)}>
      <div className="flex w-[35%] flex-col rounded-lg border-[4px] border-black">
        <h1></h1>
      </div>
      <div className="relative flex flex-1 flex-col items-center gap-6 rounded-lg border-[4px] border-blue-5 bg-brown-1 px-10 py-6">
        <button
          className={cn(
            "absolute left-6 top-6 rounded-full border-[2px] border-navy bg-red-3 px-4 text-brown-2 transition-colors hover:drop-shadow-xl",
          )}
        >
          RESET
        </button>
        <h1 className="text-3xl text-blue-5 ">urutkan pilihan anda</h1>
        <div className="grid w-full flex-1 grid-cols-3 grid-rows-[1] gap-8">
          {names.map((name, index) => (
            <Card
              nama={name}
              nomor={(index + 1).toString().padStart(2, '0')}
              foto="/logo.png"
              variant="blue"
              key={index}
              chosenK3M={k3m ?? ""}
            />
          ))}
        </div>
        <Card isKotakKosong variant="blue" className="h-[16vh]" nomor="04" chosenK3M={k3m ?? ""} />
      </div>
    </div>
  );
};

export default FirstPage;
