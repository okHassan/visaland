import React from 'react'

const RightSide = () => {
    return (
        <div className="w-[320px] bg-gray-800 pr-20 pt-10">
            {/* Sponsored Section */}
            {/* <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-4">Sponsored</h3>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://via.placeholder.com/50"
                            alt="Sponsored Ad"
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <p className="font-medium text-gray-700">Ad Title 1</p>
                            <p className="text-sm text-gray-500">www.example.com</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://via.placeholder.com/50"
                            alt="Sponsored Ad"
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <p className="font-medium text-gray-700">Ad Title 2</p>
                            <p className="text-sm text-gray-500">www.example.com</p>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Contacts Section */}
            <div>
                <h3 className="font-bold text-gray-400 mb-5">Contacts</h3>
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Contact"
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="text-gray-400">Jane Doe</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Contact"
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="text-gray-400">Alice Smith</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Contact"
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="text-gray-400">Bob Johnson</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSide