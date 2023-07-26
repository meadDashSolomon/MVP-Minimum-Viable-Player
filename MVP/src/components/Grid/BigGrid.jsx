import TopCriteria from "./subcomponents/TopCriteria";
import LeftCriteria from "./subcomponents/LeftCriteria";
import LittleGrid from "./subcomponents/LittleGrid";
import Timer from "./subcomponents/Timer";

const BigGrid = ({ timer, stopTimer }) => {
  return (
    <div className="grid grid-cols-9 grid-rows-4">
      <TopCriteria />
      <LeftCriteria />
      <LittleGrid stopTimer={stopTimer} />
      <Timer timer={timer} />
    </div>
  );
};

export default BigGrid;
