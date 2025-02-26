const express = require('express');
const router = express.Router();
const { helloWorld, generateToken, postBody } = require('../controllers');

router.get('/hello', helloWorld);
router.get('/token', generateToken);
router.post('/post', postBody);

module.exports = router;
