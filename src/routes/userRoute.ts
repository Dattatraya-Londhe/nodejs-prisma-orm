import { Router } from "express";
//import {createTodo} from '../controllers/todo'
// import { getTodo } from "../controllers/todo";
// import { updateTodo } from "../controllers/todo";
// import { deleteTodo } from "../controllers/todo";


import { getUser, createUser, deleteUser, updateUser } from "../controllers/userController";

//import { getUser } from "../controllers/userController";

const userRouter = Router(); //allow to register middleware

userRouter.post("/", createUser); 

userRouter.get("/", getUser)

userRouter.put("/:id", updateUser);

userRouter.delete("/:id", deleteUser);

export default userRouter;
