import express, { Request, Response } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import userRoutes from "../routes/userRoutes"
import { notFound, errorHandler } from "../error/handleError";
import jwt from "jsonwebtoken"
import { User } from "../models/userModel"

const app = express()
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}))
app.use(cookieParser())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.get("/", (_req: Request, res: Response) => {
    res.json({ message: "app health ok !" });
})

app.get('/api/defaultAuth', async (req: Request, res: Response) => {
    const { token } = req.cookies;

    if(!token) return res.json({ message: "please login" })

    const decoded: any = jwt.verify(token, 'process.env.JWT_SECRET');

    let data = await User.findOne({ email: decoded.email })

    console.log(decoded);
    

    if (data === null) {
        res.json({ message: "User not found!" })
        return;
    }

    if(data) {
        res.json({
            _id: data._id,
            name: data.name,
            email: data.email,
            token: token,
        })
    }

})

app.use('/api/user', userRoutes)


// Use Middleware
app.use(notFound);
app.use(errorHandler);

export default app