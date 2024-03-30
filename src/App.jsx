import { useEffect, useState } from 'react'
import './App.css'
import Card from '../components/Card';
import List from '../components/List';

function App() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    // date, average temparature, MoonRise time, moonphase
    const [list, setList] = useState(null);
    const [date, setDate] = useState('');
    useEffect(() => {
        const fetchForcast = async () => {
            let query = `https://api.weatherbit.io/v2.0/forecast/daily?city=New+York&key=${API_KEY}`
            const response = await fetch(query);
            const json = await response.json();
            setList(json);
            console.log(json.data['0']);
        };
        fetchForcast().catch(console.error);
    }, []);

    const handleButton = () => {
        
    };

    return (
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
                number = {`${list.data['0']['moon_phase']*100} %`}
                label = "Moon Phase"
            />

            <List 
                handleButton={handleButton}
                updateDate = {setDate}
                list = {list}
            />

        </>
    )
}

export default App;
