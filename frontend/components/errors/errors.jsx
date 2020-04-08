import React from 'react'

const Errors = props => {
    const { errors } = props;
    if (errors.sessionErrors){
        const collection = []
        errors.sessionErrors.map(err => {
        collection.push(<il>{err}</il>)
        })

        return (
            <ul className="error-message">
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