const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books/saved", bookRoutes);

module.exports = router;
