const express = require('express');
const router = express.Router();
const User = require('../models/usermodels');


const register = async (req, res) => {
    console.log(req.body);
    
    try {
        console.log("This is the register section");
        console.log(req.body);
        

        if(req.body=={})
        {
            console.log("Object contain nothing..");
            
        }
        else{
            const { name, phone, email, password, confirm_password, date, gender, state, district, city_area } = req.body;

    
            if (password !== confirm_password) {
                return res.status(400).json({ message: "Passwords do not match" });
            }
    
            
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "User already exists with this email" });
            }
    
 
            const newUser = new User({ name, phone, email, password, confirm_password, date, gender, state, district, city_area });
    
            
            await newUser.save();
    
            return res.status(200).json({ message: "Successfully registered" });
            
        }

      
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(400).json({ message: "Invalid registration. Please check your input." });
    }
};


module.exports ={register,};
