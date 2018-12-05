var passport = require("passport"),
  FacebookStrategy = require("passport-facebook").Strategy;
var User = require("../models/user");
var init = require("./init");

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:3000/auth/facebook/callback",
      enableProof: true,
      profileFields: ["id", "first_name", "last_name", "location"]
    },
    function(accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ facebookId: profile.id }, function(err, user) {
        return cb(err, user);
      });
    }
  )
);

init();

module.exports = passport;