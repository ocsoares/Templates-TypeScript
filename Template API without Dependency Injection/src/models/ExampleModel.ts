import mongoose, { Schema } from "mongoose";

interface IExample {
    name: string;
    password: string;
}

export const ExampleModel = mongoose.model('example', new Schema<IExample>({
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
},
    {
        timestamps: true
    }
));