const dbConnection = require("../../db-connect/dbConfig");
const CustomerSolutionDataService = require("./customerSolutionDataService");

class CustomerSolutionService {
  constructor() {
    this._customerSolutionDataService = new CustomerSolutionDataService();
    // this.getAllCS = this.getAllCS.bind(this);
  }

  async getAllCS() {
    try {
      const getAllCSService =
        await this._customerSolutionDataService.getAllCSDataService();
      return getAllCSService;
    } catch (error) {
      res.send({
        status: "error",
        message: error.message,
      });
    }
  }

  async getCSById(csId) {
    try {
      const getCSByIdService =
        await this._customerSolutionDataService.getCSById(csId);
      return getCSByIdService;
    } catch (error) {
      res.send({
        status: "error",
        message: error.message,
      });
    }
  }

  async deleteCS(csId) {
    console.log("delete service csId", csId);
    try {
      const deletedCS =
        await this._customerSolutionDataService.deleteCS(csId);
        console.log("delete serive", deletedCS);
      return deletedCS;
    } catch (error) {
      res.send({
        status: "error",
        message: error.message,
      });
    }
  }

  async createOrUpdateCS(body) {
    let csId = "";
    let resultData;
    console.log("service-create body", body);
    try {
      if (body.cs_id) {
        csId = body.cs_id;
        await this._customerSolutionDataService.updateCS(body);
      } else {
        const data = await this._customerSolutionDataService.createCS(body);
        csId = data.dataValues.cs_id;
        console.log("create resultData", data.dataValues.cs_id);
        
      }
      console.log("csId", csId);
      if (csId) {
        let brandsArray = [];
        console.log("---43", body.brands.length > 0);
        if (body.brands.length > 0) {
          for (let index = 0; index < body.brands.length; index++) {
            brandsArray.push({ cs_id: csId, brand_id: body.brands[index] });
          }
        }
        console.log("brandsArray", brandsArray);
        if (brandsArray.length) {
          console.log("inside")
           await this._customerSolutionDataService.createBrandLookup(brandsArray, csId);
        }
        return { cs_id: csId };
      }
    } catch (error) {
      res.send({
        status: "error",
        message: error.message,
      });
    }
  }
}

module.exports = CustomerSolutionService;
