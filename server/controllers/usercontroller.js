const express = require('express');
const router = express.Router();
const User = require('../models/usermodels');
const bcrypt = require('bcrypt');
const session = require('express-session');
const otpGenerator = require('otp-generator');
const cron = require('node-cron');

const nodemailer=require('nodemailer');

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
                req.sessionData = {
                    _id: userData._id,
                    email: userData.email,
                    name: userData.name,

                };
                console.log("User found successfully");
                return res.status(200).json({ message: "Login successful", sessiondata: req.sessionData });
            }
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



//forgot password

const forgotpassword = async (req, res) => {
    const { email } = req.body; // Changed res.body to req.body to correctly access the request body
    console.log(email+"this is email");

    const forgotemail = await User.findOne({ email });
    const name=forgotemail.name; // Assuming User is your Mongoose model
    if (!forgotemail) {
        return res.status(401).json({ message: "Email not registered yet" });
    }

    const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'aakashkandel9777@gmail.com', 
            pass: 'tcgu mvxp ovqv iagl' 
        }
    });

    const mailOptions = {
        from: 'aakashkandel9777@gmail.com',
        to: email,
        subject: 'Password Reset OTP',
        html: `
        <p>Dear ${name},</p>
        <p>We've received a request to reset the password for your account. As part of our security measures, we've generated a one-time password (OTP) for you:</p>
        <h2>${otp}</h2>
        <p>Please note that this OTP is valid for one minute only.</p>
        <p>If you did not initiate this request, we advise you to ignore this message. Rest assured, your account security is our top priority.</p>
        <p>For your safety, please do not reply to this email.</p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send OTP email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'OTP email sent successfully' ,code:otp});
        }
    });
};



module.exports = { register, login, forgotpassword };