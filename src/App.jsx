import { useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, useRoutes} from 'react-router-dom'
import DateDetail from '../routes/DateDetail.jsx'
import Layout from '../routes/Layout.jsx'
import Card from '../components/Card';
import List from '../components/List';
import HomePage from '../routes/HomePage.jsx'

function App() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    // date, average temparature, MoonRise time, moonphase
    const [list, setList] = useState(null);
    useEffect(() => {
        const fetchForcast = async () => {
            let query = `https://api.weatherbit.io/v2.0/forecast/daily?units=I&city=New+York&key=${API_KEY}`
            const response = await fetch(query);
            const json = await response.json();
            setList(json);
            console.log(json.data);
        };
        fetchForcast().catch(console.error);
    }, []);

    // let elements = useRoutes([
    //     {
    //         element: <HomePage list={list} />,
    //         path: '/',
    //         children: [
    //             {
    //                 element: <DateDetail list={list} />,
    //                 path: '/:date'
    //             },
    //         ]
    //     },
    // ]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    {
                        list&& 
                        <>
                            <Route index={true} element={<HomePage list={list} />} />
                            <Route index={false} path='/:date' element={<DateDetail list={list} />} />
                        </>
                    }
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
