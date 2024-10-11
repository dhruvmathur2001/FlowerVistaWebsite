const express = require('express');
const path = require('path');
const router = express.Router();

const {addUser,getUsers} = require('../controllers/userController');

router.post('/add',addUser);
router.get('/',getUsers);

module.exports = router;