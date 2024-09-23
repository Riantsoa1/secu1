"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-07-01', A2: 0, Creance: 0, Patrimoine: 100, Tresorerie: 50 },
  { date: '2024-07-02', A2: 100, Creance: 50, Patrimoine: 200, Tresorerie: 100 },
  { date: '2024-07-03', A2: 200, Creance: 100, Patrimoine: 250, Tresorerie: 150 },
];

const FinancialGraph = () => {
  return (
   <>the graph
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray={"3 3"}/>
        <XAxis dataKey="date"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="A2" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Creance" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Patrimoine" stroke="#ff7300" />
        <Line type="monotone" dataKey="Tresorerie" stroke="#ff0000" />
      </LineChart>
    </ResponsiveContainer>
   </>
   
  );
};

export default FinancialGraph;
