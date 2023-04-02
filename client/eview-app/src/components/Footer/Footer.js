
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={`bg-zinc-300 ${styles.footer}`}>

      <div className='flex justify-center'>

        <div className='flex justify-between flex-wrap  mx-auto'>

          <p className='flex items-center py-2 text-slate-700 flex-1 px-7'>
            <a href="https://www.bloomberg.com/" target="_blank" rel="noopener noreferrer">Bloomberg</a>
          </p>

          <p className='flex items-center py-2 text-slate-700 flex-1 px-7'>
            <a href="https://www.google.com/finance" target="_blank" rel="noopener noreferrer">Google Finance</a>
          </p>

          <p className='flex items-center py-2 text-slate-700 flex-1 px-7'>
            <a href="https://www.cnbc.com/" target="_blank" rel="noopener noreferrer">CNBC</a>
          </p>

          <p className='flex items-center py-2 text-slate-700 flex-1 px-7'>
            <a href="https://www.marketwatch.com/" target="_blank" rel="noopener noreferrer">MarketWatch</a>
          </p>

          <p className='flex items-center py-2 text-slate-700 flex-1 px-7'>
            <a href="https://www.investing.com/" target="_blank" rel="noopener noreferrer">Investing.com</a>
          </p>

          <p className='flex items-center py-2 text-slate-700 flex-1 px-7'>
            <a href="https://www.reuters.com/" target="_blank" rel="noopener noreferrer">Reuters</a>
          </p>

          <p className='flex items-center py-2 text-slate-700 flex-1 px-7'>
            <a href="https://finance.yahoo.com/" target="_blank" rel="noopener noreferrer">Yahoo Finance</a>
          </p>

        </div>

      </div>

    </footer>
  );
}
