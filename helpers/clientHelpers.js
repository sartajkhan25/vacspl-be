const clientHelper = {
    getNameOfClients(clientArr){
        let newArr = []
        clientArr.forEach((client, index)=>{
            newArr.push({
                client_name:client.client_name,
                _id:client._id,
                client_slug:client.client_slug,
            })
        })

        return newArr
    }
}


module.exports = clientHelper