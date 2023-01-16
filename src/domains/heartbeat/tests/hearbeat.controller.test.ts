import main from "../../../server";
import { StatusCodes } from "http-status-codes";
import request, { Response } from "supertest";
import { HearbeatService } from "../hearbeat.service";
import { HearbeatController } from "../hearbeat.controller";
import { HEARBEAT_MOCK, MEASURES_MOCK } from "../../../common/test/mocks";
import { MeasuresResponse } from "../hearbeat.domain";

jest.mock("../hearbeat.service");

const PATH = `${main.BASE_PATH}${HearbeatController.PATH}`;

describe("Testing HEARBEAT CONTROLLER class", () => {
  afterAll(() => {
    main.server.close();
  });

  describe("Testing GET Hearbeats measurements", () => {
    it("must always respond with a list of measures analyzed", async () => {
      const measures: MeasuresResponse = MEASURES_MOCK;
      HearbeatService.getHearBeats = jest.fn().mockImplementationOnce(() => measures);
      const response: Response = await request(main.server).get(PATH).send();

      expect(response.body.measures).toHaveLength(20);
      expect(response.body).toEqual(MEASURES_MOCK);
      expect(response.status).toEqual(StatusCodes.OK);
    });
  });

  describe("Testing REGISTER Hearbeat", () => {
    const hearbeat = {
      milliseconds: 3000,
    };
    it("should always respond with a created heartbeat", async () => {
      HearbeatService.registerHearbeat = jest.fn().mockImplementationOnce(() => HEARBEAT_MOCK);
      const response: Response = await request(main.server).post(PATH).send(hearbeat);
      expect(response.body).toEqual(HEARBEAT_MOCK);
      expect(response.status).toEqual(StatusCodes.CREATED);
    });
  });
});
