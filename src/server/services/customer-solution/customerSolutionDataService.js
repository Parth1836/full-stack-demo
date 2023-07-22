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
            include: [{
                model: BrandsLookup,
                required: true,
                include: [{
                    model: Brands,
                    required: true,
                }]
            }],
            where : {
                status: true,
            }
        });
    }

    async createCS(body) {
        console.log("create body", body);
        const csObj = {
            cs_name: body.cs_name,
            cs_desc: body.cs_desc,
            hub: body.hub,
            country: body.country,
            status: body.status,
            year: body.year
        }
        const result = await CustomerSolution.create(csObj);
        console.log("result", result);
        return result;
     }
}
module.exports = CustomerSolutionDataService;