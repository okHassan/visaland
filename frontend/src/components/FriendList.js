// src/FriendList.js
import React from "react";

const FriendList = () => {
    const friends = [
        { id: 1, name: "John Doe", img: "https://via.placeholder.com/50" },
        { id: 2, name: "Jane Smith", img: "https://via.placeholder.com/50" },
        { id: 3, name: "Alice Johnson", img: "https://via.placeholder.com/50" },
    ];

    return (
        <div className="bg-white shadow-md rounded-lg p-4 max-w-lg mx-auto">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Friend List</h3>
            <ul className="space-y-4">
                {friends.map(friend => (
                    <li key={friend.id} className="flex items-center space-x-4">
                        <img src={friend.img} alt={friend.name} className="w-12 h-12 rounded-full" />
                        <span className="text-gray-700 font-medium">{friend.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendList;
