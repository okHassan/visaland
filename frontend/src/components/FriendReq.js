// src/FriendRequests.js
import React, { useState } from "react";

const FriendRequests = () => {
    const [requests, setRequests] = useState([
        { id: 1, name: "Michael Brown", img: "https://via.placeholder.com/50" },
        { id: 2, name: "Emily Davis", img: "https://via.placeholder.com/50" },
    ]);

    const handleAccept = (id) => {
        setRequests(requests.filter(request => request.id !== id));
        // Here you can add additional logic for accepting a friend request.
    };

    const handleDecline = (id) => {
        setRequests(requests.filter(request => request.id !== id));
        // Here you can add additional logic for declining a friend request.
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 max-w-lg mx-auto">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Friend Requests</h3>
            <ul className="space-y-4">
                {requests.map(request => (
                    <li key={request.id} className="flex items-center space-x-4">
                        <img src={request.img} alt={request.name} className="w-12 h-12 rounded-full" />
                        <span className="text-gray-700 font-medium">{request.name}</span>
                        <div className="ml-auto space-x-2">
                            <button
                                onClick={() => handleAccept(request.id)}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                            >
                                Accept
                            </button>
                            <button
                                onClick={() => handleDecline(request.id)}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
                            >
                                Decline
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendRequests;
