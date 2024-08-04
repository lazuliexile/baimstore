import { ReactSVG } from "react-svg";
import logoBrand from "./components/assets/logo.svg";
import googleLogo from "./components/assets/google.png"; // Import the image
import { InputForm } from "./components/elements/Input";
import username from "./components/assets/user.svg";
import background from "./components/assets/background.svg";
function App() {
  return (
    <>
      <div className="flex h-screen w-screen justify-evenly">
        <div id="content-1" className="my-auto">
          <div id="logo" className="flex">
            <ReactSVG src={logoBrand} />
            <p className="text-3xl font-[#406678] font-light ml-1">
              Baim Store
            </p>
          </div>
          <p>WELCOME BACK 👋🏻</p>
          <p>Continue to your Account.</p>
          <div className="flex w-[360px] h-[56px] bg-[#E3F3FB] justify-center items-center rounded-[48px] mx-2 my-2 text-base">
            <img src={googleLogo} className="w-[24px] h-[24px] mr-1" alt="" />
            Log In With Google
          </div>
          <div className="flex items-center justify-center my-4">
            <div className="flex-grow border-t border-[#E0E0E0]"></div>
            <span className="mx-4 text-gray-600">Or use Email</span>
            <div className="flex-grow border-t border-[#E0E0E0]"></div>
          </div>
          <InputForm type="text" placeholder="username" nameSVG={username} />
          <InputForm type="password" placeholder="******" nameSVG={username} />
          <div className="flex w-[360px] h-[55px] bg-[#2F3538] items-center justify-center rounded-[8px]">
            <p className="text-[#FFFFFF] text-base ">CONTINUE {">"}</p>
          </div>
          <p className="font-light text-base">Are you newbie? <span className="font-bold">GET SARTED - IT'S FREE</span></p>
        </div>
        <div id="content-2">
          <ReactSVG src={background}/>
        </div>
      </div>
    </>
  );
}

export default App;
