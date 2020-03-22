//Módulos
let express = require('express');
let app = express();

let swig = require('swig');
let mongo = require('mongodb');

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// Variables
app.set('port', 8081);
app.set('db','mongodb://admin:sdi@tiendamusica-shard-00-00-dt0jd.mongodb.net:27017,tiendamusica-shard-00-01-dt0jd.mongodb.net:27017,tiendamusica-shard-00-02-dt0jd.mongodb.net:27017/test?ssl=true&replicaSet=tiendamusica-shard-0&authSource=admin&retryWrites=true&w=majority');

//Rutas/controladores por lógica
require("./routes/rusuarios")(app, swig, mongo);
require("./routes/rcanciones")(app, swig, mongo);
require("./routes/rautores")(app, swig, mongo);

//lanzar el servidor
app.listen(app.get('port'), function () {
    console.log("Servidor activo");
})
