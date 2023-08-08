import { useMutation, useQueryClient } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiDeleteFloatingPopulation } from "@src/apis";

/** 2023/08/08 - 유동인구 제거 훅 - by 1-blue */
export const useDeleteFloatingPopulation = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (floatingPopulationIdx: number) =>
      apiDeleteFloatingPopulation(floatingPopulationIdx, {}),
    {
      onSuccess(deletedFloatingPopulation) {
        queryClient.invalidateQueries([QUERY_KEYS.FLOATINGPOPULATION]);

        alert(`"${deletedFloatingPopulation.name}" 유동인구가 제거되었습니다.`);
      },
    }
  );

  return mutate;
};
