// Layout.jsx
import { ChevronFirst, ChevronLast, MoveVertical, Search, Sun, Moon, EllipsisVertical, Database, Barcode} from "lucide-react";
import logo from "../assets/logo.png";
import { createContext, useState } from "react";
import Sidebar from "./MySidebar.jsx";
const SidebarContext = createContext();

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""} h-screen bg-amber-300 flex`}>
      <SidebarContext.Provider value={{ expanded: true }}>
        <Sidebar />
      </SidebarContext.Provider>

      {/* Main */}
      <div className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

/* ---------------- HEADER ---------------- */
const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="w-full h-16 bg-white dark:bg-gray-800 border-b px-4 flex items-center justify-between shadow-sm">
      {/* Left - Logo + Company Name */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-8 h-8 rounded-full" />
        <span className="font-bold text-lg">YeTi</span>
      </div>

      {/* Center - Search */}
      <div className="flex-1 max-w-md mx-4 relative">
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-indigo-400 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      {/* Right - User Info + Dark Mode */}
      <div className="flex items-center gap-4">
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <div className="flex items-center gap-2">
          <img src={logo} alt="user" className="w-8 h-8 rounded-full" />
          <span className="hidden sm:inline font-medium">udaya</span>
        </div>
      </div>
    </header>
  );
};
