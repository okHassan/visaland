import React from 'react'
import Navber from '../components/Navber'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import MiddlePage from '../Posts/MiddlePage'

const Home = () => {
    return (
        <div>
            <Navber />
            <div className='flex justify-between'>
                <LeftSide />
                <MiddlePage />
                <RightSide />
            </div>
        </div>
    )
}

export default Home