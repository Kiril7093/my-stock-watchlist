



import {Card} from './Card'


export const LoadingCard = (props

) => {


  


  return (

    <Card>

    <span className="absolute left-4 top-4 text-neutral-400 text-lg xl:text-xl 2xl">
        {props.symbol}
        </span>

        <div className="w-full h-full flex items-center justify-around">
        
         <span className="text-2xl xl:text-4xl 2xl:text-5xl flex items-center">
            ${props.price}
            <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">{props.currency}</span>
         </span>


         <span className={`text-lg xl: 2xl:text-2xl ${props.change>0 ? "text-lime-500": "text-red-500"}`}>
               {props.change}  <span>({props.changePercent}%)</span>
         </span>


        </div>
</Card>

  )


};
