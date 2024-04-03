import React from "react";
import { Link } from "react-router-dom";

const List = ({handleButton, updateDate, updateCloud, list}) => {
    return (
        <div className="List">
            <div className="filters">
                <div className="dateFilter">
                    <input 
                        type="text" 
                        placeholder="Enter Date..."
                        onChange={(e) => updateDate(e.target.value)}
                    />
                </div>
                <div className="cloudFilter">
                    <label htmlFor="cloud">Cloud Coverage (0%-100%): </label>
                    <input 
                        type="range" 
                        id="cloud"
                        name="cloud"
                        min='0.0'
                        max='100'
                        step='10'
                        onChange={(e) => updateCloud(e.target.value)}
                    />
                </div>
                <button className="btn" onClick={handleButton}>Search</button>
            </div>
            
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Temperature</th>
                            <th>Sunrise Time</th>
                            <th>Cloud Coverage</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list && 
                            Object.entries(list).map(([index]) => 
                                <tr key={index}>
                                    <td>{list[index].valid_date}</td>
                                    <td>{list[index].temp} °F</td>
                                    <td>{new Date(list[index].sunrise_ts * 1000).toLocaleString('en-US',{timeZone: "America/New_York"}).slice(-11)}</td>
                                    <td>{list[index].clouds} %</td>
                                    <td>
                                        <Link to={`/${list[index].valid_date}`}>
                                            &nbsp;&nbsp;&nbsp;&nbsp;🔗
                                        </Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default List;