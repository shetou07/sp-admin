import React from 'react';
import { Link } from 'react-router-dom';

const students = [
  { id: 1, name: 'Moses Okello', email: 'moses.o@student.sch.ug', admission: 'SP-2023-882', class: 'Form 3 West', parent: 'Sarah Okello', balance: 'UGX 70,000', status: 'Active', statusColor: 'green' },
  { id: 2, name: 'Grace Namukasa', email: 'grace.n@student.sch.ug', admission: 'SP-2023-885', class: 'Form 3 West', parent: 'Peter Namukasa', balance: 'UGX 14,500', status: 'Pending', statusColor: 'yellow' },
  { id: 3, name: 'Ivan Musoke', email: 'ivan.m@student.sch.ug', admission: 'SP-2023-901', class: 'Form 2 East', parent: 'Mary Musoke', balance: 'UGX 0.00', status: 'Suspended', statusColor: 'red' },
  { id: 4, name: 'David Kizza', email: 'david.k@student.sch.ug', admission: 'SP-2023-922', class: 'Form 4', parent: 'John Kizza', balance: 'UGX 35,000', status: 'Active', statusColor: 'green' },
  { id: 5, name: 'Sarah Akello', email: 'sarah.a@student.sch.ug', admission: 'SP-2023-945', class: 'Form 1 East', parent: 'Joseph Akello', balance: 'UGX 87,000', status: 'Active', statusColor: 'green' },
];

export default function StudentDirectory() {
  return (
    <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Student Directory</h1>
          <p className="text-gray-500 mt-1">Manage student enrollments, details, and smart card statuses.</p>
        </div>
        <div className="flex gap-3">
            <Link to="/students/remove" className="flex items-center justify-center gap-2 rounded-lg bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 px-5 py-2.5 text-sm font-semibold transition-colors">
            <span className="material-symbols-outlined text-[20px]">person_remove</span>
            <span>Remove</span>
          </Link>
          <Link to="/students/new" className="flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-green-600 text-black px-5 py-2.5 text-sm font-semibold transition-colors shadow-sm shadow-primary/20">
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span>Add New Student</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-1 rounded-xl p-6 bg-white border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm font-medium">Total Enrolled</p>
            <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-lg">school</span>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-2">1,240</p>
          <p className="text-xs text-green-600 font-medium flex items-center mt-1"><span className="material-symbols-outlined text-[14px] mr-1">trending_up</span> +12 this week</p>
        </div>
        <div className="flex flex-col gap-1 rounded-xl p-6 bg-white border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm font-medium">Active Cards</p>
            <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-lg">credit_card</span>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-2">1,100</p>
          <p className="text-xs text-gray-500 mt-1">88% Adoption rate</p>
        </div>
        <div className="flex flex-col gap-1 rounded-xl p-6 bg-white border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm font-medium">Pending Activation</p>
            <span className="material-symbols-outlined text-orange-500 bg-orange-500/10 p-1.5 rounded-lg">pending</span>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-2">45</p>
          <p className="text-xs text-orange-600 font-medium mt-1">Requires attention</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50">
          <div className="relative w-full sm:max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm" placeholder="Search by name, admission ID or parent..." type="text" />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <select className="form-select block w-full pl-3 pr-8 py-2.5 border-gray-200 bg-white text-gray-900 focus:ring-primary focus:border-primary sm:text-sm rounded-lg">
              <option>All Classes</option>
            </select>
             <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 bg-white transition-colors">
              <span className="material-symbols-outlined text-[20px]">download</span>
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left"><input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /></th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Admission ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Class</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Parent/Guardian</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Balance</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Card Status</th>
                <th className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4"><input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /></td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm">
                          {student.name.split(' ').map(n=>n[0]).join('')}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="text-xs text-gray-500">{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">{student.admission}</td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{student.class}</span></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{student.parent}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.balance}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-${student.statusColor}-100 text-${student.statusColor}-800 border border-${student.statusColor}-200`}>
                      <span className={`size-1.5 rounded-full bg-${student.statusColor}-500`}></span>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100">
                      <span className="material-symbols-outlined text-[20px]">more_vert</span>
                    </button>
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