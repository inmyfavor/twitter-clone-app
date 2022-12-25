import React from 'react';

const complaints = [ 'Мне это неинтересно', 'Эта актуальная тема имеет вредоносный характер или содержит спам' ];

const Complaint = (props) => {
    return (
        <div className='flex flex-row gap-[15px] items-center'>
            <img 
                alt='' 
                src='svg/sadface.svg'
                className='w-[16px] h-[16px]'
            />
            <div 
                className='text-[14px] font-bold cursor-pointer'
                onClick={props.onClick}
            >
                {props.name}
            </div>
        </div>
    );
};

const Complain = (props) => {
    return (
        <div
            style={{display: props.display}}
            className='absolute top-0 right-[-5px] w-[380px] h-[100px] flex-col gap-[10px] rounded-[16px] border border-light-gray
            shadow-[0_0_5px_0] shadow-light-gray px-[20px] py-[10px] bg-white z-10'>
            {complaints.map((complaint, index) => <Complaint onClick={props.onClick} key={'complaint:'+index} name={complaint}/>)}
        </div>
    );
};

export default Complain;