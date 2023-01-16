import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import { HearbeatService } from "./hearbeat.service";
/**
 * Controller class containing routes to manipulate the Bound domain.
 */
export class HearbeatController {
  static readonly PATH = "/hearbeat";
  router = Router();

  constructor() {
    this.router.post(HearbeatController.PATH, HearbeatController.registerHearbeatHandler);
    this.router.get(HearbeatController.PATH, HearbeatController.getHearBeatsHandler);
  }

  /**
   * Handles the findManyHandler request.
   * @param request - The request object.
   * @param response - The response object.
   * @returns response - Response with status code and body.
   */
  private static async registerHearbeatHandler(request: Request, response: Response): Promise<void> {
    const hearbeat = request.body;
    const result = await HearbeatService.registerHearbeat(hearbeat);
    response.status(StatusCodes.CREATED).json(result).end();
  }

  /**
   * Handles the findOne request.
   * @param request - The request object.
   * @param response - The response object.
   * @returns response - Response with status code and body.
   */
  private static async getHearBeatsHandler(request: Request, response: Response): Promise<void> {
    const result = await HearbeatService.getHearBeats();
    response.status(StatusCodes.OK).json(result).end();
  }
}
