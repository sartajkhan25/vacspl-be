const express = require('express');
const { 
    getAllEmployee,
    saveEmployee,
    markAttendence
} = require('../controller/employeeController')


const router = express.Router();

router.route("/").get(getAllEmployee)
router.route("/add").post(saveEmployee)
router.route("/markAttendence").post(markAttendence)


module.exports = router