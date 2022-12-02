import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';

interface interfaceProdutos {
    "id": string,
    "id_categoria": number,
    "nome": string,
    "valor": string,
    "promo": string,
    "imagemg": string,
    "imagemp": string
}

export const Categoria = () => {

    const { id } = useParams();

    const [produtos, setProdutos] = useState<Array<interfaceProdutos>>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/produtos?id_categoria=' + id)
            .then((response) => {
                setProdutos(response.data)
                // console.log(id)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    // github.com/profchines
    return (
        <>
            <Menu />
            <Container>
                <div className='row justify-content-center text-center'>
                    {
                        produtos.map((produto) => (
                            <Card
                                key={produto.id}
                                id={produto.id}
                                img={'https://raw.githubusercontent.com/profchines/imagensProjetoU2/main/' + produto.imagemp}
                                nome={produto.nome}
                                preco={produto.valor}
                                promocao={produto.promo}
                            />
                        ))
                    }
                </div>
            </Container>
            <Footer />
        </>
    );
}
