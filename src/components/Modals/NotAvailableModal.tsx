import React from 'react';
import { AlertCircle } from 'lucide-react';

interface NotAvailableModalProps {
  onClose: () => void;
}

const NotAvailableModal: React.FC<NotAvailableModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4" style={{ zIndex: 9999 }}>
      <div className="bg-white rounded-lg shadow-2xl max-w-sm w-full">
        <div className="p-6 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mb-4">
            <AlertCircle className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Feature Unavailable
          </h3>
          <p className="text-gray-600 mb-4">
            Not available at the moment
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-colors"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotAvailableModal;