import mongoose from 'mongoose';
const { Schema } = mongoose;

interface IUser {
    name: string;
    email: string;
    phone: number;
    avatar?: string;
}

const schema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: Number, required: true },
        avatar: String
    },
    {
        timestamps: true
    }
);

const User = mongoose.model<IUser>('Users', schema, 'Users');

export default User;
