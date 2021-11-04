const express = require("express");
// const { check, oneOf, validationResult } = require("express-validator");

// goi controller xu ly router homepage
const getIPController = require("./../controllers/getIPController");

let router = express.Router();




module.exports = () => {
    // cau hình router trang chủ
    // ##################
    router.get('/', (req, res, next)=>{getIPController.getclientIP(req,res,next)});

    return router;
}