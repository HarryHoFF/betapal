import React from 'react';
import { LogOut, Bell, Settings } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 safe-area-top">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <span className="text-xl font-bold text-blue-600">PayPal Erhvervs BETA</span>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Send & Request</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Activity</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Wallet</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 touch-button">
            <Settings className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full text-white flex items-center justify-center text-sm font-semibold">
              {user?.fullName.charAt(0)}
            </div>
            <span className="hidden md:block text-sm font-medium text-gray-700">
              {user?.fullName}
            </span>
          </div>
          <button
            onClick={logout}
            className="p-2 text-gray-500 hover:text-red-600 rounded-full hover:bg-gray-100 touch-button"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;