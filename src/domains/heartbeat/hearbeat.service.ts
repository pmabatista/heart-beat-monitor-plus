import { HearbeatCreateResponse, HearbeatDto, MeasuresResponse } from "./hearbeat.domain";
import { HearbeatRepository } from "./hearbeat.repository";

export class HearbeatService {
  private static analyzeMeasure(milliseconds: number): number {
    const output =
      -0.06366 +
      0.12613 * Math.cos(Math.PI * (milliseconds / 500)) +
      0.12258 * Math.cos(Math.PI * (milliseconds / 250)) +
      0.01593 * Math.sin(Math.PI * (milliseconds / 500)) +
      0.03147 * Math.sin(Math.PI * (milliseconds / 250));
    return output;
  }

  static async getHearBeats(): Promise<MeasuresResponse> {
    const hearbeats = await HearbeatRepository.getHearBeats();
    const measuresAnalyzed = hearbeats.map((hearbeat) => this.analyzeMeasure(Number(hearbeat.milliseconds)));
    return {
      success: true,
      measures: measuresAnalyzed,
    };
  }

  static async registerHearbeat(hearbeat: HearbeatDto): Promise<HearbeatCreateResponse> {
    const response = await HearbeatRepository.createHearbeat(hearbeat);
    return {
      success: true,
      hearbeatId: response.id,
    };
  }
}
