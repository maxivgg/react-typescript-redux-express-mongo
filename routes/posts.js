const posts = require("../controllers/posts");
let router = require("express").Router();

router.get("/", posts.findAll);
router.post("/", posts.create);
router.get("/:id", posts.findOne);
router.get("/title/:title", posts.findOneTitle);
router.put("/:id", posts.update);
router.delete("/:id", posts.delete);

module.exports = router;