let quotation_for_DB = {
    client_id: "client_name value",
    client_name: "client_name value",
    client_mobile: "client_mobile value",
    client_email: "client_email value",
    client_address: "client_address value",
    client_city: "client_address value",
    client_state: "client_address value",
    client_country: "INDIA",

    contact_person_name: "contact_person_name value",
    contact_person_email: "contact_person_email value",
    contact_person_phone: "contact_person_phone value",
    contact_person_designation: "contact_person_phone value",

    quotations:
    {
        quotation_amt: 90000,
        quotation_number: 123,
        quotation_id: "12312312",
        quotation_date: "12-12-23",
        product_type: "Powder Coating Gun",
        status: "Sent, Pending on Client",
        employee_name: "employee_name value",
        employee_id: "employee_id value",
        current_status: "Quotation Sent",
        quotation_url: "",
        discussions: [
            {
                discussion_name: "12-12-023",
                employee_name: "employee_name value",
                employee_id: "employee_id value",
                comment: "he is not Picking the calls"
            }
        ],
        conponents: [
            {
                item_slug: "gun_quotation",
                item_name: "Gun Quotation",
                item_unit_price: 2000,
                item_quantity: 2,
                item_total_price: 2000,
            }
        ],
    },
}
// Show the dropdown list coming from DB
// #PHASE2 - when user select client (contact) from the list then all the data should be prefill from the DB
// #PHASE2 - After Approval::: User should have the option to select the quotation , to prefill the data-> to handle that condition when user is revising the quotation

let quotation_from_FE = {
    client_id: "client_name value", 
    client_name: "client_name value",
    client_mobile: "client_mobile value",
    client_email: "client_email value",
    client_address: "client_address value",
    client_city: "client_address value",
    client_state: "client_address value",
    client_country: "INDIA",

    contact_person_name: "contact_person_name value",
    contact_person_email: "contact_person_email value",
    contact_person_phone: "contact_person_phone value",
    contact_person_designation: "contact_person_phone value",

    quotations:
    {
        quotation_amt: 90000,
        quotation_number: 123, // after getting quotation number from DB.
        // quotation_id: "12312312", //mongo_id
        quotation_date: "12-12-23",
        product_type: "Powder Coating Gun",
        employee_name: "employee_name value",
        employee_id: "employee_id value",
        // current_status: "Quotation Sent", // always will be set sa QUOTATION_CREATED
        // quotation_url:"", // PHASE_2
        conponents: [
            {
                item_slug: "gun_quotation",
                item_name: "Gun Quotation",
                item_unit_price: 2000,
                item_quantity: 2,
                item_total_price: 2000,
            }
        ],
    },
}



// Done----------------------------------------
// FE changes-> Payload Changes
// BE changes->Quotation Modal Changes
// BE changes->Quotation Controllers Changes
// FE<-> BE => Testing




// Pending----------------------------------------
// CRUD APIs for Quotation Changes

// DB changes->Client Collection Ceation

// FE changes-> Company Name Dropdown/Input Changes
// BE changes->Client Modal Changes
// BE changes->Client Controllers Changes
// FE<-> BE => Testing

// CRUD APIs for Client Changes


