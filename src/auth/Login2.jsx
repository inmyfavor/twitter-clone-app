import React, { useState } from 'react';
import { LinkButton, ModalButton } from './Button';
import Input from './Input';
import NoAccount from './NoAccount';
import classNames from 'classnames';

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

const Login2 = (props) => {
    const [icon, setIcon] = useState('hide');
    const [inputType, setInputType] = useState('password');
    const [focused, setFocused] = useState(null);
    const [password, setPassword] = useState('');
    return (
        <div>
            <h2 className='font-bold text-[24px] mb-[20px]'>Введите пароль</h2>
            <div className='relative' onFocus={()=>setFocused('password')} onBlur={()=>setFocused(null)}>
                <Input 
                    cStyle='mb-[5px] h-[60px] pr-[60px] pt-[35px]' 
                    type={`${inputType}`}
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <img 
                    alt='' 
                    src={`svg/${icon}.svg`} 
                    className='absolute top-[20px] right-[20px]'
                    onClick={()=>changeShowPassword(icon, setIcon, setInputType)}
                />
                <span className={classNames('absolute top-[18px] left-[20px] transition ease-in-out duration-100', {
                    'text-gray text-[16px]' : focused === null, 
                    '-translate-y-[13px] -translate-x-[8px] text-blue text-[12px]' : focused === 'password' || password !== ''})}>
                        Пароль
                </span>
            </div>
            <LinkButton
                name='Забыли пароль?'
            />
            <ModalButton
                name='Войти' 
                cStyle='bg-black text-white mt-[30px]'
            />
            <NoAccount setMode={props.setMode}/>
        </div>
    );
};

// top-[5px] left-[12px] 

export default Login2;