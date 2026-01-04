import { Request, Response } from "express";
import { userServices } from "./users.service";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers();
    return res.status(200).json({ users: result });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const userController = {
  getAllUsers,
};
