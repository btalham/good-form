import React from 'react';

const Input = (props) => {

    const {label, type} = props;

    return (
        <div className="Input">
            <p>{label}</p>
            <input type={type}></input>
        </div>

    )
}

export default Input;