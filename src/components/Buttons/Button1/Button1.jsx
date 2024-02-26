import React from 'react'
import './index.scss'

const Button1 = ({ text, classMod, onClick }) => {
    return (
        <button onClick={onClick} className={classMod}>{text}</button>
    )
}

export default Button1