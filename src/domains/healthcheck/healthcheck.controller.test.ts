import { HealthCheckController } from '../healthcheck/healthcheck.controller';
import main from '../../server';
import { StatusCodes } from 'http-status-codes';
import request, { Response } from 'supertest';

describe('Testing HealthCheckController class', () => {
    afterAll(() => {
        main.server.close();
    });

    describe('Testing GET health-check', () => {
        it('should always respond with an OK if the application is up', async() => {
            const path = `${main.BASE_PATH}${HealthCheckController.PATH}`;
            const response: Response = await request(main.server).get(path);
            expect(response.text).toContain('I\'m okay! Don\'t worry!');
            expect(response.status).toEqual(StatusCodes.OK);
        });
    });
});