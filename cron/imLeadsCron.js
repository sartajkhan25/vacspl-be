var cron = require('node-cron');
const imLeadsHealpers = require('../helpers/imLeadsHealpers');
const CONSTANTS = require('../configs/CONSTANTS');


const imLeadsCron = {
  dailyLeadToDb(){
    cron.schedule(CONSTANTS.cromTime.every10Minutes, () => {
      console.log('running a task every minute');
      imLeadsHealpers.addDailyLeads()
    });
  }
}
module.exports = imLeadsCron
