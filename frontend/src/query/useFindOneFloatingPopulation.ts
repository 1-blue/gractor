import { useQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiFindOneFloatingPopulation } from "@src/apis";

import type { ApiFindOneFloatingPopulationResponse } from "@src/types";

/** 2023/08/07 - 단일 유동인구 요청 훅 - by 1-blue */
export const useFindOneFloatingPopulation = (
  floatingPopulationIdx: number | undefined
) => {
  const { data, isLoading, isError } = useQuery<
    ApiFindOneFloatingPopulationResponse | undefined
  >([QUERY_KEYS.FLOATINGPOPULATION, floatingPopulationIdx], async () =>
    floatingPopulationIdx
      ? apiFindOneFloatingPopulation(floatingPopulationIdx, {})
      : undefined
  );

  return { floatingPopulation: data, isLoading, isError };
};
