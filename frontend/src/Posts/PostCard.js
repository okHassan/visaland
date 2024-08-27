import React from 'react'

const PostCard = () => {
    return (
        <div className="max-w-xl mx-auto bg-gray-900 shadow-md rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-4 mb-4">
                <img
                    src="https://via.placeholder.com/50"
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                />
                <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">August 17, 2024</p>
                </div>
            </div>
            <p className="mb-4 text-gray-400">
                This is an example post content. You can write anything you want here,
                share thoughts, images, links, or anything else.
            </p>
            <img
                src="https://via.placeholder.com/600x400"
                alt="Post content"
                className="w-full h-auto rounded-lg mb-4"
            />
            <div className="flex items-center justify-between text-gray-500 text-sm">
                <button className="flex items-center space-x-2 hover:text-blue-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346.005a2.25 2.25 0 00-1.973 1.524L12 12.75h-2.25A3.75 3.75 0 006 16.5v1.25h12V16.5a3.75 3.75 0 00-3.75-3.75H13.5l-.52-1.216a2.25 2.25 0 00-2.048-1.53L10.2 9H9.5m-3.75 9.75a4.5 4.5 0 004.5 4.5h4.5a4.5 4.5 0 004.5-4.5V16.5A6 6 0 0012 10.5h-2.4a4.5 4.5 0 00-4.5 4.5v4.5z"
                        />
                    </svg>
                    <span>Like</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-blue-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 15V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h5l4 4V17h5a2 2 0 002-2z"
                        />
                    </svg>
                    <span>Comment</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-blue-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25a.75.75 0 00-.75-.75H4.5a.75.75 0 00-.75.75V9h12zM19.5 12.75V10.5h-3V9a3 3 0 00-3-3H4.5a3 3 0 00-3 3v6a3 3 0 003 3H9v1.5a1.5 1.5 0 001.5 1.5h5.25a.75.75 0 00.75-.75V15h2.25a3 3 0 003-3z"
                        />
                    </svg>
                    <span>Share</span>
                </button>
            </div>
        </div>

    )
}

export default PostCard