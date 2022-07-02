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
const prisma_1 = require("@models/prisma");
const product_model_1 = __importDefault(require("@models/product-model"));
const prisma = new prisma_1.PrismaClient();
const getAllProduct = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield prisma.product.findMany();
        const productsArray = new Array();
        products.map(function (productItem) {
            productsArray.push(product_model_1.default.new(productItem.idproduct !== null ? productItem.idproduct : 0, productItem.name !== null ? productItem.name : '', productItem.description !== null ? productItem.description : '', productItem.price !== null ? productItem.price : 0, productItem.productType_idproduct_type !== null ? productItem.productType_idproduct_type : 0, productItem.store_idstore !== null ? productItem.store_idstore : 0));
        });
        return productsArray;
    });
};
const getOneProduct = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const productTypeQuery = yield prisma.product.findFirst({
            where: {
                idproduct: id,
            },
        });
        if (productTypeQuery !== null) {
            return product_model_1.default.new(productTypeQuery.idproduct !== null ? productTypeQuery.idproduct : 0, productTypeQuery.name !== null ? productTypeQuery.name : '', productTypeQuery.description !== null ? productTypeQuery.description : '', productTypeQuery.price !== null ? productTypeQuery.price : 0, productTypeQuery.productType_idproduct_type !== null ? productTypeQuery.productType_idproduct_type : 0, productTypeQuery.store_idstore !== null ? productTypeQuery.store_idstore : 0);
        }
        return null;
    });
};
exports.default = {
    getAllProduct,
    getOneProduct
};
