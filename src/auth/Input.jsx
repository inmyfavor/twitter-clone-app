import React from 'react';
import classNames from 'classnames';

const Input = (props) => {
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

export default Input;