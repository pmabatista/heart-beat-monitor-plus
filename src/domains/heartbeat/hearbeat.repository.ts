import { hearbeat } from "@prisma/client";
import prismaClient from "../../common/prisma/prisma.client";
import {  HearbeatDto } from "./hearbeat.domain";

export class HearbeatRepository {
  static async getHearBeats(): Promise<HearbeatDto[]> {
    return await prismaClient.hearbeat.findMany({
      select: {
        milliseconds: true,
      },
      take: 20,
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  static async createHearbeat(hearbeat: HearbeatDto): Promise<hearbeat> {
    return await prismaClient.hearbeat.create({ data: hearbeat });
  }
}
