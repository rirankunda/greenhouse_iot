let express = require('express');
let router = express.Router();

let userController = require('./Controllers/Controller');

// Liste des routes vers les controleurs


router.get('/', userController.data);
router.get('/parameters', userController.parameters);


module.exports = router;