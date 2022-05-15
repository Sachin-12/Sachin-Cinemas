import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useStore } from "../src/store";

export default function Index() {
  const bears = useStore((state) => state.bears);
  return (
    <Container>
      Sachin Cinemas
      <p>{`Bears Count ${bears}`}</p>
    </Container>
  );
}
