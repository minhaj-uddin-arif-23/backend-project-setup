"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parser use to send data to parse
app.use(express_1.default.json());
app.use(express_1.default.text());
// :productId/:subId
app.get("/", (req, res) => {
    // console.log(req.params)
    const { email, name } = req.query;
    console.log(email);
    res.send("We have no fronted so we can use postman for crud operation");
});
app.post("/", (req, res) => {
    console.log(" Postman to send data --> ", req.body);
    res.send("Get data");
    // res.json({
    //   message : " Successfully received data"
    // })
});
exports.default = app;
