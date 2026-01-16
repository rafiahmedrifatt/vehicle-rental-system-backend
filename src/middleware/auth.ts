import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";


const auth = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try{
        const token = req.header.authorization;
        if (!token) {
            res.status(401).json({message: "you are not authorized"})
        }

        const decoded = jwt.verify(token )
    }
  };
};
