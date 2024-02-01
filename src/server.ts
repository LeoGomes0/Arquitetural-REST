import express, { Request, Response, NextFunction } from "express";
import Route from "./routes/usersRoute";


const app = express();


app.use(Route);


app.listen(3000, () => {
    console.log("Server Online!");
});
