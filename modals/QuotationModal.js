const mongoose = require('mongoose');


const QuotationSchema = mongoose.Schema({
    client_name:{
        type:String,
        // required:[true, "Client Name is Required"]
    },
    client_email:{
        type:String,
        // required:[true, "client_emailis Required"]
    },
    client_address:{
        type:String,
        // required:[true, "client_addressis Required"]
    },
    client_mobile:{
        type:String,
        // required:[true, "client_mobileis Required"]
    },
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
    product_type:{
        type:String,
        // required:[true, "product_type is Required"]
    },
    quotation_amt:{
        type:Number,
        // required:[true, "quotation_amt is Required"]
    },
    quotation_date:{
        type:String,
        // required:[true, "quotation_date is Required"]
    },
    quotation_id:{
        type:Number,
        // required:[true, "quotation_id is Required"]
    },
    employee_name:{
        type:String,
        // required:[true, "employee_name is Required"]
    },
    employee_id:{
        type:String,
        // required:[true, "employee_id is Required"]
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
    quotations:{
        type:Object,
        // required:[true, "employee_id is Required"]
    },


},{
    timestamps:true
})


module.exports = mongoose.model('Quotation', QuotationSchema)