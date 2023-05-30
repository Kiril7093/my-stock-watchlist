import pic1 from "../../asets/freePng5/png5.png";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className={`w-full h-screen ${styles.heroBackground}`}>
      <div
        className={`grid md:grid-cols-2 max-w-[1240px] m-auto mb-8px ${styles.heroContent}`}
      >


        <div
          className={`flex flex-col md:items-start w-full pt-5 pb-10 ${styles.heroText}`}
        >
          <h1 className={`pt-5 pb-10 text-5xl md:text-7xl font-bold text-black whitespace-nowrap ${styles.heroTitle}`}>
            My Stock Watchlist
          </h1>
          <p className={`text-2xl text-black ${styles.heroSubTitle}`}>
            Track stock prices and trends
          </p>



          <p className={`text-lg text-black py-3 my-3 ${styles.heroExplanation}`}>
            {
            `Monitor your favorite stocks and stay up-to-date on market trends`
            }
          
          </p>



          <button
            className={`py-3 px-6 sm:w-[30%] my-4 bg-indigo-700 ${styles.heroButton} hover:bg-indigo-500`}
          >
            <Link to="/dashboard" className="text-white font-semibold">
              Get Started
            </Link>
          </button>
        </div>




        <div
          className={`object-right-top w-50 h-50 ${styles.heroImage}`}
          style={{ justifySelf: "end" }}
        >
          <img src={pic1} className="w-full" alt="/" />
        </div>
      </div>
    </div>
  );
};
