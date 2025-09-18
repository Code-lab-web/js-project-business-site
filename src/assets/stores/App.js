import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchAppBar from './components/SearchAppBar';


function App() {
    return (
        <BrowserRouter>
        <SearchAppBar />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;
