import jwt from 'jsonwebtoken'
import { ObjectId } from 'mongoose'


const generateToken = (data: any) => {
    if ('process.env.JWT_SECRET' !== undefined) {
        return jwt.sign({
            name: data.name,
            email: data.email,
            _id: data._id
        }, 'process.env.JWT_SECRET', {
            expiresIn: "30d",
        });
    }
};

export default generateToken;