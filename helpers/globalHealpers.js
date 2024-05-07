const CONSTANTS  = require("../configs/CONSTANTS")

const globalHealpers = {
    getImUrl(list){
        // https://mapi.indiamart.com/wservce/crm/crmListing/v2/?glusr_crm_key=
        // mRyzEbpv4X/ESPes73CO7luIplXMmzk=
        // &start_time=22-12-2023
        // &end_time=22-12-2023
        let sortedList = list.sort((a,b)=>new Date(b.QUERY_TIME) - new Date(a.QUERY_TIME))
        console.log(sortedList)
        if(!sortedList || !sortedList.length){
            sortedList = [{QUERY_TIME: '2023-01-10 10:21:52',}]
        }
        let  {start_time, end_time} = this.getStartEndTime(sortedList[0].QUERY_TIME, 7)
        // console.log(CONSTANTS)
        return `${CONSTANTS.im.url}${CONSTANTS.im.key}&start_time=${start_time}&end_time=${end_time}`
    },
    getStartEndTime(date,days,isfuture=false){
        let trimmed = date.slice(0,10).split("-").reverse().join("-")
        console.log("🚀 ~ file: globalHealpers.js:20 ~ getStartEndTime ~ trimmed:", trimmed)
        let day = trimmed.split("-")[0]
        let month = trimmed.split("-")[1]
        let year = trimmed.split("-")[2]
        
        if(isfuture){
            
        } else{
            let dateNew = new Date([month,day,year].join("-"))

            let startDate = new Date(dateNew.setDate(dateNew.getDate()+1));
            let start_time = startDate.getDate() + "-" + `${startDate.getMonth() + 1}` + "-" + startDate.getFullYear()

            let endDate = new Date(dateNew.setDate(dateNew.getDate()+6));
            let end_time = endDate.getDate() + "-" + `${endDate.getMonth() + 1}` + "-" + endDate.getFullYear()

            // here the date-> https://mapi.indiamart.com/wservce/crm/crmListing/v2/?glusr_crm_key=mRyzEbpv4X/ESPes73CO7luIplXMmzk=&start_time=21-12-2023&end_time=15-12-2023
            // so revesing Date
            return {start_time, end_time}
        }
    }
}


module.exports = globalHealpers