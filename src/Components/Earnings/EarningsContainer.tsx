import React, { useState } from "react";
import {
  FormLabel,
  Input,
  Option,
  Select,
  Typography,
  Skeleton,
  Card,
  CardContent,
} from "@mui/joy";
import Grid from "@mui/joy/Grid";

const EarningsContainer = () => {
  const [dateSelectionType, setDateSelectionType] = useState("monthly");
  const [startDate, setStartDate] = useState<string | undefined>();
  const [endDate, setEndDate] = useState<string | undefined>();
  const [monthlyDate, setMonthlyDate] = useState<string | undefined>();
  const [data, setData] = useState<Record<string, any> | undefined>();

  const DateInput = () => {
    switch (dateSelectionType) {
      case "monthly":
        return (
          <div id="monthlyDateInputs">
            <Input
              type="month"
              id="monthlyDate"
              value={monthlyDate}
              onChange={(e) => setMonthlyDate(e.target.value)}
            />
          </div>
        );
      case "weekly":
        return (
          <div id="weeklyDateInputs">
            <Input
              type="date"
              id="weeklyStartDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <Input
              type="date"
              id="weeklyEndDate"
              value={endDate}
              slotProps={{ input: { min: startDate } }}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const updateEarningOverview = (value?: string) => {
    console.log(value);
    // Implement your logic to update earning overview based on selected dates
    // For example, fetch data from server and update state accordingly
  };

  return (
    <Grid container spacing={2}>
      <Grid xs={6} md={6}>
        <FormLabel>Select Date Range Type: </FormLabel>
        <Select
          id="dateSelectionType"
          value={dateSelectionType}
          onChange={(e, value) => {
            setDateSelectionType(value!);
          }}
        >
          <Option value="monthly">Monthly Date</Option>
          <Option value="weekly">Weekly Date Range</Option>
        </Select>
        <DateInput />
      </Grid>
      <Grid xs={6} md={6}>
        <Card variant="soft">
          <CardContent>
            <Skeleton loading={!!data} variant={"text"}>
              <Typography>Total Hours Worked: 80</Typography>
            </Skeleton>
            <Skeleton loading={!!data} variant={"text"}>
              <Typography>Average Hourly Rate: $25</Typography>
            </Skeleton>
            <Skeleton loading={!!data} variant={"text"}>
              <Typography>Total Earnings: $2000</Typography>
            </Skeleton>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EarningsContainer;
