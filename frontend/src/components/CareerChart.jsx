import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [
    { month: "Jan", score: 60 },
    { month: "Feb", score: 70 },
    { month: "Mar", score: 75 },
    { month: "Apr", score: 80 },
    { month: "May", score: 89 }
];

export default function CareerChart() {
    return (
        <ResponsiveContainer
            width="100%"
            height={300}
        >
            <LineChart data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="score"
                />
            </LineChart>
        </ResponsiveContainer>
    );
}