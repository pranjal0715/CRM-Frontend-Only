import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './components/Dashboard';
import CustomerList from './components/customers/CustomerList';
import AnalyticsDashboard from './components/analytics/AnalyticsDashboard';
import Calendar from './components/schedule/Calendar';
import MessageList from './components/messages/MessageList';
import Settings from './components/settings/Settings';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-8 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers" element={<CustomerList />} />
            <Route path="/analytics" element={<AnalyticsDashboard />} />
            <Route path="/schedule" element={<Calendar />} />
            <Route path="/messages" element={<MessageList />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;