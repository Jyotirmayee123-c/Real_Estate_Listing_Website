const Contact = require("../model/Contact");


const AddContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    return res.json({
      message: "contact created successfully",
      contact: contact,
      status: true,
    });
  } catch (err) {
    return res.json({
      message: "Error while create contact",
      status: false,
    });
  }
};
const GetContact = async (req, res) => {
  try {

    const contacts = await Contact.find()
      return res.json({
      message: "Contacts get success",
      contacts:xyz,
      status:true
    });
  } catch (err) {
    console.log(err);

    return res.json({
      message: "Error while fetch ",
      status: false,
});
  }
};

module.exports = {
  AddContact,
  GetContact,
};