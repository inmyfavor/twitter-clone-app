import React from 'react';

const GoBackHeader = (props) => {
    return (
        <div className='flex flex-row gap-[30px] items-center mb-[20px]'>
                <img alt='' src='svg/goback.svg' className='w-[18px] h-[18px] cursor-pointer' onClick={() => props.setMode('data')}/>
                <h2 className='font-bold text-[24px]'>{props.title}</h2>
            </div>
    );
};

export default GoBackHeader;