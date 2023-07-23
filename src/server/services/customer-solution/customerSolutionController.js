const dbConnection = require("../../db-connect/dbConfig");
const CustomerSolutionService = require("./customerSolutionService");

class CustomerSolutionController {
    constructor() {
        this._customerSolutionService = new CustomerSolutionService();
        this.getAllCS = this.getAllCS.bind(this);
        this.getCSById = this.getCSById.bind(this);
        this.createOrUpdateCS = this.createOrUpdateCS.bind(this);
        this.deleteCS = this.deleteCS.bind(this);
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

    async getCSById(req, res) {
        try {
            console.log("getCSById", req.body)
            const result = await this._customerSolutionService.getCSById(req.body.cs_id);
            res.status(200).send({
                status: "success",
                message: "Customer Solution List",
                data: result,
              });
        } catch (error) {
            
        }
    }

    async createOrUpdateCS(req, res) {
        console.log("controller-create body", req);
        try {
            if(!req.body) {
                res.status(500).send({
                    status: "error",
                    message: "Error",
                    data: [],
                  });
            }
            const result = await this._customerSolutionService.createOrUpdateCS(req.body);
            res.status(200).send({
                status: "success",
                message: "Customer Solution List",
                data: result,
              });
        } catch (error) {
            
        }
    }

    async deleteCS(req, res) {
        console.log("controller-delete body", req.body);
        try {
            const result = await this._customerSolutionService.deleteCS(req.body.cs_id);
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