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


    const xyz = await Contact.find()
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

const UpadteContact = async (req,res)=>{
  try{
     
    const UpdatedContact = await  Contact.findByIdAndUpdate(req.UpdatedContactparams.id,req.body)
    return res.json({
      message: "Updated Successfully",
      status:true,
      UpdatedContact

    });
    }catch(err){
      return res.json({
        message: "Error while fetch ",
        status: false,

    });

  }

}

    const DeleteContact = async (req,res)=>{
     try{

      const deletedContact = await Contact.findByIdAndDelete(req.params.id)
         
      return res.json({
        message:"Deleted Successfully",
        status:true,
        deletedContact,
      })

     } catch (err){
      console.log(err);
      return res.json({
        message:"Error while delete",
        status:false,
      })
     }
    }
    
  

module.exports = {
  AddContact,
  GetContact,
  UpadteContact,
  DeleteContact
};