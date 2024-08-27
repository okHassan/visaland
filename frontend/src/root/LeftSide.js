import React from 'react'

const LeftSide = () => {
    return (
        <div className="w-64 bg-gray-800 pl-10 pr-4 py-4">
            <div className="flex items-center space-x-4 mb-6">
                <img
                    src="https://via.placeholder.com/40"
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                />
                <span className="font-bold text-gray-400">John Doe</span>
            </div>
            <div className="space-y-6">
                <button className="flex items-center space-x-2 w-full p-2 hover:bg-gray-600 duration-150 rounded-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-blue-500"
                    >
                        <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 15h-2v-2h2zm0-4h-2V7h2z" />
                    </svg>
                    <span className="text-gray-400 font-medium">Home</span>
                </button>
                <button className="flex items-center space-x-2 w-full p-2 hover:bg-gray-600 duration-150 rounded-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-green-500"
                    >
                        <path d="M19 7h-1V6a5 5 0 00-10 0v1H7a3 3 0 00-3 3v8a3 3 0 003 3h12a3 3 0 003-3v-8a3 3 0 00-3-3zm-7-1a3 3 0 016 0v1H8V6a3 3 0 014-2zm7 12a1 1 0 01-1 1H7a1 1 0 01-1-1v-8a1 1 0 011-1h12a1 1 0 011 1zm-4.29-4.29L14 14.59V12a1 1 0 00-2 0v2.59l-1.29-1.29a1 1 0 00-1.42 1.42l3 3a1 1 0 001.42 0l3-3a1 1 0 00-1.42-1.42z" />
                    </svg>
                    <span className="text-gray-400 font-medium">Friends</span>
                </button>
                <button className="flex items-center space-x-2 w-full p-2 hover:bg-gray-600 duration-150 rounded-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-purple-500"
                    >
                        <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM5 19V5h14l.001 14H5zm7-10.5a2.5 2.5 0 11-2.5 2.5 2.503 2.503 0 012.5-2.5zm0 6a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM6 17h12v1H6zm2.5-2.5a.5.5 0 10-.5-.5.5.5 0 00.5.5zm5 0a.5.5 0 10-.5-.5.5.5 0 00.5.5zm-7.51-6.01a.5.5 0 10-.98 0 .5.5 0 00.98 0zm13.02 0a.5.5 0 10-.98 0 .5.5 0 00.98 0zM8 15.5a.5.5 0 10-.5-.5.5.5 0 00.5.5zm9-1a.5.5 0 10-.5-.5.5.5 0 00.5.5z" />
                    </svg>
                    <span className="text-gray-400 font-medium">Groups</span>
                </button>
                <button className="flex items-center space-x-2 w-full p-2 hover:bg-gray-600 duration-150 rounded-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-yellow-500"
                    >
                        <path d="M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h10.88a4.982 4.982 0 004.622-3.14 5.19 5.19 0 002.498-.673l1.587.954a1 1 0 001.396-1.096l-.876-5.263A5.979 5.979 0 0024 12a6.007 6.007 0 00-6-6zM4 20V4h16v7.1a5.956 5.956 0 00-2.207-.677l-.961-5.766a1 1 0 00-.99-.825H6.158a1 1 0 00-.99.825L4.207 9.423 2.78 20H4zm15-9.77a4.995 4.995 0 011.415.243l.876-5.263a1 1 0 00-.99-.825H6.158a1 1 0 00-.99.825L4.207 9.423 3.27 17h1.13A5 5 0 1019 10.23z" />
                    </svg>
                    <span className="text-gray-400 font-medium">Marketplace</span>
                </button>
            </div>
        </div>
    )
}

export default LeftSide