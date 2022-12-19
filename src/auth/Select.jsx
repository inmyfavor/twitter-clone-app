import React from 'react';
import classNames from 'classnames';

const Select = (props) => {
    return (
        <div 
            className={classNames('relative h-[60px]', props.cStyle)} 
            onFocus={props.onFocus} 
            onBlur={() => props.setFocused(null)}
        >
        <div 
            className={classNames(
                'absolute top-[5px] left-[10px] text-[12px]', {
                'text-gray' : props.focused !== props.focusedOn, 
                'text-blue' : props.focused === props.focusedOn
                })}>
                    {props.title}
        </div>
            <select 
                name={props.name} 
                className={classNames('h-full w-full bg-white rounded-[8px] border px-[10px] pt-[15px] outline-none', { 
                    'border-blue shadow-sm shadow-blue' : props.focused === props.focusedOn,
                    'border-gray' : props.focused !== props.focusedOn
                })}
            >
                {props.children}
            </select>
        </div>
);
};

export default Select;