"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get a new Promotion object.
 *
 * @returns
 */
function getNew(idpromotion, product_idproduct, product_store_idstore, name, description, active, price, store_idstore) {
    return {
        idpromotion: idpromotion,
        product_idproduct,
        product_store_idstore,
        name,
        description,
        active,
        price,
        store_idstore
    };
}
/**
 * Copy a promotion object.
 *
 * @param promotion
 * @returns
 */
function copy(promotion) {
    return {
        idpromotion: promotion.idpromotion,
        product_idproduct: promotion.product_idproduct,
        product_store_idstore: promotion.product_store_idstore,
        name: promotion.name,
        description: promotion.description,
        active: promotion.active,
        price: promotion.price,
        store_idstore: promotion.store_idstore
    };
}
// Export default
exports.default = {
    new: getNew,
    copy,
};
