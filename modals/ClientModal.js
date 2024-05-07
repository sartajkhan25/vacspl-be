const mongoose = require('mongoose');


const ClientSchema = mongoose.Schema({
    client_name:{
        type:String,
        required:[true, "Client Name is Required"]
    },
    client_slug:{
        type:String,
    },
    client_primary_email:{
        type:String,
    },
    client_email:{
        type:Object,
    },
    client_phone_code:{
        type:String,
    },
    client_primary_phone:{
        type:String,
    },
    client_phone:{
        type:Object,
    },
    client_address:{
        type:Object,
    },
    client_products:{
        type:Object,
    },
    plants:{
        type:Object,
    },
    contact_person:{
        type:Object,
    },
    quotations:{
        type:Object,
    },
    created_by:{
        type:Object,
        required:[true, "Lead Owner/ Crated By is Required"]
    },
    employee_updates:{
        type:Object,
    }


},{
    timestamps:true
})


module.exports = mongoose.model('Client', ClientSchema)