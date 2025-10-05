import React, { useState } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, BarChart3, Database, Brain, Settings, LogOut, Bell, Search, Menu, X, User } from 'lucide-react';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FileText, label: 'Reports', path: '/dashboard/reports' },
    { icon: BarChart3, label: 'Analytics', path: '/dashboard/analytics' },
    { icon: Database, label: 'Data Sources', path: '/dashboard/data-sources' },
    { icon: Brain, label: 'AI Insights', path: '/dashboard/ai-insights' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' }
  ];

  const handleLogout = () => {
    // Clear auth and navigate to home
    navigate('/');
  };

  return (
    <div className="bg-black min-h-screen flex">
      {/* Sidebar */}
      <aside className={`bg-[#121212] border-r border-[rgba(255,255,255,0.25)] transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'} flex flex-col`}>
        <div className="p-6 border-b border-[rgba(255,255,255,0.25)] flex items-center justify-between">
          {sidebarOpen && <h1 className="heading-3 text-[#00FFD1]">VINAEU AI</h1>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white hover:text-[#00FFD1] transition-colors">
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <nav className="flex-1 p-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-4 p-4 mb-2 rounded-none transition-all duration-300 ${
                  isActive 
                    ? 'bg-[rgba(0,255,209,0.1)] text-[#00FFD1] border-l-4 border-[#00FFD1]' 
                    : 'text-[#4D4D4D] hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                }`}
              >
                <item.icon size={20} />
                {sidebarOpen && <span className="body-medium">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[rgba(255,255,255,0.25)]">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 p-4 text-[#4D4D4D] hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300"
          >
            <LogOut size={20} />
            {sidebarOpen && <span className="body-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="bg-[#121212] border-b border-[rgba(255,255,255,0.25)] px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#4D4D4D]" size={20} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-black border border-[rgba(255,255,255,0.25)] pl-12 pr-4 py-3 text-white body-medium focus:outline-none focus:border-[#00FFD1] transition-colors"
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button className="relative text-[#4D4D4D] hover:text-white transition-colors">
                <Bell size={24} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#00FFD1] rounded-full"></span>
              </button>
              <button className="flex items-center gap-3 text-white hover:text-[#00FFD1] transition-colors">
                <div className="w-10 h-10 bg-[#00FFD1] rounded-full flex items-center justify-center text-black">
                  <User size={20} />
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;