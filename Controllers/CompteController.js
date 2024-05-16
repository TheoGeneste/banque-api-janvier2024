const CompteService = require("../Services/CompteService");

class CompteController {
    async getAllCompte(request, result){
        try {
            const comptes = await CompteService.getAllCompte();
            result.json(comptes);
        } catch (error) {
            result.status(500);
            result.json({error : 'Une erreur est surevnue lors de la récupération des comptes'});
        }
    }
}

module.exports = new CompteController();