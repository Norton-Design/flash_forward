import React from 'react'

const Errors = props => {
    const { errors } = props;
    if (errors.sessionErrors.length >= 1){
        const collection = []
        errors.sessionErrors.map(err => {
        collection.push(<il className="error-message"> {err}. </il>)
        })

        return (
            <ul className="error-container">
                { collection }
            </ul>
        )
    } else {
        return (
            <></>
        )
    }
}

export default Errors;