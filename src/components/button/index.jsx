'use client'

import { useState } from "react"

export default function Button() {

    const [nome, setNome] = useState('Alessandro')
    
    function handleChangeName() {
        setNome('Alessandro Pedroso')
    }

    return (
        <div><button onClick={handleChangeName}>Alterar nome</button>
            <br/>
            <h3>Nome:{ nome}</h3>
        </div>
    )
}