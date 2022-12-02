import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Menu } from '../../components/Menu';

interface interfaceProdutos {
    "id": string,
    "id_categoria": number,
    "nome": string,
    "valor": string,
    "promo": string,
    "promoNumber": string,
    "quantidade": string,
    "total": number,
    "imagemg": string,
    "imagemp": string
}

export const Carrinho = () => {

    const [dataCarrinho, setDataCarrinho] = useState<Array<interfaceProdutos>>([])

    useEffect(() => {
        let lsCarrinho = localStorage.getItem('@u2:carrinho')
        let carrinho: any = null

        if (typeof lsCarrinho === 'string') {
            carrinho = JSON.parse(lsCarrinho)
        }

        if (carrinho) {
            setDataCarrinho(carrinho)
        }

    }, [])
    // github.com/profchines
    return (
        <>
            <Menu />
            <Container
                style={{
                    marginTop: 20,
                    marginBottom: 20
                }}>
                <h2>Carrinho de compras</h2>

                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <td>Nome do produto</td>
                            <td>Qtd.</td>
                            <td>Vlr. Unit.</td>
                            <td>Vlr. Total</td>
                            <td>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataCarrinho.map((produto) => (
                                <tr key={produto.id}>
                                    <td>{produto.nome}</td>
                                    <td>{produto.quantidade}</td>
                                    <td>{produto.promo}</td>
                                    <td>{produto.total}</td>
                                    <td>Ações</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Container>
        </>
    );
}
