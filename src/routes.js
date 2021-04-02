const {Router} =require('express');
const UserController = require('./controllers/user-controller');
const authController = require('./controllers/auth-controller.js');

const routes = new Router();

routes.post('/login',authController.Autenticacao);
routes.post('/novo/usuario',UserController.newUser);
routes.put('/atualizar/usuario',UserController.updateUser);
module.exports = routes