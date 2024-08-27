import React from 'react'

const CreatePost = () => {
    return (
        <div className="max-w-xl mx-auto bg-gray-900 shadow-md rounded-lg pt-6 px-[36px] pb-4 mb-4">
            <div className="flex items-center space-x-8 mb-4">
                <img
                    src="https://via.placeholder.com/50"
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                />
                <input
                    type="text"
                    placeholder="What's on your mind, John?"
                    className="w-full pl-6 pr-2 py-2 bg-gray-700 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
            </div>
            <div className="flex justify-between items-center gap-10">
                <button className="flex items-center space-x-2 p-2 rounded-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-red-500"
                    >
                        <path d="M21.42 5.76A2 2 0 0019.66 4H4.34a2 2 0 00-1.76 1.76v12.48a2 2 0 001.76 1.76h15.32a2 2 0 001.76-1.76V5.76zM12 15.5a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5zm7-7h-4.35a.25.25 0 01-.25-.25V4.5h4.35a.5.5 0 01.5.5v3.5a.5.5 0 01-.5.5z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Photo/Video</span>
                </button>
                <button className="flex items-center space-x-2 p-2 rounded-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-green-500"
                    >
                        <path d="M12 2a9.994 9.994 0 00-8 4.268A9.995 9.995 0 000 12a9.995 9.995 0 004.268 8A9.995 9.995 0 0012 22a9.994 9.994 0 008-4.268A9.995 9.995 0 0024 12a9.995 9.995 0 00-4.268-8A9.994 9.994 0 0012 2zm0 18a8 8 0 010-16 8 8 0 010 16zm-4-6h3V7a1 1 0 012 0v7h3a1 1 0 010 2h-8a1 1 0 010-2z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Live Video</span>
                </button>
                <button className="flex items-center space-x-2 p-2 rounded-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-blue-500"
                    >
                        <path d="M21 13.268V4a2 2 0 00-2-2H5a2 2 0 00-2 2v9.268A5.97 5.97 0 000 16v5a1 1 0 001 1h22a1 1 0 001-1v-5a5.97 5.97 0 00-2-2.732zM20 14H4a4 4 0 100 8h16a4 4 0 100-8zm-2 6a2 2 0 11-2-2 2 2 0 012 2zm-10-2a2 2 0 11-2 2 2 2 0 012-2zm8.2-7h-8.4a1 1 0 01-1-1V5a1 1 0 011-1h8.4a1 1 0 011 1v5a1 1 0 01-1 1z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Feeling/Activity</span>
                </button>
            </div>
        </div>
    )
}

export default CreatePost