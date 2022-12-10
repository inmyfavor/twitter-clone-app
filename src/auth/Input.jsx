import React from 'react';
import classNames from 'classnames';

const Input = (props) => {
    return (
        <input 
            className={classNames('px-[16px] py-[20px] h-[40px] w-full border border-gray rounded-[8px] placeholder:text-gray', props.cStyle)} 
            {...props} 
        />
    );
};

export default Input;