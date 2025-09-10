import React, { useState } from 'react';
import Header from '../Layout/Header';
import BalanceCard from './BalanceCard';
import QuickActions from './QuickActions';
import TransactionList from '../Transactions/TransactionList';
import SendMoneyModal from '../Modals/SendMoneyModal';
import RequestMoneyModal from '../Modals/RequestMoneyModal';
import NotAvailableModal from '../Modals/NotAvailableModal';

const Dashboard: React.FC = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [showSendModal, setShowSendModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showNotAvailableModal, setShowNotAvailableModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 safe-area-bottom">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-4 md:py-8">
        <div className="space-y-6">
            <BalanceCard 
              showBalance={showBalance}
              onToggleBalance={() => setShowBalance(!showBalance)}
              onSendMoney={() => setShowSendModal(true)}
              onAddMoney={() => setShowNotAvailableModal(true)}
            />
            <QuickActions
              onSendMoney={() => setShowSendModal(true)}
              onRequestMoney={() => setShowRequestModal(true)}
              onTopUp={() => setShowNotAvailableModal(true)}
              onSplit={() => setShowNotAvailableModal(true)}
            />
            <TransactionList />
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="text-sm text-gray-600">Payment received from Maria</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="text-sm text-gray-600">Sent money to Jakob</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div className="text-sm text-gray-600">Netflix payment processed</div>
                </div>
              </div>
            </div>
        </div>
      </main>

      {showSendModal && (
        <SendMoneyModal onClose={() => setShowSendModal(false)} />
      )}

      {showRequestModal && (
        <RequestMoneyModal onClose={() => setShowRequestModal(false)} />
      )}

      {showNotAvailableModal && (
        <NotAvailableModal onClose={() => setShowNotAvailableModal(false)} />
      )}
    </div>
  );
};

export default Dashboard;