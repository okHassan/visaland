// src/MessengerPage.js
import React, { useState } from "react";
import Navber from "../components/Navber";

const Message = () => {
    const [selectedChat, setSelectedChat] = useState(null);

    const contacts = [
        { id: 1, name: "Jane Doe", img: "https://via.placeholder.com/50" },
        { id: 2, name: "John Smith", img: "https://via.placeholder.com/50" },
        { id: 3, name: "Alice Johnson", img: "https://via.placeholder.com/50" },
    ];

    const messages = [
        { id: 1, text: "Hey there!", sender: "Jane Doe" },
        { id: 2, text: "How's it going?", sender: "John Smith" },
        { id: 3, text: "Let’s catch up soon.", sender: "Alice Johnson" },
    ];

    return (
        <React.Fragment>
            <Navber />
            <div className="flex h-screen bg-gray-900 text-white">
                {/* Sidebar for Contacts */}
                <div className="w-1/4 bg-gray-800 p-4">
                    <h2 className="text-xl font-bold mb-4">Chats</h2>
                    <ul className="space-y-4">
                        {contacts.map(contact => (
                            <li
                                key={contact.id}
                                onClick={() => setSelectedChat(contact)}
                                className={`flex items-center space-x-4 p-2 rounded-lg cursor-pointer ${selectedChat?.id === contact.id
                                    ? "bg-gray-700"
                                    : "hover:bg-gray-700"
                                    }`}
                            >
                                <img
                                    src={contact.img}
                                    alt={contact.name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <span className="font-medium">{contact.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Chat Area */}
                <div className="w-3/4 bg-gray-900 p-4 flex flex-col">
                    {selectedChat ? (
                        <>
                            <div className="border-b border-gray-700 pb-4 mb-4">
                                <h2 className="text-2xl font-bold">{selectedChat.name}</h2>
                            </div>
                            <div className="flex-1 overflow-y-auto space-y-4">
                                {messages.map(message => (
                                    <div
                                        key={message.id}
                                        className={`flex ${message.sender === selectedChat.name
                                            ? "justify-start"
                                            : "justify-end"
                                            }`}
                                    >
                                        <div
                                            className={`p-3 rounded-lg max-w-xs ${message.sender === selectedChat.name
                                                ? "bg-gray-700 text-white"
                                                : "bg-blue-600 text-white"
                                                }`}
                                        >
                                            {message.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center">
                            <h2 className="text-2xl font-bold">Select a chat to start messaging</h2>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Message;
