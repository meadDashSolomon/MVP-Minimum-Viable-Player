const Timer = ({ timer }) => {
  return (
    <div className="timer border-2 bg-gray-800 text-white text-center font-mono text-2xl p-4 rounded-lg shadow-lg col-start-7 col-span-2 ml-5">
      Time: {Math.floor(timer / 60)} minutes and {timer % 60} seconds
    </div>
  );
};

export default Timer;
