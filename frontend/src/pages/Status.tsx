import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDeleteFloatingPopulation } from "@src/query";

import FormToolkit from "@src/components/Common/FormToolkit";
import Confirm from "@src/components/Common/Confirm";
import Table from "@src/components/FloatingPopulation/Table";

/** 2023/08/07 - 유동인구현황 페이지 컴포넌트 - by 1-blue */
const Status: React.FC = () => {
  const navigate = useNavigate();

  /** 2023/08/08 - 유동인구 제거 뮤테이트 - by 1-blue */
  const deleteFloatingPopulationMutate = useDeleteFloatingPopulation();

  /** 2023/08/07 - 선택한 행 - by 1-blue */
  const [selected, setSelected] = useState<null | {
    idx: number;
    name: string;
  }>(null);

  /** 2023/08/08 - 삭제 확인 모달 렌더링 여부 - by 1-blue */
  const [showConfirm, setShowConfirm] = useState(false);

  /** 2023/08/08 - 유동인구 제거 핸들러 - by 1-blue */
  const onDeleteFloatingPopulation = () => {
    if (!selected) return;

    deleteFloatingPopulationMutate(selected.idx);

    setShowConfirm(false);
  };

  return (
    <>
      {showConfirm && (
        <Confirm
          title="선택한 데이터를 삭제하시겠습니까?"
          description={`정말로 선택한 "${selected?.name}" 데이터를 삭제하시겠습니까?`}
          onCancel={() => setShowConfirm(false)}
          onConfirm={() => onDeleteFloatingPopulation()}
        />
      )}

      <section className="flex justify-end mb-4 space-x-4">
        {selected && (
          <>
            <FormToolkit.Button
              danger
              label="삭제"
              className="text-xs"
              onClick={() => setShowConfirm(true)}
            />
            <FormToolkit.Button
              success
              label="편집"
              className="text-xs"
              onClick={() =>
                navigate(`/manage`, {
                  state: { floatingPopulationIdx: selected.idx },
                })
              }
            />
          </>
        )}
        <FormToolkit.Button
          primary
          label="등록"
          className="text-xs border border-main-500"
          onClick={() => navigate("/manage")}
        />
      </section>

      <Table selected={selected} setSelected={setSelected} />
    </>
  );
};

export default Status;
