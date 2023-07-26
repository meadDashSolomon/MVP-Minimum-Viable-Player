import { useState } from "react";
// import RulesModal from "./components/RulesModal";
import Header from "./components/Header";
import BigGrid from "./components/Grid/BigGrid";
import CreateUser from "./components/CreateUser";
import "./index.css";

function App() {
  const [hasProfile, setHasProfile] = useState(false);

  const handleProfileCreated = () => {
    setHasProfile(true);
  };

  return (
    <div className="bg-black pb-20">
      {/* {!hasProfile && (
        <CreateUser handleProfileCreated={handleProfileCreated} />
      )} */}
      {/* <RulesModal /> */}
      <Header />
      <BigGrid />
    </div>
  );
}

export default App;
