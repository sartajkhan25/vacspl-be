const CONSTANTS = require("../configs/CONSTANTS")

const commonMethods={
    checkOptifinish(email){
        if(!email){
            return false
        }
        return email.includes(CONSTANTS.optifinishEmail)
    },
    getDate(key=""){
        let date = new Date();
        let month = date.getMonth()

        if(key==="month"){
            return CONSTANTS.months[month]
        } else if(key==="year"){
            return date.getFullYear()
        } else if (key==="day"){
            return date.getDate()
        }else{
            return `${date.getDate()}_${CONSTANTS.months[month]}_${date.getFullYear()}`
        }
    },
    getMonth(){
        return this.getDate("month")
    },
    getYear(){
        return this.getDate("year")
    },

}
module.exports = commonMethods