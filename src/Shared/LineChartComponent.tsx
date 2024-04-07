import { LineChart } from "@mui/x-charts";

const LineChartComponent = () => {
  return (
      <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
              {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
          ]}
          height={300}
      />
  );
};

export default LineChartComponent;
