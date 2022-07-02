"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get a new User object.
 *
 * @returns
 */
function getNew(idstore, name, description, featured_image, logo_image, slug, address, open, closed) {
    return {
        idstore: idstore,
        name,
        description,
        featured_image,
        logo_image,
        slug,
        address,
        open,
        closed
    };
}
/**
 * Copy a user object.
 *
 * @param store
 * @returns
 */
function copy(store) {
    return {
        idstore: store.idstore,
        name: store.name,
        description: store.description,
        featured_image: store.featured_image,
        logo_image: store.logo_image,
        slug: store.slug,
        address: store.address,
        open: store.open,
        closed: store.closed
    };
}
// Export default
exports.default = {
    new: getNew,
    copy,
};
