import { useEffect } from "react";

import FormToolkit from "@src/components/Common/FormToolkit";

interface Props {
  title: string;
  description: string;
  onCancel: () => void;
  onConfirm: () => void;
}

/** 2023/08/08 - 확인 모달창 컴포넌트 - by 1-blue */
const Confirm: React.FC<Props> = ({
  title,
  description,
  onCancel,
  onConfirm,
}) => {
  /** 2023/08/08 - 외부 클릭 시 닫기 - by 1-blue */
  useEffect(() => {
    const modalCloseHandler = (e: MouseEvent) => {
      if (!(e.target instanceof HTMLElement)) return;
      if (e.target instanceof HTMLButtonElement) return;

      // 모달을 닫는 함수
      onCancel();
    };

    window.addEventListener("click", modalCloseHandler);
    return () => window.removeEventListener("click", modalCloseHandler);
  }, [onCancel]);

  return (
    <aside className="fixed inset-0 flex flex-col justify-center items-center bg-black/80 transition-colors">
      <article className="bg-sub-700 px-8 py-6 rounded-md space-y-6">
        <h6 className="text-2xl font-bold">{title}</h6>
        <p className="">{description}</p>

        <div className="flex justify-end space-x-4">
          <FormToolkit.Button
            danger
            label="취소"
            className="text-xs"
            onClick={() => onCancel()}
          />
          <FormToolkit.Button
            primary
            label="확인"
            className="text-xs"
            onClick={() => onConfirm()}
          />
        </div>
      </article>
    </aside>
  );
};

export default Confirm;
