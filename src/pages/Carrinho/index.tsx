import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Menu } from '../../components/Menu';

import { FaTrash } from 'react-icons/fa';

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
    const [valorTotal, setValorTotal] = useState<number>(0)

    function atualizarValorTotal(carrinho: Array<interfaceProdutos>) {
        let total = 0
        carrinho.forEach((produto) => {
            total = produto.total + total;
        })

        setValorTotal(total)
    }

    function formataValorBR(
        valor?: number | string | null
    ) {
       if(valor) {
        let valorUS = parseFloat(valor.toString())
        return 'R$' + valorUS.toLocaleString('pt-br', {
            minimumFractionDigits: 2
        })
       }

       return '0,00' 
    }

    useEffect(() => {
        let lsCarrinho = localStorage.getItem('@u2:carrinho')
        let carrinho: any = null

        if (typeof lsCarrinho === 'string') {
            carrinho = JSON.parse(lsCarrinho)
        }

        if (carrinho) {
            setDataCarrinho(carrinho)
            atualizarValorTotal(carrinho)
        }

    }, [])

    function removeProdutoCarrinho(id: string) {
        let carrinho = dataCarrinho.filter((produto) => (
            produto.id !== id
        ))

        localStorage.setItem('@u2:carrinho', JSON.stringify(carrinho))

        setDataCarrinho(carrinho)
        atualizarValorTotal(carrinho)
    }


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
                            <td width={300}>Nome do produto</td>
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
                                    <td width={300} >{produto.nome}</td>
                                    <td>{produto.quantidade}</td>
                                    <td>{produto.promo}</td>
                                    <td>{formataValorBR(produto.total)}</td>
                                    <td>
                                        <button
                                            type='button'
                                            className='btn btn-danger'
                                            onClick={() => { removeProdutoCarrinho(produto.id) }}
                                        >
                                            <FaTrash></FaTrash>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td width={300}>Valor total:</td>
                            <td></td>
                            <td></td>
                            <td> {formataValorBR( valorTotal)}</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                <div
                    className='d-flex justify-content-between'
                >
                    <button
                        type='button'
                        className='btn btn-danger'
                    >Limpar Carrinho</button>
                    <button
                        type='button'
                        className='btn btn-success'
                    >Finalizar Pedido</button>
                </div>
            </Container>
        </>
    );
}
