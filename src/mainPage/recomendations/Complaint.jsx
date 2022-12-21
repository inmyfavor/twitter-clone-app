import React from 'react';

const Complaint = (props) => {
    return (
        <div 
            style={{display: props.display}}
            className='absolute top-0 right-[-5px] w-[350px] h-[100px] flex-col gap-[10px] rounded-[16px] border border-light-gray
            shadow-[0_0_5px_0] shadow-light-gray px-[20px] py-[10px] bg-white z-10'>
            <div className='flex flex-row gap-[15px]'>
                <img 
                    alt='' 
                    src='svg/sadface.svg'
                />
                <div className='text-[14px] font-bold cursor-pointer'>
                    Мне это неинтересно
                </div>
            </div>
            <div className='flex flex-row gap-[15px]'>
                <img 
                    alt='' 
                    src='svg/sadface.svg'
                />
                <div className='text-[14px] font-bold cursor-pointer'>
                    Эта актуальная тема имеет вредоносный характер или содержит спам
                </div>
            </div>
        </div>
    );
};

export default Complaint;