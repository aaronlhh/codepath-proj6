import { useEffect, useState } from 'react'
import './App.css'
import Card from '../components/Card';
import List from '../components/List';

function App() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    // date, average temparature, MoonRise time, moonphase
    const [list, setList] = useState(null);
    const [date, setDate] = useState('');
    const [phase, setPhase] = useState('');
    const [filterList, setFilterList] = useState(null);
    useEffect(() => {
        const fetchForcast = async () => {
            let query = `https://api.weatherbit.io/v2.0/forecast/daily?city=New+York&key=${API_KEY}`
            const response = await fetch(query);
            const json = await response.json();
            setList(json);
            setFilterList(json.data);
            console.log(json.data);
        };
        fetchForcast().catch(console.error);
    }, []);

    const handleButton = () => {
        let FilteredData = Object.values(list.data);
        if (date !== ''){
            FilteredData = FilteredData.filter((value) => 
                value.valid_date.includes(date)
            );
            console.log(FilteredData);
        }

        if (phase !== ''){
            FilteredData = FilteredData.filter((value) => 
                value.moon_phase.toFixed(1) <= phase
            );
            console.log(FilteredData);
        }

        setFilterList(FilteredData);
    };

    return (
        <>
            <div className='App-page'>
                {   
                    list && 
                    <>
                        <Card 
                            number = "New York"
                            label = "New York, USA"
                        />
                        <Card 
                            number = {new Date(list.data['0']['moonrise_ts']*1000).toUTCString().slice(-11, -4)}
                            label = "Moon Rise"
                        />
                        <Card 
                            number = {`${list.data['0']['moon_phase'].toFixed(1)}`}
                            label = "Moon Phase"
                        />
                    </>
                }

                {   
                    filterList &&
                    <List 
                        handleButton={handleButton}
                        updateDate = {setDate}
                        updatePhase = {setPhase}
                        list = {filterList}
                    />
                }
            </div>

        </>
    )
}

export default App;
