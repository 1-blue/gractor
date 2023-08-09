import ReactApexChart from "react-apexcharts";

const defaultOptions: ApexCharts.ApexOptions = {
  theme: { mode: "dark" },
  stroke: { curve: "smooth", width: 4 },
  title: {
    align: "center",
    margin: 20,
    style: { fontSize: "16px", fontWeight: "bold" },
  },
  chart: {
    toolbar: { show: false },
    background: "#d1d5db",
    foreColor: "#373d3f",
  },
  tooltip: { y: { formatter: (value) => `${value.toLocaleString()} 명` } },
  xaxis: { type: "category" },
  yaxis: { labels: { formatter: (value) => `${value.toLocaleString()}명` } },
};

interface Props {
  labels: string[];
  series: {
    name: string;
    data: number[];
  }[];

  options?: ApexCharts.ApexOptions;
  width?: string | number;
  height?: string | number;
}

/** 2023/08/08 - 유동인구 통계 라인 차트 컴포넌트 - by 1-blue */
const Line: React.FC<Props> = ({ labels, series, options, width, height }) => {
  return (
    <ReactApexChart
      type="line"
      width={width}
      height={height}
      series={series.map(({ name, data }) => ({ name, data }))}
      options={{
        ...defaultOptions,
        ...options,
        title: {
          ...defaultOptions.title,
          text: `${series
            .slice(0, 2)
            .map(({ name }) => `"${name}"`)
            .join(" - ")} 시간별 유동인구`,
        },
        xaxis: {
          ...defaultOptions.xaxis,
          categories: labels,
        },
      }}
    />
  );
};

export default Line;
