import { Search } from 'lucide-react';

interface AdminHeaderProps {
  onSearch: (query: string) => void;
  onAddNew: () => void;
}

export default function AdminHeader({ onSearch, onAddNew }: AdminHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search projects..."
          className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <button
        onClick={onAddNew}
        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Add New Project
      </button>
    </div>
  );
}