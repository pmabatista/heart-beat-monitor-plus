import { hearbeat } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { HearbeatDto } from "../../domains/heartbeat/hearbeat.domain";

export const MEASURES_MOCK = {
  success: true,
  measures: [
    0.18504999999999994, 0.18504999999999994, -0.06531194860134439, -0.19004449341285928, -0.14897756643977675,
    0.0702870694152983, -0.18170650707550148, -0.19795056995036658, -0.15355623031234453, -0.11510267208884328,
    -0.11510267208884328, -0.19271876488954623, -0.19271876488954623, -0.19271876488954623, -0.19271876488954623,
    -0.19271876488954623, -0.19271876488954623, -0.19271876488954623, -0.19271876488954623, -0.19271876488954623,
  ],
};

export const HEARBEATS_MOCK = [{ milliseconds: 350 }, { milliseconds: 450 }];

export const HEARBEAT_MOCK = {
  success: true,
  hearbeatId: 22,
};

export const HEARBEAT_CREATE_MOCK = {
  id: 1,
  milliseconds: 560,
  createdAt: "2023-01-16T10:19:54-03:00",
};

export const HEARBEAT_CREATE_PRISMA_MOCK: hearbeat = {
  id: 1,
  milliseconds: 560 as unknown as Decimal,
  createdAt: "2023-01-16T10:19:54-03:00" as unknown as Date,
  updatedAt: "2023-01-16T10:19:54-03:00" as unknown as Date,
};
