import React from 'react';
import { Link } from 'react-router-dom';

export default function RemoveStudent() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8">
      <div className="mb-2">
        <h1 className="text-3xl font-black tracking-tight text-gray-900 mb-2">Remove Student Account</h1>
        <p className="text-gray-500 text-lg">Search for the student you wish to remove from the Student Pesa system. This action requires verification.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <label className="block text-sm font-semibold text-gray-900 mb-2">Find Student</label>
        <div className="flex w-full items-center rounded-lg bg-gray-50 border border-gray-200 focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all">
          <div className="flex items-center justify-center pl-4 text-gray-400">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input className="w-full bg-transparent border-none text-gray-900 placeholder:text-gray-400 focus:ring-0 py-3 px-4" placeholder="Search by Name, Student ID, or Card Number" defaultValue="SP-8829-MUK (Alex Mukasa)" />
          <div className="pr-2">
            <button className="bg-primary hover:bg-green-600 text-black p-2 rounded-md transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center bg-gray-50">
              <h3 className="font-bold text-lg text-gray-900">Student Details</h3>
              <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">Active Account</span>
            </div>
            <div className="p-6 flex flex-col sm:flex-row gap-6">
              <div className="shrink-0 flex flex-col items-center gap-3">
                <div className="h-32 w-32 rounded-xl bg-gray-200 bg-center bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATHsKL-FYa9g-tQtWZvFdGE16sObsyERmQsxoRF02JTlfjDl5I_BVf4W-kUYTEuGCK7GPXjju093NaGAHIjKloGKLQvNMHKvFUF5Qbvau4VF9CwUt8FGt-8KWRDvAZ5CGYfCZaHJqgUsL2B5It-7LidMbG0SUpvmfI5jO2DFI0jaqwblUnrOmnoXGGCPixDvtZBLFeY1eSt1bUqWlfdjOkrnTpzHFLRFJLQSbxsKnXmU8mhy88MSgM0JBIHbL1i4vPliJtDKk3mJXL")'}}></div>
                <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">ID: SP-8829-MUK</span>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div><p className="text-sm text-gray-500">Full Name</p><p className="text-lg font-bold text-gray-900">Alex Mukasa</p></div>
                <div><p className="text-sm text-gray-500">Class/Grade</p><p className="text-base text-gray-900">Form 3 East</p></div>
                <div><p className="text-sm text-gray-500">Primary Parent</p><p className="text-base text-gray-900">Grace Mukasa</p></div>
                <div><p className="text-sm text-gray-500">Contact</p><p className="text-base text-gray-900">+256 772 345 678</p></div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg flex items-start gap-4">
            <span className="material-symbols-outlined text-orange-500 mt-0.5">account_balance_wallet</span>
            <div>
              <h4 className="text-sm font-bold text-orange-800">Outstanding Balance Detected</h4>
              <p className="text-sm text-orange-700 mt-1">
                This student account currently holds a balance of <span className="font-bold">UGX 130,000</span>. Please refund or transfer these funds before removing the account.
              </p>
            </div>
            <button className="text-xs font-semibold text-orange-700 underline ml-auto whitespace-nowrap">Manage Funds</button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-red-200 overflow-hidden relative">
             <div className="absolute top-0 left-0 w-full h-1 bg-[repeating-linear-gradient(45deg,#ef4444,#ef4444_10px,#ffffff_10px,#ffffff_20px)] opacity-50"></div>
             <div className="p-6">
               <div className="flex items-center gap-2 mb-4 text-red-600">
                 <span className="material-symbols-outlined">warning</span>
                 <h3 className="font-bold text-lg">Danger Zone</h3>
               </div>
               <p className="text-sm text-gray-600 mb-6">Removing this student will permanently delete their access to Student Pesa services.</p>
               <ul className="space-y-3 mb-6">
                 <li className="flex items-start gap-2 text-sm text-gray-800"><span className="material-symbols-outlined text-[18px] text-red-500 mt-0.5">close</span> Smart card will be deactivated immediately.</li>
                 <li className="flex items-start gap-2 text-sm text-gray-800"><span className="material-symbols-outlined text-[18px] text-red-500 mt-0.5">close</span> Transaction history will be archived.</li>
                 <li className="flex items-start gap-2 text-sm text-gray-800"><span className="material-symbols-outlined text-[18px] text-red-500 mt-0.5">close</span> Parent will be notified via SMS.</li>
               </ul>
               <div className="space-y-4 pt-4 border-t border-gray-100">
                 <label className="flex gap-3 items-start cursor-pointer">
                   <input type="checkbox" className="mt-1 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                   <span className="text-xs text-gray-600">I confirm that I have verified the identity of this student and understand this action is irreversible.</span>
                 </label>
                 <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg shadow-sm transition-all">
                   <span className="material-symbols-outlined">delete_forever</span>
                   Remove Student
                 </button>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}