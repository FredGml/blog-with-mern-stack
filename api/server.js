import express from 'express';
import mongoose from 'mongoose';
import dotenv from'dotenv';

import userRoutes from './routes/user.route.js'


dotenv.config(); 

mongoose.connect(
    process.env.MONGO)
.then(() => {
    console.log('MongoDB connecté avec succès')
})
.catch((err) => {
    console.log(err)
});


const app = express();

app.listen(3000, ()=>{
    console.log('Serveur lancé sur le port 3000');
});

app.use('/api/user', userRoutes);
