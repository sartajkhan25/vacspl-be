const express = require('express');
const { 
    getAllLeads,
    // saveClient,
    // getSingleClient,
    // deleteClient,
    // getAllClientNames
} = require('../controller/leadsController')


const router = express.Router();

router.route("/").get(getAllLeads)
// router.route("/").get(getAllClient).post(saveClient)
// router.route("/").get(getAllClient).post(saveClient)
// router.route("/names").get(getAllClientNames)
// router.route("/single/:id").get(getSingleClient).delete(deleteClient)


module.exports = router