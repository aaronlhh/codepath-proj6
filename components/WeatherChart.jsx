import React from "react";
import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
    Label,
    LineChart,
    Line,
} from "recharts";



const WeatherChart = ({list}) => {

    const getTemperatureData = (data) => {
        let filteredData = [];
        for (const item of data) {
            let date = item.valid_date;
            let temp = item.temp;
            filteredData.push({
                'date': date,
                'temp': temp,
            });
        }
        return filteredData;
    };

    const getWindSpeedData = (data) => {
        let filteredData = [];
        for (const item of data) {
            let date = item.valid_date;
            let speed = item.wind_spd;
            filteredData.push({
                'date': date,
                'speed': speed,
            });
        }
        return filteredData;
    };


    return (
        <div className="charts">
            <BarChart width={350} height={300} data={getTemperatureData(list.data)}>
                <CartesianGrid />
                <XAxis dataKey="date" tick={false}>
                    <Label value="Date" offset={0} position="insideBottom" />
                </XAxis>
                <YAxis
                    tick={false} 
                    label={{
                        value: "Temperature",
                        angle: -90,
                        textAnchor: "middle",
                    }}
                />
                <Bar dataKey="temp" fill="#8884d8" />
                <Tooltip />
            </BarChart>

            <LineChart
                        width={350}
                        height={300}
                        data={getWindSpeedData(list.data)}
            >
                <Line
                    type="monotone"
                    dataKey="speed"
                    stroke="#8884d8"
                    activeDot={{ r: 5 }}
                />
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="date" tick={false}>
                    <Label value="Date" offset={0} position="insideBottom" />
                </XAxis>

                <YAxis
                    tick={false}
                    label={{
                        value: "Wind Speed",
                        angle: -90,
                        textAnchor: "middle",
                    }}
                />
                <Tooltip />
            </LineChart>
        </div>
    )
};

export default WeatherChart;