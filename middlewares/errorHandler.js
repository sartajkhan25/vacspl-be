const errorHandler = (err, req, res, next)=>{
    const statusCode = res.statusCode || 500;

    res.json({title: "Not Found", message:err.message, stacktrace: err.stack})
}

module.exports = errorHandler