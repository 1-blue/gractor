import { useQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiFindAllFloatingPopulation } from "@src/apis";

import type { ApiFindAllFloatingPopulationResponse } from "@src/types";

/** 2023/08/08 - 모든 유동인구 요청 훅 - by 1-blue */
export const useFindAllFloatingPopulation = () => {
  const { data, isLoading, isError } =
    useQuery<ApiFindAllFloatingPopulationResponse>(
      [QUERY_KEYS.FLOATINGPOPULATION, "ALL"],
      apiFindAllFloatingPopulation
    );

  return { floatingPopulations: data, isLoading, isError };
};
