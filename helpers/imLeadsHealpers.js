// const axios = require("axios")
const axios = require('axios');
const imLead = require("../modals/IMLeadModal")
const globalHealpers = require("../helpers/globalHealpers")

const imLeadsHealpers = {
    async addDailyLeads(){
        let list =await imLead.find();
        // console.log(list)
        let url = await globalHealpers.getImUrl(list.filter(item=> !!item.QUERY_TIME))
        console.log(url)
        // Hittin IM API here...
        let res = await axios.get(url);
        // console.log(res)
        if(res.data && res.data.RESPONSE && res.data.RESPONSE.length){
            console.log("🚀 ~ file: imLeadsHealpers.js:16 ~ addDailyLeads ~ res.data.RESPONSE:", res.data.RESPONSE)
            console.log("============================================")
            res.data.RESPONSE.forEach(lead=>{
                // save leadin in DB
                console.log("saving in each fn------------------------")
                this.saveSingleLeadInDB(lead)
            })

        }
    },
    async saveSingleLeadInDB(lead){
        let list =await imLead.find();
        if(list){
            const imlead = await imLead.create({...lead})
            console.log("New Lead Craeted With Data ")
            console.log("--",imlead)
        } else{
            res.status(400);
            throw new Error("Quotation Amount and Client Name is mandatory")
        }
    }
   
}


module.exports = imLeadsHealpers