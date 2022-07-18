import React, {useEffect} from 'react';
import { BrowserRouter, Outlet, Route, Routes, useNavigate } from 'react-router-dom';


import HomePage from './components/homepage';
import Program from './components/program';
import Berita from './components/berita';


function App (){
        return (
                <BrowserRouter>
                        <Routes>
                                <Route path='/' element = {<HomePage/>}/>
                                <Route path='/program' element = {<Program/>}/>
                                <Route path='/berita' element = {<Berita/>}/>
                        </Routes>
                </BrowserRouter>
        )
    
}


export default App;