import { useState } from "react";
import "./App.css";
import Button from "./components/Buttons";
import InputTab from "./components/InputTab";
import { OtpBox } from "./components/OtpBox";


function App() {
  const [disable, setDisable] = useState(false);

  return (
    <div className="flex justify-center items-center bg-blue-800 h-screen text-white">
      <div>
        <div className="flex flex-col justify-center items-center font-mono text-3xl m-12 gap-25">
          <div className="flex">
            <img src="/src/assets/webinar.png" className="h-10 w-10" />
            <h2 className="text-green-200">Webinar</h2>
            <h2>.gg</h2>
          </div>
          <div>
            <h2>Verify Your Age</h2>
          </div>
        </div>
        <div>
          <OtpBox />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-blue-100">
            Please Confirm Your Birth Year. This Data will Not Be Sorted.
          </h3>
          <InputTab type="text" placeholder="Your Birth Year" />
          <Button disable={disable}>Continue</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
