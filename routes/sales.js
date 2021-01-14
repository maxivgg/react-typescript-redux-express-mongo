const sales = require("../controllers/sales");
let router = require("express").Router();

router.get("/", sales.findAll);
router.post("/", sales.create);
router.get("/:id", sales.findOne);
router.get("/saleDate/:saleDate", sales.findOneSaleDate);
router.put("/:id", sales.update);
router.delete("/:id", sales.delete);

module.exports = router;