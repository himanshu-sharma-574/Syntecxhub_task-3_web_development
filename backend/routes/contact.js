const routes = require("express").Router();
const contact = require("../models/contact");
routes.post("/post", async(req,res) => {
    try{
        const {nume, number, address, state, city, message} = req.body;
        const newConntact = new contact({nume, number, address, state, city, message});
        await newContact.save().then(() => {
            res.status(200).json({message: "Data Saved"});
        }, () =>{
            res.status(400).json({message: "Data not Saved"});
        })

    }catch(error){
        res.status(400).json({message: "Technical Error ocurred"});
    }
});
module.exports = routes;