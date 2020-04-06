import React ,{ useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import LogoImg from '../../assets/logo.svg'
import api from '../../services/api'

import './style.css'

export default function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    

    const history = useHistory()

    async function handleRegister(e){
        e.preventDefault()
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        const response = await api.post('/ongs', data)

        alert(`Seu ID de acesso ${response.data.id}`)
        history.push('/')
        
        
    }



    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt=""/>
                    <h1>Cadastro</h1>
                    <p>
                        Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
                    </p>
                    <Link to="/" className="back-link">
                        Não tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister} action="">
                    <input value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="Nome da ONG" type="text"/>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" type="email"/>
                    <input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="Whatsapp" type="text"/>
                    <div className="input-group">
                        <input value={city} onChange={(e) => setCity(e.target.value)}
                        placeholder="Cidade" type="text"/>
                        <input value={uf} onChange={(e) => setUf(e.target.value)}
                        placeholder="UF" style={{ width: 80 }} type="text"/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}