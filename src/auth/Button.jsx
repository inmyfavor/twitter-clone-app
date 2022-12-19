import React from 'react';
import classNames from 'classnames';

export const ModalButton = (props) => {
    return (
        <button className={classNames('w-full h-[40px] rounded-[16px] text-center font-semibold', props.cStyle)} {...props}>
            {props.name}
        </button>
    );
};

export const HeaderButton = (props) => {
    return (
        <button className={classNames('py-[2px] px-[20px] text-[14px] rounded-[16px] text-center font-semibold', props.cStyle)} {...props}>
            {props.name}
        </button>
    );
};

export const LinkButton = (props) => {
    return (
        <button className='text-blue hover:underline text-[14px]' {...props}>
            {props.name}
        </button>
    );
};