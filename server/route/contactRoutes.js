const express = require("express");
const { AddContact, GetContact, UpadteContact, DeleteContact } = require("../controller/contactController");
const router = express.Router();

router.post("/add", AddContact);
router.get("/get", GetContact);
router.put("/update/:id", UpadteContact);
router.delete("/delete/:id", DeleteContact);


module.exports = router; 