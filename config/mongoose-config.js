import mongoose from 'mongoose';

export default function dbConfig(connectrionString) {
    mongoose.set('strictQuery', false);
    return mongoose.connect(connectrionString);
}

