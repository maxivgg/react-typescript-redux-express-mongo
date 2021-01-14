const mongoose = require("mongoose");

const db = {};

db.mongoose = mongoose;

//db.url = process.env.DB_URL;
db.url = "mongodb+srv://admin:bAKRDKzPon2ZXtL8@cluster0.y4v3j.mongodb.net/sample_posts?retryWrites=true&w=majority"
db.posts = require("./posts")(mongoose);

module.exports = db;
