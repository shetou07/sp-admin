import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const formatName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1).replace('-', ' ');
  };

  return (
    <header className="h-16 flex items-center justify-between px-6 lg:px-8 border-b border-gray-200 dark:border-white/5 bg-white/80 dark:bg-[#102210]/95 backdrop-blur shrink-0 sticky top-0 z-10">
      <div className="flex items-center gap-4 lg:hidden">
        <button className="text-gray-500 dark:text-gray-400">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <span className="font-bold text-lg text-gray-900 dark:text-white">Student Pesa</span>
      </div>

      <div className="hidden lg:flex items-center text-sm font-medium">
        <Link to="/dashboard" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
          Dashboard
        </Link>
        {pathnames.length > 0 && pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <React.Fragment key={name}>
              <span className="material-symbols-outlined text-base text-gray-400 mx-2">chevron_right</span>
              {isLast ? (
                <span className="text-gray-900 dark:text-white font-bold">{formatName(name)}</span>
              ) : (
                <Link to={routeTo} className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                  {formatName(name)}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-[#102210]"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;