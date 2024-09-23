"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DateFilter from './entree';
const data = [
  { date: '2024-07-01', A2: 0, Creance: 0, Patrimoine: 100, Tresorerie: 50 },
  { date: '2024-07-02', A2: 100, Creance: 50, Patrimoine: 200, Tresorerie: 100 },
  { date: '2024-07-03', A2: 200, Creance: 100, Patrimoine: 250, Tresorerie: 150 },
  { date: '2024-07-04', A2: 300, Creance: 150, Patrimoine: 300, Tresorerie: 200 },
  { date: '2024-07-05', A2: 400, Creance: 200, Patrimoine: 350, Tresorerie: 250 },
  { date: '2024-07-06', A2: 500, Creance: 250, Patrimoine: 400, Tresorerie: 300 },
  { date: '2024-07-07', A2: 600, Creance: 300, Patrimoine: 450, Tresorerie: 350 },
  { date: '2024-07-08', A2: 700, Creance: 350, Patrimoine: 500, Tresorerie: 400 },
  { date: '2024-07-09', A2: 800, Creance: 400, Patrimoine: 550, Tresorerie: 450 },
  { date: '2024-07-10', A2: 900, Creance: 450, Patrimoine: 600, Tresorerie: 500 },
];
const filterDataByDate = (data, startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return data.filter(item => {
    const itemDate = new Date(item.date);
    return itemDate >= start && itemDate <= end;
  });
};



const FinancialGraph = () => {


  return (
   <>Patrimoine: possesseur=Cresus
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
