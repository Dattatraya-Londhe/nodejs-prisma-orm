"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = require("../controllers/userController");
var userRouter = (0, express_1.Router)();
userRouter.post("/", userController_1.createUser);
userRouter.get("/", userController_1.getUser);
userRouter.put("/:id", userController_1.updateUser);
userRouter.delete("/:id", userController_1.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=userRoute.js.map