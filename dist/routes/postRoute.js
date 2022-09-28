"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var postController_1 = require("../controllers/postController");
var postRouter = (0, express_1.Router)();
postRouter.post("/", postController_1.createPost);
postRouter.get("/", postController_1.getPost);
postRouter.put("/:id", postController_1.updatePost);
postRouter.delete("/:id", postController_1.deletePost);
exports.default = postRouter;
//# sourceMappingURL=postRoute.js.map