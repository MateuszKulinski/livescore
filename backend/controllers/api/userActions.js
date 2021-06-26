const User = require('../../db/models/user');
const bcrypt = require('bcrypt');
const {
    salt
} = require('../../config');

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
        const {
            userName,
            email,
            userPassword
        } = req.body;
        const userPasswordHash = await bcrypt.hash(salt + userPassword, 10);
        const signedUpUser = new User({
            userName,
            email,
            userPassword: userPasswordHash,
        });
        try {
            await signedUpUser.save();
        } catch (err) {
            return res.status(422).json({
                message: err.message
            });
        }
        res.status(201).json(signedUpUser);
    },
    signIn: async (req, res) => {
        const {
            email,
            userPassword
        } = req.body;
        const userPasswordHash = salt + userPassword;
        const user = await User.findOne({
            email: email
        });
        console.log(user);
        if (user == null) {
            return res.status(400).send('Cannot find user');
        }
        try {
            if (await bcrypt.compare(userPasswordHash, user.userPassword)) {
                res.status(200).send(user);
            } else {
                res.status(401).send('Wrong password');
            }
        } catch (err) {
            res.status(404).send({
                message: 'HashError'
            });
        }
    }

}