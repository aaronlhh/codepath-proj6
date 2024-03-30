import React from "react";

const List = ({handleButton, updateDate, updatePhase, list}) => {
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
                <div className="phaseFilter">
                    <label for="moonphase">Moon Phase: </label>
                    <input 
                        type="range" 
                        id="moonphase"
                        name="moonphase"
                        min='0.0'
                        max='1.0'
                        step='0.1'
                        onChange={(e) => updatePhase(e.target.value)}
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
                            <th>Time</th>
                            <th>Phase</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list && 
                            Object.entries(list).map(([index]) => 
                                <tr key={index}>
                                    <td>{list[index].valid_date}</td>
                                    <td>{list[index].temp}</td>
                                    <td>{new Date(list[index].moonrise_ts*1000).toUTCString().slice(-11, -4)}</td>
                                    <td>{list[index].moon_phase.toFixed(1)}</td>
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