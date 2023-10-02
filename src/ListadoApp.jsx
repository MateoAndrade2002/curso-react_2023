import React, { useState } from 'react'
import AgregarTarea from './components/AgregarTarea.jsx'

const Item = ({ nombre, visto }) =>{
    return (
        <li style={visto ? {textDecoration: 'underline'} : {textDecoration: 'underline dotted'}} className={visto ? 'rojito' : 'verdesito'}>{nombre} {visto && '✅'}</li>
    )
}

const ListadoApp = () => {

    const addTask = () =>{
        setArreglo([...arreglo, {nombre: 'nuevo', visto: false}])
    }

    let listadoSecciones = [ 
        { id: 1, nombre: 'Comer', visto: true},
        { id: 2, nombre: 'Dormir', visto: false}, 
        { id: 3, nombre: 'Estudiar', visto: true}, 
        { id: 4, nombre: 'Entrenar', visto: false},
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones)

    const onAddTask = (val) =>{
        let valor = val.trim()
        if(valor < 1) return
        const envio = {
            id: arreglo.length + 1,
            nombre: valor,
            visto: true,
        }
        setArreglo([...arreglo, envio])
    }

    return (
        <>
            <h1>ListadoApp</h1>
            <AgregarTarea agregarTarea={onAddTask} />
            <ol>
                {
                    arreglo.map(x =>
                        <Item key={x.id} nombre={x.nombre} visto={x.visto} />
                    )
                }
            </ol>
            
        </>
    )
}

export default ListadoApp