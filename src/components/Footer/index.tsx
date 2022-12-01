import {
    FaTwitter,
    FaInstagram,
    FaFacebook
} from 'react-icons/fa'

export const Footer = () => {
    return (
        <>
            <footer
                className="bg-success"
                style={{
                    paddingBottom: 15,
                    paddingTop: 15
                }}
            >
                <p
                    className="text-center"
                    style={{
                        color: '#fff',
                        margin: 0
                    }}
                >
                    Desenvilvido por seu nome
                </p>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <FaTwitter style={{
                        margin: 10
                    }} color='#fff' />
                    <FaFacebook style={{
                        margin: 10
                    }} color='#fff' />
                    <FaInstagram style={{
                        margin: 10
                    }} color='#fff' />

                </div>
            </footer>
        </>
    )
}