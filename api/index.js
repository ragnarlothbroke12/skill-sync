import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './Routes/user.route.js';

dotenv.config();


mongoose.connect( process.env.MONGO_URL)
.then(() => {
  console.log('Connected to MongoDB')
})
.catch((err) => {
  console.error( err);
});


const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api/user', userRoutes);