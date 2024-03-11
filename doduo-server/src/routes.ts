import express, { Router } from "express";
import { loginOrCreate } from './Controllers/UserController'

const routes: Router = express.Router();

routes.post('/user', loginOrCreate);

module.exports = routes;