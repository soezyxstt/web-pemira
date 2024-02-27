import Image from "next/image";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
import { cn } from "~/lib/utils";

type CardProps = {
  name?: string;
  major?: string;
  batch?: string;
  motto?: string;
  variant?: "k3m" | "mwa-wm";
  photo?: string;
  link?: string;
  nomor?: number;
};

const Card: React.FC<CardProps> = ({
  name,
  major,
  batch,
  motto,
  link,
  variant = "mwa-wm",
  photo,
  nomor,
}) => {
  const bg = variant === "k3m" ? "bg-teal-1" : "bg-red-1";
  const bg_dark =
    variant === "k3m"
      ? "bg-teal-2/85 hover:bg-teal-2"
      : "bg-red-2/85 hover:bg-red-2";
  const text_c = variant === "k3m" ? "text-brown-1" : "text-yellow-100";
  return (
    <div
      className={cn(
        "flex max-w-[38vw] flex-col items-center gap-4 rounded-lg border-2 border-navy p-3 md:w-[25vw] md:flex-row",
        bg,
        text_c,
      )}
    >
      <Image
        src={photo ?? "/logo.png"}
        alt={name ?? ""}
        width={100}
        height={100}
      />
      <div className="flex-1 flex flex-col justify-between text-center md:text-left">
        <div className="">
          <h1 className="text-lg">{`${name} - ${nomor
            ?.toString()
            .padStart(2, "0")}`}</h1>
          <h2 className="text-sm">{`${major}'${batch}`}</h2>
          <h3 className="text-xs">{motto}</h3>
        </div>
        <Link href={link ?? "/profil-calon"}>
          <button
            className={cn(
              "float-end mt-3 flex w-32 items-center justify-end gap-3 rounded-md py-1.5 pr-4 text-sm transition-all duration-300 ease-in-out hover:pr-2 md:mt-5 md:w-36 md:pr-6 hover:md:pr-4",
              bg_dark,
            )}
          >
            <div
              className={cn(
                "rounded-full p-1.5 text-brown-5",
                variant === "k3m" ? "bg-brown-1" : "bg-yellow-100",
              )}
            >
              <FaAngleDoubleRight fontSize={12} />
            </div>
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
