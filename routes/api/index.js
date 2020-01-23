/**
 *
 * Author:  AppSeed.us
 *
 * License: MIT - Copyright (c) AppSeed.us
 * @link https://github.com/app-generator/nodejs-starter
 *
 */

const express = require('express');
const router = express.Router();
const downloadsController = require('../../controllers/downloads/downloadsController');
router.post('/download', downloadsController.downloadfile);
router.use('/users', require('./users'));

module.exports = router;
