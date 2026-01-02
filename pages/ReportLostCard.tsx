import React from 'react';

export default function ReportLostCard() {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Report Lost Card</h1>
        <p className="text-gray-600">Identify the student and block the lost card to secure funds.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <label className="block mb-2 text-sm font-medium text-gray-700">Find Student</label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-4 text-gray-400">search</span>
              <input type="text" className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary text-gray-900" placeholder="Search by Name..." defaultValue="John Sserwadda" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
            <div className="shrink-0">
              <div className="size-24 rounded-xl bg-gray-200 bg-center bg-cover border-2 border-white shadow-sm" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzxiZaXqq22D9ak-dhDU55SuD_6cBZQYUVv1A3Q8to7x5ptWxEWs60DQdGEYwb6ZJ5T7vn_RG-q2aUm6pe8tYmdo6eVp9i3lEBjGeKhOrUs4T7AFDopERp-3jN0ppeN9qARwbSO_agt7Fqoa_Mvj6YCLRU-55p5SzjGfDPlL1MLceRyxITYGIj7oQk8waDEz5swMQ9KqnLes55cHRm0YMJ27oyRzr1MrkJUioPlcIu3nyv9b2PiaFdj0txoZpA2MDYBpmxciqYoyVa")'}}></div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start">
                <div><h3 className="text-xl font-bold text-gray-900">John Sserwadda</h3><p className="text-sm text-gray-500 font-medium">Student ID: 998877</p></div>
                <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700"><span className="size-1.5 rounded-full bg-green-600"></span>Active</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-200 pt-4">
                <div><p className="text-xs text-gray-500 uppercase font-semibold">Current Balance</p><p className="text-lg font-bold text-gray-900">UGX 100,000</p></div>
                <div><p className="text-xs text-gray-500 uppercase font-semibold">Linked Parent</p><div className="flex items-center gap-1"><p className="text-sm font-medium text-gray-900">Jane Sserwadda</p><span className="material-symbols-outlined text-gray-400 text-[16px]">call</span></div></div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white relative overflow-hidden shadow-md">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-12 translate-x-12"></div>
            <div className="relative z-10 flex justify-between items-start mb-8">
              <div className="flex items-center gap-2"><span className="material-symbols-outlined fill text-primary">wifi</span><span className="text-sm font-medium text-gray-300">NFC Active</span></div>
              <div className="text-right"><p className="text-xs text-gray-400 uppercase">Status</p><p className="text-primary font-bold">Active</p></div>
            </div>
            <div className="relative z-10">
              <p className="font-mono text-2xl tracking-widest mb-2">5544 3322 8899 0011</p>
              <div className="flex justify-between items-end">
                <div><p className="text-xs text-gray-400 uppercase">Card Holder</p><p className="font-medium">JOHN SSERWADDA</p></div>
                <div className="text-right"><p className="text-xs text-gray-400">Last used: Today, 10:00 AM</p><p className="text-xs text-gray-400">Cafeteria POS #04</p></div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 h-full flex flex-col">
            <div className="p-6 border-b border-gray-100"><h2 className="text-lg font-bold text-gray-900 flex items-center gap-2"><span className="material-symbols-outlined text-red-500">report_problem</span> Report Incident</h2></div>
            <div className="p-6 flex-1 flex flex-col gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Reason for Blocking</label>
                <div className="relative"><select className="w-full p-3 pr-10 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary text-gray-900"><option selected value="lost">Lost Card</option><option value="stolen">Stolen Card</option></select><span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">expand_more</span></div>
              </div>
              <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 flex gap-3">
                <span className="material-symbols-outlined text-orange-600 shrink-0">info</span>
                <div><p className="text-sm font-bold text-orange-800">Irreversible Action</p><p className="text-xs text-orange-700 mt-1">Blocking this card will permanently disable it.</p></div>
              </div>
              <div className="mt-auto pt-4 flex flex-col gap-4">
                <label className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                  <input type="checkbox" className="mt-1 rounded border-gray-300 text-primary focus:ring-primary" />
                  <div className="text-sm"><p className="font-bold text-gray-900">Issue Replacement Request</p><p className="text-gray-500">Automatically queue this student for a new card.</p></div>
                </label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <button className="w-full py-3 px-4 rounded-lg border border-gray-200 text-gray-700 font-bold hover:bg-gray-50">Cancel</button>
                  <button className="w-full py-3 px-4 rounded-lg bg-primary hover:bg-green-600 text-black font-bold flex justify-center items-center gap-2"><span className="material-symbols-outlined">block</span> Block Card</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}