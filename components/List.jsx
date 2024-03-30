import React from "react";

const List = ({handleButton, updateDate, list}) => {
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
                <button class="btn" onClick={handleButton}>Search</button>
            </div>
            
            <div className="table">
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
                        Object.entries(list.data).map(([index]) => {
                            <tr>
                                <td>{list.data[index].valid_date}</td>
                                <td>{list.data[index].temp}</td>
                                <td>{new Date(list.data[index].moonrise_ts*1000).toUTCString().slice(-11, -4)}</td>
                                <td>{list.data[index].moon_phase}</td>
                            </tr>
                        })
                        
                    }
                </tbody>
            </div>
        </div>
    )
};

export default List;