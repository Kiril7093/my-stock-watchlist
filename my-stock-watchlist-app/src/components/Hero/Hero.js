import pic1 from "../../asets/freePng5/png5.png";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className={`w-full h-screen ${styles.heroBackground}`}>
      <div
        className={`grid md:grid-cols-2 max-w-[1240px] m-auto mb-7px ${styles.heroContent}`}
      >
        <div
          className={`flex flex-col justify-center md:items-start w-full px-2 py-8 ${styles.heroText}`}
        >
          <p className="text-2xl text-black">
            Track stock prices and trends
          </p>
          <h1 className="py-7 text-5xl md:text-7xl font-bold text-black">My stock watchlist</h1>
          <p className="text-lg text-black py-7 my-7">
          By using my stock watchlist, you can easily monitor your favorite stocks and stay up-to-date on market trends. Keeping track of your investments is a breeze with My stock watchlist.</p>

          <button
            className={`py-3 px-6 sm:w-[30%] my-4 bg-indigo-700 ${styles.heroButton} hover:bg-indigo-500`}
          >
            <Link to="/dashboard" className="text-white font-semibold">
              Get Started
            </Link>
          </button>

          
        </div>
        <div
          className={`r object-right-top w-50 h-50 ${styles.heroImage}`}
          style={{ justifySelf: "end" }}
        >
          <img src={pic1} className="w-full" alt="/" />
        </div>
      </div>
    </div>
  );
};
