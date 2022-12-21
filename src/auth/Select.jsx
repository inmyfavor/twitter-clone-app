import React, { useState } from 'react';
import classNames from 'classnames';

const Select = (props) => {
    const [focused, setFocused] = useState(null);
    return (
        <div 
            className={classNames('relative h-[60px]', props.cStyle)} 
            onFocus={() => setFocused(props.focusedOn)} 
            onBlur={() => setFocused(null)}
        >
        <div 
            className={classNames(
                'absolute top-[5px] left-[10px] text-[12px]', {
                'text-gray' : focused !== props.focusedOn, 
                'text-blue' : focused === props.focusedOn
                })}>
                    {props.title}
        </div>
            <select 
                name={props.name} 
                className={classNames('h-full w-full bg-white rounded-[8px] border px-[10px] pt-[15px] outline-none', { 
                    'border-blue shadow-sm shadow-blue' : focused === props.focusedOn,
                    'border-gray' : focused !== props.focusedOn
                })}
            >
                {props.children}
            </select>
        </div>
);
};

export default Select;