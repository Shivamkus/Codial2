// const express = require('express');
// const router = express.Router();

// const postContoller = require('../controllers/posts_controller');

// router.post('/create',postContoller.create);

// module.exports = router;


const express = require('express');
const router = express.Router();


const postsController = require('../controllers/posts_controller');

router.post('/create', postsController.create);


module.exports = router;
