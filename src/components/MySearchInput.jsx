import { Search } from "lucide-react";

function MySearchInput() {
  return (
    <div className="relative w-full max-w-md">
      {/* Clickable Icon */}
      <button
        type="button"
        className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full 
                   text-gray-400 hover:text-indigo-600 hover:bg-gray-100 
                   dark:hover:bg-gray-700 transition-colors"
        onClick={() => alert("Searching...")}
      >
        <Search size={18} />
      </button>

      {/* Input */}
      <input
        type="text"
        placeholder="Search anything..."
        className="w-full pl-10 pr-4 py-2 rounded-2xl border border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                   shadow-sm transition-all duration-200"
      />
    </div>
  );
}

export default MySearchInput;
