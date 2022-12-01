import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { Carrinho } from './pages/Carrinho';
import { Home } from './pages/Home';
import { Categoria } from './pages/Categoria';

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route
                    path='/carrinho'
                    element={<Carrinho />}
                />
                <Route
                    path='/categoria/:id'
                    element={<Categoria />}
                />
            </Routes>
        </BrowserRouter>
    )
}