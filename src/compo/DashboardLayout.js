'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import AddTransactionForm from './AddTransactionForm';
import TransactionList from './TransactionList';
import BudgetForm from './BudgetForm';
import Dashboard from './Dashboard';

const DashboardLayout = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const transactions = useSelector((state) => state.transactions);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <Dashboard />;
      case 'addTransaction':
        return <AddTransactionForm />;
      case 'transactions':
        return <TransactionList />;
      case 'budgetform':
        return <BudgetForm />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-black p-4 space-y-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul className="space-y-2">
          {[
            { key: 'dashboard', label: 'Overview' },
            { key: 'addTransaction', label: 'Add Transaction' },
            { key: 'transactions', label: 'Transaction List' },
            { key: 'budgetform', label: 'Budget Form' },
          ].map(({ key, label }) => (
            <li key={key}>
              <button
                className={`w-full text-left p-2 rounded transition ${
                  activeComponent === key ? 'bg-gray-700' : 'hover:bg-gray-600'
                }`}
                onClick={() => setActiveComponent(key)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">{renderComponent()}</main>
    </div>
  );
};

export default DashboardLayout;
