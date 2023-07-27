const TopCriteria = () => {
  return (
    <div className="mt-4 col-start-4 col-span-3 grid">
      <div className="grid grid-cols-3">
        <div className="col-start-1 col-span-1 flex justify-center items-center">
          <img src="../../images/cle.svg" alt="Cardinals" className="w-16" />
        </div>
        <div className="col-start-2 col-span-1 flex justify-center items-center">
          <img src="../../images/phi.svg" alt="Cubs" className="w-20" />
        </div>
        <div className="col-start-3 col-span-1 flex justify-center items-center">
          <h3 className="text-white pl-2 text-2xl font-semibold text-center">
            200+ HITS SEASON
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TopCriteria;
