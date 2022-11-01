const express = require('express');
const router = express.Router(); // make const to keep the router

// const userRoutes = require('./userRoutes');
const inventoryRoutes = require('./inventoryRoutes');

// router.use("/user", userRoutes) //  /user will bring to userRoutes
router.use("/inventory", inventoryRoutes) // /inventory will bring to inventoryRoutes
module.exports = router;