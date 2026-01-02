import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import StudentDirectory from './pages/StudentDirectory';
import AddStudent from './pages/AddStudent';
import RemoveStudent from './pages/RemoveStudent';
import AgentManagement from './pages/AgentManagement';
import AddAgent from './pages/AddAgent';
import CardManagement from './pages/CardManagement';
import ActivateCard from './pages/ActivateCard';
import DeactivateCard from './pages/DeactivateCard';
import ReportLostCard from './pages/ReportLostCard';
import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const Layout = ({ children, isDark = false }: { children?: React.ReactNode, isDark?: boolean }) => {
  const location = useLocation();
  
  // Force dark mode class on html element for specific routes to match screenshots
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-200 font-sans">
      <Sidebar />
      <div className="flex flex-1 flex-col h-full overflow-hidden relative">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6 lg:p-8 scroll-smooth">
          {children}
        </main>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Dark Mode Pages */}
        <Route path="/login" element={<Layout isDark={true}><Login /></Layout>} />
        <Route path="/dashboard" element={<Layout isDark={true}><Dashboard /></Layout>} />
        
        {/* Light Mode Pages */}
        <Route path="/students" element={<Layout isDark={false}><StudentDirectory /></Layout>} />
        <Route path="/students/new" element={<Layout isDark={false}><AddStudent /></Layout>} />
        <Route path="/students/remove" element={<Layout isDark={false}><RemoveStudent /></Layout>} />
        
        <Route path="/agents" element={<Layout isDark={false}><AgentManagement /></Layout>} />
        <Route path="/agents/new" element={<Layout isDark={false}><AddAgent /></Layout>} />
        
        <Route path="/cards" element={<Layout isDark={false}><CardManagement /></Layout>} />
        <Route path="/cards/activate" element={<Layout isDark={false}><ActivateCard /></Layout>} />
        <Route path="/cards/deactivate" element={<Layout isDark={false}><DeactivateCard /></Layout>} />
        <Route path="/cards/lost" element={<Layout isDark={false}><ReportLostCard /></Layout>} />

        <Route path="/settings" element={<Layout isDark={false}><Settings /></Layout>} />
      </Routes>
    </HashRouter>
  );
}