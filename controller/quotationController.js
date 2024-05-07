const asyncHandler = require('express-async-handler')
const Quotation = require("../modals/QuotationModal")



// @des- get all Quotation
// @route- /api/quotation
// @access- PUBLIC

const getAllQuotation = asyncHandler(async (req, res) => {

    const quotationList = await Quotation.find();
    if(quotationList){
        res.status(200).json(quotationList)
    } else{
        res.status(400);
        throw new Error("There is a issue when finding the Quotation")
    }
})

// @des- get individual Quotation
// @route- /api/quotation/:id
// @access- PUBLIC

const getSingleQuotation = asyncHandler(async (req, res) => {
    if(req.params.id==="last"){
        const quotation = await Quotation.find().sort({_id: -1}).limit(1)
        res.status(200).json(quotation)
    }
    const quotation = await Quotation.findById(req.params.id);
    if(quotation){
        res.status(200).json(quotation)
    } else{
        res.status(400);
        throw new Error("There is a issue when finding the Quotation")
    }
})



// @des- save Quotation
// @route- /api/create-quotation
// @access- PUBLIC

const createQuotation = asyncHandler(async (req, res) => {
    const {client_name, contact_person_name, quotation_amt} = req.body;

    if(true){
        const quotation = await Quotation.create({...req.body})
        console.log(quotation)
        res.status(201).json(req.body)
    } else{
        res.status(400);
        throw new Error("Quotation Amount and Client Name is mandatory")
    }
})


// @des- Delete Quotation
// @route- /api/create-quotation
// @access- PUBLIC

const deleteQuotation = asyncHandler(async (req, res) => {
    console.log(req.params.id)
    const quotation = await Quotation.findById(req.params.id);
    console.log(quotation)
    if(!quotation){
        res.status(404);
        throw new Error("Quotation not found");
    }
    await Quotation.deleteMany({ _id: { $in: [req.params.id] } })
    res.status(200).json(quotation)
})



module.exports = {
    createQuotation,
    getAllQuotation,
    deleteQuotation,
    getSingleQuotation,
}
