'use client'

import Grid from "@mui/joy/Grid";
import React from "react";
import HeaderSection from "@/Shared/Navbar";
import CardContainer from "@/Layout/CardContainer";
import EarningsContainer from "@/Components/Earnings/EarningsContainer";
import {EarningsBreakdown} from "@/Components/Earnings/EarningsBreakdown";
import SavingsContainer from "@/Components/Savings/SavingsContainer";
import ForecastingContainer from "@/Components/Forecasting/ForecastingContainer";

export default function Home() {
  return (
      <>
        <CardContainer title={"Dashboard"}>
          <Grid container spacing={2}>
            <Grid xs={12} md={6} lg={6}>
              <EarningsContainer/>
            </Grid>
            <Grid xs={12} md={6} lg={6}>
              <EarningsBreakdown/>
            </Grid>
            <Grid xs={12} md={6} lg={6}>
              <SavingsContainer/>
            </Grid>
          </Grid>
          <ForecastingContainer/>
        </CardContainer>
      </>
  );
}
