import axios from 'axios';
import React, { useEffect, useState, FormEvent } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';

interface interfaceProdutos {
    "id": string,
    "id_categoria": number,
    "nome": string,
    "valor": string,
    "promo": string,
    "promoNumber": string,
    "imagemg": string,
    "imagemp": string
}

export const Produto = () => {

    const { id } = useParams();

    const navigate = useNavigate()

    const [produto, setProduto] = useState<interfaceProdutos>();

    useEffect(() => {
        axios.get('http://localhost:3001/produtos?id=' + id)
            .then((response) => {
                setProduto(response.data[0])
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    function onSubmit(e: any) {
        e.preventDefault();
        
        if (produto) {

            let qtd = e.target.quantidade.value

            let obj = {
                ...produto,
                quantidade: qtd,
                total: Number(produto?.promoNumber) * qtd
            }
            let lsCarrinho = localStorage.getItem('@u2:carrinho')
            let carrinho: any = null

            if (typeof lsCarrinho === 'string') {
                carrinho = JSON.parse(lsCarrinho)
            }

            if (carrinho) {
                carrinho.push(obj)
                localStorage.setItem('@u2:carrinho', JSON.stringify(carrinho))
            } else {
                localStorage.setItem('@u2:carrinho', JSON.stringify([obj]))
            }

            navigate('/carrinho')

            console.log(obj)
        }   
    }

    // github.com/profchines
    return (
        <>
            <Menu />
            <Container
                style={{
                    marginTop: 20,
                    marginBottom: 20
                }}
            >
                {
                    produto ?
                        <>
                            <h2>
                                Produto:
                            </h2>
                            <div
                                className='row'
                            >
                                <div
                                    className='col-md-4'
                                >
                                    <img
                                        className='w-100'
                                        src={
                                            'https://raw.githubusercontent.com/profchines/imagensProjetoU2/main/' +
                                            produto.imagemg
                                        }
                                    />
                                </div>
                                <div
                                    className='col-md-8'
                                >
                                    <h3>{produto.nome}</h3>

                                    <p style={{ textDecoration: 'line-through' }}>{`R$ ${produto.valor}`}</p>
                                    <p style={{ fontWeight: 'bold', color: 'red' }}>{`R$ ${produto.promo}`}</p>

                                    <form
                                        onSubmit={onSubmit}

                                    >
                                        <div
                                            className='input-group'
                                        >
                                            <input
                                                type='number'
                                                name='quantidade'
                                                className='form-control'
                                                defaultValue={1}
                                                required
                                            />

                                            <div className='input-group-append'>
                                                <button
                                                    type='submit'
                                                    className='btn btn-success'
                                                >
                                                    Adicionar ao Carrinho
                                                </button>

                                            </div>

                                        </div>
                                    </form>

                                </div>
                            </div>
                        </>
                        :
                        <h2>Nenhum produto encontrado</h2>
                }


            </Container>
            <Footer />
        </>
    );
}
