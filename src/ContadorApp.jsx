import { React, useState} from 'react'

const ContadorApp = ( { value } ) => {

    const [ count, setCount] = useState( value )

    const handleClick = () =>{
        setCount(count + 1)
    }

    return (
        <>
            <div>ContadorApp</div>
            <p style={ count >= 10 ? {color: 'red'} : {color: 'green'} }>{ count }</p>
            <button onClick={ handleClick }>Hola, soy un botón</button>
        </>
    )
}

export default ContadorApp