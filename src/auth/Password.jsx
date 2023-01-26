import React, { useState } from 'react';
import { FocusedInput } from './Input';

function changeShowPassword(icon, setIcon, setInputType) {
    if (icon==='hide') {
        setIcon('show');
        setInputType('text')
    }
    else if (icon==='show') {
        setIcon('hide');
        setInputType('password')
    }
}

const Password = (props) => {
    const [icon, setIcon] = useState('hide');
    const [inputType, setInputType] = useState('password');
    return (
        <FocusedInput 
            value={props.password} 
            setValue={props.setPassword} 
            title={props.title} 
            inputType={inputType}>
                <img 
                    alt='' 
                    src={`svg/${icon}.svg`} 
                    className='absolute top-[20px] right-[20px]'
                    onClick={() => changeShowPassword(icon, setIcon, setInputType)}
                />
        </FocusedInput>
    );
};

export default Password;