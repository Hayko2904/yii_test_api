import React from 'react';

const Button = (props) => {
    return (
        <>
            <button
                onClick={props.onClick}
                type={props.type}
                name={props.name}
                value={props.value}
                className={props.className}>{props.content}
            </button>
        </>
    )
}

export default Button;