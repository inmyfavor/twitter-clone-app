import React, { useState } from 'react';
import Complaint from './Complaint';

const Recomendation = (props) => {
    const [display, setDisplay] = useState('none');
    return (
        <div className='relative flex flex-row justify-between items-center'>
            <div className='flex flex-col'>
                <div className='text-[16px] font-bold'>{props.title}</div>
                <div className='text-[12px] text-gray'>Твитов: {props.amount.toLocaleString()}</div>
            </div>
            <div 
                className='text-[20px] font-bold text-gray tracking-wider cursor-pointer'
                onClick={() => setDisplay('flex')}
            >
                    ...
            </div>
            <Complaint display={display}/>
        </div>
    );
};

export default Recomendation;