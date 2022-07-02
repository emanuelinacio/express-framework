// Product schema
export interface IProduct {
    idproduct : number;
    name: string;
    description: string;
    image: string,
    price: number;
    productType_idproduct_type: number;
    store_idstore: number;
    productType_store_idstore: number;
}

/*
  idproduct: number
  description: string | null
  image: string | null
  name: string | null
  price: number | null
  store_idstore: number
  productType_idproduct_type: number
  productType_store_idstore: number
/

/**
 * Get a new Product object.
 * 
 * @returns 
 */
function getNew( idproduct: number,  name: string, description: string, image: string, price: number, productType_idproduct_type: number, store_idstore:number, productType_store_idstore:number ): IProduct {
    return {
        idproduct: idproduct,
        name: name,
        description: description,
        image: image,
        price: price,
        productType_idproduct_type: productType_idproduct_type,
        store_idstore: store_idstore,
        productType_store_idstore: productType_store_idstore
    };
}


/**
 * Copy a Product object.
 * 
 * @param productType 
 * @returns 
 */
function copy(productType: IProduct): IProduct {
    return {
        idproduct: productType.idproduct,
        name: productType.name,
        description: productType.description,
        image: productType.image,
        price: productType.price,
        productType_idproduct_type: productType.productType_idproduct_type,
        store_idstore: productType.store_idstore,
        productType_store_idstore: productType.productType_store_idstore,
        
    }
}


// Export default
export default {
    new: getNew,
    copy,
}
