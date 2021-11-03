/*importar las dependecias*/
/*const para declarar una constante*/
/*Framework express, para utilizar librerías*/
const express=require('express');

/*instanciar una variable del express*/
var app=express();
/*utilizaremos el directorio /public para alojar los archivos
que puede acceder el cliente*/
app.use(express.static('public'))

/*definimos una ruta post */
//request es una petición que hace un cliente
//response es la respuesta al cliente

app.post('/ruta-post',(req,res)=>{
     
    return res.send("Hola desde la ruta post");
});

app.get('/ruta-get',(req,res)=>{
     
    return res.send("<h1>Hola desde la ruta get</h1>");
});



app.listen(8080,() => {
    console.log("Servidor escuchando desde el puerto 8080");

});
