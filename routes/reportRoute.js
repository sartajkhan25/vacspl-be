const express = require('express');
const { 
    getAllServiceReports,
    addServiceReport,
    getSingleReport,
    deleteSingleReport,
    // getAllClientNames
} = require('../controller/reportController')


const router = express.Router();

router.route("/allReports").get(getAllServiceReports)
router.route("/addReport").post(addServiceReport)
router.route("/single/:id").get(getSingleReport).delete(deleteSingleReport)


module.exports = router