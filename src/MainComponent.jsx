import React from 'react'
import PropTypes from 'prop-types'

const MainComponent = ( {nombre, apellido, edad} ) => {
    return (
        <>
            <h1>{nombre}</h1>
            <h2>{apellido}</h2>
            <h3>{edad}</h3>
        </>
    )
}

MainComponent.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired
}

MainComponent.defaultProps = {
    edad: 28
}


export default MainComponent