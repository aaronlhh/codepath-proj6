import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from '../routes/Layout.jsx'
import './index.css'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DateDetail from '../routes/DateDetail.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    // <BrowserRouter>
    //     <Routes>
    //         <Route path='/' element={<Layout />}>
    //             <Route index={true} element={<App />} />
    //             <Route index={false} path='/:date' element={<DateDetail />} />
    //         </Route>
    //     </Routes>
    // </BrowserRouter>
)
