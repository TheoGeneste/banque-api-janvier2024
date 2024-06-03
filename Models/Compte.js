const {Model, DataTypes} = require('sequelize');
const sequelize = require('../Config/Sequelize');
const Client = require('./Client');

class Compte extends Model {

}

Compte.init({
    CO_ID : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    CO_Type : {
        type : DataTypes.STRING,
        allowNull : false
    },
    CO_Solde : {
        type : DataTypes.FLOAT,
        allowNull : false
    },
    CO_TauxInteret : {
        type : DataTypes.FLOAT,
        allowNull : false
    },
    CO_DecouvertAutorise : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    CO_DateOuverture : {
        type : DataTypes.DATE,
        allowNull : false
    },
    CO_RIB : {
        type : DataTypes.CHAR,
        length : 27,
        allowNull : true
    },
    FK_CLIENT : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
} , {
    sequelize,
    modelName: "Compte",
    tableName : "compte",
    timestamps : false
})


module.exports = Compte;