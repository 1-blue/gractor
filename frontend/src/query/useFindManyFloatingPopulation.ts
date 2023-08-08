import { useInfiniteQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiFindManyFloatingPopulation } from "@src/apis";

import type {
  ApiFindManyFloatingPopulationRequest,
  ApiFindManyFloatingPopulationResponse,
} from "@src/types";

interface Props extends ApiFindManyFloatingPopulationRequest {}

/** 2023/08/07 - 여러 유동인구 요청 훅 - by 1-blue */
export const useFindManyFloatingPopulation = ({ from, size }: Props) => {
  const { data, isLoading, isError, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery<ApiFindManyFloatingPopulationResponse>(
      [QUERY_KEYS.FLOATINGPOPULATION],
      ({ pageParam = from }) =>
        apiFindManyFloatingPopulation({
          from: pageParam,
          size,
        }),
      {
        getNextPageParam(lastPage) {
          return lastPage.datas.length === size
            ? lastPage.datas[lastPage.datas.length - 1].idx
            : null;
        },
      }
    );

  return {
    floatingPopulations: data,
    isLoading,
    isError,
    isFetching,
    fetchNextPage,
    hasNextPage,
  };
};
