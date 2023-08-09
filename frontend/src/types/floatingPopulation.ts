import type { Coords, FloatingPopulation, PageInfo } from ".";

/** 2023/08/07 - 유동인구 생성 요청 타입 - by 1-blue */
export interface ApiCreateFloatingPopulationRequest
  extends Omit<FloatingPopulation, "idx" | "coordsIdx"> {
  coords: Pick<Coords, "latitude" | "longitude">;
}
/** 2023/08/07 - 유동인구 생성 요청 응답 타입 - by 1-blue */
export interface ApiCreateFloatingPopulationResponse
  extends FloatingPopulation {}
/** 2023/08/07 - 유동인구 생성 요청 핸들러 타입 - by 1-blue */
export interface ApiCreateFloatingPopulationHandler {
  (
    body: ApiCreateFloatingPopulationRequest
  ): Promise<ApiCreateFloatingPopulationResponse>;
}

/** 2023/08/08 - 모든 유동인구 정보 요청 타입 - by 1-blue */
export interface ApiFindAllFloatingPopulationRequest {}
/** 2023/08/08 - 모든 유동인구 정보 요청 응답 타입 - by 1-blue */
export type ApiFindAllFloatingPopulationResponse = {
  [key: string]: {
    idx: number;
    name: string;
    amount: number;
    date: Date;
    coordsIdx: number;
    coords: Pick<Coords, "latitude" | "longitude">;
  }[];
};
/** 2023/08/08 - 모든 유동인구 정보 요청 핸들러 타입 - by 1-blue */
export interface ApiFindAllFloatingPopulationHandler {
  (
    body: ApiFindAllFloatingPopulationRequest
  ): Promise<ApiFindAllFloatingPopulationResponse>;
}

/** 2023/08/07 - 단일 유동인구 정보 요청 타입 - by 1-blue */
export interface ApiFindOneFloatingPopulationRequest {}
/** 2023/08/07 - 단일 유동인구 정보 요청 응답 타입 - by 1-blue */
export interface ApiFindOneFloatingPopulationResponse
  extends FloatingPopulation {
  coords: Pick<Coords, "latitude" | "longitude">;
}
/** 2023/08/07 - 단일 유동인구 정보 요청 핸들러 타입 - by 1-blue */
export interface ApiFindOneFloatingPopulationHandler {
  (
    floatingPopulationIdx: number,
    body: ApiFindOneFloatingPopulationRequest
  ): Promise<ApiFindOneFloatingPopulationResponse>;
}

/** 2023/07/11 - 여러 유동인구들 요청 타입 - by 1-blue */
export interface ApiFindManyFloatingPopulationRequest {
  from?: number;
  size?: number;
}
/** 2023/07/11 - 여러 유동인구들 요청 응답 타입 - by 1-blue */
export interface ApiFindManyFloatingPopulationResponse {
  pageInfo: PageInfo;
  datas: FloatingPopulation[];
}
/** 2023/07/11 - 여러 유동인구들 요청 핸들러 타입 - by 1-blue */
export interface ApiFindManyFloatingPopulationHandler {
  (
    body: ApiFindManyFloatingPopulationRequest
  ): Promise<ApiFindManyFloatingPopulationResponse>;
}

/** 2023/08/07 - 유동인구 수정 요청 타입 - by 1-blue */
export interface ApiUpdateFloatingPopulationRequest
  extends Omit<FloatingPopulation, "idx" | "coordsIdx"> {
  coords: Pick<Coords, "latitude" | "longitude">;
}
/** 2023/08/07 - 유동인구 수정 요청 응답 타입 - by 1-blue */
export interface ApiUpdateFloatingPopulationResponse
  extends FloatingPopulation {}
/** 2023/08/07 - 유동인구 수정 요청 핸들러 타입 - by 1-blue */
export interface ApiUpdateFloatingPopulationHandler {
  (
    floatingPopulationIdx: number,
    body: ApiUpdateFloatingPopulationRequest
  ): Promise<ApiUpdateFloatingPopulationResponse>;
}

/** 2023/08/07 - 유동인구 제거 요청 타입 - by 1-blue */
export interface ApiDeleteFloatingPopulationRequest {}
/** 2023/08/07 - 유동인구 제거 요청 응답 타입 - by 1-blue */
export interface ApiDeleteFloatingPopulationResponse
  extends FloatingPopulation {}
/** 2023/08/07 - 유동인구 제거 요청 핸들러 타입 - by 1-blue */
export interface ApiDeleteFloatingPopulationHandler {
  (
    floatingPopulationIdx: number,
    body: ApiDeleteFloatingPopulationRequest
  ): Promise<ApiDeleteFloatingPopulationResponse>;
}
