
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

// models
const User = require('../models/users');

passport.use(
    new GoogleStrategy({
            clientID: '135837635640-fmo7p251cc6lk8so2719n84085b50obv.apps.googleusercontent.com',
            clientSecret: 'LHk3S1c23iM9ZxGD41d183xj',
            callbackURL: '/auth/google/redirect'
        },
        ((accessToken, refreshToken, profile, done) => {
            const data = profile._json;
            console.log(data);
           /* User.findOrCreate({
                'googleId': data.id
            }, {
                name: data.name.givenName,
                surname: data.name.familyName,
                profilePhotoUrl: data.image.url + '0'
            }, (err, user) => {
                return done(err, user);
            })*/
        })
    ));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = passport;