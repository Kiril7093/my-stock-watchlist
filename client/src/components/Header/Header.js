
import Search from "../Search/Search";


const Header = ({name}) => {
  return (
  <>
  <div className="xl:px-32">
    
  <h1 className="text-3xl">{name}</h1>
  <Search/>

  </div>

  {/* <ThemeIcon/> */}
  
  </>
    // <Card>
    
    // 
    // </Card>

  );
};

export default Header; 
