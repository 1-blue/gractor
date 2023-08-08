import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import {
  useCreateFloatingPopulation,
  useFindOneFloatingPopulation,
  useUpdateFloatingPopulation,
} from "@src/query";

import FormToolkit from "@src/components/Common/FormToolkit";

import type { FloatingPopulation } from "@src/types";
interface UpdateForm extends Omit<FloatingPopulation, "idx" | "coordsIdx"> {
  latitude: number;
  longitude: number;
}

/** 2023/08/07 - 유동인구관리 페이지 컴포넌트 - by 1-blue */
const Manage: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  /** 2023/08/07 - (수정이면) 기존 유동인구 데이터 불러오기 - by 1-blue */
  const { floatingPopulation } = useFindOneFloatingPopulation(
    state?.floatingPopulationIdx
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    setFocus,
  } = useForm<UpdateForm>();

  /** 2023/08/07 - 유동인구 등록 뮤테이트 - by 1-blue */
  const createFloatingPopulationMutate = useCreateFloatingPopulation();
  /** 2023/08/07 - 유동인구 수정 뮤테이트 - by 1-blue */
  const updateFloatingPopulationMutate = useUpdateFloatingPopulation(
    state?.floatingPopulationIdx
  );

  /** 2023/08/07 - 유동인구 등록 핸들러 - by 1-blue */
  const onSubmit = handleSubmit(
    ({ name, amount, date, latitude, longitude }) => {
      // 유동인구 수정
      if (floatingPopulation) {
        updateFloatingPopulationMutate({
          name,
          amount: +amount,
          date,
          coords: { latitude: +latitude, longitude: +longitude },
        });
      }
      // 유동인구 등록
      else {
        createFloatingPopulationMutate({
          name,
          amount: +amount,
          date,
          coords: { latitude: +latitude, longitude: +longitude },
        });
      }
    }
  );

  /** 2023/08/07 - (수정이면) 기존 유동인구 데이터 넣기 - by 1-blue */
  const [defaultDate, setDefaultDate] = useState("");
  useEffect(() => {
    if (!floatingPopulation) return;

    const {
      name,
      amount,
      date,
      coords: { latitude, longitude },
    } = floatingPopulation;

    setValue("name", name);
    setValue("amount", amount);
    setValue("latitude", latitude);
    setValue("longitude", longitude);
    setDefaultDate(new Date(date).toISOString().slice(0, -1));
    setFocus("date");
  }, [floatingPopulation, setValue, setFocus]);

  /** 2023/08/07 - 개발모드인지 여부 - by 1-blue */
  const isDevelopment = import.meta.env.MODE === "development";

  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-6">
      <FormToolkit.Input
        autoFocus
        id="이름"
        type="text"
        required
        placeholder="(주) 그렉터"
        defaultValue={isDevelopment ? "(주) 그렉터" : ""}
        error={errors.name?.message}
        {...register("name", {
          required: {
            message: "이름은 필수로 입력해야합니다!",
            value: true,
          },
          maxLength: {
            message: "최대 40자까지 입력이 가능합니다!",
            value: 40,
          },
        })}
      />
      <FormToolkit.Input
        id="위도"
        type="number"
        step="0.0000000000001"
        required
        placeholder="37.5114116206258"
        defaultValue={isDevelopment ? "37.5114116206258" : ""}
        error={errors.latitude?.message}
        {...register("latitude", {
          required: {
            message: "위도은 필수로 입력해야합니다!",
            value: true,
          },
        })}
      />
      <FormToolkit.Input
        id="경도"
        type="number"
        step="0.0000000000001"
        required
        placeholder="127.079687718424"
        defaultValue={isDevelopment ? "127.079687718424" : ""}
        error={errors.longitude?.message}
        {...register("longitude", {
          required: {
            message: "경도은 필수로 입력해야합니다!",
            value: true,
          },
        })}
      />
      <FormToolkit.Input
        id="유동인구"
        type="number"
        required
        placeholder="1000"
        defaultValue={isDevelopment ? "1000" : ""}
        error={errors.amount?.message}
        {...register("amount", {
          required: {
            message: "유동인구은 필수로 입력해야합니다!",
            value: true,
          },
        })}
      />
      <FormToolkit.Input
        id="저장시간"
        type="datetime-local"
        required
        defaultValue={defaultDate}
        error={errors.date?.message}
        {...register("date", {
          required: {
            message: "저장시간은 필수로 입력해야합니다!",
            value: true,
          },
        })}
      />

      <div className="self-end space-x-4">
        <FormToolkit.Button
          danger
          type="button"
          onClick={() => {
            if (
              !confirm(
                "취소하면 입력하신 내용이 모두 사라집니다.\n그래도 취소하시겠습니까?"
              )
            ) {
              return;
            }

            navigate("/status");
          }}
          label="취소"
          className="px-4 py-2"
        />
        <FormToolkit.Button
          primary
          type="submit"
          label={floatingPopulation ? "수정" : "저장"}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 focus:ring-blue-800"
        />
      </div>
    </form>
  );
};

export default Manage;
