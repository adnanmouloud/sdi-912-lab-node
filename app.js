//Módulos
let express = require('express');
let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// Variables
app.set('port', 8081);

//Rutas/controladores por lógica
require("./routes/rusuarios")(app);
require("./routes/rcanciones")(app);

//lanzar el servidor
app.listen(app.get('port'), function () {
    console.log("Servidor activo");
})