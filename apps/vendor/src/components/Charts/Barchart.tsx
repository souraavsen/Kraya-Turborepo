import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartDataPropsT } from "./types";

const Barchart: React.FC<ChartDataPropsT> = ({
  width,
  height,
  data,
  colors,
}) => {
  const dataKeys = Object.keys(data[0]).slice(1);

  return (
    <ResponsiveContainer width={width} height={height}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray={"3 3"} />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        {dataKeys.map((key, i) => (
          <Bar key={i} dataKey={key} fill={colors[i]} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default React.memo(Barchart);
