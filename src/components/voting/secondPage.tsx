import { HTMLAttributes } from 'react';
import Card from './cardSelect';
import { cn } from '~/lib/utils';

const SecondPage = ({className}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex w-[calc(100vw-6rem)] gap-8", className)}>
      <div className="flex w-[35%] flex-col rounded-lg border-[4px] border-black">
        <h1></h1>
      </div>
      <div className="flex flex-1 flex-col items-center gap-6 rounded-lg border-[4px] border-red-4 bg-brown-1 px-10 py-6 relative">
        <button
          className={cn(
            "absolute left-6 top-6 rounded-full border-[2px] border-navy bg-red-3 px-4 text-brown-2 transition-colors hover:drop-shadow-xl",
          )}
        >
          RESET
        </button>
        <h1 className="text-3xl text-red-4">urutkan pilihan anda</h1>
        <div className="grid h-[65%] w-full grid-cols-3 grid-rows-[1] gap-8">
          <Card nama="Fielda" nomor="01" foto="/logo.png" />
          <Card nama="Nabiel" nomor="02" foto="/logo.png" />
          <Card nama="Hilap" nomor="03" foto="/logo.png" />
        </div>
        <Card isKotakKosong className="h-[16vh]" nomor='04' />
      </div>
    </div>
  );
}

export default SecondPage;