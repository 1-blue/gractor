import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import QUERY_KEYS from ".";

import { apiUpdateFloatingPopulation } from "@src/apis";

import type { ApiUpdateFloatingPopulationRequest } from "@src/types";

/** 2023/08/07 - 유동인구 수정 훅 - by 1-blue */
export const useUpdateFloatingPopulation = (floatingPopulationIdx: number) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (body: ApiUpdateFloatingPopulationRequest) =>
      apiUpdateFloatingPopulation(floatingPopulationIdx, body),
    {
      onSuccess(updatedFloatingPopulation) {
        console.log("updatedFloatingPopulation >> ", updatedFloatingPopulation);

        queryClient.invalidateQueries([QUERY_KEYS.FLOATINGPOPULATION]);
        queryClient.invalidateQueries([
          QUERY_KEYS.FLOATINGPOPULATION,
          updatedFloatingPopulation.idx,
        ]);

        alert(`"${updatedFloatingPopulation.name}" 유동인구가 수정되었습니다.`);

        navigate(`/status`);
      },
    }
  );

  return mutate;
};
