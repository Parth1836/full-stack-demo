const dbConnection = require("../../db-connect/dbConfig");
const CustomerSolutionService = require("./customerSolutionService");

class CustomerSolutionController {
    constructor() {
        this._customerSolutionService = new CustomerSolutionService();
        this.getAllCS = this.getAllCS.bind(this);
        this.createCS = this.createCS.bind(this);
    }

    async getAllCS(req, res) {
        try {
            const result = await this._customerSolutionService.getAllCS();
            res.status(200).send({
                status: "success",
                message: "Customer Solution List",
                data: result,
              });
        } catch (error) {
            
        }
    }

    async createCS(req, res) {
        console.log("controller-create body", req);
        try {
            const result = await this._customerSolutionService.createCS(req.body);
            res.status(200).send({
                status: "success",
                message: "Customer Solution List",
                data: result,
              });
        } catch (error) {
            
        }
    }
}

module.exports = CustomerSolutionController;