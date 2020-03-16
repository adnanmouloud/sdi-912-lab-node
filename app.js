//Módulos
let express = require('express');
let app = express();

// Variables
app.set('port', 8081);

//Rutas/controladores por lógica
require("./routes/rusuarios")(app);
require("./routes/rcanciones")(app);

//lanzar el servidor
app.listen(app.get('port'), function () {
    console.log("Servidor activo");
})
