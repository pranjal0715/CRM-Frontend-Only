import React from 'react';

const CustomerList = () => {
  const customers = [
    { name: 'Sarah Johnson', company: 'Tech Corp', status: 'Active', email: 'sarah@techcorp.com' },
    { name: 'Michael Chen', company: 'Innovation Labs', status: 'New', email: 'michael@innov.com' },
    { name: 'Emma Davis', company: 'Design Co', status: 'Active', email: 'emma@designco.com' },
    { name: 'James Wilson', company: 'Marketing Pro', status: 'Inactive', email: 'james@marketingpro.com' },
    { name: 'Lisa Anderson', company: 'Cloud Systems', status: 'Active', email: 'lisa@cloudsys.com' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Customers</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add Customer
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Company</th>
                <th className="text-left py-3 px-4">Email</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{customer.name}</td>
                  <td className="py-3 px-4">{customer.company}</td>
                  <td className="py-3 px-4">{customer.email}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      customer.status === 'Active' ? 'bg-green-100 text-green-800' :
                      customer.status === 'New' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-800">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;