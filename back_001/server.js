const express = require('express');
const router = require('./routes/routes');
const app = express();


app.use(express.json())
//Router
app.use(router)

const fileBd = require('./conecctions/mongoConection')


app.set('PORT', 4000);

app.listen(app.get('PORT'))
console.log(`Servidor corriendo en el puerto ${app.get('PORT')}`)
