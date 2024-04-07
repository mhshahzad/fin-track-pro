import Grid from "@mui/joy/Grid";
import {
  Button,
  Card,
  CardContent,
  FormLabel,
  Input,
  Skeleton,
  Typography,
} from "@mui/joy";
import React, { useState } from "react";

const SavingsContainer = () => {
  const [data, setData] = useState<Record<string, any> | undefined>();

  return (
    <Grid container spacing={2}>
      <Grid xs={6} md={6}>
        <FormLabel>Enter Current Savings: </FormLabel>
        <Input></Input>
        <FormLabel>Enter Monthly Expense: </FormLabel>
        <Input></Input>
        <Button fullWidth color={"neutral"}>
          Update
        </Button>
      </Grid>
      <Grid xs={6} md={6}>
        <Card variant="soft">
          <CardContent>
            <Skeleton loading={!!data} variant={"text"}>
              <Typography>Current Savings Balance: $500</Typography>
            </Skeleton>
            <Skeleton loading={!!data} variant={"text"}>
              <Typography>Savings Goal Progress: 50%</Typography>
            </Skeleton>
            <Skeleton loading={!!data} variant={"text"}>
              <Typography>Estimated Month to Goal: April</Typography>
            </Skeleton>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SavingsContainer;
