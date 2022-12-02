import { Card as CardBootstrap, Button, } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface interfaceProps {
    id: string,
    img: string,
    nome: string,
    preco: string,
    promocao: string,
    
}

export const Card = (props: interfaceProps) => {
    
    const navigate = useNavigate()

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
                    <Button 
                        variant='primary'
                        className='btn-lg w-100'
                        onClick={() => {
                            navigate('/produto/'+props.id)
                        }}
                    >Detalhes</Button>
                </CardBootstrap.Body>
            </CardBootstrap>
        </>
    )
}