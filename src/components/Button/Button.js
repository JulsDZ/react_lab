import React from 'react';
//id='1' value='1' className='button' onClick={this.onButtonClick}
const Button = ({
    id,
    value,
    onClick
}) => {
    return <button 
                id={id}
                onClick={onClick}
            >
            {value}
            </button>
    
}

export default Button;