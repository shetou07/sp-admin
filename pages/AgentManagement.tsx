import React from 'react';
import { Link } from 'react-router-dom';

const agents = [
  { id: 1, name: 'Sarah Nakato', code: 'AGT-2023-88', location: 'Main Campus Hall', status: 'Active', active: '2 mins ago', initials: 'SN' },
  { id: 2, name: 'Michael Opio', code: 'AGT-2023-92', location: 'Science Block Cafeteria', status: 'Active', active: '15 mins ago', initials: 'MO' },
  { id: 3, name: 'John Kintu', code: 'AGT-2022-45', location: 'East Wing Library', status: 'Inactive', active: '2 days ago', initials: 'JK' },
  { id: 4, name: 'Emma Achen', code: 'AGT-2023-11', location: 'Sports Complex', status: 'Active', active: '1 hour ago', initials: 'EA' },
  { id: 5, name: 'Robert Ssebaggala', code: 'AGT-2021-09', location: 'Dormitory Block A', status: 'Suspended', active: '1 week ago', initials: 'RS' },
];

export default function AgentManagement() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col h-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-gray-900 text-3xl font-bold tracking-tight mb-1">Agent Management</h1>
          <p className="text-gray-500 text-sm">Manage POS operators, view performance, and handle account actions.</p>
        </div>
        <Link to="/agents/new" className="flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold text-sm transition-colors shadow-lg shadow-green-900/10">
          <span className="material-symbols-outlined text-[20px]">add</span>
          <span>Add New Agent</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <p className="text-gray-500 text-xs uppercase font-semibold tracking-wider">Total Agents</p>
            <span className="material-symbols-outlined text-primary">groups</span>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-gray-900 text-2xl font-bold">45</p>
            <span className="text-green-800 bg-green-100 text-xs font-medium px-1.5 py-0.5 rounded">+5%</span>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <p className="text-gray-500 text-xs uppercase font-semibold tracking-wider">Active Now</p>
            <span className="material-symbols-outlined text-green-500">radio_button_checked</span>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-gray-900 text-2xl font-bold">12</p>
            <span className="text-gray-500 text-xs font-medium">Online</span>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <p className="text-gray-500 text-xs uppercase font-semibold tracking-wider">Monthly Vol</p>
            <span className="material-symbols-outlined text-primary">payments</span>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-gray-900 text-2xl font-bold">UGX 460M</p>
            <span className="text-green-800 bg-green-100 text-xs font-medium px-1.5 py-0.5 rounded">+12%</span>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col shadow-sm">
           <div className="flex justify-between items-start mb-2">
            <p className="text-gray-500 text-xs uppercase font-semibold tracking-wider">Alerts</p>
            <span className="material-symbols-outlined text-amber-500">warning</span>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-gray-900 text-2xl font-bold">2</p>
            <span className="text-gray-500 text-xs font-medium">Require Attention</span>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl flex flex-col flex-1 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center bg-gray-50/50">
          <div className="relative w-full lg:w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input type="text" className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm" placeholder="Search by Agent Name or ID" />
          </div>
          <div className="flex gap-3">
             <select className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5">
              <option>All Statuses</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
             <select className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5">
              <option>All Locations</option>
            </select>
            <button className="p-2.5 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              <span className="material-symbols-outlined text-[20px]">download</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-xs uppercase font-semibold text-gray-500">
              <tr>
                <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /></th>
                <th className="px-6 py-4">Agent Name</th>
                <th className="px-6 py-4">Agent ID</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Last Active</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {agents.map((agent) => (
                <tr key={agent.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4"><input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /></td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-xs">{agent.initials}</div>
                      <div className="font-medium text-gray-900">{agent.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-gray-500">{agent.code}</td>
                  <td className="px-6 py-4">{agent.location}</td>
                  <td className="px-6 py-4">
                     <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${agent.status === 'Active' ? 'bg-green-100 text-green-700' : agent.status === 'Inactive' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${agent.status === 'Active' ? 'bg-green-500' : agent.status === 'Inactive' ? 'bg-red-500' : 'bg-amber-500'}`}></span>
                        {agent.status}
                     </span>
                  </td>
                  <td className="px-6 py-4 text-right">{agent.active}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 hover:bg-gray-100 rounded text-gray-500 hover:text-gray-900"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
                      <button className="p-1.5 hover:bg-green-50 rounded text-gray-500 hover:text-primary"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                      <button className="p-1.5 hover:bg-red-50 rounded text-gray-500 hover:text-red-600"><span className="material-symbols-outlined text-[18px]">block</span></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}