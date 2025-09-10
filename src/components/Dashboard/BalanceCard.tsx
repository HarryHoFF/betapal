import React from 'react';
import { Eye, EyeOff, Plus, ArrowUpRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface BalanceCardProps {
  showBalance: boolean;
  onToggleBalance: () => void;
  onSendMoney: () => void;
  onAddMoney: () => void;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ showBalance, onToggleBalance, onSendMoney, onAddMoney }) => {
  const { user } = useAuth();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('da-DK', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">PayPal Erhvervs BETA Balance</h2>
        <button
          onClick={onToggleBalance}
          className="p-1 hover:bg-white/20 rounded transition-colors"
        >
          {showBalance ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>

      <div className="mb-6">
        <div className="text-3xl font-bold mb-1">
          {showBalance ? formatCurrency(user?.balance || 0) : '€ ••••••'}
        </div>
        <p className="text-blue-200 text-sm">Available balance</p>
      </div>

      <div className="flex space-x-3">
        <button 
          onClick={onAddMoney}
          className="flex-1 bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center space-x-2 touch-button"
        >
          <Plus className="w-4 h-4" />
          <span>Add Money</span>
        </button>
        <button 
          onClick={onSendMoney}
          className="flex-1 bg-white text-blue-600 hover:bg-gray-50 font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center space-x-2 touch-button"
        >
          <ArrowUpRight className="w-4 h-4" />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};

export default BalanceCard;