"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// middleware
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/course", courseRouter);
userRouter.get("/create-users", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User created Successfully",
        User: user,
    });
});
courseRouter.post("create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "Course created Successfully",
        User: course,
    });
});
const loggerMiddleware = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get("/", loggerMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.params)
    try {
        const { email, name } = req.query;
        console.log(email);
        res.send("We have no fronted so we can use postman for crud operation");
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "Failed to get data",
        });
    }
}));
app.post("/", (req, res) => {
    console.log(" Postman to send data --> ", req.body);
    res.send("Get data");
    // res.json({
    //   message : " Successfully received data"
    // })
});
exports.default = app;
