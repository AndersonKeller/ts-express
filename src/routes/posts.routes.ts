import { Router } from "express";
import { validateDataMiddleware } from "../middleware/validateData.middleware";
import { craetePostsSchema } from "../schemas/posts.schemas";
import { createPostController } from "../controllers/posts.controllers";
import { validateTokenMiddleware } from "../middleware/validateToken.middleware";

export const postsRoutes:Router = Router()

postsRoutes.post("",validateDataMiddleware(craetePostsSchema), validateTokenMiddleware,createPostController)