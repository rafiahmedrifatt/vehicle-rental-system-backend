import { Request, Response, Router } from "express";
import { userController } from "./users.controller";

const router = Router();

router.get("/", userController.getAllUsers);

export const userRoute = router;
