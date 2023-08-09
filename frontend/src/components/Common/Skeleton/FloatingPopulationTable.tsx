import Square from "./Square";

/** 2023/08/08 - 유동인구 테이블 Skeleton UI - by 1-blue */
const FloatingPopulationTable: React.FC = () => {
  return (
    <>
      {Array(15)
        .fill(null)
        .map((_v, i) => (
          <li key={i} className="flex">
            <Square className="m-3 h-6 w-[180px]" />
            <Square className="m-3 h-6 w-0 flex-[3]" />
            <Square className="m-3 h-6 w-0 flex-[7]" />
          </li>
        ))}
    </>
  );
};

export default FloatingPopulationTable;
