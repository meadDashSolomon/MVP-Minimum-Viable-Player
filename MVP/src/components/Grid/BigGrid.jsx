import TopCriteria from "./subcomponents/TopCriteria";
import LeftCriteria from "./subcomponents/LeftCriteria";
import LittleGrid from "./subcomponents/LittleGrid";

const BigGrid = ({ stopTimer }) => {
  return (
    <div className="grid grid-cols-9 grid-rows-4">
      <TopCriteria />
      <LeftCriteria />
      <LittleGrid stopTimer={stopTimer} />
      {/* <Timer /> */}
    </div>
  );
};

export default BigGrid;
