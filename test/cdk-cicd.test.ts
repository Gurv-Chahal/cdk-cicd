// import * as cdk from 'aws-cdk-lib/core';
// import { Template } from 'aws-cdk-lib/assertions';
// import * as CdkCicd from '../lib/cdk-cicd-stack';


import {handler} from "../services/hello";

describe('hello describe test suite', () => {

    test('handler should return 200', async () => {
        const result = await handler({}, {});
        expect(result.statusCode).toBe(200);
    })
})
