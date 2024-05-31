import express from 'express';
import { connect } from 'mongoose';
import ArticleRouter from './routes/ArticleRoute.js';
import  connectDB  from './db.js';
import { configDotenv } from 'dotenv';


const app = express();

app.use(express.json());

configDotenv();

app.use("/api", ArticleRouter);

const PORT = process.env.PORT || 3000;
connectDB();


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
