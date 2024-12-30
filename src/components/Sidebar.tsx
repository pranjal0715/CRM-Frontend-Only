import React from 'react';
import { Users, BarChart3, Calendar, Settings, MessageSquare, Home } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8">
        <Users className="w-8 h-8 text-blue-400" />
        <span className="text-xl font-bold">CRM Pro</span>
      </div>
      
      <nav>
        <ul className="space-y-2">
          {[
            { icon: Home, label: 'Dashboard' },
            { icon: Users, label: 'Customers' },
            { icon: BarChart3, label: 'Analytics' },
            { icon: Calendar, label: 'Schedule' },
            { icon: MessageSquare, label: 'Messages' },
            { icon: Settings, label: 'Settings' }
          ].map((item, index) => (
            <li key={index}>
              <button className="flex items-center gap-3 p-3 w-full hover:bg-gray-800 rounded-lg transition-colors">
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;