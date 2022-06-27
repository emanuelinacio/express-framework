
// Promotion schema
export interface IPromotion {
    idpromotion: number;
    name: string;
    description: string;
    active: string;
    price: number;
    product_idproduct: number;
    product_store_idstore: number;
    store_idstore: number;
}


/**
 * Get a new Promotion object.
 * 
 * @returns 
 */
function getNew( idpromotion: number,  product_idproduct: number, product_store_idstore:number, name: string, description:string, active:string, price:number, store_idstore:number ): IPromotion {
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
function copy(promotion: IPromotion): IPromotion {
    return {
        idpromotion: promotion.idpromotion,
        product_idproduct: promotion.product_idproduct,
        product_store_idstore: promotion.product_store_idstore,
        name: promotion.name,
        description: promotion.description,
        active: promotion.active,
        price: promotion.price,
        store_idstore: promotion.store_idstore
    }
}


// Export default
export default {
    new: getNew,
    copy,
}
