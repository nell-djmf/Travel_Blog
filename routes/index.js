const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();


router.get('/', controllers.getPost)

router.post('/:_id', controllers.postComment)

module.exports = router;