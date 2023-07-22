const dbConnection = require("../../db-connect/dbConfig");
const CustomerSolutionDataService = require("./customerSolutionDataService");

class CustomerSolutionService {
    constructor() {
        this._customerSolutionDataService = new CustomerSolutionDataService();
        // this.getAllCS = this.getAllCS.bind(this);
    }

    async getAllCS() {
        try {
            const getAllCSService = await this._customerSolutionDataService.getAllCSDataService();
            return getAllCSService;
        } catch (error) {
            res.send({
                status: "error",
                message: error.message,
            });
        }
    }

    async createCS(body) {
        console.log("service-create body", body);
        try {
            const getAllCSService = await this._customerSolutionDataService.createCS(body);
            return getAllCSService;
        } catch (error) {
            res.send({
                status: "error",
                message: error.message,
            });
        }
    }
}

module.exports = CustomerSolutionService;