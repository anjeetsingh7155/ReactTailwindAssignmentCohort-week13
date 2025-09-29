import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Buttons";
import InputTab from "./components/InputTab";

function App() {
  const [disable, setDisable] = useState(false);
 
  return (
    <div class="flex justify-center items-center bg-blue-800 h-screen  text-white">
      <div>
        <div class=" flex flex-col justify-center items-center font-mono text-3xl m-12 gap-25">
          <div class="flex">
          <img src="/src/assets/webinar.png" class="h-10 w-10" />
          <h2 class="text-green-200">Webinar</h2>
          <h2>.gg</h2>
          </div>
          <div>
          <h2>Verify Your Age</h2>
          </div>
        </div>
    
        <div class="flex flex-col items-center gap-2">
          <h3 class ='text-blue-100'>Please Confirm Your Birth Year.This Data will Not Be Sorted.</h3>
          <InputTab type='text' placeholder="Your Birth Year"></InputTab>
          <Button disable={disable}>Continue</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
