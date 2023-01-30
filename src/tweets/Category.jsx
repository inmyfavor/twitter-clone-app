import classNames from 'classnames';
import React from 'react';
import CheckIcon from '../icons/CheckIcon';

const Category = (props) => {
    return (
        <div className='h-[60px] flex flex-row items-center justify-between 
        hover:bg-light-gray hover:bg-opacity-[0.5] px-[20px] cursor-pointer'
        onClick={() => props.setCheckMark(props.value)}>
            <div className='flex flex-row gap-[10px] items-center'>
                <div className={classNames('h-[40px] w-[40px] rounded-[20px] p-[8px]', props.className)}>
                    {props.icon}
                </div>
                <div className='font-semibold text-[14px]'>{props.title}</div>
            </div>
            { props.value === props.checkMark &&
            <CheckIcon 
                width='14px' 
                height='14px' 
                fill='#0284c7' 
                className='flex shrink-0 justify-self-end'/> }
        </div>
    );
};

export default Category;