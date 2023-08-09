import axiosInstance from ".";

import type {
  ApiCreateFloatingPopulationHandler,
  ApiCreateFloatingPopulationResponse,
  ApiDeleteFloatingPopulationHandler,
  ApiDeleteFloatingPopulationResponse,
  ApiFindAllFloatingPopulationHandler,
  ApiFindAllFloatingPopulationResponse,
  ApiFindManyFloatingPopulationHandler,
  ApiFindManyFloatingPopulationResponse,
  ApiFindOneFloatingPopulationHandler,
  ApiFindOneFloatingPopulationResponse,
  ApiUpdateFloatingPopulationHandler,
  ApiUpdateFloatingPopulationResponse,
} from "@src/types";

/** 2023/08/07 - 유동인구 생성 요청 - by 1-blue */
export const apiCreateFloatingPopulation: ApiCreateFloatingPopulationHandler =
  async (body) => {
    const { data } =
      await axiosInstance.post<ApiCreateFloatingPopulationResponse>(
        "/floating-population",
        body
      );

    return data;
  };

/** 2023/08/08 - 모든 유동인구 정보 요청 - by 1-blue */
export const apiFindAllFloatingPopulation: ApiFindAllFloatingPopulationHandler =
  async () => {
    const { data } =
      await axiosInstance.get<ApiFindAllFloatingPopulationResponse>(
        `/floating-population/all`
      );

    return data;
  };

/** 2023/08/07 - 단일 유동인구 정보 요청 - by 1-blue */
export const apiFindOneFloatingPopulation: ApiFindOneFloatingPopulationHandler =
  async (floatingPopulationIdx) => {
    const { data } =
      await axiosInstance.get<ApiFindOneFloatingPopulationResponse>(
        `/floating-population/${floatingPopulationIdx}`
      );

    return data;
  };

/** 2023/08/07 - 여러 유동인구들 요청 - by 1-blue */
export const apiFindManyFloatingPopulation: ApiFindManyFloatingPopulationHandler =
  async (body) => {
    const { data } =
      await axiosInstance.get<ApiFindManyFloatingPopulationResponse>(
        "/floating-population",
        { params: body }
      );

    return data;
  };

/** 2023/08/07 - 유동인구 수정 요청 타입 - by 1-blue */
export const apiUpdateFloatingPopulation: ApiUpdateFloatingPopulationHandler =
  async (floatingPopulationIdx, body) => {
    const { data } =
      await axiosInstance.patch<ApiUpdateFloatingPopulationResponse>(
        `/floating-population/${floatingPopulationIdx}`,
        body
      );

    return data;
  };

/** 2023/08/07 - 유동인구 제거 요청 - by 1-blue */
export const apiDeleteFloatingPopulation: ApiDeleteFloatingPopulationHandler =
  async (floatingPopulationIdx) => {
    const { data } =
      await axiosInstance.delete<ApiDeleteFloatingPopulationResponse>(
        `/floating-population/${floatingPopulationIdx}`
      );

    return data;
  };
