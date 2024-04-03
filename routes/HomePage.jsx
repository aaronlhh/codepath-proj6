import { useEffect, useState } from 'react'
import '../src/App.css'
import '../src/index.css'
import Card from '../components/Card';
import List from '../components/List';
import WeatherChart from '../components/WeatherChart';

function HomePage({list}) {
    // date, average temparature, sunrise time, cloud coverage
    const [date, setDate] = useState('');
    const [cloud, setCloud] = useState('');
    const [filterList, setFilterList] = useState(list.data);


    const handleButton = () => {
        let FilteredData = Object.values(list.data);
        if (date !== ''){
            FilteredData = FilteredData.filter((value) => 
                value.valid_date.includes(date)
            );
            console.log(FilteredData);
        }

        if (cloud !== ''){
            FilteredData = FilteredData.filter((value) => 
                value.clouds <= cloud
            );
            console.log(FilteredData);
        }

        setFilterList(FilteredData);
    };

    return (
        <>
            
            {   
                list && 
                <div className='App-row'>
                    <Card 
                        number = "New York"
                        label = "New York, USA"
                    />
                    <Card 
                        number = {`${list.data['0']['wind_spd']} m/s`}
                        label = "Wind speed"
                    />
                    <Card 
                        number = {`${list.data['0']['min_temp']} °F`}
                        label = "Min Temperature"
                    />
                    <Card 
                        number = {`${list.data['0']['high_temp']} °F`}
                        label = "High Temperature"
                    />
                </div>
            }
            <div className='App-row'>
                {   
                    filterList &&
                    <List 
                        handleButton={handleButton}
                        updateDate = {setDate}
                        updateCloud = {setCloud}
                        list = {filterList}
                    />
                }
                <WeatherChart 
                    list={list}
                />
            </div>
            

            

        </>
    )
}

export default HomePage;
