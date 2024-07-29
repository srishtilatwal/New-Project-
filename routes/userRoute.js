import express from "express"

import {create , getAllUsers, getUserById, updateData , deleteUser} from "../Controller/userControl.js"

const route = express.Router();

route.post("/user",create);
route.get("/users", getAllUsers);
route.get("/users/:id",getUserById);
route.put("/update/user/:id",updateData);
route.delete("/delete/user/:id", deleteUser);


export  default route;