const express = require('express');
const path = require('path');
const app = express();

//Ruta
app.get('/',function(req, res){
    res.sendFile(path.join(__dirname, '/views/home.html'));
})
//-dirname te para en donde esta el archivo

const publicPath = path.resolve(__dirname, './public')

//Levantar el servidor
app.listen(3002, function(){
    console.log('servidor corriendo en el puerto 3002');
})
