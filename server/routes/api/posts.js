const express = require("express");

const router = express.Router();

const passport = require("passport");
const User = require("../../models/User");

const Post = require("../../models/Post");

router.get("/test", (req, res) => {
  res.json({ message: "this is test from posts" });
});

router.get("/all", (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) {
      res.status(404).json("cannot find the posts");
    } else {
      if (posts.length === 0) {
        res.status(400).json({ message: "this user has no posts" });
      } else {
        res.status(201).json(posts);
      }
    }
  });
});

// router.get("/all", (req, res) => {
//   Post.find({})
//     .populate("user", ["_id"], User)
//     .then(posts => {
//       if (posts.length === 0) {
//         res.status(400).json({ message: "this user has no posts" });
//       } else {
//         res.status(201).json(posts);
//       }
//     })
//     .catch(e => {
//       res.status(404).json("cannot find the posts");
//     });
// });

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = require("../../validation/post")(req.body);
    if (!isValid) {
      res.status(400).json(errors);
    }
    const newPost = new Post({
      text: req.body.text,
      user: req.user.id,
      name: req.user.name,
      avatar: req.user.avatar
    });

    newPost
      .save()
      .then(post => res.json(post))
      .catch(err => res.status(400).json(err));
  }
);

router.get("/:id", (req, res) => {
  // Profile.findOne({user:req.user.id},(err,profile)=>{
  // 	if(err){
  // 		res.status(404).json({message:'your profile is not registered'})
  // 	}else{
  Post.findById(req.params.id, (err, post) => {
    if (err) {
      res.status(404).json({ message: "post not found with this id" });
    } else {
      if (!post) {
        res.status(400).json({ message: "post not available" });
      } else {
        res.json(post);
      }
    }
  });
  // }
});

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }, (err, profile) => {
      if (err) {
        res.status(404).json({ message: "your profile is not registered" });
      } else {
        Post.findById(req.params.id, (err, post) => {
          if (err) {
            res.status(404).json({ message: "post not found with this id" });
          } else {
            if (!post) {
              res.status(400).json({ message: "post not available" });
            } else {
              if (req.user.id !== post.user.toString()) {
                res.status(401).json({ message: "Unauthorized User" });
              } else {
                post.remove().then(() => {
                  res.json({ success: true });
                });
              }
            }
          }
        });
      }
    });
  }
);

router.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }, (err, profile) => {
      if (err) {
        res.status(404).json({ message: "cannot find the profile" });
      } else {
        Post.findById(req.params.id, (err, post) => {
          if (
            post.likes.filter(item => req.user.id === item.user.toString())
              .length
          ) {
            res.status(400).json({ message: "you already like this post" });
          } else {
            post.likes.unshift({ user: req.user.id });
            post.save().then(post => res.json(post));
          }
        });
      }
    });
  }
);

router.post(
  "/dislike/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }, (err, profile) => {
      if (err) {
        res.status(404).json({ message: "cannot find the profile" });
      } else {
        Post.findById(req.params.id, (err, post) => {
          if (
            post.likes.filter(item => req.user.id === item.user.toString())
              .length === 0
          ) {
            res.status(400).json({ message: "you have not like this post" });
          } else {
            const removeIndex = post.likes
              .map(item => {
                item.user.toString();
              })
              .indexOf(req.user.id);
            post.likes.splice(removeIndex, 1);
            post.save().then(post => res.json(post));
          }
        });
      }
    });
  }
);

router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }, (err, profile) => {
      if (err) {
        res.status(404).json({ message: "cannot find the profile" });
      } else {
        Post.findById(req.params.id, (err, post) => {
          const newComment = {
            name: req.user.name,
            text: req.body.text,
            avatar: req.user.avatar,
            user: req.user.id
          };
          if (err) {
            res.status(400).json({ message: "An Error Occur this post" });
          } else {
            post.comments.unshift(newComment);
            post.save().then(post => res.json(post));
          }
        });
      }
    });
  }
);

router.post(
  "/comment/:id/:commentId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }, (err, profile) => {
      if (err) {
        res.status(404).json({ message: "cannot find the profile" });
      } else {
        Post.findById(req.params.id, (err, post) => {
          if (err) {
            res.status(400).json({ message: "cannot find the id" });
          } else {
            if (
              post.comments.filter(
                comment => comment._id.toString() === req.params.commentId
              ).length === 0
            ) {
              res.status(400).json({
                message: "you did not remove this comment yet"
              });
            }

            console.log("this is comment id", req.params.commentId);

            removeIndex = post.comments.filter(
              item => item._id.toString() === req.params.commentId
            )._id;
            console.log("this is remove index", removeIndex);
            post.comments.splice(removeIndex, 1);
            post.save().then(post => res.json(post));
          }
        });
      }
    });
  }
);

module.exports = router;
