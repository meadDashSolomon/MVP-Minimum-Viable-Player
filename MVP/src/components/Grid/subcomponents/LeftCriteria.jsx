const LeftCriteria = () => {
  return (
    <div className="col-start-3 row-start-2 row-span-3">
      <div className="grid grid-rows-3 gap-4 justify-items-end pr-4">
        <div className="flex justify-center items-center row-start-1 row-end-2">
          <img src="../../images/tor.svg" alt="yankees" className="w-32" />
        </div>
        <div className="flex justify-center items-center row-start-2 row-end-3">
          <img src="../../images/mil.svg" alt="mariners" className="w-28" />
        </div>
        <div className="flex items-center text-center row-start-2 row-start-3">
          <h3 className="text-xl font-semibold">100+ RBI SEASON</h3>
        </div>
      </div>
    </div>
  );
};

export default LeftCriteria;
