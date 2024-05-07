const asyncHandler = require('express-async-handler')
// const Employee = require("../modals/EmployeeModal")
const EmployeeData = require("../db/employee/employee.json")
const commonMethods = require('../utils/commonMethods')
const path = require('path');
const fs = require('fs');
// const 
// const employeeHelpers = require("../helpers/employeeHelpers")





// @des- get all Employees
// @route- GET /api/employee
// @access- PUBLIC

const getAllEmployee = asyncHandler(async (req, res) => {
    const EmployeeList = EmployeeData
    console.log(EmployeeData)
    if (EmployeeList) {
        res.status(200).json(EmployeeList)
    } else {
        res.status(400);
        throw new Error("There is a issue when finding the Employee")
    }
})



// @des- create a  Employees
// @route- POST /api/employee/add
// @access- PUBLIC

const saveEmployee = asyncHandler(async (req, res) => {
    let { email, name, mobile, password } = { ...req.body }
    //check if email allowed-> optifinish hona chaiye
    if (commonMethods.checkOptifinish(email)) {
        //check if already exist by email
        if (EmployeeData.find(item => item.email === email)) {
            // email is persent-> Return Already Exist
            res.status(200).json("employee already exist")
        } else {
            // new Entry
        }
    } else {
        // check for Labour
    }
    // if yes->send already exist
    // if no->craete auto usre name->check username exist-> if no reate new?
    // if yes-> create-> sucess message
    // no-> send message for different user
    const employee = await Employee.create({ ...req.body });
    if (employee) {
        res.status(200).json(employee)
    } else {
        res.status(400);
        throw new Error("There is a issue when saving the Employee")
    }
})

// @des- get all Employees
// @route- GET /api/employee/:id
// @access- PUBLIC

const markAttendence = asyncHandler(async (req, res) => {
    const { employee_code, data, is_present } = req.body
    let mon = commonMethods.getMonth().toLowerCase()
    let year = commonMethods.getYear()
    const filename = `${mon.toLowerCase()}_${year}.json`;

    console.log("🚀 ~ markAttendence ~ filename:", filename)
    const folderPath = path.join(__dirname, 'db', 'attendance');
    console.log("🚀 ~ markAttendence ~ folderPath:", folderPath)

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const filePath = path.join(folderPath, filename);
    console.log("🚀 ~ markAttendence ~ filePath:", filePath)

    // if(fs.existsSync(filePath)){
    //     res.status(200).json("Alreadt Present")
    // }else{
    //     res.status(200).json("Alreadt Present")
    // }


    if (fs.existsSync(filePath)) {
        // If the file exists, read its content
        fs.readFile(filePath, 'utf8', (err, fileData) => {
            if (err) {
                console.error('Error reading file:', err);
                res.status(500).send('Error reading existing attendance data.');
                return;
            }

            // Parse existing data from file
            let existingData;
            try {
                existingData = JSON.parse(fileData);
                console.log("🚀 ~ fs.readFile ~ fileData:", fileData)
            } catch (parseError) {
                console.error('Error parsing existing data:', parseError);
                res.status(500).send('Error parsing existing attendance data.');
                return;
            }
            let date = commonMethods.getDate()
            let newData = {}
            if (existingData[date]) {
                newData = { ...existingData, [date]: { ...existingData[date], [employee_code]: is_present } }
            } else {
                newData = { ...existingData, [date]: { [employee_code]: is_present } }
            }

            // Merge existing data with new data
            // const newData = { ...existingData, ...data };
            console.log("🚀 ~ fs.readFile ~ newData:", newData)

            // Write merged data back to the file
            fs.writeFile(filePath, JSON.stringify(newData), (writeErr) => {
                if (writeErr) {
                    console.error('Error writing file:', writeErr);
                    res.status(500).send('Error saving attendance data.');
                } else {
                    console.log('Attendance data appended successfully.');
                    res.status(200).send(newData);
                }
            });
        });
    } else {
        let date = commonMethods.getDate()
        let newData = { [date]:{[employee_code]: is_present} }
        
        // If the file does not exist, simply write the new data to the file
        fs.writeFile(filePath, JSON.stringify(newData), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                res.status(500).send('Error saving attendance data.');
            } else {
                console.log('Attendance data saved successfully.');
                res.status(200).send('Attendance data saved successfully.');
            }
        });
    }




    // fs.writeFile(filePath, JSON.stringify(data), (err) => {
    //     if (err) {
    //         console.error('Error writing file:', err);
    //         res.status(500).send('Error saving attendance data.');
    //     } else {
    //         console.log('Attendance data saved successfully.');
    //         res.status(200).send('Attendance data saved successfully.');
    //     }
    // });

    // res.status(200).json("done")




    // if(employee){
    //     res.status(200).json(employee)
    // } else{
    //     res.status(400);
    //     throw new Error("There is a issue when getting the Employee")
    // }
})


// @des-delete a  Employee
// @route- DELETE /api/employee/:id
// @access- PUBLIC

// const deleteEmployee = asyncHandler(async (req, res) => {
//     const employee = await Employee.findById(req.params.id);
//     if (!employee) {
//         res.status(404);
//         throw new Error("employee not found");
//     }
//     await Employee.deleteMany({ _id: { $in: [req.params.id] } })
//     res.status(200).json(employee)
// })



// @des- get all employee list
// @route- DELETE /api/employee/:id
// @access- PUBLIC

// const getAllEmployeeNames = asyncHandler(async (req, res) => {
//     const EmployeeList = EmployeeData
//     if (!EmployeeList) {
//         res.status(404);
//         throw new Error("employee not found");
//     }

//     res.status(200).json(employeeHelpers.getNameOfEmployees(EmployeeList))
// })


module.exports = {
    getAllEmployee,
    saveEmployee,
    markAttendence,
    // deleteEmployee,
    // getAllEmployeeNames
}