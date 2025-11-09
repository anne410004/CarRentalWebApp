// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/signup", authController.signup);          // no parentheses
router.post("/signin", authController.signin);          // no parentheses
router.post("/forgot-password", authController.forgotPassword); // no parentheses

module.exports = router;
