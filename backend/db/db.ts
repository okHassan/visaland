import mongoose from 'mongoose'

const url: string = 'mongodb+srv://admin:admin@cluster0.rlklv.mongodb.net/connectify';

mongoose.connect(url)
        .then(() => console.log('database connected'))
        .catch((err) => console.log(err))