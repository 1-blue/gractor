import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import QUERY_KEYS from ".";

import { apiCreateFloatingPopulation } from "@src/apis";

/** 2023/08/07 - 유동인구 등록 훅 - by 1-blue */
export const useCreateFloatingPopulation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(apiCreateFloatingPopulation, {
    onSuccess(createdPost) {
      queryClient.invalidateQueries([QUERY_KEYS.FLOATINGPOPULATION]);

      alert(`"${createdPost.name}" 유동인구가 등록되었습니다.`);

      navigate("/status");
    },
  });

  return mutate;
};
