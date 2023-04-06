import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={`bg-zinc-300 ${styles.footer}`}>
      <div className=' px-12 mx-10'>
    
      <p className='text-slate-700  py-4 mx-10 px-20'>
        Please note that EquityView does not provide any investment advice, and all investment decisions should be made based on your own research and analysis.
      </p>

      </div>
    </footer>
  );
}
