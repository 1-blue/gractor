import { useQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiFindManyFloatingPopulation } from "@src/apis";

import type {
  ApiFindManyFloatingPopulationRequest,
  ApiFindManyFloatingPopulationResponse,
} from "@src/types";

interface Props extends Required<ApiFindManyFloatingPopulationRequest> {}

/** 2023/08/07 - 여러 유동인구 요청 훅 - by 1-blue */
export const useFindManyFloatingPopulation = ({ from, size }: Props) => {
  const { data, isLoading, isError } =
    useQuery<ApiFindManyFloatingPopulationResponse>(
      [QUERY_KEYS.FLOATINGPOPULATION, from],
      () => apiFindManyFloatingPopulation({ from, size }),
      { keepPreviousData: true }
    );

  return { floatingPopulations: data, isLoading, isError };
};
