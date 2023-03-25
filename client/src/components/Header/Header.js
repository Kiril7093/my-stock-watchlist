
import Search from "../Search/Search";
import { ThemeIcon } from "../ThemeIcon/ThemeIcon";


const Header = ({name}) => {
  return (
  <>
  <div className="xl:px-32">
    
  <h1 className="text-3xl">{name}</h1>
  <Search/>
  
  </div>

 <ThemeIcon/>
  
  </>

  );
};

export default Header; 
