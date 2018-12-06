var User = require("../models/account");

// Can you pass all strategies into this file and then call from server to require passport less?
// Common.js module system

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
