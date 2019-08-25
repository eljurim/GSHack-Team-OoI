const DB_PORT = 1979
const express = require('express')
const fs = require('fs')

const db = express()


var workingFile = JSON.parse(fs.readFileSync('local_files/payload.json',"utf8"))


//console.log(Object.keys(workingFile))

db.use(express.json())

//la cosulta de productos visitados requiere la entrada de #machine-id

db.get("/linker",(req,res)=>{



})

db.post("/linker",(req,res)=>{


    if (req.body.machineId) {
//        console.log(Object.keys(workingFile))
        if ( Object.keys(workingFile).find((element)=> element === req.body.machineId ))
        {
            res.send(`Se encontro el usuario y los productos consultados por el/ella fueron  ${JSON.stringify(workingFile[req.body.machineId])}` )
        } else {
            res.send("el cliente no existe, guardando nueva entrada")
        }

    }
    
    else {
            res.send("debes enviar el \"machineid\" de maquina para consultar esta API")
        }

})

db.post('/newEntry',(req,res)=>{
    let newItem = req.body
    workingFile[req.body.machineId] = {
        skus: req.body.skus,
        date: new Date()
    }

    fs.writeFileSync('local_files/payload.json',JSON.stringify(workingFile),'utf8')
    res.send("El nuevo objeto es " + JSON.stringify(workingFile))
})

db.listen(DB_PORT,()=>{
    console.log(`API excuchando por el puerto ${DB_PORT}`)    
})