import React from "react";
import "./App.css";
import EarningsContainer from "./Components/Earnings/EarningsContainer";
import CardContainer from "./Layout/CardContainer";
import { EarningsBreakdown } from "./Components/Earnings/EarningsBreakdown";
import SavingsContainer from "./Components/Savings/SavingsContainer";
import ForecastingContainer from "./Components/Forecasting/ForecastingContainer";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Grid from "@mui/joy/Grid";
import HeaderSection from "./Shared/Navbar";

const App = () => {
  return (
      <><HeaderSection/><Tabs aria-label="Basic tabs" defaultValue={0}>
          <TabList>
              <Tab>Finance</Tab>
          </TabList>
          <TabPanel value={0}>
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
              {/*<CardContainer title={"Earning Overview"}>*/}
              {/*</CardContainer>*/}
              {/*<CardContainer title={"Savings Overview"}>*/}
              {/*</CardContainer>*/}
              {/*<CardContainer title={"Forecasting"}>*/}
              {/*</CardContainer>*/}
          </TabPanel>
      </Tabs></>
  );
};

export default App;
