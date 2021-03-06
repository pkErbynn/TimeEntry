const express = require("express");
const path = require("path");
const samlStrategy = require("passport-saml").Strategy;
const passport = require("passport");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
let userEmail = "";

app.use(express.static(__dirname + "/dist/tpms"));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new samlStrategy(
    {
      protocol: "https://",
      entryPoint: process.env.ENTRY_POINT, 
      issuer: process.env.ISSUER, 
      path: "/auth/saml/callback",
      cert: process.env.CERT
    },
    function (profile, done) {
      userEmail = profile.nameID;
      userFirstName = profile["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"]
      userlastName = profile["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname"]
     
      return done(null, {
        email: profile.email,
        displayName: profile.cn,
        firstName: profile.givenName,
        lastName: profile.sn
      });
    }
  )
);
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get(
  "/login",
  passport.authenticate("saml", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);

app.get("/logout", function (req, res) {
  res.clearCookie('ttemail')
  req.logout();
  res.redirect("https://turntabl.io");
});

app.post(
  "/auth/saml/callback",
  bodyParser.urlencoded({ extended: false }),
  passport.authenticate("saml", {
    failureRedirect: "/error",
    failureFlash: false
  }),
  function (req, res) {
    res.cookie('ttemail', userEmail, { maxAge: 1 * 24 * 60 * 60 * 1000, secure: true, httpOnly: false })
    res.cookie('userFirstName', userFirstName, { maxAge: 1 * 24 * 60 * 60 * 1000, secure: true, httpOnly: false })
    res.cookie('userlastName', userlastName, { maxAge: 1 * 24 * 60 * 60 * 1000, secure: true, httpOnly: false })  
    res.redirect("https://tpms-ui.herokuapp.com");
  }
);

app.all("*", function (req, res, next) {
  if (req.isAuthenticated() || process.env.NODE_ENV !== "production") {
    next();
  } else {
    res.redirect("/login");
  }
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/tpms/index.html"));
});

app.listen(process.env.PORT || 8081);