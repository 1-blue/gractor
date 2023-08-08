export * from "./floatingPopulation";

/** 2023/08/07 - 유동인구 타입 - by 1-blue */
export interface FloatingPopulation {
  /** 식별자 */
  idx: number;
  /** 위치명 */
  name: string;
  /** 유동인구 */
  amount: number;
  /** 시간 */
  date: Date;
  /** 참조하는 좌표의 식별자 */
  coordsIdx: number;
}

/** 2023/08/07 - 좌표 타입 - by 1-blue */
export interface Coords {
  /** 식별자 */
  idx: number;
  /** 위도 */
  latitude: number;
  /** 경도 */
  longitude: number;
}
