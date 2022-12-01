import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { Carrinho } from './pages/Carrinho';
import { Home } from './pages/Home';

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route
                    path='/carrinho'
                    element={<Carrinho />}
                />
            </Routes>
        </BrowserRouter>
    )
}