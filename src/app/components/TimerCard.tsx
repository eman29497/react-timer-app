"use client";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../lib/store';
import { startTimer, stopTimer, resetTimer, increment } from '../../../lib/timerSlice';
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';
const TimerCard = () => {
  const dispatch = useDispatch();
  const { value, isRunning } = useSelector((state: RootState) => state.timer);
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(increment());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, dispatch]);
  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
      <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">Timer App</h1>
      <TimerDisplay time={value} />
      <TimerControls 
        onStart={() => dispatch(startTimer())} 
        onStop={() => dispatch(stopTimer())} 
        onReset={() => dispatch(resetTimer())} 
      />
    </div>
  );
};
export default TimerCard;