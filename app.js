import express from "express";
import userRouter from "./src/routes/users.js";
import errorHandler from './src/middlewares/errors/index.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/users', userRouter);
app.use(errorHandler)


const server = app.listen(8080, () => console.log('server running'))