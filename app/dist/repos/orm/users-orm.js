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
const user_model_1 = __importDefault(require("@models/user-model"));
const prisma = new prisma_1.PrismaClient();
const getAllUsers = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield prisma.users.findMany();
        const usersArray = new Array();
        users.map(function (userItem) {
            usersArray.push(user_model_1.default.new(userItem.idusers !== null ? userItem.idusers : 0, userItem.name !== null ? userItem.name : '', userItem.email !== null ? userItem.email : '', userItem.last_name !== null ? userItem.last_name : '', userItem.login !== null ? userItem.login : '', userItem.password !== null ? userItem.password : '', userItem.store_idstore !== null ? userItem.store_idstore : 0));
        });
        return usersArray;
    });
};
const getOneUser = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.users.findFirst({
            where: {
                idusers: id,
            },
        });
        if (user !== null) {
            return user_model_1.default.new(user.idusers !== null ? user.idusers : 0, user.name !== null ? user.name : '', user.email !== null ? user.email : '', user.last_name !== null ? user.last_name : '', user.login !== null ? user.login : '', user.password !== null ? user.password : '', user.store_idstore !== null ? user.store_idstore : 0);
        }
        return null;
    });
};
const getUserByEmail = function (emailSearch) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.users.findFirst({
            where: {
                email: emailSearch !== null ? emailSearch : '',
            },
        });
        if (user !== null) {
            return user_model_1.default.new(user.idusers !== null ? user.idusers : 0, user.name !== null ? user.name : '', user.email !== null ? user.email : '', user.last_name !== null ? user.last_name : '', user.login !== null ? user.login : '', user.password !== null ? user.password : '', user.store_idstore !== null ? user.store_idstore : 0);
        }
        return null;
    });
};
exports.default = {
    getAllUsers,
    getUserByEmail,
    getOneUser
};
