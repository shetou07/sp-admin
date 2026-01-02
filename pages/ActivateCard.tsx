import React from 'react';

export default function ActivateCard() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-gray-900">Activate New Card</h2>
          <p className="mt-2 text-gray-600 max-w-2xl">Scan a physical NFC card or manually enter the serial number, then assign it to a student account.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50/50">
              <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2"><span className="material-symbols-outlined text-primary">nfc</span> 1. Card Identification</h3>
            </div>
            <div className="p-6">
              <label className="block mb-2 text-sm font-bold text-gray-700">Card Serial Number (CSN)</label>
              <div className="relative">
                <input autoFocus type="text" className="w-full h-14 pl-4 pr-12 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-primary focus:ring-1 font-mono text-lg" placeholder="Focus here and tap card..." />
                <div className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-primary pointer-events-none"><span className="material-symbols-outlined animate-pulse">contactless</span></div>
              </div>
              <p className="mt-2 text-xs text-gray-500">Use a USB NFC reader or type the ID manually.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50/50">
              <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2"><span className="material-symbols-outlined text-primary">person_search</span> 2. Assign to Student</h3>
            </div>
            <div className="p-6 flex flex-col gap-6">
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-700">Find Student</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                  <input type="text" className="w-full h-12 pl-10 pr-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-primary focus:ring-1" placeholder="Search by name, admission number, or class..." defaultValue="Michael Mugisha" />
                </div>
              </div>

              <div className="relative flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-gray-50 border border-primary/30 shadow-inner">
                <div className="absolute -top-3 -right-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-black shadow-sm"><span className="material-symbols-outlined text-sm font-bold">check</span></span></div>
                <div className="shrink-0">
                  <div className="h-20 w-20 rounded-lg bg-gray-200 bg-center bg-cover border-2 border-white shadow-sm" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdTjTVJ8pitGVToyzdwMxxIjbIEqKi1Ny5huNfufdx34C6yd70ATV1nt8E7saXl6X5oCtgappEzCN4sXIht88viMbOfEkvtJLr7-hkj8-aLyB8aTpwanb7jie6H24GlYres-u5DFHr18XX7PBOijz5Y04pydRdQiFWHNqkjmrWuI7zMg9xH9Yte836p7CW0QI2CdKlm51zjf5TSQxm6_o3eYRHoTyYS5YI-aLhPA5LSIIqBWP106XM-loz7G0FSAuTlQToS0koBhUQ")'}}></div>
                </div>
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-lg font-bold text-gray-900 truncate">Michael Mugisha</h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gray-200 text-gray-600 uppercase">Grade 10-B</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    <p className="text-gray-500">ID: <span className="font-mono text-gray-700">ST-2024-889</span></p>
                    <p className="text-gray-500">Wallet: <span className="font-medium text-gray-700">UGX 165,000</span></p>
                    <div className="col-span-2 flex items-center gap-2 mt-1"><span className="flex size-2 rounded-full bg-red-500"></span><span className="text-xs font-medium text-gray-500">No active card assigned</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-4">
              <button className="px-6 py-3 rounded-lg text-sm font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-colors">Clear Form</button>
              <button className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-black text-sm font-bold shadow-lg shadow-primary/20 hover:bg-green-500 hover:-translate-y-0.5 transition-all">
                <span className="material-symbols-outlined text-xl">bolt</span>
                Activate & Assign
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full max-h-[600px] flex flex-col">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-base text-gray-900">Recent Activations</h3>
              <button className="text-xs font-medium text-primary hover:text-green-600">View All</button>
            </div>
            <div className="flex-1 overflow-y-auto p-2">
              <div className="flex flex-col gap-1">
                {['Sarah Namaganda', 'David Okonjo', 'Fatuma Nabwire', 'Timothy Mukisa'].map((name, i) => (
                  <div key={i} className="group flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <span className="material-symbols-outlined text-base">check_circle</span>
                    </div>
                    <div className="flex flex-col min-w-0 flex-1">
                      <p className="text-sm font-bold text-gray-900 truncate">{name}</p>
                      <p className="text-xs text-gray-500 font-mono truncate">CSN: 88-AF-33-01</p>
                      <p className="text-[10px] text-gray-400 mt-1">2 mins ago • by Admin</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5">lightbulb</span>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Pro Tip</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">If a student lost their card, use the <strong>Deactivate</strong> tab first before assigning a new one.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}