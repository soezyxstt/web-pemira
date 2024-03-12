import type { GetServerSideProps } from "next";
import { getServerSession } from "next-auth/next";
import { useState } from "react";
import PieCount from "~/components/charts/pieChart";
import QuickCount from "~/components/charts/quickcount";
import { authOptions } from "~/server/auth";
import { header } from "~/styles/fonts";
import { api } from "~/utils/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const DATAS = [
  {
    value: "voter1",
    label: "Zona GKU Barat",
  },
  {
    value: "voter2",
    label: "Zona GKU Timur",
  },
  {
    value: "voter3",
    label: "Zona Labtek X & XI",
  },
  {
    value: "voter4",
    label: "Zona Aula Timur",
  },
  {
    value: "voter5",
    label: "Zona Labtek I",
  },
  {
    value: "voter6",
    label: "Zona Gedung Energi",
  },
  {
    value: "voter7",
    label: "Zona Labtek Kembar",
  },
  {
    value: "voter8",
    label: "Zona Gedung SBM",
  },
  {
    value: "voter9",
    label: "Zona Sunken Court",
  },
  {
    value: "voter10",
    label: "Zona GKU 2",
  },
  {
    value: "voter11",
    label: "Zona Koica",
  },
  {
    value: "voter12",
    label: "Zona Asrama",
  },
  {
    value: "voter13",
    label: "Zona Gedung C",
  },
  {
    value: "voter14",
    label: "Zona Cirebon",
  },
];

const Count = () => {
  const [query, setQuery] = useState("all");
  const [pil, setPil] = useState("1");
  const data = api.count.getQuickCount.useQuery({
    tps: query === "" || query === "all" ? undefined : query,
  }).data;
  const dataPerCalon = [
    {
      name: "Nabiel",
      "Pilihan 1": data?.pil_1.nabiel,
      "Pilihan 2": data?.pil_2.nabiel,
      "Pilihan 3": data?.pil_3.nabiel,
      "Pilihan 4": data?.pil_4.nabiel,
    },
    {
      name: "Fidela",
      "Pilihan 1": data?.pil_1.fidela,
      "Pilihan 2": data?.pil_2.fidela,
      "Pilihan 3": data?.pil_3.fidela,
      "Pilihan 4": data?.pil_4.fidela,
    },
    {
      name: "Daniel",
      "Pilihan 1": data?.pil_1.daniel,
      "Pilihan 2": data?.pil_2.daniel,
      "Pilihan 3": data?.pil_3.daniel,
      "Pilihan 4": data?.pil_4.daniel,
    },
    {
      name: "Kotak Kosong",
      "Pilihan 1": data?.pil_1.kotakKosong,
      "Pilihan 2": data?.pil_2.kotakKosong,
      "Pilihan 3": data?.pil_3.kotakKosong,
      "Pilihan 4": data?.pil_4.kotakKosong,
    },
  ];
  const dataPerCalonPie = () => {
    let pil_ = null

    if (pil === "1") {
      pil_ = data?.pil_1
    }
    else if (pil === "2") {
      pil_ = data?.pil_2
    }
    else if (pil === "3") {
      pil_ = data?.pil_3
    }
    else {
      pil_ = data?.pil_4
    }

    return [
      {
        name: "Nabiel",
        value:
          Math.round(
            ((pil_?.nabiel ?? 0) / (pil_?.total ?? 1)) * 10000,
          ) / 100 ?? 0,
      },
      {
        name: "Fidela",
        value:
          Math.round(
            ((pil_?.fidela ?? 0) / (pil_?.total ?? 1)) * 10000,
          ) / 100 ?? 0,
      },
      {
        name: "Daniel",
        value:
          Math.round(
            ((pil_?.daniel ?? 0) / (pil_?.total ?? 1)) * 10000,
          ) / 100 ?? 0,
      },
      {
        name: "Kotak Kosong",
        value:
          Math.round(
            ((pil_?.kotakKosong ?? 0) / (pil_?.total ?? 1)) * 10000,
          ) / 100 ?? 0,
      },
    ];
  }

  return (
    <div className="flex flex-1 flex-col items-center bg-cream text-xl text-navy">
      <h1 className={`text-custom md:mb-10 md:mt-14 ${header.className}`}>
        Perolehan Suara Sementara
      </h1>
      <div className="flex gap-20">
        <div className="flex h-[60vh] w-[25vw] flex-col items-center">
          <Select onValueChange={setPil} defaultValue="1">
            <SelectTrigger className="w-[200px] border-2 border-red-4 bg-cream shadow">
              <SelectValue placeholder="Pilihan ke-" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">Pilihan 1</SelectItem>
                <SelectItem value="2">Pilihan 2</SelectItem>
                <SelectItem value="3">Pilihan 3</SelectItem>
                <SelectItem value="4">Pilihan 4</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <PieCount data={dataPerCalonPie()} />
        </div>
        <div className="flex h-[60vh] w-[50vw] flex-1 flex-col items-center gap-4">
          <TPS query={query} setQuery={setQuery} />
          <QuickCount data={dataPerCalon} />
        </div>
      </div>
    </div>
  );
};

const TPS = ({
  query,
  setQuery,
}: {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Select onValueChange={setQuery} defaultValue={query}>
      <SelectTrigger className="w-[200px] border-2 border-red-4 bg-cream shadow">
        <SelectValue placeholder="Pilih Zona" className="bg-cream" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">Semua Zona</SelectItem>
          <SelectLabel>Ganesha</SelectLabel>
          {DATAS.filter((_, i) => i < 9).map((data) => (
            <SelectItem key={data.value} value={data.value}>
              {data.label}
            </SelectItem>
          ))}
          <SelectLabel>Jatinangor</SelectLabel>
          {DATAS.filter((_, i) => i >= 9 && i < 13).map((data) => (
            <SelectItem key={data.value} value={data.value}>
              {data.label}
            </SelectItem>
          ))}
          <SelectLabel>Cirebon</SelectLabel>
          {DATAS.filter((_, i) => i >= 13).map((data) => (
            <SelectItem key={data.value} value={data.value}>
              {data.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export const getServerSideProps = (async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session?.user.username) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session: {
        username: session.user.username ?? null,
      },
    },
  };
}) satisfies GetServerSideProps;

export default Count;
