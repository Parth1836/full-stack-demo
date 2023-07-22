const express = require("express");
const connection = require("../../db-connect/db");

const router = express.Router();

router.get("/customers", (req, res) => {
    connection.query("select * from cs_brand_lookup", (err, result) => {
        if(err) {
            res.send({
                status: "error",
              });
        }else {
            res.status(200).send({
                status: "success",
                message: "Customer List API",
                data: result,
              });
        }
    })
  });
module.exports = router;

