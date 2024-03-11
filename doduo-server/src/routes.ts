import express, { Router } from "express";
import { loginOrCreate, getUser } from './Controllers/UserController'

const routes: Router = express.Router();

routes.post('/user', loginOrCreate);
routes.get('/user/:id', getUser);

module.exports = routes;