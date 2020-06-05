import React from 'react'

const Errors = props => {
    const { errors } = props;
    if (errors.sessionErrors.length >= 1){
        const collection = []
        errors.sessionErrors.map(err => {
        collection.push(<li className="error-message" key={err}> {err}. </li>)
        })

        return (
            <ul className="error-container">
                { collection }
            </ul>
        )
    } else if (errors.areaErrors.length >= 1){
        const collection = []
        errors.areaErrors.map(err => {
        collection.push(<li className="error-message" key={err}> {err}. </li>)
        })

        return (
            <ul className="error-container">
                { collection }
            </ul>
        )
    } else if (errors.routeErrors.length >= 1){
        const collection = []
        errors.routeErrors.map(err => {
        collection.push(<li className="error-message" key={err}> {err}. </li>)
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