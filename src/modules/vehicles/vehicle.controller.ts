import { Request, Response } from "express";
import { pool } from "../../database/db";

const getVehicles = async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM vehicles");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const vehicleController = {
  getVehicles,
};
