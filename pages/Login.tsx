import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#234829] px-6 lg:px-10 py-3 bg-white/50 dark:bg-[#102213]/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4 text-slate-900 dark:text-white">
          <div className="size-8 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path></svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Student Pesa</h2>
        </div>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-200 dark:bg-[#234829] text-slate-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
          <span className="truncate">Support</span>
        </button>
      </header>
      
      <div className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="w-full max-w-[480px] flex flex-col gap-6 rounded-xl bg-white dark:bg-[#152a18] p-6 sm:p-8 shadow-xl border border-slate-200 dark:border-[#234829]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2"><span className="material-symbols-outlined text-primary" style={{fontSize: 32}}>lock</span></div>
            <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Admin Portal</h1>
            <p className="text-slate-500 dark:text-[#92c99b] text-base font-normal leading-normal">Log in to manage Student Pesa accounts.</p>
          </div>
          
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <label className="flex flex-col gap-1.5">
              <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Email or Username</p>
              <div className="flex w-full items-stretch rounded-lg group focus-within:ring-2 ring-primary/50 transition-all duration-200">
                <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border border-slate-300 dark:border-[#32673b] bg-slate-50 dark:bg-[#19331e] h-12 px-4 placeholder:text-slate-400 dark:placeholder:text-[#5e8c67] text-base font-normal leading-normal border-r-0" placeholder="admin@studentpesa.com" type="text" defaultValue="admin@studentpesa.com" />
                <div className="flex items-center justify-center px-4 rounded-r-lg border border-l-0 border-slate-300 dark:border-[#32673b] bg-slate-50 dark:bg-[#19331e]"><span className="material-symbols-outlined text-slate-400 dark:text-[#92c99b]">person</span></div>
              </div>
            </label>
            <label className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center"><p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Password</p><a className="text-sm font-medium text-primary hover:text-green-400 transition-colors" href="#">Forgot Password?</a></div>
              <div className="flex w-full items-stretch rounded-lg group focus-within:ring-2 ring-primary/50 transition-all duration-200">
                <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border border-slate-300 dark:border-[#32673b] bg-slate-50 dark:bg-[#19331e] h-12 px-4 placeholder:text-slate-400 dark:placeholder:text-[#5e8c67] text-base font-normal leading-normal border-r-0" placeholder="Enter password" type="password" />
                <div className="flex items-center justify-center px-4 rounded-r-lg border border-l-0 border-slate-300 dark:border-[#32673b] bg-slate-50 dark:bg-[#19331e] cursor-pointer hover:bg-slate-100 dark:hover:bg-[#204026] transition-colors"><span className="material-symbols-outlined text-slate-400 dark:text-[#92c99b]">visibility</span></div>
              </div>
            </label>
            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-green-500 text-[#112214] text-base font-bold leading-normal tracking-[0.015em] transition-colors mt-2 shadow-lg shadow-green-900/20"><span className="truncate">Log In</span></button>
          </form>

          <div className="flex items-center justify-center gap-2 pt-2 border-t border-slate-100 dark:border-[#234829]">
            <span className="material-symbols-outlined text-slate-400 dark:text-[#5e8c67] text-[18px]">verified_user</span>
            <p className="text-slate-400 dark:text-[#5e8c67] text-xs font-medium">Secure 256-bit SSL Connection</p>
          </div>
        </div>
        
        <div className="fixed inset-0 pointer-events-none z-[-1]">
          <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <footer className="mt-8 text-center">
          <p className="text-slate-500 dark:text-[#5e8c67] text-sm">© 2025 Student Pesa. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}