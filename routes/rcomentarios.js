module.exports = function(app, swig, gestorBD) {
    app.post('/comentario/:cancion_id', function(req, res) {
        let cancion = { "_id" : gestorBD.mongo.ObjectID(req.params.cancion_id) };
        let comentario = {
            autor: req.session.usuario,
            texto: req.body.texto,
            cancion_id : cancion._id
        }

        if( req.session.usuario == null){
            res.send("Error no hay usuario en sesión");
        }

        else{
            gestorBD.insertarComentario(comentario, function(result) {
                if (result == null ){
                    res.send("Error al insertar el comentario");
                } else {
                    res.redirect('/cancion/'+ req.params.cancion_id);
                }
            });
        }



    })

}