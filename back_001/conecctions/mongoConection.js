const mongoose= require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/users_prueba');

const objectdb = mongoose.connection;

objectdb.on('connected', ()=>{
    console.log('Conexion exitosa a MongoDb');
});

objectdb.on('error', ()=>{
    console.log('Error al conectar con MongoDb');
});

console.log(objectdb.users)

module.exports=objectdb;