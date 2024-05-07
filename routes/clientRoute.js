const express = require('express');
const { 
    getAllClient,
    saveClient,
    getSingleClient,
    deleteClient,
    getAllClientNames
} = require('../controller/clientController')


const router = express.Router();

router.route("/").get(getAllClient).post(saveClient)
router.route("/names").get(getAllClientNames)
router.route("/single/:id").get(getSingleClient).delete(deleteClient)


module.exports = router