const express = require("express");

const router = express.Router();
const User = require("../../models/User");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwtOptions = require("../../passport/jwtOptions");
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.get(
  "/test",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ message: "this is test from users" });
  }
);

router.get("/all", (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(404).json({ message: "cannot find the users" });
    } else {
      res.status(201).json(users);
    }
  });
});

router.post("/register", (req, res) => {
  const { isValid, errors } = require("../../validation/register")(req.body);
  if (!isValid) {
    res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      res.status(400).json({ message: "email already exists" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: 200,
        r: "pg",
        d: "mm"
      });
      const newUser = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        avatar
      });

      bcrypt.hash(newUser.password, 10).then(hash => {
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(e => console.log(e));
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { isValid, errors } = require("../../validation/login")(req.body);
  if (!isValid) {
    res.status(400).json(errors);
  } else {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        res.status.json({ message: "cannot find the user" });
      } else {
        if (!user) {
          res.status(400).json({ message: "Email Incorrect" });
        } else {
          bcrypt.compare(req.body.password, user.password).then(isValid => {
            if (isValid) {
              const payload = {
                id: user.id,
                name: user.name,
                avatar: user.avatar
              };
              const token = jwt.sign(payload, jwtOptions.secretOrKey, {
                expiresIn: 3600 * 24
              });

              res.status(201).json({
                name: user.name,
                avatar: user.avatar,
                token: `Bearer ${token}`
              });
            } else {
              errors.message = "password Incorrect";
              res.status(400).json(errors);
            }
          });
        }
      }
    });
  }
});

router.delete("/:id", (req, res) => {
  User.findOneAndRemove({ _id: req.params.id })
    .then(() => res.json({ message: "delete confirmed" }))
    .catch(e => res.json({ message: "cannot delete the user" }));
});

module.exports = router;
