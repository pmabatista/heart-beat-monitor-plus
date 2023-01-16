import { hearbeat } from "@prisma/client";
import { prismaMock } from "../../../common/prisma/prisma.singleton";
import { HEARBEATS_MOCK, HEARBEAT_CREATE_PRISMA_MOCK } from "../../../common/test/mocks";
import { HearbeatDto } from "../hearbeat.domain";
import { HearbeatRepository } from "../hearbeat.repository";


describe("Testing HearbeatRepository.createHearbeat ", () => {
  it("should must create the heartbeat", async () => {
    prismaMock.hearbeat.create.mockResolvedValue(HEARBEAT_CREATE_PRISMA_MOCK);
    const hearbeatDto: HearbeatDto = { milliseconds: 560 };
    const hearbeat = await HearbeatRepository.createHearbeat(hearbeatDto);
    expect(hearbeat).toBeDefined();
    expect(hearbeat.milliseconds).toEqual(560);
  });
});
describe("Testing HearbeatRepository.getHearBeats ", () => {
it("should must get many heartbeats", async () => {
    prismaMock.hearbeat.findMany.mockResolvedValue(HEARBEATS_MOCK as unknown as hearbeat[]);
    const hearbeat = await HearbeatRepository.getHearBeats();
    expect(hearbeat).toBeDefined();
    expect(hearbeat.length).toBe(2);
  });
});