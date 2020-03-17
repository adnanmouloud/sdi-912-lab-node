module.exports = function (app, swig) {

    app.get('/autores/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {});
        res.send(respuesta);
    });

    app.post("/autor", function (req, res) {
        let nombre = '';
        let grupo = "";
        if(req.body.nombre == null){
            nombre = 'nombre no enviado en la petición';
        }
        else{
            nombre = req.body.nombre;
        }
        if(req.body.grupo == null){
            grupo = "grupo no enviado en la petición";


        }
        else{
            grupo = req.body.grupo;
        }

        res.send('Autor agregado:' + nombre + '<br>'
            +' grupo :' + grupo + '<br>'
            + ' rol: ' + req.body.rol);
    });

    app.get("/autores", function (req, res) {
        let autores = [ {
            "nombre" : "Lewis",
            "grupo" : "bailaos",
            "rol" : "cantante"

        }, {
            "nombre" : "El papi",
            "grupo" : "kelos",
            "rol" : "cantante"

        }, {
            "nombre" : "Adni",
            "grupo" : "CyberPapis",
            "rol" : "bajista"
        }]

        let respuesta = swig.renderFile('views/autores.html', {
            vendedor : 'Tienda de canciones',
            autores : autores
        })
        res.send(respuesta);


    });

}