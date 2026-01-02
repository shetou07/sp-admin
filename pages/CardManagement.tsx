import React from 'react';
import { Link } from 'react-router-dom';

const cards = [
  { id: 'SP-8821', student: 'Aman Kato', grade: '10B', parent: 'Kato Hassan', balance: '15,000', lastTx: 'Oct 24, 10:30 AM', status: 'Active', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2xbzDtccbzWq7zl718WRA4G-tjlQs3bVNTq5OUA9QGq6__aS0WTlenDnj8IuZA5PhYnaSnMAQpjbC4HifeNNtApr56IYuRXojLBrco4jWb7Krw2mpWMciCWJaI8gxgyOrxHF2TVaMFX6VmIBZYioQYlbaMVwxj61wNmvqDgDtRX2TK0HGmTfthoX-_Xwk5fGg9Q8LIsyo5oIz-5rnQdDa9XbiHvzwJYJSfd_XMMeQ0nv5J_XLbn0jMDLgyR79eiZNQFQXEPfHIvMp' },
  { id: 'SP-9002', student: 'Sarah Nabirye', grade: '11A', parent: 'Fatuma Nabirye', balance: '2,500', lastTx: 'Oct 23, 08:15 AM', status: 'Lost', initials: 'SN' },
  { id: 'SP-8845', student: 'John Walusimbi', grade: '9C', parent: 'Michael Walusimbi', balance: '45,000', lastTx: 'Oct 24, 12:45 PM', status: 'Active', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwI_hIXNsT_WHbtlArCfj9B4gYFsyFE0K00qJJe3AC9SaH6DYssPdmYBYUX1JmBW-LOQPg5zdofueTBnQZgrwrTv-K69WZuEaiH4sKiAIgFzbVwBxcJz5RHCWMMzAaIaYqkHqowLHqDap5j81pW7K-IoBLs218RYO-XVJk6Mau_M8CeWG7zwAfaGAMhWln7JOoDHYjsVuAK9GQn6xWjothjsnffJqLmeFiNEAFKdUZNgQoEOgg9TnlD2bm00lG7mQ1DN4dMEyKf3Hs' },
  { id: 'SP-7732', student: 'Esther Nanteza', grade: '12B', parent: 'Peter Nanteza', balance: '0', lastTx: 'Sep 15, 09:00 AM', status: 'Inactive', initials: 'EN' },
  { id: 'SP-9120', student: 'Lina Atim', grade: '10A', parent: 'David Okot', balance: '8,200', lastTx: 'Oct 24, 11:15 AM', status: 'Active', initials: 'LA' },
];

export default function CardManagement() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-wrap justify-between items-end gap-4 mb-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-gray-900 text-3xl md:text-4xl font-extrabold tracking-tight">Card Management</h1>
          <p className="text-gray-500 text-base font-normal max-w-2xl">Manage student smart cards, activations, and replacements efficiently.</p>
        </div>
        <div className="flex gap-3">
           <Link to="/cards/lost" className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white border border-gray-200 text-gray-700 text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors">
            <span className="material-symbols-outlined text-lg">report_problem</span>
            <span className="hidden sm:inline">Report Lost</span>
          </Link>
          <Link to="/cards/activate" className="flex items-center justify-center gap-2 rounded-lg h-10 px-5 bg-primary hover:bg-green-600 text-gray-900 text-sm font-bold shadow-sm shadow-primary/20 transition-all">
            <span className="material-symbols-outlined text-lg">add_card</span>
            <span className="whitespace-nowrap">Issue New Card</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="flex flex-col gap-1 rounded-xl p-5 bg-white shadow-sm border border-gray-100 relative overflow-hidden">
           <div className="absolute right-0 top-0 p-4 opacity-5"><span className="material-symbols-outlined text-6xl text-primary">credit_card</span></div>
           <p className="text-gray-500 text-sm font-medium">Active Cards</p>
           <div className="flex items-end gap-2">
             <p className="text-gray-900 text-3xl font-bold tracking-tight">1,240</p>
             <span className="text-primary text-xs font-bold mb-1.5">+24 this week</span>
           </div>
        </div>
        <div className="flex flex-col gap-1 rounded-xl p-5 bg-white shadow-sm border border-gray-100 relative overflow-hidden">
           <div className="absolute right-0 top-0 p-4 opacity-5"><span className="material-symbols-outlined text-6xl text-red-500">warning</span></div>
           <p className="text-gray-500 text-sm font-medium">Reported Lost</p>
           <div className="flex items-end gap-2">
             <p className="text-gray-900 text-3xl font-bold tracking-tight">15</p>
             <span className="text-red-500 text-xs font-bold mb-1.5">+2 today</span>
           </div>
        </div>
        <div className="flex flex-col gap-1 rounded-xl p-5 bg-white shadow-sm border border-gray-100 relative overflow-hidden">
           <div className="absolute right-0 top-0 p-4 opacity-5"><span className="material-symbols-outlined text-6xl text-gray-500">cancel</span></div>
           <p className="text-gray-500 text-sm font-medium">Inactive/Expired</p>
           <div className="flex items-end gap-2">
             <p className="text-gray-900 text-3xl font-bold tracking-tight">45</p>
             <span className="text-gray-500 text-xs font-bold mb-1.5">Action needed</span>
           </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center bg-white p-2 rounded-xl border border-gray-200 shadow-sm mb-6">
        <div className="w-full lg:w-96">
          <label className="relative block w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="material-symbols-outlined text-gray-400">search</span>
            </span>
            <input className="placeholder:text-gray-400 block w-full rounded-lg border-none bg-gray-50 py-2.5 pl-10 pr-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm sm:text-base" placeholder="Search by Student Name or Card ID" type="text" />
          </label>
        </div>
        <div className="flex gap-2 w-full lg:w-auto">
          <button className="flex h-9 px-4 items-center gap-2 rounded-lg bg-primary text-gray-900 text-sm font-bold shadow-sm ring-1 ring-inset ring-primary">Status: All <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span></button>
          <button className="flex h-9 px-4 items-center gap-2 rounded-lg bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 text-sm font-medium">Grade: All <span className="material-symbols-outlined text-[18px] text-gray-400">keyboard_arrow_down</span></button>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/50">
                <th className="p-4 w-12"><input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /></th>
                <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Card ID</th>
                <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Student</th>
                <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Grade</th>
                <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Parent</th>
                <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Balance</th>
                <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Last Transaction</th>
                <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
                <th className="p-4 text-xs font-semibold text-gray-500 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {cards.map(card => (
                <tr key={card.id} className="group hover:bg-gray-50 transition-colors">
                  <td className="p-4 align-middle"><input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /></td>
                  <td className="p-4 align-middle text-sm font-medium text-gray-900">#{card.id}</td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-3">
                      {card.avatar ? (
                        <div className="size-8 rounded-full bg-gray-200 bg-cover" style={{backgroundImage: `url('${card.avatar}')`}}></div>
                      ) : (
                         <div className={`size-8 rounded-full flex items-center justify-center font-bold text-xs ${card.status === 'Lost' ? 'bg-indigo-100 text-indigo-600' : 'bg-orange-100 text-orange-600'}`}>{card.initials}</div>
                      )}
                      <span className="text-sm font-semibold text-gray-900">{card.student}</span>
                    </div>
                  </td>
                  <td className="p-4 align-middle text-sm text-gray-600">{card.grade}</td>
                  <td className="p-4 align-middle text-sm text-gray-600">{card.parent}</td>
                  <td className="p-4 align-middle text-sm font-bold text-gray-900">UGX {card.balance}</td>
                  <td className="p-4 align-middle text-sm text-gray-500">{card.lastTx}</td>
                  <td className="p-4 align-middle">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${card.status === 'Active' ? 'bg-green-50 text-green-800 border-green-100' : card.status === 'Lost' ? 'bg-red-50 text-red-700 border-red-100' : 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                      <span className={`size-1.5 rounded-full ${card.status === 'Active' ? 'bg-green-500' : card.status === 'Lost' ? 'bg-red-500' : 'bg-gray-400'}`}></span>
                      {card.status}
                    </span>
                  </td>
                  <td className="p-4 align-middle text-right">
                    <Link to="/cards/deactivate" className="text-gray-400 hover:text-gray-900 p-1 rounded hover:bg-gray-100 inline-block"><span className="material-symbols-outlined text-[20px]">more_vert</span></Link>
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