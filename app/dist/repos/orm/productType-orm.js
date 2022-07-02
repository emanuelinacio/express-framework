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
const productType_model_1 = __importDefault(require("@models/productType-model "));
const prisma = new prisma_1.PrismaClient();
const getAllProductType = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield prisma.productType.findMany();
        const usersArray = new Array();
        products.map(function (productItem) {
            usersArray.push(productType_model_1.default.new(productItem.idproduct_type !== null ? productItem.idproduct_type : 0, productItem.name !== null ? productItem.name : '', productItem.store_idstore !== null ? productItem.store_idstore : 0));
        });
        return usersArray;
    });
};
const getOneProductType = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const productTypeQuery = yield prisma.productType.findFirst({
            where: {
                idproduct_type: id,
            },
        });
        if (productTypeQuery !== null) {
            return productType_model_1.default.new(productTypeQuery.idproduct_type !== null ? productTypeQuery.idproduct_type : 0, productTypeQuery.name !== null ? productTypeQuery.name : '', productTypeQuery.store_idstore !== null ? productTypeQuery.store_idstore : 0);
        }
        return null;
    });
};
exports.default = {
    getAllProductType,
    getOneProductType
};
