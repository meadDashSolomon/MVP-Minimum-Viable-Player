import TopCriteria from "./subcomponents/TopCriteria";
import LeftCriteria from "./subcomponents/LeftCriteria";
import LittleGrid from "./subcomponents/LittleGrid";

const BigGrid = () => {
  return (
    <div className="grid grid-cols-9 grid-rows-4">
      <TopCriteria />
      <LeftCriteria />
      <LittleGrid />
    </div>
  );
};

export default BigGrid;
