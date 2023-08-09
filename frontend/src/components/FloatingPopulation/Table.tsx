import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Pagination from "react-js-pagination";
import {
  ChevronLeftIcon as SChevronLeftIcon,
  ChevronRightIcon as SChevronRightIcon,
  ChevronDoubleLeftIcon as SChevronDoubleLeftIcon,
  ChevronDoubleRightIcon as SChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

import { dateFormat } from "@src/libs/time";

import { useFindManyFloatingPopulation } from "@src/query";

import Skeleton from "@src/components/Common/Skeleton";

const SIZE = 15;

interface Props {
  selected: {
    idx: number;
    name: string;
  } | null;
  setSelected: React.Dispatch<
    React.SetStateAction<{
      idx: number;
      name: string;
    } | null>
  >;
}

/** 2023/08/08 - 유동인구 테이블 컴포넌트 - by 1-blue */
const FloatingPopulationTable: React.FC<Props> = ({
  selected,
  setSelected,
}) => {
  /** 2023/08/08 - 현재 페이지 - by 1-blue */
  const [currentPage, setCurrentPage] = useState(0);

  const { floatingPopulations, isLoading } = useFindManyFloatingPopulation({
    from: currentPage,
    size: SIZE,
  });

  /** 2023/08/08 - 테이블 열 선택 핸들러 - by 1-blue */
  const onSelectColumn: React.MouseEventHandler<HTMLUListElement> = (e) => {
    if (!(e.target instanceof HTMLLIElement)) return;
    if (!e.target.dataset.idx) return;
    if (!e.target.dataset.name) return;

    const idx = +e.target.dataset.idx;
    const name = e.target.dataset.name;

    setSelected((prev) => (prev?.idx === idx ? null : { idx, name }));
  };

  return (
    <ul className="grid grid-cols-1 border-t border-x" onClick={onSelectColumn}>
      {/* 상단 */}
      <li key={-1} className="flex border-b bg-main-900 font-bold">
        <h6 className="p-3 w-[200px] border-r">이름</h6>
        <span className="p-3 w-0 flex-[3] border-r">유동인구</span>
        <span className="p-3 w-0 flex-[7]">시간</span>
      </li>
      {/* 중단 */}
      {!floatingPopulations || isLoading ? (
        <Skeleton.FloatingPopulationTable />
      ) : (
        <>
          {floatingPopulations.datas.map(({ idx, name, amount, date }) => (
            <li
              key={idx}
              role="button"
              data-idx={idx}
              data-name={`${name} ( ${new Date(date).getHours()}시 )`}
              className={twMerge(
                "flex text-sm transition-all",
                selected?.idx === idx && "bg-main-500 font-bold"
              )}
            >
              <h6 className="p-3 w-[200px] border-r border-b pointer-events-none">
                {name}
              </h6>
              <span className="p-3 w-0 flex-[3] border-r border-b pointer-events-none">
                {amount.toLocaleString()}
              </span>
              <time className="p-3 w-0 flex-[7] border-b pointer-events-none">
                {dateFormat(date, "YYYY/MM/DD-hh:mm:ss")}
              </time>
            </li>
          ))}
        </>
      )}
      {/* 하단 */}
      <li key={0} className="flex border-b px-4 py-3 justify-center space-x-4">
        <Pagination
          activePage={currentPage + 1}
          itemsCountPerPage={SIZE}
          totalItemsCount={floatingPopulations?.pageInfo.totalCount || SIZE}
          pageRangeDisplayed={5}
          onChange={(page) => setCurrentPage(page - 1)}
          innerClass="my-pagination"
          prevPageText={
            <SChevronLeftIcon className="w-4 h-4 text-main-500 stroke-[3]" />
          }
          nextPageText={
            <SChevronRightIcon className="w-4 h-4 text-main-500 stroke-[3]" />
          }
          firstPageText={
            <SChevronDoubleLeftIcon className="w-4 h-4 text-main-500 stroke-[3]" />
          }
          lastPageText={
            <SChevronDoubleRightIcon className="w-4 h-4 text-main-500 stroke-[3]" />
          }
        />
      </li>
    </ul>
  );
};

export default FloatingPopulationTable;
