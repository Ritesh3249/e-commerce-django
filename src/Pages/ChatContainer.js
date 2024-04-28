import React, { useState } from 'react';
import Chat from './Chat';

function ChatContainer() {
  const [isChatboxOpen, setIsChatboxOpen] = useState(true);

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  return (
    <div>
      {isChatboxOpen && (
        <div className="fixed bottom-16 right-4 w-96">
          <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
            <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
              <p className="text-lg font-semibold">Admin Bot</p>
              <button
                className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                onClick={toggleChatbox}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <Chat />
          </div>
        </div>
      )}
      <div className="fixed bottom-0 right-0 mb-4 mr-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
          onClick={toggleChatbox}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Chat with Admin Bot
        </button>
      </div>
    </div>
  );
}

export default ChatContainer;
