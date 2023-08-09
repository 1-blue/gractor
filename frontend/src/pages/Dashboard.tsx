import { useState } from "react";

import { useFindAllFloatingPopulation } from "@src/query";

import Chart from "@src/components/Common/Chart";
import Map from "@src/components/FloatingPopulation/Map";
import Locations from "@src/components/FloatingPopulation/Locations";

/** 2023/08/07 - 유동인구 대시보드 페이지 컴포넌트 - by 1-blue */
const Dashboard: React.FC = () => {
  const { floatingPopulations, isLoading } = useFindAllFloatingPopulation();

  /** 2023/08/08 - 현재 선택한 장소들 - by 1-blue */
  const [selectedList, setSelectedList] = useState<string[]>([]);

  if (!floatingPopulations) return <></>;
  if (isLoading) return <></>;

  const keys = Object.keys(floatingPopulations);
  const averages = keys.map((key) =>
    Math.round(
      floatingPopulations[key].reduce((prev, curr) => prev + curr.amount, 0) /
        floatingPopulations[key].length
    )
  );

  return (
    <>
      <article className="flex space-x-8 mb-4">
        {/* 총 유동인구 통계 */}
        <section className="p-2 bg-sub-300 rounded-md">
          <Chart.Donut
            title="총 유동인구 통계"
            labels={keys}
            series={averages}
          />
        </section>

        {/* 위치 목록 */}
        <section className="px-6 py-2 space-y-4 bg-sub-300 rounded-md">
          <Locations
            names={keys}
            selectedList={selectedList}
            setSelectedList={setSelectedList}
          />
        </section>

        {/* 시간별 유동인구 */}
        <section className="flex-1">
          {!!selectedList.length && (
            <Chart.Line
              labels={Array(24)
                .fill(null)
                .map((_v, i) => i + "시")}
              series={selectedList.map((selected) => ({
                name: selected,
                data: Array(24)
                  .fill(null)
                  .map((_v, i) => {
                    const target = floatingPopulations[selected];
                    const result = target.find(
                      ({ date }) => new Date(date).getHours() === i
                    );

                    if (result) return result.amount;
                    else return 0;
                  }),
              }))}
              width="100%"
              height="100%"
            />
          )}
        </section>
      </article>

      {/* 지도 */}
      <article>
        <Map
          datas={keys.map((key) => ({
            ...floatingPopulations[key][0].coords,
            name: floatingPopulations[key][0].name,
          }))}
          selectedList={selectedList}
          setSelectedList={setSelectedList}
        />
      </article>
    </>
  );
};

export default Dashboard;
