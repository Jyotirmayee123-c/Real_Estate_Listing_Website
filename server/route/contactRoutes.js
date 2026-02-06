const express = require("express");
const { AddContact, GetContact } = require("../controller/contactController");
const router = express.Router();

router.post("/add", AddContact);
router.get("/get", GetContact);

module.exports = router; 