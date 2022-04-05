const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();


router.get('/:_id', controllers.getPost)

router.post('/:_id', controllers.postComment)