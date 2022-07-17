import supertest from 'supertest';
import StatusCodes from 'http-status-codes';
import { SuperTest, Test, Response } from 'supertest';

import app from '@server';
import productTypeModel, { IProductType } from '@models/productType-model ';
import { getRandomInt, pErr } from '@shared/functions';
import { p as productTypePaths } from '@routes/productType-router';
import { ParamMissingError, UserNotFoundError } from '@shared/errors';
import { randomInt } from 'crypto';

type TReqBody = string | object | undefined;
let agent: SuperTest<Test>;
const productType = '/api/product-types';
const getProductTypePath = `${productType}${productTypePaths.get}`;
const getProductTypePathSingle = `${productType}${productTypePaths.single}`;
const postProductTypePathAdd = `${productType}${productTypePaths.add}`;
const deleteProductTypePath = `${productType}${productTypePaths.delete}`;

beforeAll((done) => {
    agent = supertest.agent(app);
    done();
});

var insertProductType:IProductType;

//GET
describe('product-type GET', () => {    

    //GET ALL
    it(`test Product Type GET:${getProductTypePath}`, (done) => {

        agent.get(getProductTypePath)
        .end((err: Error, res: Response) => {
            pErr(err);
            //console.log(res.body)
            expect(res.status).toBe(200);
            
            const resProductType = res.body.productType;
            const retProductTypes: IProductType[] = resProductType.map((productType: IProductType) => {
                return productTypeModel.copy( productType );
            });
            expect(retProductTypes).toEqual(resProductType);
            done();
        });
    });

    //GET ONE
    it(`test Product Type GET:${getProductTypePathSingle}`, (done) => {

        agent.get( getProductTypePath + '/?idproduct_type=1' )
        .end((err: Error, res: Response) => {
            pErr(err)
            //console.log(res.body)
            expect( res.status ).toBe(200);

            const resProductType = res.body.productType;
            const retProductType: IProductType[] = resProductType.map((productType: IProductType) => {
                return productTypeModel.copy( productType );
            });

            expect( retProductType[0] ).toEqual( resProductType[0] );
            done();
        });
    });

});

//POST
describe('product-type POST', () => {

    const newProductType = {
        name: 'product Type Test' + getRandomInt(),
        store_idstore: 5
    }

    //CREATE
    it(`test productType POST:${postProductTypePathAdd}`, (done) => {

        agent.post( postProductTypePathAdd ).type('form').send(newProductType)
        .end((err: Error, res: Response) => {
            pErr(err)
            //console.log( res.body )
            expect( res.status ).toBe(201);

            insertProductType = productTypeModel.copy( res.body.addProductType );

            expect( newProductType.name ).toEqual( insertProductType.name );       
            done();
        });
    });

    //DELETE
    it(`test delete productType DELETE:${deleteProductTypePath}`, (done) => {

        agent.delete( deleteProductTypePath.replace(':id', insertProductType.idproduct_type.toString() ) )
        .end((err: Error, res: Response) => {
            pErr(err)
            //console.log( res.body )

            expect( res.status ).toBe(200);
            expect( res.body.deleteProductType ).toEqual( insertProductType.idproduct_type );
            done();
        });
    });    

});