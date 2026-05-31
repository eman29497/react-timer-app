import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TimerState {
  value: number;
  isRunning: boolean;
}

const initialState: TimerState = {
  value: 0,
  isRunning: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer: (state) => { state.isRunning = true; },
    stopTimer: (state) => { state.isRunning = false; },
    resetTimer: (state) => { state.value = 0; state.isRunning = false; },
    increment: (state) => { 
      if (state.isRunning) state.value += 1; 
    },
  },
});

export const { startTimer, stopTimer, resetTimer, increment } = timerSlice.actions;
export default timerSlice.reducer;