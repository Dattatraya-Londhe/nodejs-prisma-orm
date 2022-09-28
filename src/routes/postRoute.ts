import { Router } from "express";
import { getPost, createPost, deletePost, updatePost } from "../controllers/postController";

const postRouter = Router(); //allow to register middleware

postRouter.post("/", createPost);

postRouter.get("/", getPost)

postRouter.put("/:id", updatePost);

postRouter.delete("/:id", deletePost);

export default postRouter;