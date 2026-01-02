import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type LinkStatus = 'IDLE' | 'SENDING' | 'OTP_SENT' | 'VERIFYING' | 'LINKED';

export default function AddStudent() {
  const [linkStatus, setLinkStatus] = useState<LinkStatus>('IDLE');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOTP = () => {
    if (!phone && !email) return;
    setLinkStatus('SENDING');
    // Simulate API call to send OTP to both channels
    setTimeout(() => {
      setLinkStatus('OTP_SENT');
    }, 1000);
  };

  const handleVerifyOTP = () => {
    setLinkStatus('VERIFYING');
    // Simulate API call
    setTimeout(() => {
      setLinkStatus('LINKED');
    }, 1200);
  };

  const resetLink = () => {
    setLinkStatus('IDLE');
    setPhone('');
    setEmail('');
    setOtp('');
  };

  return (
    <div className="max-w-[1000px] mx-auto flex flex-col gap-8 pb-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-900 text-3xl sm:text-4xl font-black tracking-tight">Add New Student</h1>
        <p className="text-gray-500">Enter student details and assign an initial smart card.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 sm:p-8 flex flex-col gap-8">
          
          {/* Student Details */}
          <div className="flex flex-col gap-6">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b border-dashed border-gray-200 pb-2">
              <span className="material-symbols-outlined text-primary text-xl font-bold">person</span>
              Student Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-gray-900 text-sm font-medium">Full Name</span>
                <input type="text" className="w-full rounded-lg border-gray-300 bg-gray-50 px-4 h-12 text-gray-900 focus:ring-primary focus:border-primary" placeholder="e.g. John Mukasa" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-gray-900 text-sm font-medium">Admission Number</span>
                <input type="text" className="w-full rounded-lg border-gray-300 bg-gray-50 px-4 h-12 text-gray-900 focus:ring-primary focus:border-primary" placeholder="e.g. ADM-001" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-gray-900 text-sm font-medium">Class / Grade</span>
                <select className="w-full rounded-lg border-gray-300 bg-gray-50 px-4 h-12 text-gray-900 focus:ring-primary focus:border-primary">
                  <option disabled selected>Select Class</option>
                  <option>Form 1</option>
                  <option>Form 2</option>
                  <option>Form 3</option>
                  <option>Form 4</option>
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-gray-900 text-sm font-medium">Stream / Section</span>
                <select className="w-full rounded-lg border-gray-300 bg-gray-50 px-4 h-12 text-gray-900 focus:ring-primary focus:border-primary">
                  <option disabled selected>Select Stream</option>
                  <option>North</option>
                  <option>South</option>
                  <option>East</option>
                  <option>West</option>
                </select>
              </label>
            </div>
          </div>

          {/* Parent Link with OTP */}
          <div className="flex flex-col gap-6">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b border-dashed border-gray-200 pb-2">
              <span className="material-symbols-outlined text-primary text-xl font-bold">family_restroom</span>
              Parent / Guardian Link
            </h2>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              {linkStatus === 'LINKED' ? (
                <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg border border-green-200 animate-in fade-in zoom-in duration-300">
                  <div className="size-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined font-bold">verified</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-900">Successfully Linked</p>
                    <p className="text-xs text-gray-600">Parent: <strong>Sarah Namukasa</strong></p>
                    <p className="text-[10px] text-gray-500">{phone} • {email}</p>
                  </div>
                  <button onClick={resetLink} className="text-xs font-semibold text-primary hover:underline">Change</button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex flex-col gap-2">
                      <span className="text-gray-900 text-sm font-medium">Parent Phone Number</span>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">phone_iphone</span>
                        <input 
                          disabled={linkStatus !== 'IDLE' && linkStatus !== 'SENDING'}
                          type="tel" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full rounded-lg border-gray-300 bg-white pl-12 pr-4 h-12 text-gray-900 focus:ring-primary focus:border-primary disabled:bg-gray-100" 
                          placeholder="+256 7xx xxx xxx" 
                        />
                      </div>
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-gray-900 text-sm font-medium">Parent Email Address</span>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">mail</span>
                        <input 
                          disabled={linkStatus !== 'IDLE' && linkStatus !== 'SENDING'}
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-lg border-gray-300 bg-white pl-12 pr-4 h-12 text-gray-900 focus:ring-primary focus:border-primary disabled:bg-gray-100" 
                          placeholder="parent@example.com" 
                        />
                      </div>
                    </label>
                  </div>

                  {linkStatus === 'IDLE' && (
                    <div className="flex justify-end">
                      <button 
                        onClick={handleSendOTP}
                        disabled={!phone && !email}
                        className="h-12 px-8 rounded-lg bg-primary text-black font-bold hover:bg-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        <span className="material-symbols-outlined">send</span>
                        Send OTP to Phone & Email
                      </button>
                    </div>
                  )}

                  {linkStatus === 'SENDING' && (
                    <div className="flex justify-end">
                      <button disabled className="h-12 px-8 rounded-lg bg-gray-200 text-gray-500 font-bold flex items-center gap-2">
                        <span className="size-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></span>
                        Sending OTP...
                      </button>
                    </div>
                  )}

                  {(linkStatus === 'OTP_SENT' || linkStatus === 'VERIFYING') && (
                    <div className="flex flex-col gap-4 pt-4 border-t border-gray-200 animate-in slide-in-from-top-2 duration-300">
                      <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg flex items-start gap-3">
                        <span className="material-symbols-outlined text-blue-600 mt-0.5">info</span>
                        <div>
                          <p className="text-xs text-blue-800 font-semibold">OTP Verification Required</p>
                          <p className="text-[11px] text-blue-700 leading-tight">We've sent a 6-digit code to <strong>{phone}</strong> and <strong>{email}</strong>. Please ask the parent to provide it.</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 text-sm font-medium">Enter 6-digit OTP</span>
                          <button onClick={handleSendOTP} className="text-xs font-semibold text-primary hover:underline">Resend OTP</button>
                        </div>
                        <div className="flex gap-2">
                          <input 
                            type="text" 
                            maxLength={6}
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="flex-1 rounded-lg border-gray-300 bg-white px-4 h-12 text-center text-xl tracking-widest font-mono text-gray-900 focus:ring-primary focus:border-primary" 
                            placeholder="••••••" 
                          />
                          <button 
                            onClick={handleVerifyOTP}
                            disabled={otp.length < 6 || linkStatus === 'VERIFYING'}
                            className="h-12 px-8 rounded-lg bg-primary text-black font-bold hover:bg-green-500 transition-colors disabled:opacity-50"
                          >
                            {linkStatus === 'VERIFYING' ? 'Verifying...' : 'Verify'}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">Linking with multi-channel OTP (SMS + Email) ensures high security and reliable communication for wallet management.</p>
          </div>

          {/* Card Assignment */}
          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-lg border border-green-200 text-green-600">
                  <span className="material-symbols-outlined font-bold">contactless</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Assign Smart Card</h3>
                  <p className="text-sm text-gray-500">Activate a physical card for this student immediately.</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span className="ml-3 text-sm font-medium text-gray-900">Assign Now</span>
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-gray-900 text-sm font-medium">Card Serial Number</span>
              <div className="flex gap-2">
                <input type="text" className="flex-1 w-full rounded-lg border-gray-300 bg-white px-4 h-12 text-gray-900 focus:ring-primary focus:border-primary" placeholder="Scan or type card ID (e.g. SN-883920)" />
                <button type="button" className="h-12 px-4 rounded-lg bg-green-100 hover:bg-green-200 text-green-700 border border-green-200 flex items-center gap-2 transition-colors font-medium">
                  <span className="material-symbols-outlined font-bold">qr_code_scanner</span>
                  <span>Scan</span>
                </button>
              </div>
            </label>
          </div>

        </div>

        <div className="bg-gray-50 px-6 sm:px-8 py-5 border-t border-gray-200 flex justify-end gap-3">
          <Link to="/students" className="px-6 py-3 rounded-lg text-gray-600 font-medium hover:bg-gray-100 transition-colors">Cancel</Link>
          <button className="px-8 py-3 rounded-lg bg-primary text-black font-bold shadow-lg hover:bg-green-500 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined font-bold">check_circle</span>
            Create Student Account
          </button>
        </div>
      </div>
    </div>
  );
}