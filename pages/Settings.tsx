import React, { useState } from 'react';

export default function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8 pb-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-900 text-3xl font-bold tracking-tight">System Settings</h1>
        <p className="text-gray-500 text-base">Manage your admin profile, security preferences, and global system configurations.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Navigation/Summary (Optional, keeping it simple with sections for now) */}
        
        {/* Main Content Area */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          {/* Profile Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">account_circle</span>
                Admin Profile
              </h2>
              <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wide">Super Admin</span>
            </div>
            <div className="p-6 flex flex-col gap-6">
              <div className="flex items-center gap-6">
                 <div className="h-20 w-20 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-bold text-2xl shadow-md border-4 border-white">
                    AD
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="text-sm font-semibold text-primary hover:text-green-700 transition-colors">Change Avatar</button>
                    <button className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Remove</button>
                  </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-gray-700">Full Name</span>
                  <input type="text" className="rounded-lg border-gray-300 focus:ring-primary focus:border-primary" defaultValue="Admin User" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-gray-700">Email Address</span>
                  <input type="email" className="rounded-lg border-gray-300 focus:ring-primary focus:border-primary" defaultValue="admin@school.ug" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-gray-700">Phone Number</span>
                  <input type="tel" className="rounded-lg border-gray-300 focus:ring-primary focus:border-primary" defaultValue="+256 772 123 456" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-gray-700">Role</span>
                  <input type="text" disabled className="rounded-lg border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed" defaultValue="System Administrator" />
                </label>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">security</span>
                Security & Authentication
              </h2>
            </div>
            <div className="p-6 flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row justify-between items-center p-4 rounded-lg border border-gray-200 bg-gray-50">
                <div className="mb-4 sm:mb-0">
                  <p className="font-bold text-gray-900">Password</p>
                  <p className="text-sm text-gray-500">Last changed 30 days ago</p>
                </div>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Change Password</button>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <div>
                  <p className="font-semibold text-gray-900">Two-Factor Authentication (2FA)</p>
                  <p className="text-sm text-gray-500">Secure your account with an additional code.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={twoFactor} onChange={() => setTwoFactor(!twoFactor)} />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>

              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="font-semibold text-gray-900">Active Sessions</p>
                  <p className="text-sm text-gray-500">Manage devices currently logged into this account.</p>
                </div>
                <button className="text-sm font-semibold text-primary hover:text-green-700">View Devices</button>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column - Preferences & Config */}
        <div className="flex flex-col gap-8">
          
          {/* Notifications */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
             <div className="p-6 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">notifications</span>
                Notifications
              </h2>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Email Alerts</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={emailNotifications} onChange={() => setEmailNotifications(!emailNotifications)} />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">SMS Alerts</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={smsNotifications} onChange={() => setSmsNotifications(!smsNotifications)} />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <p className="text-xs text-gray-500 mt-2">Alerts include low balance warnings, new agent registrations, and system errors.</p>
            </div>
          </div>

          {/* System Preferences */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
             <div className="p-6 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">tune</span>
                Preferences
              </h2>
            </div>
            <div className="p-6 flex flex-col gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-gray-700">System Currency</span>
                <select className="rounded-lg border-gray-300 bg-gray-50 focus:ring-primary focus:border-primary text-gray-900">
                  <option selected>Ugandan Shilling (UGX)</option>
                  <option>Kenyan Shilling (KES)</option>
                  <option>Tanzanian Shilling (TZS)</option>
                  <option>US Dollar (USD)</option>
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-gray-700">Timezone</span>
                <select className="rounded-lg border-gray-300 bg-gray-50 focus:ring-primary focus:border-primary text-gray-900">
                  <option selected>(GMT+03:00) East Africa Time</option>
                  <option>(GMT+00:00) UTC</option>
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-gray-700">Language</span>
                <select className="rounded-lg border-gray-300 bg-gray-50 focus:ring-primary focus:border-primary text-gray-900">
                  <option selected>English</option>
                  <option>Swahili</option>
                  <option>Luganda</option>
                </select>
              </label>
            </div>
          </div>

          <div className="flex gap-4">
             <button className="flex-1 py-3 px-4 rounded-lg border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition-colors">Cancel</button>
             <button className="flex-1 py-3 px-4 rounded-lg bg-primary hover:bg-green-600 text-black font-bold shadow-md shadow-primary/20 transition-all transform active:scale-95">Save Changes</button>
          </div>

        </div>
      </div>
    </div>
  );
}