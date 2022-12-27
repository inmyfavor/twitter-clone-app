import React from 'react';

const Tab = (props) => {
    return (
        <div 
            className='h-[60px] flex flex-row justify-between items-center cursor-pointer'
            onClick={props.onClick} >
            <div className='text-[16px]'>{props.name}</div>
            <img alt='' src='svg/forwardarrow.svg' className='w-[24px] h-[24px]'/>
        </div>
    );
};

export default Tab;