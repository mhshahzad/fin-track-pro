import { BarChart } from "@mui/x-charts";

const BarChartComponent = () => {
  return (
    <BarChart
      xAxis={[
        {
          id: "barCategories",
          data: ["January", "February", "March", "April"],
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: [2000, 5000, 3000],
        },
      ]}
      height={300}
    />
  );
};

export default BarChartComponent;
