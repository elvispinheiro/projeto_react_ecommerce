import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';

interface interfaceCategoria {
    "id": number,
    "categoria": string
}

export const ListCategoria = () => {

    const [dataCategoria, setDataCategoria] = useState<Array<interfaceCategoria>>([])

    function listarCategoria() {
        axios.get('http://localhost:3001/categorias',
            {
                headers: { 'Authorization': 'Bearer reuytherouytgt' }
            }
        )
            .then((response) => {
                setDataCategoria(response.data)
            })
    }

    useEffect(() => {

        listarCategoria()

    }, [])

    async function removeCategoria(id: number) {
        try {

            await axios.delete('http://localhost:3001/categorias/' + id
            )
            listarCategoria()

        } catch (error) {
            console.log(error)
        }


    }



    // github.com/profchines
    return (
        <>
            <Menu />
            <Container
                style={{
                    marginTop: 20,
                    marginBottom: 40,
                }}
            >
                <h2>Listagem de Categoria</h2>

                <table
                    className='table table-striped'
                >
                    <thead>
                        <tr>
                            <td width={300}>ID</td>
                            <td>Nome</td>
                            <td>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataCategoria.map((produto) => (
                                <tr key={produto.id}>
                                    <td width={300}>{produto.id}</td>
                                    <td>{produto.categoria}</td>
                                    <td>
                                        <button
                                            type='button'
                                            className='btn btn-danger'
                                            onClick={() => { removeCategoria(produto.id) }}
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

            </Container>
            <Footer />
        </>
    );
}
