//import express
const express = require('express');
//get the route manager which is express.router
const router = express.Router();
const {mid} = require('../middleware/mdw')
const {home, about} = require('../controllers/users')
router.get('/',home)

//You can export after creating the route manager
router.get('/about', mid, about)
module.exports= {router};

//Then go to the app.js file to export it into it