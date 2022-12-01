import React from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';

export const Categoria = () => {

    const {id} = useParams();

    // github.com/profchines
    return (
        <>
            <Menu />
            <h1>Categoria {id} </h1>
            <Footer/>
        </>
    );
}
