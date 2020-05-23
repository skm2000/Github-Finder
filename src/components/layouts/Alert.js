import React,{ useContext } from 'react'
import AlertContext from '../context/alert/alertContext'

const Alert = () => {//alert is an object of msg and type

    const alertContext = useContext(AlertContext)
    const { alert } = alertContext
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"></i>{ alert.msg }
            </div>
        )
    )
}

export default Alert
