import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'

import api from '../../services/api'

import './styles.css'

export default function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    
    const ongId = localStorage.getItem('ongId')

    const history = useHistory();
    
    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }
       

        try {
            
            // const response = await api.post('ongs', data);
            await api.post('http://localhost:3333/incidents', data,             {
                headers: {
                    Authorization: ongId
                }
            });
    
            alert(`Caso cadastrado com sucesso`);

            history.push('/profile')
        } catch (err) {
            alert('Erro no cadastro')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva detalhadamente o caso para encontrar um heroi para resolver isso</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar
                    </Link>

                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do Caso" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrção do caso" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}