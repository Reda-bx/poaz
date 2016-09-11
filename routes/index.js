const MainController = require('../controllers/MainController')

module.exports = (router) => {
  router
    .get('/hola', MainController.index)
    .post('/upload', MainController.upload)
}
