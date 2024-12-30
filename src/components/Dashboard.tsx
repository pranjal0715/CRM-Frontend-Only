import React from 'react';
import { Users, DollarSign, TrendingUp, Clock } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex-1 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { icon: Users, label: 'Total Customers', value: '1,234', color: 'bg-blue-500' },
          { icon: DollarSign, label: 'Revenue', value: '$45,678', color: 'bg-green-500' },
          { icon: TrendingUp, label: 'Growth', value: '+12.3%', color: 'bg-purple-500' },
          { icon: Clock, label: 'Avg. Response', value: '2.4h', color: 'bg-orange-500' }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Customers</h2>
          <div className="space-y-4">
            {[
              { name: 'Sarah Johnson', company: 'Tech Corp', status: 'Active' },
              { name: 'Michael Chen', company: 'Innovation Labs', status: 'New' },
              { name: 'Emma Davis', company: 'Design Co', status: 'Active' },
              { name: 'James Wilson', company: 'Marketing Pro', status: 'Inactive' }
            ].map((customer, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    {customer.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{customer.name}</p>
                    <p className="text-sm text-gray-500">{customer.company}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  customer.status === 'Active' ? 'bg-green-100 text-green-800' :
                  customer.status === 'New' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {customer.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {[
              { action: 'New customer signed up', time: '2 hours ago' },
              { action: 'Meeting scheduled with Tech Corp', time: '4 hours ago' },
              { action: 'Project milestone completed', time: '6 hours ago' },
              { action: 'New support ticket opened', time: '8 hours ago' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;