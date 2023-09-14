import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";
import { ChartDataPropsT } from "./types";

const Piechart: React.FC<ChartDataPropsT | any> = ({
  width,
  height,
  colors,
  data,
}) => {
  const dataKeys = Object.keys(data[0]).slice(1);

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart width={width} height={height} data={data}>
        {dataKeys.map((key, i) => (
          <Pie
            key={i}
            data={data}
            dataKey={key}
            nameKey='name'
            cx='50%'
            cy='50%'
            // innerRadius={60}
            // outerRadius={80}
            fill={colors[i]}
            label
          />
        ))}
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Piechart;
