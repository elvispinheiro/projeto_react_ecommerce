import { Card as CardBootstrap, Button, } from 'react-bootstrap';

interface interfaceProps {
    img: string,
    nome: string,
    preco: string,
    promocao: string,
    
}

export const Card = (props: interfaceProps) => {
    return (
        <>
            <CardBootstrap style={{ width: '18rem', margin: 10 }}>
                <CardBootstrap.Img
                    variant='top'
                    src={props.img}
                />
                <CardBootstrap.Body>
                    <CardBootstrap.Title>{props.nome}</CardBootstrap.Title>
                    <CardBootstrap.Text style={{ textDecoration: 'line-through' }}>{`R$ ${props.preco}`}</CardBootstrap.Text>
                    <CardBootstrap.Text style={{fontWeight: 'bold', color: 'red' }}>{`R$ ${props.promocao}`}</CardBootstrap.Text>
                    <Button variant='primary'
                        className='btn-lg w-100'
                    >Detalhes</Button>
                </CardBootstrap.Body>
            </CardBootstrap>
        </>
    )
}