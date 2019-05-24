var Sequelize = require('sequelize');
var fs = require('fs');
var path = require('path');
var mysql2 = require('mysql2');

let database = null;

const loadModels = (sequelize) => {
    const dir = path.join(__dirname, '../app/models');
    //console.log(dir);
    let models = [];
    fs.readdirSync(dir).forEach(file => {
        const modelDir = path.join(dir, file),
        model = sequelize.import(modelDir);
        models[model.name] = model;
    });
    //console.log(models);
    return models;
};

module.exports = () => {
    if(!database){
        sequelize = new Sequelize(
            process.env._DATABASE,
            process.env._USER,
            process.env._PASS,
            {
                host: process.env._HOST,
                dialect: 'mysql',
                dialectModule: mysql2
            }
        );

        database = {
            sequelize,
            Sequelize,
            models: loadModels(sequelize)
        };
        
        /*
        sequelize.sync().done(() => {
            return database;
        });
        */
    } 

    return database;

}