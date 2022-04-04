import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [chartdata,setChartdata] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setChartdata(data));
    },[])
    return (
        <div className='container mt-5 row'>
            <div className='col-md-6 p-5'>
            <AreaChart width={530} height={250} data={chartdata}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorsell" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="sell" stroke="#8884d8" fillOpacity={1} fill="url(#colorsell)" />
            <Area type="monotone" dataKey="investment" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
 
                <div className='mt-5 p-5'>
                <BarChart width={530} height={250} data={chartdata}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sell" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
                </div>
            </div>
            {/* another */}
            <div className='col-md-6 p-5'>
            <LineChart width={530} height={250} data={chartdata}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
            </LineChart>

            <div className='mt-5 p-5'>
            <ComposedChart width={530} height={250} data={chartdata}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area type="monotone" dataKey="100000" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="sell" stroke="#ff7300" />
            </ComposedChart>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;