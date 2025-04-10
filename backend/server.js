import express from "express"
import dotenv from "dotenv"
import authRoutes from './routes/auth.routes.js'
import cookieParser from "cookie-parser"
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectToMongoDB from "./db/connectToMongoDB.js";

// Start video at 01:26:00

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json()); // from req.body
app.use(cookieParser());

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
})