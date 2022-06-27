import { PrismaClient } from '@models/prisma';
import promotion, { IPromotion } from '@models/promotion-model';

const prisma = new PrismaClient();

const getAllPromotions = async function () : Promise<IPromotion[] | null>
{
    const promotions = await prisma.promotion.findMany();
    const promotionsArray = new Array();

    promotions.map( function( productItem ) {
        promotionsArray.push(
            promotion.new( 
                productItem.idpromotion !== null ? productItem.idpromotion : 0,
                productItem.product_idproduct !== null ? productItem.product_idproduct : 0,
                productItem.product_store_idstore !== null ? productItem.product_store_idstore : 0,
                productItem.name !== null ? productItem.name : '',
                productItem.description !== null ? productItem.description : '',
                productItem.active !== null ? productItem.active : '',
                productItem.price !== null ? productItem.price : 0,
                productItem.store_idstore !== null ? productItem.store_idstore : 0,
            )
        );
    } );

    return promotionsArray;
}

const getOnePromotion = async function ( id: number ) : Promise<IPromotion | null>
{
    const promotionQuery = await prisma.promotion.findFirst({
        where: {
            idpromotion: id,
        },
    });

    if ( promotionQuery !== null ) {
        return promotion.new(
            promotionQuery.idpromotion !== null ? promotionQuery.idpromotion : 0,
            promotionQuery.product_idproduct !== null ? promotionQuery.product_idproduct : 0,
            promotionQuery.product_store_idstore !== null ? promotionQuery.product_store_idstore : 0,
            promotionQuery.name !== null ? promotionQuery.name : '',
            promotionQuery.description !== null ? promotionQuery.description : '',
            promotionQuery.active !== null ? promotionQuery.active : '',
            promotionQuery.price !== null ? promotionQuery.price : 0,
            promotionQuery.store_idstore !== null ? promotionQuery.store_idstore : 0,

        );
    }

    return null;
}

export default {
    getAllPromotions,
    getOnePromotion
} as const