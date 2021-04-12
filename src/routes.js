const { Router } = require('express');
const UserController = require('./controllers/user-controller');
const authController = require('./controllers/auth-controller.js');
const comicController = require('./controllers/comic-controller');
const characterController = require('./controllers/character-controller');
const authMiddleware = require('./middlewares/auth');

const routes = new Router();

routes.post('/login', authController.Autenticacao);
routes.post('/novo/usuario', UserController.newUser);
routes.use(authMiddleware);
routes.put('/atualizar/usuario', UserController.updateUser);
routes.get('/get/usuario', UserController.getUser);
routes.post('/comic/adicionar', comicController.add_comic);
routes.get('/comic/favoritos/:id_user', comicController.index);
routes.delete('/comic/remove/:id_comic', comicController.delete);
routes.post('/character/adicionar', characterController.add_character);
routes.get('/character/favoritos/:id_user', characterController.index);
routes.delete('/character/remove/:id_character', characterController.delete);
module.exports = routes;
