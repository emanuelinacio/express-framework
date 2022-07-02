"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_router_1 = __importDefault(require("./user-router"));
const productType_router_1 = __importDefault(require("./productType-router"));
const product_router_1 = __importDefault(require("./product-router"));
const store_router_1 = __importDefault(require("./store-router"));
const promotion_router_1 = __importDefault(require("./promotion-router"));
// Export the base-router
const baseRouter = (0, express_1.Router)();
// Setup routers
baseRouter.use('/users', user_router_1.default);
baseRouter.use('/product-types', productType_router_1.default);
baseRouter.use('/products', product_router_1.default);
baseRouter.use('/stores', store_router_1.default);
baseRouter.use('/promotions', promotion_router_1.default);
// Export default.
exports.default = baseRouter;
