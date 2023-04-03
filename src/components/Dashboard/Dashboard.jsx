import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const students = [
        { id: 1, name: "Alice", physics: 85, chemistry: 90, math: 95 },
        { id: 2, name: "Bob", physics: 70, chemistry: 80, math: 75 },
        { id: 3, name: "Charlie", physics: 90, chemistry: 85, math: 80 },
        { id: 4, name: "David", physics: 60, chemistry: 70, math: 65 },
        { id: 5, name: "Emily", physics: 95, chemistry: 95, math: 90 },
        { id: 6, name: "Frank", physics: 80, chemistry: 85, math: 75 },
        { id: 7, name: "Grace", physics: 75, chemistry: 80, math: 85 },
        { id: 8, name: "Henry", physics: 85, chemistry: 90, math: 80 },
        { id: 9, name: "Isabelle", physics: 90, chemistry: 95, math: 85 },
        { id: 10, name: "Jack", physics: 70, chemistry: 75, math: 80 },
        { id: 11, name: "Karen", physics: 75, chemistry: 80, math: 70 },
        { id: 12, name: "Luke", physics: 80, chemistry: 75, math: 85 }
    ];


    return (
        <div className='container mx-auto'>
            <LineChart width={1000} height={500} data={students}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line dataKey="physics" stroke="#8884d8"></Line>
                <Line dataKey="chemistry" stroke="#82ca9d"></Line>
                <Line dataKey="math"></Line>
            </LineChart>
        </div>
    );
};

export default Dashboard;