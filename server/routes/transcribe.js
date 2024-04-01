const express = require("express");
const router = express.Router();
const transcribeController = require("../controllers/transcribeController");

router.get("/", transcribeController.transcribe);

module.exports = router;
