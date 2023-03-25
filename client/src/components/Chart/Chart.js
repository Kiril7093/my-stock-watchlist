import { Tooltip } from "bootstrap";
import { date } from "is";
import { useState } from "react"
import { ResponsiveContainer } from "recharts";
import { Area } from "recharts/types/cartesian/Area.js";
import { XAxis } from "recharts/types/cartesian/XAxis.js";
import { YAxis } from "recharts/types/cartesian/YAxis.js";
import { AreaChart } from "recharts/types/chart/AreaChart.js";
import { mockHistoricaldata } from "../../constants/mock.js"
import { convertUnixTimestampToDate } from "../../helpers/dataHelper.js";


export const Chart =()=>{


    const [data, setData] = useState(mockHistoricaldata)
    const [filter, setFilter] = useState("1W");

    const formatData= ()=>{

        return data.c.map((item, index)=>{

            return{
                value: item.toFixed(2),
                date: convertUnixTimestampToDate(data.t[index]),


            };
        });




    };

    return (
    
    <Card>
    <ResponsiveContainer>
        <AreaChart data={formatData(data)}>
            <Area type="monotone" dataKey="value" stroke="312e81" fillOpacity={1} strokeWidth={0.5}>

            </Area>

            <Tooltip/>

            <XAxis dataKey={date}/>
            <YAxis domain={["dataMin", "dataMax"]}/>

        
        </AreaChart>

    </ResponsiveContainer>

    </Card>

    )
}