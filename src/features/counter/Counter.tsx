import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";
import { Button, Grid, Typography, Stack, Input } from "@mui/material";

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <Typography variant="h5" px={4}>
          {count}
        </Typography>
        <Button
          variant="outlined"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Input
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
        </Grid>
        <Grid item xs>
          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              onClick={() => dispatch(incrementByAmount(incrementValue))}
            >
              Add Amount
            </Button>
            <Button
              variant="contained"
              onClick={() => dispatch(incrementAsync(incrementValue))}
            >
              Add Async
            </Button>
            <Button
              variant="contained"
              onClick={() => dispatch(incrementIfOdd(incrementValue))}
            >
              Add If Odd
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
