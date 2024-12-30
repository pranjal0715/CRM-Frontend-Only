import React from 'react';
import { MessageSquare, Send } from 'lucide-react';

const MessageList = () => {
  const messages = [
    { sender: 'Sarah Johnson', content: 'When can we schedule the next meeting?', time: '10:30 AM', unread: true },
    { sender: 'Michael Chen', content: 'The proposal looks great!', time: '09:15 AM', unread: false },
    { sender: 'Emma Davis', content: 'I need help with the new features', time: 'Yesterday', unread: true },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md h-[calc(100vh-2rem)]">
      <div className="flex h-full">
        {/* Message List */}
        <div className="w-1/3 border-r">
          <div className="p-4 border-b">
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="overflow-y-auto h-[calc(100%-4rem)]">
            {messages.map((message, index) => (
              <div key={index} className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold">{message.sender}</h3>
                  <span className="text-xs text-gray-500">{message.time}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{message.content}</p>
                {message.unread && (
                  <div className="mt-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      New
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Message Content */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b">
            <h2 className="font-semibold">Sarah Johnson</h2>
            <p className="text-sm text-gray-600">Tech Corp</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            {/* Messages would go here */}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageList;