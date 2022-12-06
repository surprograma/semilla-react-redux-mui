import ProTip from "./ProTip";
import { Counter } from "./features/counter/Counter";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Create React App example with TypeScript
      </Typography>
      <Counter />
      <ProTip />
    </>
  );
}
