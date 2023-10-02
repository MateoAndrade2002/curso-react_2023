import React, { useState } from 'react'

const AgregarTarea = ({ agregarTarea }) => {
    
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) =>{
        setInputValue(event.target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        agregarTarea(inputValue)
    }
    
    return (
        <>
            <form onSubmit={(event) => onSubmit(event)}>
                <input 
                type='text' 
                placeholder='Ingresa la tarea'
                value={inputValue}
                onChange={onInputChange}
                />
            </form>
        </>
    )
}

export default AgregarTarea