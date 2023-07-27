const LeftCriteria = () => {
  return (
    <div className="col-start-3 row-start-2 row-span-3 grid">
      <div className="grid grid-rows-3 pr-4">
        <div className="flex justify-center items-center row-start-1 row-end-2">
          <img src="../../images/tor.svg" alt="yankees" className="w-24" />
        </div>
        <div className="flex justify-center items-center row-start-2 row-end-3">
          <img src="../../images/mil.svg" alt="mariners" className="w-20" />
        </div>
        <div className="flex items-center text-center row-start-2 row-start-3">
          <h3 className="text-white text-xl font-semibold">100+ RBI SEASON</h3>
        </div>
      </div>
    </div>
  );
};

export default LeftCriteria;
