const Contact = require("../model/Contact");

const AddContact = async (req, res) => {
    try {
     
     const contact = await Contact.create(req.body);
     
      return res.json({
        message: "Contact created successfully",
        contact : contact,
        status:true,
      });
    } catch (err) {
      return res.json({
        message: "Error while create contact",
        status: false,
      });
    }
  };
  
  module.exports = {
    AddContact,
  };