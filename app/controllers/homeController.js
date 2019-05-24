module.exports.index = function(application, req, res){
    
    var Usuario = application.config.database.models.Usuario;

    Usuario.findAll()
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500);
    });
}
