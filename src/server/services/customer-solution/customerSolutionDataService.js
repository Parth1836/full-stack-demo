const CustomerSolution = require("../../models/CustomerSolution");
const Brands = require("../../models/Brand");
const BrandsLookup = require("../../models/brandLookup");

CustomerSolution.hasMany(BrandsLookup, {
  foreignKey: "cs_id",
  sourceKey: "cs_id",
});

BrandsLookup.hasOne(Brands, {
  foreignKey: "brand_id", // column from right table
  sourceKey: "brand_id", // column from left table
});

class CustomerSolutionDataService {
  constructor() {
    this._customerSolution = CustomerSolution;
    this._brandLookup = BrandsLookup;
    this._brand = Brands;
  }

  async getAllCSDataService() {
    return await CustomerSolution.findAll({
      include: [
        {
          model: BrandsLookup,
          required: false,
          include: [
            {
              model: Brands,
              required: false,
            },
          ],
        },
      ],
      where: {
        status: true,
      },
    });
  }

  async getCSById(csId) {
    return await CustomerSolution.findOne({
      include: [
        {
          model: BrandsLookup,
          required: false,
          include: [
            {
              model: Brands,
              required: false,
            },
          ],
        },
      ],
      where: {
        cs_id: csId,
      },
    });
  }

  async deleteCS(csId) {
    return await CustomerSolution.update(
      { status: false },
      {
        where: {
          cs_id: csId,
        },
      }
    );
  }

  async createCS(body) {
    console.log("create body", body);
    const csObj = {
      cs_name: body.cs_name,
      cs_desc: body.cs_desc,
      hub: body.hub,
      country: body.country,
      status: body.status,
      year: body.year,
    };
    const result = await CustomerSolution.create(csObj);
    console.log("result", result);
    return result;
  }

  async updateCS(body) {
    console.log("update body", body);
    const csObj = {
      cs_name: body.cs_name,
      cs_desc: body.cs_desc,
      hub: body.hub,
      country: body.country,
      status: body.status,
      year: body.year,
    };
    const result = await CustomerSolution.update(csObj, {
      where: {
        cs_id: body.cs_id,
      },
    });
    console.log("result", result);
    return result;
  }

  async createBrandLookup(brandObj, csId) {
    console.log("create brand body", brandObj);
    await BrandsLookup.destroy({ where: { cs_id: csId } });
    const data = await BrandsLookup.bulkCreate(brandObj);
    console.log("brandlookups data", data);
    return 1;
  }
}
module.exports = CustomerSolutionDataService;
