import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Dashboard } from "./Dashboard";
import { Menu, Globe } from "lucide-react";
import { Button } from "./ui/button";
import logo from "figma:asset/710782100269a767693ea5131362aed950b519c0.png";

export function DashboardApp() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col bg-[#E6E6E6]" style={{ height: '2000px' }}>
      {/* Chrome-Style URL Bar */}
      <header className="bg-white border-b border-gray-200 px-4 py-2 flex items-center gap-3 shadow-sm flex-shrink-0">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
          <Globe className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-700">https://app.supergrc.com/dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#CFE928', color: '#151719' }}>
            JD
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden min-h-0">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        <main className="flex-1 flex flex-col bg-[#E6E6E6]">
          {/* Logo and Title Section */}
          <div className="bg-white border-b border-gray-200 px-6 py-3 flex-shrink-0">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Super GRC" className="h-10" />
              <div>
                <h1 className="text-[#151719]">Risk & Compliance Platform</h1>
                <p className="text-[#151719]/60 text-sm">Enterprise Risk Management System</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <Dashboard />
          </div>
        </main>
      </div>
    </div>
  );
}