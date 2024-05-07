const express = require("express");
const dotenv = require("dotenv").config();
// const connectDb = require("./configs/dbConnection")
const errorHandler = require("./middlewares/errorHandler")
// const imLeadsCron  = require('./cron/imLeadsCron')
var cors = require('cors')


// connectDb()
const app = express();

const port = process.env.PORT || 5000;
app.use(cors({
    origin: process.env.ALLOW_CORS_URL,
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    credentials: true,
}));
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://main--comfy-longma-c28579.netlify.app');
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // You can also set other CORS headers as needed
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    // Handle preflight requests (OPTIONS)
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });
app.use("/", require("./routes/homeRoute"))
// app.use("/api/quotation", require("./routes/quotationRoutes"))
// app.use("/api/client", require("./routes/clientRoute"))
// app.use("/api/reports", require("./routes/reportRoute"))
// app.use("/api/leads", require("./routes/leadsRoute"))
app.use("/api/employee", require("./routes/employeeRoute"))
app.get('/healthcheck', (req, res) => res.send('Hello World Version5!'))
app.use(errorHandler)


app.listen(port, ()=>{
    console.log(`Server listening on ${port}: Sartaj-portal`)
    // imLeadsCron.dailyLeadToDb()
})