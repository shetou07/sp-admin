import React from 'react';
import { Link } from 'react-router-dom';

export default function AddAgent() {
  return (
    <div className="max-w-[1000px] mx-auto flex flex-col gap-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-gray-900 text-3xl md:text-4xl font-extrabold tracking-tight">Register New POS Agent</h2>
          <p className="text-gray-500 text-base font-normal max-w-2xl leading-relaxed">Create an account for canteen staff or vendors to accept Student Pesa smart cards. Agents will receive login details via email.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-8 md:p-10 flex flex-col gap-10">
          
          <div>
            <h3 className="text-gray-900 text-lg font-bold mb-6 flex items-center gap-2">
              <div className="p-1.5 bg-green-100 rounded text-primary"><span className="material-symbols-outlined text-[20px]">badge</span></div>
              Agent Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <label className="flex flex-col gap-2">
                <span className="text-gray-900 text-sm font-semibold">Full Name</span>
                <input type="text" className="w-full rounded-lg border-gray-300 bg-white p-3 text-base focus:ring-primary focus:border-primary" placeholder="Enter full legal name" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-gray-900 text-sm font-semibold">Phone Number</span>
                <input type="tel" className="w-full rounded-lg border-gray-300 bg-white p-3 text-base focus:ring-primary focus:border-primary" placeholder="+256 7..." />
              </label>
            </div>
          </div>
          
          <div className="w-full h-px bg-gray-100"></div>

          <div>
             <h3 className="text-gray-900 text-lg font-bold mb-6 flex items-center gap-2">
              <div className="p-1.5 bg-green-100 rounded text-primary"><span className="material-symbols-outlined text-[20px]">lock</span></div>
              Account Credentials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
               <label className="flex flex-col gap-2 md:col-span-2">
                <span className="text-gray-900 text-sm font-semibold">Email Address</span>
                <input type="email" className="w-full rounded-lg border-gray-300 bg-white p-3 text-base focus:ring-primary focus:border-primary" placeholder="agent@school.ug" />
              </label>
               <label className="flex flex-col gap-2">
                <span className="text-gray-900 text-sm font-semibold">Initial Password</span>
                <input type="password" className="w-full rounded-lg border-gray-300 bg-white p-3 text-base focus:ring-primary focus:border-primary" placeholder="••••••••" />
              </label>
               <label className="flex flex-col gap-2">
                <span className="text-gray-900 text-sm font-semibold">Confirm Password</span>
                <input type="password" className="w-full rounded-lg border-gray-300 bg-white p-3 text-base focus:ring-primary focus:border-primary" placeholder="••••••••" />
              </label>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="text-sm text-primary font-semibold hover:underline flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">autorenew</span> Generate Secure Password</button>
            </div>
          </div>

          <div className="w-full h-px bg-gray-100"></div>

          <div>
            <h3 className="text-gray-900 text-lg font-bold mb-6 flex items-center gap-2">
              <div className="p-1.5 bg-green-100 rounded text-primary"><span className="material-symbols-outlined text-[20px]">admin_panel_settings</span></div>
              Assignment & Roles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
               <label className="flex flex-col gap-2">
                <span className="text-gray-900 text-sm font-semibold">Assign Location</span>
                <select className="w-full rounded-lg border-gray-300 bg-white p-3 text-base focus:ring-primary focus:border-primary">
                  <option disabled selected>Select a canteen or shop</option>
                  <option>Main Canteen</option>
                  <option>Science Block</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">This determines which budget code transactions are linked to.</p>
              </label>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-500 text-xs font-bold mb-4 uppercase tracking-wide">POS Permissions</p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-medium text-sm">Allow Card Top-ups</span>
                    <input type="checkbox" className="rounded text-primary focus:ring-primary border-gray-300 h-5 w-5" defaultChecked />
                  </div>
                   <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-medium text-sm">Process Refunds</span>
                    <input type="checkbox" className="rounded text-primary focus:ring-primary border-gray-300 h-5 w-5" />
                  </div>
                   <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-medium text-sm">View Daily Reports</span>
                    <input type="checkbox" className="rounded text-primary focus:ring-primary border-gray-300 h-5 w-5" defaultChecked />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-8 py-6 flex flex-col-reverse md:flex-row items-center justify-end gap-4 border-t border-gray-200">
          <Link to="/agents" className="w-full md:w-auto px-6 py-2.5 rounded-lg border border-gray-300 text-gray-600 hover:bg-white text-center font-semibold">Cancel</Link>
          <button className="w-full md:w-auto px-8 py-2.5 rounded-lg bg-primary hover:bg-green-600 text-white font-bold flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[20px]">check_circle</span>
            Add Agent
          </button>
        </div>
      </div>
    </div>
  );
}