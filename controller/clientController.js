const asyncHandler = require('express-async-handler')
// const Client = require("../modals/ClientModal")
const Client = []
const clientHelpers = require("../helpers/clientHelpers")





// @des- get all Clients
// @route- GET /api/client
// @access- PUBLIC

const getAllClient = asyncHandler(async (req, res) => {
    console.log(req)
    const ClientList = await Client.find();
    if(ClientList){
        res.status(200).json(ClientList)
    } else{
        res.status(400);
        throw new Error("There is a issue when finding the Client")
    }
})



// @des- create a  Clients
// @route- POST /api/quotation
// @access- PUBLIC

const saveClient = asyncHandler(async (req, res) => {
    const client = await Client.create({...req.body});
    if(client){
        res.status(200).json(client)
    } else{
        res.status(400);
        throw new Error("There is a issue when saving the Client")
    }
})

// @des- get all Clients
// @route- GET /api/client/:id
// @access- PUBLIC

const getSingleClient = asyncHandler(async (req, res) => {
    const client = await Client.findById(req.params.id);
    if(client){
        res.status(200).json(client)
    } else{
        res.status(400);
        throw new Error("There is a issue when getting the Client")
    }
})


// @des-delete a  Client
// @route- DELETE /api/client/:id
// @access- PUBLIC

const deleteClient = asyncHandler(async (req, res) => {
    const client = await Client.findById(req.params.id);
    if(!client){
        res.status(404);
        throw new Error("client not found");
    }
    await Client.deleteMany({ _id: { $in: [req.params.id] } })
    res.status(200).json(client)
})



// @des- get all client list
// @route- DELETE /api/client/:id
// @access- PUBLIC

const getAllClientNames = asyncHandler(async (req, res) => {
    const ClientList = await Client.find();
    if(!ClientList){
        res.status(404);
        throw new Error("client not found");
    }

    res.status(200).json(clientHelpers.getNameOfClients(ClientList))
})


module.exports ={
    getAllClient,
    saveClient,
    getSingleClient,
    deleteClient,
    getAllClientNames
}