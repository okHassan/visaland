import { model, Schema } from "mongoose";
import { IUser } from "../types/user";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: false,
            default: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png'
        },
        bio: {
            type: String,
            default: 'hello'
        },
        website: {
            type: String,
            default: ''
        },
        isAdmin: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    {
        timestamps: true, // Automatically create createdAt timestamp
    }
);

userSchema.methods.matchPassword = async function (this: any, enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.pre("save", async function (this: any, next) {
    if (!this.isModified("password")) next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

export const User: any = model<IUser>("User", userSchema);