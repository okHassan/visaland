import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends, FaUser, FaFacebookMessenger } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom'


const Navber = () => {
    return (
        <div className='bg-slate-800 w-full sticky top-0 z-50 border-b border-gray-600'>
            <div className='container mx-auto py-5'>
                <div className='flex justify-between items-center'>
                    <Link to='/'>
                        <h1 className='text-gray-500 font-bold text-2xl'>Connecti.Fy</h1>
                    </Link>

                    <div className='flex justify-center gap-10'>
                        <Link to='/'>
                            <AiFillHome size={25} className='text-gray-400' />
                        </Link>
                        <Link to='/Friend'>
                            <FaUserFriends size={25} className='text-gray-400' />
                        </Link>
                        <Link to='/Message'>
                            <FaFacebookMessenger size={25} className='text-gray-400' />
                        </Link>
                        <Link to='/'>
                            <MdOutlineSlowMotionVideo size={25} className='text-gray-400' />
                        </Link>
                    </div>
                    <div className='flex justify-center gap-10'>
                        <Link to='/ProfilePage'>
                            <FaUser size={25} className='text-gray-400' />
                        </Link>
                        <Link to='/'>
                            <IoMdSettings size={25} className='text-gray-400' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navber