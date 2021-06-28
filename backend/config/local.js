const passport = require('passport');
const User = require('./../db/models/user');


passport.use(User.createStrategy());

module.exports = passport;