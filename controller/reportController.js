const asyncHandler = require('express-async-handler')
const Report = require("../modals/ReportModal")



// @des- get all Service Reports
// @route- /api/report/allReports
// @access- PUBLIC

const getAllServiceReports = asyncHandler(async (req, res) => {

    const ReportList = await Report.find();
    if (ReportList) {
        res.status(200).json(ReportList)
    } else {
        res.status(400);
        throw new Error("There is a issue when finding the Reports")
    }
})

// @des- add report
// @route- /api/reports/addReport
// @access- PUBLIC

const addServiceReport = asyncHandler(async (req, res) => {
    const { client_name, service_engineer_name, service_report } = req.body;

    if (!client_name || !service_engineer_name || !service_report || !service_report.length) {
        res.status(400);
        throw new Error("Company Name, Service Engineer Name, Service Report fields are mandatory")
    }
    const report = await Report.create({ ...req.body })
    console.log(report);
    res.status(201).json(report)
})


// @des- get Single Service Reports
// @route- /api/reports/single/:id
// @access- PUBLIC

const getSingleReport = asyncHandler(async (req, res) => {
    console.log("in report controller")

    const report = await Report.findById(req.params.id)
    if (report) {
        res.status(200).json(report)
    } else {
        res.status(400);
        throw new Error("There is a issue when finding the Reports")
    }
})


// @des- delete Single Service Reports
// @route- /api/reports/single/:id
// @access- PUBLIC

const deleteSingleReport = asyncHandler(async (req, res) => {

    const report = await Report.findById(req.params.id)
    console.log(report)
    if (report) {
        await Report.deleteMany({ _id: { $in: [req.params.id] } })
        res.status(200).json(report)
    } else {
        res.status(400);
        throw new Error("There is a issue when deleting the Reports")
    }
})

module.exports = {
    getAllServiceReports,
    addServiceReport,
    getSingleReport,
    deleteSingleReport
}