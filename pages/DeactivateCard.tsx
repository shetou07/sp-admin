import React, { useState } from 'react';

export default function DeactivateCard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-w-[960px] mx-auto flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-900 text-3xl md:text-4xl font-extrabold leading-tight">Deactivate Smart Card</h1>
        <p className="text-gray-500 text-base font-normal max-w-2xl">Search for a student to manage their card status. Deactivation will freeze the current balance immediately.</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-gray-900 text-lg font-bold mb-4">Find Student Account</h2>
        <div className="flex w-full items-stretch rounded-lg h-12">
          <div className="flex items-center justify-center pl-4 bg-gray-100 rounded-l-lg border-r-0"><span className="material-symbols-outlined text-gray-500">search</span></div>
          <input className="flex-1 rounded-r-lg border-none bg-gray-100 focus:ring-2 focus:ring-primary px-4 placeholder:text-gray-400" placeholder="Enter admission number..." defaultValue="Jane Nakintu" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row rounded-xl shadow-md bg-white border border-gray-200 overflow-hidden">
        <div className="w-full md:w-1/3 h-64 md:h-auto bg-center bg-no-repeat bg-cover relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAw9vFllJFgNii-rWAzmFUfDNElEIOcC4LDnH49h68mSQ_c2rzpH_F2r-QtxEVPKHCdgBfdNytU7puW_vsnsEL7_GQw9C4e7nRRUro3DOpzT5IHmSAoEn1eSWsTawu_wp7ooCRwzWqcEnLFtE1Q52jNeNk3d8V0Gux72JIhE8W_ZtIKhfReAMo6wzqyXIVZlgsrLF5Pq0L3q-741KuJuN4iObC1uDT-2TEsY31ZnyeFk88wlOWfwm0GAMsgN_WwVnyJ69pvmiSi7kWN")'}}>
          <div className="absolute top-3 left-3 bg-primary text-black text-xs font-bold px-2 py-1 rounded">ACTIVE</div>
        </div>
        <div className="flex w-full flex-col gap-6 p-6 md:p-8">
          <div className="flex flex-col gap-1 border-b border-gray-100 pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-900 text-2xl font-bold">Jane Nakintu</h3>
                <p className="text-gray-500 text-sm font-medium mt-1">Grade 10 - North • Admission #8829</p>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Card ID</p>
                <p className="text-gray-900 font-mono text-base">SP-8829-22</p>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <div className="bg-gray-100 px-3 py-1.5 rounded text-sm font-semibold text-gray-900">Balance: UGX 165,000</div>
              <div className="bg-gray-100 px-3 py-1.5 rounded text-sm font-semibold text-gray-900 flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-primary">check_circle</span> Status: Active</div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <label className="flex flex-col w-full">
              <p className="text-gray-900 text-sm font-medium pb-2">Reason for Deactivation</p>
              <select className="rounded-lg border-gray-200 bg-white h-12 px-4 focus:ring-primary focus:border-primary">
                <option value="" disabled selected>Select a reason...</option>
                <option value="lost">Lost Card</option>
                <option value="stolen">Stolen Card</option>
              </select>
            </label>
            <label className="flex flex-col w-full">
              <p className="text-gray-900 text-sm font-medium pb-2">Additional Notes (Optional)</p>
              <textarea className="w-full rounded-lg border-gray-200 bg-white h-24 p-4 text-sm focus:ring-primary focus:border-primary" placeholder="Enter any specific details..."></textarea>
            </label>
          </div>
          
          <div className="flex items-center gap-3 justify-end pt-2">
            <button className="px-6 h-10 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium">Cancel</button>
            <button onClick={() => setShowModal(true)} className="flex items-center justify-center gap-2 px-6 h-10 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 text-sm font-bold transition-colors">
              <span className="material-symbols-outlined text-[18px]">block</span> Deactivate Card
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-900">Confirm Deactivation</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-900"><span className="material-symbols-outlined">close</span></button>
            </div>
            <div className="px-6 py-6 flex gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-orange-600 text-2xl">warning</span></div>
              <div>
                <p className="text-gray-900 text-base font-medium">Are you sure you want to proceed?</p>
                <p className="text-gray-500 text-sm mt-2">You are about to deactivate the smart card for <strong>Jane Nakintu</strong>. This will freeze their balance.</p>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 text-sm font-medium">Cancel</button>
              <button onClick={() => { setShowModal(false); alert('Deactivated!'); }} className="px-5 py-2 rounded-lg bg-primary hover:bg-green-600 text-black font-bold text-sm">Yes, Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}