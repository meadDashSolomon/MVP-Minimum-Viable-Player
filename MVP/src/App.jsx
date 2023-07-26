import { useState, useEffect, useRef } from "react";
// import RulesModal from "./components/RulesModal";
import Header from "./components/Header";
import BigGrid from "./components/Grid/BigGrid";
import CreateUser from "./components/CreateUser";
import axios from "axios";
import "./index.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasProfile, setHasProfile] = useState(false);
  const [timer, setTimer] = useState(0);

  const handleProfileCreated = () => {
    setHasProfile(true);
  };

  const interval = useRef(); // Declare interval

  useEffect(() => {
    interval.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval.current);
  }, [hasProfile === true]);

  const stopTimer = async () => {
    clearInterval(interval.current);
    try {
      const response = await axios.put("http://localhost:3000/users", {
        username,
        timer,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-black pb-20">
      {!hasProfile && (
        <CreateUser
          handleProfileCreated={handleProfileCreated}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      )}
      {/* <RulesModal /> */}
      <Header />
      <BigGrid stopTimer={stopTimer} />
    </div>
  );
}

export default App;
