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
const functions_1 = require("@shared/functions");
const mock_orm_1 = __importDefault(require("./orm/mock-orm"));
const promotion_orm_1 = __importDefault(require("./orm/promotion-orm"));
/**
 * Get one user.
 *
 * @param id
 * @returns
 */
function getOne(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const getPromtionQuery = yield promotion_orm_1.default.getOnePromotion(1);
        if (getPromtionQuery) {
            return getPromtionQuery;
        }
        return null;
    });
}
/**
 * See if a user with the given id exists.
 *
 * @param id
 */
function persists(idusers) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield mock_orm_1.default.openDb();
        for (const user of db.users) {
            if (user.idusers === idusers) {
                return true;
            }
        }
        return false;
    });
}
/**
 * Get all users.
 *
 * @returns
 */
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const allPromotion = yield promotion_orm_1.default.getAllPromotions();
        if (allPromotion !== null) {
            return allPromotion;
        }
        return null;
    });
}
/**
 * Add one user.
 *
 * @param user
 * @returns
 */
function add(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield mock_orm_1.default.openDb();
        user.idusers = (0, functions_1.getRandomInt)();
        db.users.push(user);
        return mock_orm_1.default.saveDb(db);
    });
}
/**
 * Update a user.
 *
 * @param user
 * @returns
 */
function update(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield mock_orm_1.default.openDb();
        for (let i = 0; i < db.users.length; i++) {
            if (db.users[i].idusers === user.idusers) {
                db.users[i] = user;
                return mock_orm_1.default.saveDb(db);
            }
        }
    });
}
/**
 * Delete one user.
 *
 * @param id
 * @returns
 */
function deleteOne(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield mock_orm_1.default.openDb();
        for (let i = 0; i < db.users.length; i++) {
            if (db.users[i].id === id) {
                db.users.splice(i, 1);
                return mock_orm_1.default.saveDb(db);
            }
        }
    });
}
// Export default
exports.default = {
    getOne,
    persists,
    getAll,
    add,
    update,
    delete: deleteOne,
};
