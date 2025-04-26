const express = require('express');
const router = express.Router();
const { createPost, getPost } = require('../controllers/controller');

router.post('/create', createPost);
router.get('/get', getPost);

module.exports = router;   