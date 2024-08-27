import React from 'react'
import Navber from '../components/Navber'
import LeftSide from '../root/LeftSide'
import RightSide from '../root/RightSide'
import FriendList from '../components/FriendList'
import FriendRequests from '../components/FriendReq'

const Friend = () => {
    return (

        <div>
            <Navber />
            <div className='flex justify-between'>
                <LeftSide />
                <div className="bg-gray-800 w-full h-screen">
                    <div className="space-y-12 pt-10">
                        <FriendRequests />
                        <FriendList />
                    </div>
                </div>
                <RightSide />
            </div>
        </div>

    )
}

export default Friend