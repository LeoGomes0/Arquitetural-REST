import { Router, Request, Response, NextFunction } from "express";


const usersRoute = Router();

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: "Leonardo" }]
    res.status(200).json({ users })
});

export default usersRoute;