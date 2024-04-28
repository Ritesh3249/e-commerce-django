import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addUserMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue, user: 'user' }]);
      setInputValue('');
    }
  };

  const respondToUser = () => {
    // Replace this with your chatbot logic
    setTimeout(() => {
      setMessages([
        ...messages,
        { text: 'This is a response from the chatbot.', user: 'bot' },
      ]);
    }, 500);
  };

  return (
    <div className="p-4 h-80 overflow-y-auto">
      {messages.map((message, index) => (
        <div key={index} className={`mb-2 ${message.user === 'user' ? 'text-right' : ''}`}>
          <p className={`bg-${message.user === 'user' ? 'blue-500 text-white' : 'gray-200 text-gray-700'} rounded-lg py-2 px-4 inline-block`}>
            {message.text}
          </p>
        </div>
      ))}
      <div className="p-4 border-t flex">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addUserMessage();
              respondToUser();
            }
          }}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
          onClick={() => {
            addUserMessage();
            respondToUser();
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
