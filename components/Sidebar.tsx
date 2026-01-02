import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (route: string) => path.startsWith(route);

  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-[#0d1a0d] border-r border-gray-200 dark:border-white/5 flex flex-col hidden lg:flex z-20">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="bg-primary/20 p-2 rounded-lg">
             <span className="material-symbols-outlined text-green-700 dark:text-primary">school</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-gray-900 dark:text-white text-base font-bold leading-tight">Student Pesa</h1>
            <p className="text-gray-500 dark:text-primary text-xs font-medium">Admin Console</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-2 overflow-y-auto">
        <Link
          to="/dashboard"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
            isActive('/dashboard') 
              ? 'bg-primary/10 text-green-800 dark:bg-primary/20 dark:text-primary border border-primary/20' 
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-green-700 dark:hover:text-white'
          }`}
        >
          <span className={`material-symbols-outlined ${isActive('/dashboard') ? 'fill' : ''}`}>dashboard</span>
          <span className="text-sm font-medium">Dashboard</span>
        </Link>

        <Link
          to="/students"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
            isActive('/students') 
              ? 'bg-primary/10 text-green-800 dark:bg-primary/20 dark:text-primary border border-primary/20' 
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-green-700 dark:hover:text-white'
          }`}
        >
          <span className={`material-symbols-outlined ${isActive('/students') ? 'fill' : ''}`}>group</span>
          <span className="text-sm font-medium">Student Directory</span>
        </Link>

        <Link
          to="/agents"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
            isActive('/agents') 
              ? 'bg-primary/10 text-green-800 dark:bg-primary/20 dark:text-primary border border-primary/20' 
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-green-700 dark:hover:text-white'
          }`}
        >
          <span className={`material-symbols-outlined ${isActive('/agents') ? 'fill' : ''}`}>storefront</span>
          <span className="text-sm font-medium">Agent Management</span>
        </Link>

        <Link
          to="/cards"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
            isActive('/cards') 
              ? 'bg-primary/10 text-green-800 dark:bg-primary/20 dark:text-primary border border-primary/20' 
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-green-700 dark:hover:text-white'
          }`}
        >
          <span className={`material-symbols-outlined ${isActive('/cards') ? 'fill' : ''}`}>credit_card</span>
          <span className="text-sm font-medium">Card Operations</span>
        </Link>

        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-white/5">
          <p className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">System</p>
          <Link 
            to="/settings" 
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
              isActive('/settings') 
                ? 'bg-primary/10 text-green-800 dark:bg-primary/20 dark:text-primary border border-primary/20' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-green-700 dark:hover:text-white'
            }`}
          >
            <span className={`material-symbols-outlined ${isActive('/settings') ? 'fill' : ''}`}>settings</span>
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-white/5 mt-auto">
        <div className="flex items-center gap-3 px-2 py-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-bold text-xs">
            AD
          </div>
          <div className="flex flex-col overflow-hidden">
            <p className="text-sm font-bold text-gray-900 dark:text-white truncate">Admin User</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">admin@school.edu</p>
          </div>
          <Link to="/login" className="ml-auto text-gray-400 hover:text-red-500 transition-colors">
            <span className="material-symbols-outlined text-lg">logout</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;