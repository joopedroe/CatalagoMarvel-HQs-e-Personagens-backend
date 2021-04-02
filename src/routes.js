const {Router} =require('express');
const UserController = require('./controllers/user-controller');
const authController = require('./controllers/auth-controller.js');
const comicController = require('./controllers/comic-controller')

const routes = new Router();

routes.post('/login',authController.Autenticacao);
routes.post('/novo/usuario',UserController.newUser);
routes.put('/atualizar/usuario',UserController.updateUser);
routes.post('/comic/adicionar',comicController.add_comic)
module.exports = routes