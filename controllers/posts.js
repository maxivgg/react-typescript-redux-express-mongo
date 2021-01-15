const db = require("../models");
const Posts = db.posts;

exports.findAll = (req, res) => {
  Posts.find({})
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error",
      });
    });
};

exports.create = (req, res) => {
  if (!req.body.userId || 
    !req.body.id ||
     !req.body.title || 
     !req.body.body ){
    res.status(400).send({
    message: `please complete all the fields!`
     }) 
    } 

    
  const { userId, id, title, body } = req.body;

  const newPost = new Posts({
    userId,
    id,
    title,
    body,
  });

  newPost
    .save(newPost)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error",
      });
    });
};

exports.update = (req, res) => {
  Posts.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.send({ message: `Post was updated` }))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error",
      });
    });
};

exports.delete = (req, res) => {
  Posts.findByIdAndRemove(req.params.id)
    .then((data) => res.send({ message: `Post was removed` }))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error",
      });
    });
};
