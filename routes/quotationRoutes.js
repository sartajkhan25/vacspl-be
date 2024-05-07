const express = require('express');
const {
    createQuotation,
    getAllQuotation,
    deleteQuotation,
    getSingleQuotation,
} = require("../controller/quotationController")

const router = express.Router();



router.route("/").get(getAllQuotation).post(createQuotation)

router.route("/:id").delete(deleteQuotation).get(getSingleQuotation)


module.exports = router