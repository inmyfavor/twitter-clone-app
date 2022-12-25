import React, { useEffect, useRef, useState } from 'react';
import Complain from './Complain';

const Recomendation = (props) => {
    const [display, setDisplay] = useState('none');

    const complaint = useRef(null);

    useEffect(() => {
        const onClick = e => complaint.current.contains(e.target) || setDisplay('none');
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    return (
        <div className='relative flex flex-row justify-between items-center'>
            <div className='flex flex-col'>
                <div className='text-[16px] font-bold'>{props.title}</div>
                <div className='text-[12px] text-gray'>Твитов: {props.amount.toLocaleString()}</div>
            </div>
            <div 
                className='text-[20px] font-bold text-gray tracking-wider cursor-pointer'
                onClick={() => setDisplay('flex')}
                ref={complaint}
            >
                    ...
            </div>
            <Complain display={display} onClick={props.onClick}/>
        </div>
    );
};

export default Recomendation;