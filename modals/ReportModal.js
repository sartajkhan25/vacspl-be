const mongoose = require('mongoose');


const ReportSchema = mongoose.Schema({
    client_name:{
        type:String,
        required:[true, "Client Name is Required"]
    },
    client_email:{
        type:String,
        // required:[true, "client_emailis Required"]
    },
    client_address:{
        type:String,
        // required:[true, "client_addressis Required"]
    },
    // client_mobile:{
    //     type:String,
    //     // required:[true, "client_mobileis Required"]
    // },
    contact_person_name:{
        type:String,
        // required:[true, "contact_person_nameis Required"]
    },
    contact_person_email:{
        type:String,
        // required:[true, "contact_person_emailis Required"]
    },
    contact_person_phone:{
        type:String,
        // required:[true, "contact_person_phoneis Required"]
    },
    contact_person_designation:{
        type:String,
        // required:[true, "contact_person_designation Required"]
    },
    service_engineer_name:{
        type:String,
        required:[true, "contact_person_designation Required"]
    },
    service_engineer_email:{
        type:String,
        // required:[true, "contact_person_designation Required"]
    },
    service_engineer_employee_id:{
        type:String,
        // required:[true, "contact_person_designation Required"]
    },
    service_engineer_contact_number:{
        type:String,
        // required:[true, "contact_person_designation Required"]
    },
    client_id:{
        type:String,
        // required:[true, "employee_id is Required"]
    },
    client_city:{
        type:String,
        // required:[true, "employee_id is Required"]
    },
    client_state:{
        type:String,
        // required:[true, "employee_id is Required"]
    },
    client_country:{
        type:String,
        // required:[true, "employee_id is Required"]
    },
    service_report:{
        type:Object,
        required:[true, "service_report is Required"]
    },
    date_of_service:{
        type:String,
        // required:[true, "service_report is Required"]
    },


},{
    timestamps:true
})


module.exports = mongoose.model('Report', ReportSchema)