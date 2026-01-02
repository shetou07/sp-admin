import React from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const chartData = [
  { name: 'Mon', value: 200 },
  { name: 'Tue', value: 450 },
  { name: 'Wed', value: 300 },
  { name: 'Thu', value: 800 },
  { name: 'Fri', value: 500 },
  { name: 'Sat', value: 950 },
  { name: 'Sun', value: 700 },
];

const StatCard = ({ title, value, icon, trend, subtext, colorClass, iconBg }: any) => (
  <div className="flex flex-col gap-2 rounded-xl p-6 bg-surface-dark border border-white/5 hover:border-primary/30 transition-all">
    <div className="flex justify-between items-start">
      <p className="text-gray-400 text-sm font-medium">{title}</p>
      <span className={`material-symbols-outlined ${colorClass} ${iconBg} p-1.5 rounded-lg text-lg`}>{icon}</span>
    </div>
    <p className="text-white tracking-tight text-3xl font-bold mt-2">{value}</p>
    <div className="flex items-center gap-1 mt-1">
      <span className={`material-symbols-outlined ${colorClass} text-sm`}>{trend === 'up' ? 'trending_up' : 'trending_down'}</span>
      <p className={`${colorClass} text-xs font-medium`}>{subtext}</p>
    </div>
  </div>
);

const ActivityLog = ({ icon, color, title, desc, time }: any) => (
  <div className="flex gap-3 items-start group">
    <div className={`mt-1 size-8 rounded-full ${color} flex items-center justify-center shrink-0 transition-colors`}>
      <span className="material-symbols-outlined text-sm">{icon}</span>
    </div>
    <div>
      <p className="text-white text-sm font-medium">{title}</p>
      <p className="text-gray-500 text-xs">{desc}</p>
      <p className="text-gray-600 text-[10px] mt-1">{time}</p>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-6">
      <div className="flex flex-col gap-1 mb-2">
        <h1 className="text-white text-3xl font-black tracking-tight">Dashboard Overview</h1>
        <p className="text-gray-400">System operational metrics and controls</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Students" value="1,240" icon="school" trend="up" subtext="+12% this month" colorClass="text-primary" iconBg="bg-primary/10" />
        <StatCard title="Active Agents" value="15" icon="storefront" trend="up" subtext="+2 new this week" colorClass="text-primary" iconBg="bg-primary/10" />
        <StatCard title="Cards Active" value="1,100" icon="credit_card" trend="up" subtext="System healthy" colorClass="text-primary" iconBg="bg-primary/10" />
        <StatCard title="Cards Blocked" value="45" icon="block" trend="down" subtext="Requires review" colorClass="text-red-400" iconBg="bg-red-400/10" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-xl bg-surface-dark border border-white/5 p-6 flex flex-col min-h-[400px]">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h3 className="text-white text-lg font-bold">Card Status Overview</h3>
              <p className="text-gray-400 text-sm">Real-time distribution of student smart cards</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">1,145</p>
              <p className="text-xs text-primary font-medium">Total Issued</p>
            </div>
          </div>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#13ec13" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#13ec13" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a2e1a', borderColor: '#333', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="value" stroke="#13ec13" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl bg-surface-dark border border-white/5 flex flex-col h-full">
          <div className="p-6 border-b border-white/5">
            <h3 className="text-white text-lg font-bold">System Activity</h3>
            <p className="text-gray-400 text-sm">Recent operational logs</p>
          </div>
          <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto max-h-[400px]">
            <ActivityLog icon="badge" color="bg-primary/10 text-primary" title="New Agent Registration" desc='Request from "Library Kiosk"' time="2 mins ago" />
            <ActivityLog icon="credit_card" color="bg-white/5 text-gray-400" title="Card Activated" desc="Student ID: #882910" time="15 mins ago" />
            <ActivityLog icon="block" color="bg-red-500/10 text-red-400" title="Card Blocked" desc="Reported lost by parent" time="45 mins ago" />
            <ActivityLog icon="login" color="bg-white/5 text-gray-400" title="Admin Login" desc="Successful login via Web" time="1 hour ago" />
          </div>
          <div className="p-4 border-t border-white/5">
            <button className="w-full text-center text-xs text-primary hover:text-white transition-colors">View All Logs</button>
          </div>
        </div>
      </div>
    </div>
  );
}