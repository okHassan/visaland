import React from 'react'
import PostCard from './PostCard'
import CreatePost from './CreatePost'

const MiddlePage = () => {
    return (
        <div className='bg-gray-800 w-full'>
            <div className='flex justify-center'>
                <div className='flex flex-col flex-wrap mt-10'>
                    <CreatePost />
                    <PostCard/>
                    <PostCard />
                </div>
            </div>
        </div>
    )
}

export default MiddlePage