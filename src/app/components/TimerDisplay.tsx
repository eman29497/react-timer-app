import React from 'react';

const TimerDisplay = ({ time }: { time: number }) => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="text-5xl md:text-7xl font-bold text-gray-800 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        {time}s
      </div>
    </div>
  );
};

export default TimerDisplay;