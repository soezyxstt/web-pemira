import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
  LabelList,
  Label,
} from "recharts";
import { header } from '~/styles/fonts';

const QuickCount = ({
  data,
}: {
  data: {
    name: string;
    "Pilihan 1": number | undefined;
    "Pilihan 2": number | undefined;
    "Pilihan 3": number | undefined;
    "Pilihan 4": number | undefined;
  }[];
}) => {
  const COLORS = ["#d2391a", "#046977", "#db8a1b", "#3997b1"];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#757272bb" />
        <XAxis
          dataKey="name"
          stroke="black"
          fontFamily="Oxygen"
          fontWeight={600}
          fontSize={14}
        />
        <YAxis
          stroke="black"
          fontFamily="Oxygen"
          fontWeight={600}
          fontSize={14}
        >
          <Label
            value="Jumlah Suara"
            position="insideLeft"
            angle={-90}
            fontFamily="Poppins"
            fontWeight={500}
            fontSize={18}
          />
        </YAxis>
        <Tooltip content={CustomTooltip} />
        <Legend />
        {["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"].map(
          (pil, index) => (
            <Bar key={pil} dataKey={pil} fill={COLORS[index]} name={pil}>
              <LabelList
                dataKey={pil}
                position="top"
                fontSize={14}
                fontStyle="none"
                fontFamily="sans-serif"
                fontWeight={500}
              />
            </Bar>
          ),
        )}
      </BarChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active) {
    return (
      <div
        className='bg-cream text-red-4 p-4 rounded-md shadow-md text-base border border-red-5 font-normal font-mono'
      >
        <p className={`${header.className}`}>{`${label}`}</p>
        <div className="h-px w-full bg-black"></div>
        <p>{`${payload[0]?.name} : ${payload[0]?.value}`}</p>
        <p>{`${payload[1]?.name} : ${payload[1]?.value}`}</p>
        <p>{`${payload[2]?.name} : ${payload[2]?.value}`}</p>
        <p>{`${payload[3]?.name} : ${payload[3]?.value}`}</p>
      </div>
    );
  }

  return null;
}

export default QuickCount;
