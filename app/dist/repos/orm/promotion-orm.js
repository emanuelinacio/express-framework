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
const promotion_model_1 = __importDefault(require("@models/promotion-model"));
const prisma = new prisma_1.PrismaClient();
const getAllPromotions = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const promotions = yield prisma.promotion.findMany();
        const promotionsArray = new Array();
        promotions.map(function (productItem) {
            promotionsArray.push(promotion_model_1.default.new(productItem.idpromotion !== null ? productItem.idpromotion : 0, productItem.product_idproduct !== null ? productItem.product_idproduct : 0, productItem.product_store_idstore !== null ? productItem.product_store_idstore : 0, productItem.name !== null ? productItem.name : '', productItem.description !== null ? productItem.description : '', productItem.active !== null ? productItem.active : '', productItem.price !== null ? productItem.price : 0, productItem.store_idstore !== null ? productItem.store_idstore : 0));
        });
        return promotionsArray;
    });
};
const getOnePromotion = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const promotionQuery = yield prisma.promotion.findFirst({
            where: {
                idpromotion: id,
            },
        });
        if (promotionQuery !== null) {
            return promotion_model_1.default.new(promotionQuery.idpromotion !== null ? promotionQuery.idpromotion : 0, promotionQuery.product_idproduct !== null ? promotionQuery.product_idproduct : 0, promotionQuery.product_store_idstore !== null ? promotionQuery.product_store_idstore : 0, promotionQuery.name !== null ? promotionQuery.name : '', promotionQuery.description !== null ? promotionQuery.description : '', promotionQuery.active !== null ? promotionQuery.active : '', promotionQuery.price !== null ? promotionQuery.price : 0, promotionQuery.store_idstore !== null ? promotionQuery.store_idstore : 0);
        }
        return null;
    });
};
exports.default = {
    getAllPromotions,
    getOnePromotion
};
