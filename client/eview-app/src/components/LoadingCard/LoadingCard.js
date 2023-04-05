import { useContext } from "react";
import { useEffect} from "react";
import StockContext from "../../context/stockContext.js";
import {} from "../../api/stockApi"



export const LoadingCard=()=>{
       

    const {StockSymbol}=useContext(StockContext);

    useEffect( function getQuote(){
           


    }, [StockSymbol]);

    return(


    )
}