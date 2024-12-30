import React from 'react';

const Calendar = () => {
  const events = [
    { title: 'Client Meeting', time: '09:00 AM', date: '2024-03-20', client: 'Tech Corp' },
    { title: 'Product Demo', time: '02:00 PM', date: '2024-03-20', client: 'Innovation Labs' },
    { title: 'Strategy Review', time: '11:00 AM', date: '2024-03-21', client: 'Design Co' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Schedule</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Event
        </button>
      </div>

      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
            <div className="flex-1">
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.client}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">{event.time}</p>
              <p className="text-sm text-gray-600">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;