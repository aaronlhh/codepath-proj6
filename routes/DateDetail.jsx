import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DateDetail = ({list}) => {
    const params = useParams();
    const date = params.date;
    const [filterList, setFilterList] = useState(null);
    // let datalist = ['valid_date', 'moon_phase', 'vis', 'moonrise_ts', 'moonset_ts', 'description'];
    
    useEffect(() => {
        const filteredData = Object.values(list.data).filter((value) => 
            value.valid_date == date
        );
        setFilterList(filteredData[0]);
        console.log(filteredData[0])
    }, []);

    return (
        <div className="App-row">
            <div className="details">
                {
                    filterList && 
                    <>
                        <h3>Date: {filterList.valid_date}</h3>
                        <h3>Min Temperature: {filterList.min_temp} °F</h3>
                        <h3>Max Temperature: {filterList.max_temp} °F</h3>
                        <h3>Probability of Precipitation: {filterList.pop} %</h3>
                        <h3>Average Humidity: {filterList.rh} %</h3>
                        <h3>Description: {filterList.weather.description} %</h3>
                    </>
                }
            </div>
        </div>
    );
};


export default DateDetail;