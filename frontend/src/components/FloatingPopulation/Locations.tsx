import { twMerge } from "tailwind-merge";

interface Props {
  names: string[];
  selectedList: string[];
  setSelectedList: React.Dispatch<React.SetStateAction<string[]>>;
}

/** 2023/08/07 - 위치 목록 컴포넌트 - by 1-blue */
const Locations: React.FC<Props> = ({
  names,
  selectedList,
  setSelectedList,
}) => {
  /** 2023/08/08 - 위치 목록 클릭 이벤트 핸들러 ( 버블링 ) - by 1-blue */
  const onClickLocation: React.MouseEventHandler<HTMLUListElement> = (e) => {
    if (!(e.target instanceof HTMLLIElement)) return;
    if (!e.target.dataset.name) return;

    const { name } = e.target.dataset;

    setSelectedList((prev) =>
      prev.includes(name) ? prev.filter((v) => v !== name) : [...prev, name]
    );
  };

  return (
    <>
      <h6 className="font-bold text-[#373d3f]">위치 목록</h6>

      <ul
        className="flex flex-col space-y-2 rounded-md text-[#373D3F] text-xs"
        onClick={onClickLocation}
      >
        {names.map((name) => (
          <li
            role="button"
            className={twMerge(
              "transition-all whitespace-nowrap",
              selectedList.includes(name) && "text-main-500 font-bold"
            )}
            data-name={name}
          >
            {name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Locations;
