import { Router, Request, Response, NextFunction } from "express";


const Route = Router();

Route.get("/users", (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: "Leonardo" }]
    res.status(200).json({ users })
});

Route.get("/users/:id", (req: Request<{ id: number }>, res: Response, next: NextFunction) => {
    const id = req.params.id
    res.status(200).json({ id })
})

export default Route;