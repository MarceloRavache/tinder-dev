import React, { useState} from 'react';
import './Login.css'

import logo from '../assets/logo.svg';

export default function Login(){
    const [username, setUsername] = useState('');

    return(
        <div className="login-container">
            <form>
                <img src={logo} alt="Tinder-Dev"/>
                <input type="text" placeholder="Digite seu User do GitHub" value={username} onChange={e =>{setUsername(e.target.username)}}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}