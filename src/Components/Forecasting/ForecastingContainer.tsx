import { Button, FormLabel, Input } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import BarChart from "../../Shared/BarChartComponent";
import React from "react";

const ForecastingContainer = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={4} md={4} lg={4}>
        <FormLabel>Current Savings: </FormLabel>
        <Input></Input>
        <FormLabel>Monthly Income: </FormLabel>
        <Input></Input>
        <FormLabel>Monthly Expense: </FormLabel>
        <Input></Input>
        <FormLabel>Target Savings: </FormLabel>
        <Input></Input>
        <Button fullWidth color={"neutral"}>Calculate</Button>
      </Grid>
      <Grid xs={8} md={8} lg={8}>
        <BarChart />
      </Grid>
    </Grid>
  );
};

export default ForecastingContainer;
