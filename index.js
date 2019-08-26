const DB_PORT = 1979
const WEB_PORT = 8080
const express = require('express')
const fs = require('fs')

const db = express()
const app = express()


var workingFile = JSON.parse(fs.readFileSync('local_files/payload.json',"utf8"))
 
/*
async function consultarProductosVisitados()  {
    await fetch('http://localhost:1979/clientList/k24lk234kln2l34nid1').then(htmlResponse=>htmlResponse).then(data => data)
}
var test =  consultarProductosVisitados()
//console.log(Object.keys(workingFile))
*/
db.use(express.json())
app.use(express.static('public'))



  db.get('/clientList/:machineId',(req,res)=>{
    //let info =  consultarProductosVisitados()
    //console.log(info)
    res.send(`quieres saber acerca de ${req.params.machineId}`)
})
db.post("/clientList",(req,res)=>{


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

db.post('/newClient',(req,res)=>{
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

app.listen(WEB_PORT,()=>{
    console.log(`API excuchando por el puerto ${WEB_PORT}`)    
})