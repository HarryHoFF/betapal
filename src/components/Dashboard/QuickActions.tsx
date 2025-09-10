import React from 'react';
import { Send, Download, CreditCard, Users } from 'lucide-react';

interface QuickActionsProps {
  onSendMoney: () => void;
  onRequestMoney: () => void;
  onTopUp: () => void;
  onSplit: () => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onSendMoney, onRequestMoney, onTopUp, onSplit }) => {
  const actions = [
    {
      icon: Send,
      title: 'Send',
      description: 'Send money to friends',
      onClick: onSendMoney,
      color: 'bg-blue-50 text-blue-600 hover:bg-blue-100'
    },
    {
      icon: Download,
      title: 'Request',
      description: 'Request money',
      onClick: onRequestMoney,
      color: 'bg-green-50 text-green-600 hover:bg-green-100'
    },
    {
      icon: CreditCard,
      title: 'Top up',
      description: 'Add money to wallet',
      onClick: onTopUp,
      color: 'bg-purple-50 text-purple-600 hover:bg-purple-100'
    },
    {
      icon: Users,
      title: 'Split',
      description: 'Split a bill',
      onClick: onSplit,
      color: 'bg-orange-50 text-orange-600 hover:bg-orange-100'
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className={`${action.color} p-4 rounded-lg transition-colors text-center touch-button`}
          >
            <action.icon className="w-6 h-6 mx-auto mb-2" />
            <div className="font-medium text-sm">{action.title}</div>
            <div className="text-xs opacity-75 mt-1">{action.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;