import { Request, response, Response } from "express"
import asyncHandler from "express-async-handler";
import { User } from '../models/userModel'
import generateToken from '../utils/generateToken'

export const login = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body as { email: string, password: string };
    if (!email || !password) throw new Error("complete all fields");

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }

});


export const register = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password } = req.body as { name: string, email: string, password: string };
    if (!name || !email || !password) throw new Error("complete all fields");

    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("Email already exists");

    const user = await User.create({ name, email, password });

    if (!user) throw new Error("Invalid user data");

    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user),
    });

});

export const logout = asyncHandler(async (_req: Request, res: Response) => {
    res.clearCookie('token');
    res.json({ message: "Logged out!" });
});

