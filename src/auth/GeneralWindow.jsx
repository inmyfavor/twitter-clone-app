import React, { useState } from 'react';
import { ModalButton, LinkButton } from './Button';
import Input from './Input';
import { login, registration } from './Data';

function whatMode(mode) {
    if (mode==='login') {
        return login
    } 
    else if (mode==='registration'){
        return registration
    }
}

function changeMode(mode) {
    if (mode===login) {
        return registration
    } 
    else if (mode===registration){
        return login
    }
}

const GeneralWindow = (props) => {
    const [mode, setMode] = useState(whatMode(props.mode))
    return (
        <div>
            <h2 className='font-bold text-[24px] mb-[20px] text-center'>{mode.title}</h2>
            <Input 
                type='email' 
                placeholder='Введите адрес электронной почты' 
                cStyle='mb-[20px]'
            />
            <ModalButton 
                name='Далее' 
                cStyle='bg-black text-white'
            />
            { mode === login &&
            <ModalButton
                name='Забыли пароль?'
                cStyle='border border-gray mt-[10px]'
            />
            }
            <div className='flex flex-row justify-center gap-[8px] text-[14px] mt-[20px]'>
                <div>{mode.text}</div>
                <LinkButton
                    name={mode.linkButton}
                    onClick={()=>setMode(changeMode(mode))}
                />
            </div>
        </div>
    );
};

export default GeneralWindow;