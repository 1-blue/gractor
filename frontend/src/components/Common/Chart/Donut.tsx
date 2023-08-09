import ReactApexChart from "react-apexcharts";

const defaultOptions: ApexCharts.ApexOptions = {
  chart: { type: "donut" },
  legend: { position: "top" },
  title: { align: "center" },
};

interface Props {
  title: string;
  labels: string[];
  series: number[];

  options?: ApexCharts.ApexOptions;
  width?: string | number;
  height?: string | number;
}

/** 2023/08/07 - 유동인구 통계 도넛 차트 컴포넌트 - by 1-blue */
const Donut: React.FC<Props> = ({
  title,
  series,
  labels,
  options,
  width,
  height,
}) => {
  return (
    <ReactApexChart
      type="donut"
      series={series}
      options={{
        ...defaultOptions,
        ...options,
        title: { text: title, ...defaultOptions.title },
        labels,
      }}
      width={width}
      height={height}
    />
  );
};

export default Donut;
