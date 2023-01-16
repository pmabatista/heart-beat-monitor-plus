import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

/**
 * Controller class with HealthCheck routes.
 * @privateRemarks Our Kubernetes environment mandates a Health Check endpoint in every API.
 */
export class HealthCheckController {
  router = Router();
  static readonly PATH = '/health-check';

  constructor() {
      this.router.get(HealthCheckController.PATH, (_request: Request, response: Response) => {
          response.status(StatusCodes.OK).send('I\'m okay! Don\'t worry!');
      });
  }
}