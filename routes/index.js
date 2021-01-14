let router = require("express").Router();
const postsRouter = require("./posts");

router.use("/api/posts", postsRouter)

module.exports = router;