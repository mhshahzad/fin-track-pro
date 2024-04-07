import { Card, Typography } from "@mui/joy";
import React from "react";

interface CardContainerProps {
  title: string;
  children: React.ReactNode;
}

const CardContainer = ({ title, children }: CardContainerProps) => {
  return (
    <Card>
      <Typography level={"h4"}>{`${title}`}</Typography>
      {children}
    </Card>
  );
};

export default CardContainer;
