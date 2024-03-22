const express = require('express');
const router = express.Router();
const User = require('../models/usermodels');
const bcrypt = require('bcrypt');
const session=require('express-session');;

const register = async (req, res) => {
    try {
        console.log(req.body);

        const { name, phone, email, password, confirm_password, date, gender } = req.body;
        const { state, district, city_area } = req.body;



        if (password !== confirm_password) {
            return res.status(400).json({ message: "Passwords do not match" });
        }
        const hashPassword = await bcrypt.hash(password, 10);

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists with this email" });
        }

        const newUser = new User({
            name,
            phone,
            email,
            password: hashPassword,
            date,
            gender,
            address: {
                state,
                district,
                city_area
            }
        });

        await newUser.save();

        return res.status(200).json({ message: "Successfully registered" });

    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(400).json({ message: "Invalid registration. Please check your input." });
    }
};




const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    try {
        const userData = await User.findOne({ email });

        if (!userData) {
            console.log("User with email " + email + " is not found");
            return res.status(401).json({ message: "User not found" });
        } else {
            const passwordMatch = await bcrypt.compare(password, userData.password);
            if (!passwordMatch) {
                console.log("Password does not match");
                return res.status(401).json({ message: "Incorrect password" });
            } else {
                // Set session data
                req.session.sessionData = {
                    _id: userData._id,
                    email: userData.email,
                    name:userData.name,
                    
                };
                console.log("User found successfully");
                return res.status(200).json({ message: "Login successful" ,sessiondata:req.session.sessionData});
            }
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { register, login };