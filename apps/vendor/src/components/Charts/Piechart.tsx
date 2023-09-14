import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartDataPropsT } from "./types";

const Piechart: React.FC<ChartDataPropsT | any> = ({
  width,
  height,
  colors,
  data,
}) => {
  const renderCustomizedLabel = ({
    cx,
    cy,
    x,
    y,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    name,
  }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const a = cx + radius * Math.cos(-midAngle * RADIAN);
    const b = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <>
        <text
          x={a}
          y={b}
          fill='white'
          className='text-xs'
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline='central'
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
        <text
          x={x}
          y={y}
          className='text-xs text-content-primary font-medium text-opacity-60'
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline='central'
        >
          {name}
        </text>
      </>
    );
  };

  return (
    <ResponsiveContainer
      className='m-auto outline-none'
      width={width}
      height={height}
    >
      <PieChart className='outline-none' data={data}>
        <Pie
          className='outline-none'
          data={data}
          dataKey='value'
          nameKey='name'
          outerRadius={80}
          label={renderCustomizedLabel}
        >
          {data.map((entry: any, i: number) => (
            <Cell className='outline-none' key={`cell-${i}`} fill={colors[i]}>
              <text>{entry.name}</text>
            </Cell>
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Piechart;
