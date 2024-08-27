// src/InstagramProfilePage.js
import React from "react";
import Navber from "../components/Navber";

const ProfilePage = () => {
    const user = {
        username: "john_doe",
        fullName: "John Doe",
        profilePicture: "https://via.placeholder.com/150",
        bio: "Photographer & Traveler 🌍 | Sharing my adventures",
        website: "johndoe.com",
        posts: 120,
        followers: 1500,
        following: 300,
    };

    const posts = Array(12).fill("https://via.placeholder.com/300");

    return (
        <React.Fragment>
            <Navber />
            <div className="bg-gray-800 min-h-screen">
                <div className="max-w-screen-lg mx-auto p-4">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex items-center">
                            <img
                                src={user.profilePicture}
                                alt="Profile"
                                className="w-36 h-36 rounded-full"
                            />
                            <div className="ml-8 flex-1">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h2 className="text-2xl font-semibold">{user.username}</h2>
                                    </div>
                                    <div>
                                        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md">
                                            Follow
                                        </button>
                                        <button className="ml-2 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-md">
                                            Message
                                        </button>
                                    </div>
                                </div>
                                <div className="flex space-x-8 mb-4">
                                    <div>
                                        <span className="font-bold">{user.posts}</span>{" "}
                                        <span className="text-gray-600">posts</span>
                                    </div>
                                    <div>
                                        <span className="font-bold">{user.followers}</span>{" "}
                                        <span className="text-gray-600">followers</span>
                                    </div>
                                    <div>
                                        <span className="font-bold">{user.following}</span>{" "}
                                        <span className="text-gray-600">following</span>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="font-semibold">{user.fullName}</h1>
                                    <p>{user.bio}</p>
                                    <a
                                        href={`https://${user.website}`}
                                        className="text-blue-500"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {user.website}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-1">
                        {posts.map((post, index) => (
                            <img
                                key={index}
                                src={post}
                                alt={`Post ${index + 1}`}
                                className="w-full h-48 object-cover"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProfilePage;
