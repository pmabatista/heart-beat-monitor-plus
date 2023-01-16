import { HEARBEATS_MOCK, HEARBEAT_CREATE_MOCK } from "../../../common/test/mocks";
import { HearbeatDto } from "../hearbeat.domain";
import { HearbeatRepository } from "../hearbeat.repository";
import { HearbeatService } from "../hearbeat.service";

jest.mock("../hearbeat.repository");

describe("Testing HearbeatService.getHearBeats ", () => {
  it("should be call the repository once", async () => {
    HearbeatRepository.getHearBeats = jest.fn().mockImplementationOnce(() => HEARBEATS_MOCK);
    const hearbeats = await HearbeatService.getHearBeats();
    expect(hearbeats).toBeDefined();
    expect(HearbeatRepository.getHearBeats).toBeCalledTimes(1);
  });
});

describe("Testing HearbeatService.registerHearbeat ", () => {
  it("should be call the repository once", async () => {
    const hearbeatDto: HearbeatDto = { milliseconds: 560 };
    HearbeatRepository.createHearbeat = jest.fn().mockImplementationOnce(() => HEARBEAT_CREATE_MOCK);
    const hearbeat = await HearbeatService.registerHearbeat(hearbeatDto);
    expect(hearbeat).toBeDefined();
    expect(hearbeat.success).toEqual(true);
	expect(hearbeat.hearbeatId).toEqual(1);
    expect(HearbeatRepository.createHearbeat).toBeCalledTimes(1);
  });
});
