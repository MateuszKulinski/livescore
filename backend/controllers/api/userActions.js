const { request } = require('express');
const User = require('../../db/models/user');
const bcrypt = require('bcrypt');
const { salt } = require('../../config');

class UserActions {
    async signUp(req, res) {
        const { userName, email, userPassword } = req.body;
        const userPasswordHash = await bcrypt.hash(salt + userPassword, 10);
        const signedUpUser = new User({
            userName,
            email,
            userPassword: userPasswordHash,
        });
        try {
            await
            await signedUpUser.save();
        } catch (err) {
            return res.status(422).json({ message: err.message });
        }
        res.status(201).json(signedUpUser);
    }
    async signIn(req, res) {
        const { email, userPassword } = req.body;
        const userPasswordHash = salt + userPassword;
        const user = await User.findOne({ email: email });
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

module.exports = new UserActions();