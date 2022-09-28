"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var userRoute_1 = __importDefault(require("./routes/userRoute"));
var app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.listen(3000, function () {
    console.log("http:localhost:3000/");
});
app.use("/user", userRoute_1.default);
app.use(function (err, _req, res, _next) {
    res.status(500).json({ message: err.message });
});
//# sourceMappingURL=_index.js.map