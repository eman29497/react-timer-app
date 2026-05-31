import React from 'react';

const TimerControls = ({ onStart, onStop, onReset }: any) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      <button 
        onClick={onStart} 
        className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        Start
      </button>
      <button 
        onClick={onStop} 
        className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        Stop
      </button>
      <button 
        onClick={onReset} 
        className="px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        Reset
      </button>
    </div>
  );
};

export default TimerControls;