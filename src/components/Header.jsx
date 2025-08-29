// Layout.jsx
import { ChevronFirst, ChevronLast, MoveVertical, Search, Sun, Moon, EllipsisVertical, Database, Barcode} from "lucide-react";
import logo from "../assets/logo.png";
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""} h-screen flex`}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

/* ---------------- SIDEBAR ---------------- */
const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen flex bg-white dark:bg-gray-800">
      <nav className="h-full flex flex-col border-r shadow-sm">
        {/* Top */}
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={logo}
            alt="logo-image"
            className={`overflow-hidden rounded-full transition-all duration-200 ${expanded ? "w-20" : "w-0"}`}
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">
            <SidebarItem text="Dashboard" icon={<Database />} active />
            <SidebarItem text="Projects" icon={<Barcode/>} />
            <SidebarItem text="Teams" icon={<EllipsisVertical />} />
            <SidebarItem text="Settings" icon={<EllipsisVertical />} />
          </ul>
        </SidebarContext.Provider>

        {/* Bottom Profile */}
        <div className="border-t flex p-3">
          <img src={logo} alt="profile" className="w-10 h-10 rounded-md" />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0 ml-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Udaya</h4>
              <span className="text-xs text-gray-500 dark:text-gray-400">Profile Description</span>
            </div>
            <EllipsisVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export function SidebarItem({ icon, text, active }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group 
      ${active ? "bg-gradient-to-tr from-indigo-400 to-indigo-700 text-white" : "hover:bg-indigo-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"}`}
    >
      {icon}
      <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0 ml-0"}`}>{text}</span>

      {!expanded && (
        <div
          className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-white text-sm 
          invisible opacity-0 translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
        >
          {text}
        </div>
      )}
    </li>
  );
}

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
