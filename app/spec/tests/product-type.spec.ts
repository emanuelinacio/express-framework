import supertest from 'supertest';
import StatusCodes from 'http-status-codes';
import { SuperTest, Test, Response } from 'supertest';

import app from '@server';
import userRepo from '@repos/user-repo';
import User, { IUser } from '@models/user-model';
import { pErr } from '@shared/functions';
import { p as productTypePaths } from '@routes/productType-router';
import { ParamMissingError, UserNotFoundError } from '@shared/errors';

type TReqBody = string | object | undefined;

describe('product-type-router', () => {

    const productTypePath = '/api/product-type';
    const getProductTypePath = `${productTypePath}${productTypePaths.get}`;

    const { BAD_REQUEST, CREATED, OK } = StatusCodes;
    let agent: SuperTest<Test>;

    beforeAll((done) => {
        agent = supertest.agent(app);
        done();
    });

    describe(`"GET:${getProductTypePath}"`, () => {

        it('should be true', (done) => {
            // Setup Spy
            const test_true = true;
    
            expect(test_true).toBe(true);
            //expect(res.body.error).toBeUndefined();
        });

    } );

} );