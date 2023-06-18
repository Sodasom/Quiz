import { useRecoilValue } from "recoil";
import { scoreState } from "../recoil/atoms";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function RatioChart() {
  const score = useRecoilValue(scoreState);
  const correctRatio = score;
  const incorrectRatio = 10 - score;

  const data = [
    { name: "정답", value: correctRatio },
    { name: "오답", value: incorrectRatio },
  ];

  const COLORS = ["#26D7AC", "#EE675E"];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
