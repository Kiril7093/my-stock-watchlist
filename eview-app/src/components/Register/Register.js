
import styles from "./Register.module.css";

export const Register = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-center items-center">
      <form className={`rounded-lg ${styles["form-container"]}`}>
        <h3 className={`flex justify-center ${styles["form-title"]}`}>EquityView</h3>

        <div className="flex flex-col py-2">
          <label className='text-lg flex justify-center'>Username</label>
          <input type="text" className={styles["form-input"]} />
        </div>


        <div className="flex flex-col py-2">
          <label className='text-lg flex justify-center'>Email</label>
          <input type="text" className={styles["form-input"]} />
        </div>

        <div className="flex flex-col py-2">
          <label className='text-lg flex justify-center'>Password</label>
          <input type="password" className={styles["form-input"]} />
        </div>

        <div className="flex flex-col py-2">
          <label className='text-lg flex justify-center'>Confirm Password</label>
          <input type="password" className={styles["form-input"]} />
        </div>



        <button className={styles["form-button"]}>Register</button>
      </form>
    </div>
  );
};
