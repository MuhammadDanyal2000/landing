import React, { useEffect, useState } from 'react';

function AIChat() {
    const [isChatboxOpen, setIsChatboxOpen] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);

    const toggleChatbox = () => {
        setIsChatboxOpen(!isChatboxOpen);
    };

    const handleSendMessage = () => {
        if (userInput.trim() !== '') {
            setMessages([...messages, { text: userInput, sender: 'user' }]);
            
            setUserInput('');
        }
    };

    const handleUserInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    const respondToUser = (message) => {
     
            setMessages([...messages, { text: 'Welcome to Enkelutleie', sender: 'bot' }]);
      
    };
    useEffect(() => {
        
        setTimeout(() => {
            respondToUser();
            
        }, 5000);
    }, []);

    return (
        <>
            <div className="fixed bottom-0 right-0 mb-4 mr-4 z-30">
                <button id="open-chat" className="bg-blue-500 text-white py-6 px-6 rounded-full hover:bg-blue-600 transition duration-300 flex items-center text-lg animate-bounce" onClick={toggleChatbox}>      
                    Chat 
                </button>
            </div>
            <div id="chat-container" className={`fixed bottom-16 z-40 right-4 w-96 ${isChatboxOpen ? '' : 'hidden'}`}>
                <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
                    <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
                        <p className="text-lg font-semibold">Admin Bot</p>
                        <button id="close-chat" className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400" onClick={toggleChatbox}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div id="chatbox" className="p-4 h-80 overflow-y-auto">
                        {messages.map((message, index) => (
                            <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
            <div className={`px-4 py-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
              {message.text}
            </div>
          </div>
                        ))}
                    </div>
                    <div className="p-4 border-t flex">
                        <input  type="text" placeholder="Type a message" className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={userInput} onChange={handleUserInputChange} onKeyUp={handleKeyUp} />
                        <button  className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300" onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AIChat;

