import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../layout/Header';
import CardsList from '../component/HomePage'
import CardDetails from '../component/features/pokemon/CardDetails'

const AppRoutes = () => {
    return (
        <Router>
            {/* AppBar */}
            <Header />
            {/* Routes */}
            <Routes>
                <Route path="/" element={<CardsList />} />
                <Route path="/card/:id" element={<CardDetails />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
