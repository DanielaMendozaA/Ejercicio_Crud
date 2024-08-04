"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error" });
};
exports.default = errorHandler;
