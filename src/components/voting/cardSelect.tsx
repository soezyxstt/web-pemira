import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { type HTMLAttributes } from "react";
import { cn } from "~/lib/utils";

const Card = ({
  nama,
  nomor,
  foto,
  isKotakKosong = false,
  variant = "red",
  isSelected,
  className,
  order,
  href,
  chosenK3M,
  chosenMWAWM,
  ...props
}: {
  nama?: string;
  nomor: string;
  foto?: string;
  isKotakKosong?: boolean;
  variant?: "red" | "blue";
  isSelected?: boolean;
  order?: number | null;
  href?: string;
  chosenK3M?: string;
  chosenMWAWM?: string;
} & HTMLAttributes<HTMLAnchorElement>) => {
  const params = chosenK3M ?? chosenMWAWM;
  const array = params?.split("-");
  const link = !array?.includes(nomor) ? `${params ?? ""}-${nomor}` : `${params?.replace(`-${nomor}`, "")}`;
  isSelected = !isSelected ? chosenK3M?.includes(nomor) || chosenMWAWM?.includes(nomor) : isSelected;
  order = isSelected ? array?.indexOf(nomor) : null;

  const bgColor = isSelected
    ? variant === "red"
      ? "bg-red-3"
      : "bg-blue-5"
    : "bg-gray-500/75";
  const textColor = variant === "red" ? "text-red-4" : "text-navy";
  const borderColor = isSelected
    ? variant === "red"
      ? "border-red-3 "
      : "border-blue-5"
    : "border-gray-500/75";

  if (isKotakKosong) {
    return (
      <Link
        href={href ?? `?${new URLSearchParams({ k3m: link })}`}
        className={cn(
          "transition-color flex h-full w-full cursor-pointer flex-col items-center overflow-hidden rounded-xl border-[4px] border-b-0 bg-cream/40 drop-shadow-2xl transition-colors hover:bg-brown-2/90",
          borderColor,
          className,
        )}
        {...props}
      >
        <div className={cn("flex flex-1 items-center text-2xl", textColor)}>
          Kotak Kosong
        </div>
        <div
          className={cn(
            "flex h-8 w-full items-center justify-center text-xl text-brown-1 transition-colors",
            bgColor,
          )}
        >
          {order}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href ?? `?${new URLSearchParams({ k3m: link })}`}
      className={cn(
        "flex h-full w-full cursor-pointer flex-col items-center overflow-hidden rounded-xl border-[4px] border-b-0 bg-cream/40 drop-shadow-2xl transition-colors hover:bg-brown-2/90",
        borderColor,
        className,
      )}
      {...props}
    >
      <div className="flex flex-1 flex-col items-center justify-center py-3">
        <Image
          src={foto ?? "/logo.png"}
          alt="avatar"
          width={75}
          height={75}
          className="mb-4 rounded-full"
        />
        <div className="flex flex-col items-center">
          <h1 className={cn("text-2xl", textColor)}>{nama}</h1>
          <h1 className={cn("text-lg", textColor)}>{nomor}</h1>
        </div>
      </div>
      <div
        className={cn(
          "flex h-8 w-full items-center justify-center text-xl text-brown-1 transition-colors",
          bgColor,
        )}
      >
        {order}
      </div>
    </Link>
  );
};

export default Card;
