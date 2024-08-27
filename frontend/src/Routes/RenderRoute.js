import React from 'react'
import { useParams } from 'react-router-dom'
import NotFound from '../root/NotFound'

const generatePage = (pages) => {
    const component = () => require(`../pages/${pages}`).default

    try {
        return React.createElement(component())
    } catch (error) {
        return <NotFound />
    }

}

const RenderRoute = () => {

    const { page } = useParams();
    
    return generatePage(page)

}

export default RenderRoute;