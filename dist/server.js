import express, { json } from 'express';
import { connect } from './database';
const app = express(); //Setting

app.set('port', process.env.PORT || 4005); //connect to database
// const db = async  () => await connect();
// console.log(db) 
// app.locals.database = db;
// console.log(db) 
//Routes

import IndexRoutes from './routes/index.routes';
import TradingRoutes from './routes/trading.routes';
import TasksRoutes from './routes/task.routes'; //middlewares

app.use(json()); //const db = async () =>{await connect()}; 

app.use(IndexRoutes);
app.use('/tasks', TasksRoutes);
app.use('/trading', TradingRoutes);
export default app;