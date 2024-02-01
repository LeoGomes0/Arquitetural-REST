import express, { Request, Response, NextFunction } from "express";
import usersRoute from "./routes/usersRoute";

const app = express();


app.use(usersRoute);


app.listen(3000, () => {
    console.log("Server Online!");
});
