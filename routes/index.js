const express = require("express");

const usersController = require('../controller/users');

const router = express.Router();
router.post('/users', usersController.createUsers);

module.exports = router;