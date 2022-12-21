import React, { useState } from 'react';
import classNames from 'classnames';

export const Input = (props) => {
    return (
        <input 
            className={classNames(
                'px-[16px] py-[20px] w-full border border-gray rounded-[8px] placeholder:text-gray focus:outline-blue leading-[4]', 
                props.cStyle
            )}
            {...props} 
        />
    );
};

export const FocusedInput = (props) => {
    const [focused, setFocused] = useState(null);
    return (
        <div className='relative mb-[10px]' onFocus={() => setFocused('focused')} onBlur={() => setFocused(null)}>
            <Input 
                cStyle='mb-[5px] h-[60px] pr-[60px] pt-[35px]'
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
                type={props.inputType}
            />
            {props.children}
            <span className={classNames('absolute top-[18px] left-[20px] transition ease-in-out duration-100 pointer-events-none', {
                'text-gray text-[16px]' : focused === null, 
                '-translate-y-[13px] -translate-x-[8px] text-blue text-[12px]' : focused === 'focused' || props.value !== ''})}>
                    {props.title}
            </span>
        </div>
    );
};