const User = require('../../db/models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { salt } = require('./../../config/config');

module.exports = {
    email: async (req, res) => {
        const email = req.params.email;
        try {
            user = await User.findOne({ email: email });
            if (user === null) {
                res.status(200).send("User not exist");
            } else {
                res.status(211).send("User already exist");
            }
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },
    userName: async (req, res) => {
        const userName = req.params.userName;
        try {
            user = await User.findOne({ userName: userName });
            if (user === null) {
                res.status(200).send("User not exist");
            } else {
                res.status(211).send("User already exist");
            }
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },
    signUp: async (req, res) => {
        console.log(req.body);
        const {
            userName,
            email,
            userPassword
        } = req.body;
        const signedUpUser = new User({
            userName,
            email
        });

        try {
            await User.register(signedUpUser, userPassword);
        } catch (err) {
            return res.status(422).json({
                message: err.message
            });
        }
        res.status(201).send("User created");
    },
    signIn: async (req, res) => {
        const token = jwt.sign({ id: req.user._id }, salt, { expiresIn: 300 });
        return res.send({
            token,
        })
    }

}