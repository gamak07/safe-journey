import React from 'react';
import { FaChevronRight, FaCreditCard, FaCrown, FaDatabase, FaSignOutAlt, FaTrash } from 'react-icons/fa';

const accountItems = [
  {
    key: 'status',
    title: 'Account Status',
    desc: 'Premium Member',
    icon: <FaCrown className="text-yellow-500 text-xl mr-3" />,
    descClass: 'text-green-600 font-medium',
    type: 'status',
  },
  {
    key: 'subscription',
    title: 'Subscription Details',
    desc: 'Manage billing and plans',
    icon: <FaCreditCard className="text-gray-500 text-xl mr-3" />,
    type: 'link',
  },
  {
    key: 'data',
    title: 'Data Management',
    desc: 'Export or delete your data',
    icon: <FaDatabase className="text-gray-500 text-xl mr-3" />,
    type: 'link',
  },
];

export default function AccountManagement() {
  return (
    <div className="mb-24 rounded-lg border border-gray-200 bg-white p-6 shadow-sm ">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Management</h2>
      <div className="space-y-4 mb-4">
        {accountItems.map((item, idx) => (
          <div key={item.key} className="flex items-center justify-between p-2">
            <div className="flex items-center">
              {item.icon}
              <div>
                <div className="text-base font-semibold text-gray-900 flex items-center gap-2">{item.title}
                  {item.type === 'status' && (
                    <span className={`ml-2 text-xs px-2 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 font-semibold`}> {/* visually hidden, for status only */}</span>
                  )}
                </div>
                <div className={item.descClass ? item.descClass + ' text-sm' : 'text-sm text-gray-500'}>{item.desc}</div>
              </div>
            </div>
            {item.type !== 'status' && <FaChevronRight className="text-gray-400" />}
          </div>
        ))}
      </div>
      <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-lg text-base transition-colors mb-4">
        <FaSignOutAlt className="text-lg" />
        Logout
      </button>
      <button className="w-full flex items-center justify-center gap-2 border-2 border-red-200 text-red-600 font-semibold py-4 rounded-lg text-base transition-colors bg-white hover:bg-red-50">
        <FaTrash className="text-lg" />
        Delete Account
      </button>
    </div>
  );
}
