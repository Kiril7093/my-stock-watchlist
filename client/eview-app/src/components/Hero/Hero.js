import {
  
  ChartBarIcon,
  CurrencyDollarIcon,
  CloudUploadIcon,
  PaperAirplaneIcon,
  ServerIcon,
  DatabaseIcon,
  
} from "@heroicons/react/solid";

import pic1 from "../../asets/freePng5/png5.png";

export const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md: grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl text-black">
            Stay Ahead of the Game with Real-Time Data and Powerful Analytics
          </p>
          <h1 className="py-7 text-5xl md:text-7xl font-bold  text-black">EquityView</h1>
        
          <button className="py-3 px-6 sm: w-[60%] my-4">Get Started</button>
        </div>

        <div
          className="r object-right-top w-50 h-50"
          style={{ justifySelf: "end" }}
        >
          <img src={pic1} className="w-full" alt="/" />
        </div>






      </div>
    </div>
  );
};
