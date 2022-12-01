import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import {
    Navbar,
    Nav,
    Container,
} from 'react-bootstrap';
import axios from 'axios';

interface interfaceDataMenu {
    "id": number,
    "categoria": string
}

export const Menu = () => {

    const [dataMenu, setDataMenu] = useState<Array<interfaceDataMenu>>([]);

    useEffect(() => {

        axios.get('http://localhost:3001/categorias',
            {
                headers: { 'Authorization': 'Bearer frelihjgfoyfaweoifvr' }
            }
        )
            .then((response) => {
                setDataMenu(response.data)
            })

    }, [])

    return (
        <>
            <Navbar
                bg='dark'
                expand='lg'
                variant='dark'
            >
                <Container fluid>
                    <Link
                        className='navbar-brand'
                        to='/'
                    >U2 Black Fraude</Link>
                    <Navbar.Toggle
                        aria-controls='basic-navbar-nav'
                    />
                    <Navbar.Collapse>
                        <Nav className='me-auto'>
                            <Link
                                className='nav-link'
                                to='/'
                            >
                                Home
                            </Link>
                            {
                                dataMenu.map((menu) => {
                                    return (
                                        <Link
                                            key={menu.id}
                                            className='nav-link'
                                            to='/'
                                        >
                                            {menu.categoria}
                                        </Link>
                                    )
                                })
                            }

                        </Nav>
                        <Nav>
                            <Link
                                to='/carrinho'
                                className='nav-link'
                            >
                                <FaShoppingCart
                                    size={22}
                                />
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
