import classNames from 'classnames';
import React, { useState } from 'react';
import Input from './Input';

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
    const [focused, setFocused] = useState(null);
    return (
        <div className={classNames('relative', props.cStyle)} onFocus={() => setFocused('password')} onBlur={() => setFocused(null)}>
            <Input 
                cStyle='mb-[5px] h-[60px] pr-[60px] pt-[35px]' 
                type={`${inputType}`}
                value={props.password}
                onChange={(e) => props.setPassword(e.target.value)}
            />
            <img 
                alt='' 
                src={`svg/${icon}.svg`} 
                className='absolute top-[20px] right-[20px]'
                onClick={() => changeShowPassword(icon, setIcon, setInputType)}
            />
            <span className={classNames('absolute top-[18px] left-[20px] transition ease-in-out duration-100 pointer-events-none', {
                'text-gray text-[16px]' : focused === null, 
                '-translate-y-[13px] -translate-x-[8px] text-blue text-[12px]' : focused === 'password' || props.password !== ''})}>
                    {props.title}
            </span>
        </div>
    );
};

export default Password;