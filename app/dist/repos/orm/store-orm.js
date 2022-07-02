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
const store_model_1 = __importDefault(require("@models/store-model"));
const prisma = new prisma_1.PrismaClient();
const add = function (storeAdd) {
    return __awaiter(this, void 0, void 0, function* () {
        const insert = yield prisma.store.create({
            data: storeAdd
        });
        return insert;
    });
};
const getAllStores = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const stores = yield prisma.store.findMany();
        const storesArray = new Array();
        stores.map(function (storeItem) {
            storesArray.push(store_model_1.default.new(storeItem.idstore !== null ? storeItem.idstore : 0, storeItem.name !== null ? storeItem.name : '', storeItem.description !== null ? storeItem.description : '', storeItem.featured_image !== null ? storeItem.featured_image : '', storeItem.logo_image !== null ? storeItem.logo_image : '', storeItem.slug !== null ? storeItem.slug : '', storeItem.address !== null ? storeItem.address : '', storeItem.open !== null ? storeItem.open : new Date("2000-00-00T00:00:00"), storeItem.closed !== null ? storeItem.closed : new Date("2000-00-00T00:00:00")));
        });
        return storesArray;
    });
};
const getOneStore = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const storeQuery = yield prisma.store.findFirst({
            where: {
                idstore: id,
            },
        });
        if (storeQuery !== null) {
            return store_model_1.default.new(storeQuery.idstore !== null ? storeQuery.idstore : 0, storeQuery.name !== null ? storeQuery.name : '', storeQuery.description !== null ? storeQuery.description : '', storeQuery.featured_image !== null ? storeQuery.featured_image : '', storeQuery.logo_image !== null ? storeQuery.logo_image : '', storeQuery.slug !== null ? storeQuery.slug : '', storeQuery.address !== null ? storeQuery.address : '', storeQuery.open !== null ? storeQuery.open : new Date("2000-00-00T00:00:00"), storeQuery.closed !== null ? storeQuery.closed : new Date("2000-00-00T00:00:00"));
        }
        return null;
    });
};
exports.default = {
    add,
    getAllStores,
    getOneStore
};
