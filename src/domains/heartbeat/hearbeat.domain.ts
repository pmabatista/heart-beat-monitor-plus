import { Decimal } from "@prisma/client/runtime";

export interface HearbeatDto {
  milliseconds: number | Decimal;
}

export interface BaseResponse {
  success: boolean;
}

export interface MeasuresResponse extends BaseResponse {
  measures: number[];
}

export interface HearbeatCreateResponse extends BaseResponse {
  hearbeatId: number;
}
