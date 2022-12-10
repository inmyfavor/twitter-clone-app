import React from 'react';

const Exit = (props) => {
    return (
        <img 
            alt='' 
            src='svg/exit.svg' 
            className='absolute top-[20px] right-[20px] cursor-pointer'
            onClick={()=>props.setDisplay('none')}
        />
    );
};

export default Exit;