export interface IUser {
    name: string;
    email: string;
    password: string;
    bio: String;
    image: String;
    website: String;
    post: Array<Object>;
    isAdmin?: boolean;
    matchPassword(enteredPassword: string): Promise<boolean>
}