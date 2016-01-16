var express = require('express');
var app= express();
var faker = require('faker');
var _ = require('lodash');

var generateUsuario = function(){
    var randomId = faker.random.uuid();
    var randomName= faker.name.findName();
    var randomContenido = faker.lorem.sentence();
    var randomFecha = faker.date.past();
    var randomImagen = faker.image.avatar();
    return{
        id : randomId,
        nombre : randomName,
        contenido : randomContenido,
        fecha : randomFecha,
        imagen : randomImagen
    }
}

app.get('/',function(req,res){
        ;res.send('Mi primer servidor!');
        })

app.get('/amigos',function(req,res){
    var cantidad = _.random(5,10)
    var usuarios = _.times(cantidad,generateUsuario)
    res.json(usuarios);
})

app.get('/friends',function(req,res){
    res.send('My friends');
})
        app.listen(3000);