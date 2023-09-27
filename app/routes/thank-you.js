var express = require("express");
var router = express.Router();

/* GET thank-you page. */
router.post("/", function (req, res, next) {
  res.render("thank-you", { title: "Thank You!" });
});

module.exports = router;
