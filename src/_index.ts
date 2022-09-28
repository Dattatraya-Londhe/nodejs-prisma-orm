import express, { Request, Response, NextFunction } from "express";

import { json } from "body-parser"; //extract data json data from body part of any request

//import { PrismaClient } from '@prisma/client';

//import routes
//import todoRoutes from "./routes/todos";
import userRoutes from "./routes/userRoute";

const app = express();
app.use(json()); //register it as middleware in running server

app.listen(3000, () => {
  console.log("http:localhost:3000/");
});

//Connect to running express app
//all incomming request to /todos will redirect to todoRoutes
app.use("/user", userRoutes);

// const prisma = new PrismaClient();
// app.get('/',async (_req:Request,res:Response)=>{

//     const users =await prisma.user.findMany({});
//    // res.send("Hi All");
//    res.json({users})
// })
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({ message: err.message });
});
