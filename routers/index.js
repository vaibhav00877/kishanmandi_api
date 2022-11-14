const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("All Good Kishan Bhaiyo...!")
})
router.use("/sellers", require("./sellers"));
router.use("/customers", require("./customers"));
router.use("/products", require("./products"));

module.exports = router;
