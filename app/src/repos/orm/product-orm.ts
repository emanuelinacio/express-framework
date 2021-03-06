import { PrismaClient } from '@models/prisma';
import product, { IProduct } from '@models/product-model';

const prisma = new PrismaClient();

const add = async function (productTypeAdd:IProduct) 
{
    const insert = await prisma.product.create({ 
        data: productTypeAdd
    });

    return insert;
}

const getAllProduct = async function () : Promise<IProduct[] | null>
{
    const products = await prisma.product.findMany();
    const productsArray = new Array();

    products.map( function( productItem ) {
        productsArray.push(
            product.new( 
                productItem.idproduct !== null ? productItem.idproduct : 0,
                productItem.name !== null ? productItem.name : '',
                productItem.description !== null ? productItem.description : '',
                productItem.image !== null ? productItem.image : '',
                productItem.price !== null ? productItem.price : 0,
                productItem.productType_idproduct_type !== null ? productItem.productType_idproduct_type : 0,
                productItem.store_idstore !== null ? productItem.store_idstore : 0,

                productItem.productType_store_idstore !== null ? productItem.productType_store_idstore : 0,

            )
        );
    } );

    return productsArray;
}

const getOneProduct = async function ( id: number ) : Promise<IProduct | null>
{
    const productTypeQuery = await prisma.product.findFirst({
        where: {
            idproduct: id,
        },
    });

    if ( productTypeQuery !== null ) {
        return product.new(

            productTypeQuery.idproduct !== null ? productTypeQuery.idproduct : 0,
            productTypeQuery.name !== null ? productTypeQuery.name : '',
            productTypeQuery.description !== null ? productTypeQuery.description : '',
            productTypeQuery.image !== null ? productTypeQuery.image : '',
            productTypeQuery.price !== null ? productTypeQuery.price : 0,
            productTypeQuery.productType_idproduct_type !== null ? productTypeQuery.productType_idproduct_type : 0,
            productTypeQuery.store_idstore !== null ? productTypeQuery.store_idstore : 0,
            productTypeQuery.productType_store_idstore !== null ? productTypeQuery.productType_store_idstore : 0,
        );
    }

    return null;
}

export default {
    add,
    getAllProduct,
    getOneProduct
} as const