const Compte = require("../Models/Compte");

class CompteService {
    async getAllCompte(){
        return await Compte.findAll({include : 'client'});
    }

    async getCompteByID(compteID){
        return await Compte.findByPk(compteID)
    }

    async addCompte(compte){
        return await Compte.create(compte);
    }
    
    async removeCompte(compteID){
        return await Compte.destroy({
            where : {CO_ID : compteID}
        })
    }

    async updateCompte(compteId, compte){
        return await Compte.update(compte, {
            where : {CO_ID : compteId},
            individualHooks : true
        })
    }
} 

module.exports = new CompteService();