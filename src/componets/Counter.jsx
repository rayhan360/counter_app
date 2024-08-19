
import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const Counter = ({ id }) => {
  const [count, setCount] = useLocalStorage(`counter-${id}`, 0);


  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
      >
        counter {id}
      </button>
      <span className="mt-2 text-lg font-semibold">{count}</span>
    </div>
  );
};

export default Counter;