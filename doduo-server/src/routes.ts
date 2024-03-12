import express, { Router } from "express";
import { loginOrCreate, get as getUser, update as UpdateUser } from './Controllers/UserController'
import { create as createHouse, get as getHouse } from './Controllers/HouseController'

const routes: Router = express.Router();

routes.post('/user', loginOrCreate);
routes.get('/user/:id', getUser);
routes.put('/user/:id', UpdateUser);

routes.post('/house', createHouse);
routes.get('/house/:id', getHouse);

module.exports = routes;