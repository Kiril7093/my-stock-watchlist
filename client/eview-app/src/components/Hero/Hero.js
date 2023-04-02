import pic1 from "../../asets/freePng5/png5.png";
import styles from "./Hero.module.css"; // import the styles from Hero.module.css
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
          <p className="text-2xl text-black ">
            Stay Ahead of the Game with Real-Time Data and Powerful Analytics
          </p>
          <h1 className="py-7 text-5xl md:text-7xl font-bold text-black">
            EquityView
          </h1>
          <p className="text-lg text-black py-7 my-7">
            EquityView is your one-stop solution for tracking the stock market.
            With real-time data and powerful analytics, you can stay ahead of
            the game and make informed investment decisions. Whether you're a
            beginner or an experienced investor, EquityView has everything you
            need to succeed in the stock market.
          </p>

          <button
            className={`py-3 px-6 sm:w-[30%] my-4 bg-indigo-700 ${styles.heroButton}`}
          >
            <Link to='/dashboard' className="text-white font-semibold">
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
